import { Client } from '../../src/Client';

import { tokens, charsCount, characters } from '../vars';

const client: Client = new Client();
const token = tokens.correct.requested as string;
const correctChar = characters.correct;
const wrongChar = characters.wrong;
const correctCharCount = charsCount.correct.expected;

const auth = client.Authenticate(token);

describe('Get character info', () => {
  jest.setTimeout(60000); // Здесь тесты, которые могут выполняться очень долго
  test('Getting known character gender', async () => {
    const char = await client.Characters.Get(correctChar.requested as string);
    expect(char.gender.toLowerCase()).toBe(correctChar.expected);
  });
  test('Getting unknown character', async () => {
    try {
      await client.Characters.Get(wrongChar?.requested as string);
    } catch (e) {
      expect((e as Error).message).toBe(wrongChar?.expected);
    }
  });
  test("Getting all characters id's", async () => {
    expect((await client.Characters.Ids()).length).toBe(correctCharCount);
  });
  test('Getting all characters', async () => {
    expect((await client.Characters.All()).length).toBe(correctCharCount);
  });
});
