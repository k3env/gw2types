import { Client } from '../Client';
import { Endpoint } from '../BaseEndpoint';
import { TToken } from '../types';

export class TokenEndpoint extends Endpoint<TToken> {
  constructor(client: Client) {
    super(client, 'tokeninfo', true);
  }
}
