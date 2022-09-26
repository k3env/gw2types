import { Client } from '../Client';
import { Endpoint } from '../BaseEndpoint';
import { TAccount } from '../types';

export class AccountEndpoint extends Endpoint<TAccount> {
  constructor(client: Client) {
    super(client, 'account', true);
  }
}
