import { Client } from '../../src/Client';

import { tokens } from '../vars';

describe('Token endpoint must return correct token info', () => {
  test('Ask token info without authentication must throw an error', async () => {
    const client: Client = new Client();
    try {
      await client.Token.Get();
    } catch (error) {
      expect((error as Error).message).toBe('Unauthorized');
    }
  });
  test('Ask token info for wrong token must throw an error', async () => {
    const client = new Client();
    await client.Authenticate(tokens.wrong?.requested as string);
    try {
      await client.Token.Get();
    } catch (e) {
      expect((e as Error).message).toBe(tokens.wrong?.expected);
    }
  });
  test('Ask token name for correct token must return token name', async () => {
    const client = new Client();
    await client.Authenticate(tokens.correct.requested as string);
    expect((await client.Token.Get()).name).toBe(tokens.correct.expected);
  });
});
