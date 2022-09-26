import { Client } from '../Client';
import { Endpoint } from '../BaseEndpoint';
import { TBuild } from '../types';

export class BuildEndpoint extends Endpoint<TBuild> {
  constructor(client: Client) {
    super(client, 'build', false);
  }
}
