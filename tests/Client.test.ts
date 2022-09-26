import { Client } from '../src/Client';
import { tokens } from './vars';

const token = tokens.correct.requested as string;

describe('Client must correctly works with authentication processes', () => {
  const client: Client = new Client();
  test('Client unauthenticated', () => {
    expect(client.isAuthenticated()).toBeFalsy();
  });
  test("Client doesn't have an api key and throws error", () => {
    try {
      client.getToken();
    } catch (e) {
      expect((e as Error).message).toBe('No token supplied');
    }
  });
  test('Client passed authentication process and returns passed token', async () => {
    expect(await client.Authenticate(token)).toBeTruthy();
    expect(client.getToken()).toBe(token);
  });
});

describe('Client must correctly works with different schemas', () => {
  const client: Client = new Client('some-schema');
  test('Client returns schema from constructor', () => {
    expect(client.getCurrentSchema()).toBe('some-schema');
  });
  test('Client must update schema', () => {
    expect(client.setSchema('latest')).toBe(true);
    expect(client.getCurrentSchema()).toBe('latest');
  });
});
