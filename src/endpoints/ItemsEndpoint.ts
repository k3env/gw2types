import { Client } from '../Client';
import { ParametrizedEndpoint } from '../BaseEndpoint';
import { TItem } from '../types';

export class ItemsEndpoint extends ParametrizedEndpoint<TItem> {
  constructor(client: Client) {
    super(client, 'items', false);
  }
}
