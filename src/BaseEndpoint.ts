import axios from 'axios';
import { Client } from './Client';

type Id = number | string;
type ReqParam = number | string | boolean;
type ErrorResponse = { text: string };
type ParamMap = Map<string, ReqParam>;

type _reqId = Id | undefined;
type _reqParam = ParamMap | undefined;

export abstract class BaseEndpoint {
  private baseUrl = 'https://api.guildwars2.com/v2';
  private endpoint: string;
  private authRequired: boolean;
  private client: Client;

  constructor(client: Client, endpoint: string, authRequired: boolean) {
    this.client = client;
    this.endpoint = endpoint;
    this.authRequired = authRequired;
  }

  protected fillRequiredParams(): ParamMap {
    const ps = new Map<string, ReqParam>();
    ps.set('v', this.client.getCurrentSchema());
    if (this.authRequired) {
      if (!this.client.isAuthenticated()) throw new Error('Unauthorized');
      ps.set('access_token', this.client.getToken());
    }
    return ps;
  }

  protected async makeRawRequest<T>(id: _reqId, params: _reqParam): Promise<T> {
    let url = `${this.baseUrl}/${this.endpoint}`;
    if (typeof id != 'undefined' && id !== null) {
      url += `/${encodeURIComponent(id)}`;
    }
    if (typeof params != 'undefined' && params !== null && params.size != 0) {
      const segs: string[] = [];
      params.forEach((v, k) => segs.push(`${k}=${encodeURIComponent(v)}`));
      url += '?' + segs.join('&');
    }
    const req = await axios.get(url, {
      validateStatus: (status) => {
        return status < 600;
      },
    });
    if (req.status >= 200 && req.status < 399) {
      const data: T = req.data as T;
      return data;
    } else {
      if (req.status > 500) throw new Error('Unable to make request');
      const err: ErrorResponse = req.data as ErrorResponse;
      throw new Error(`Request error: ${err.text}`);
    }
  }
}

export class Endpoint<T> extends BaseEndpoint {
  public async Get(): Promise<T> {
    return this.makeRawRequest<T>(undefined, this.fillRequiredParams());
  }
}

export class ParametrizedEndpoint<T> extends BaseEndpoint {
  public async Get(id: Id): Promise<T> {
    return this.makeRawRequest<T>(id, this.fillRequiredParams());
  }

  public async Ids(): Promise<Id[]> {
    return this.makeRawRequest<Id[]>(undefined, this.fillRequiredParams());
  }

  public async Many(ids: Id[]): Promise<T[]> {
    const bulkResponse: T[] = [];
    for (let index = 0; index < ids.length; index++) {
      try {
        const ov = await this.Get(ids[index]);
        if (typeof ov != 'undefined' && ov !== null) {
          bulkResponse.push(ov);
        }
      } catch {
        this._doNothing();
      }
    }
    return bulkResponse;
  }
  public async All(): Promise<T[]> {
    const ids = await this.Ids();
    return this.Many(ids);
  }

  private _doNothing(): void {
    let i = 0;
    i = i + 1;
  }
}
