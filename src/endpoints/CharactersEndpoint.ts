import { Client } from '../Client';
import { ParametrizedEndpoint } from '../BaseEndpoint';
import { TCharacter } from '../types';

export class CharactersEndpoint extends ParametrizedEndpoint<TCharacter> {
  constructor(client: Client) {
    super(client, 'characters', true);
  }
}
