import { Client } from '../../src/Client';

import { item, items } from '../vars';

describe('Find item by id', () => {
  const client: Client = new Client();
  test('ID 19685 is Orichalcum Ingot', async () => {
    expect((await client.Items.Get(item.correct.requested as number)).name).toBe(
      item.correct.expected,
    );
  });
  test('ID 1 throwing error', async () => {
    try {
      await client.Items.Get(item.wrong?.requested as number);
    } catch (error) {
      expect((error as Error).message).toBe('Request error: no such id');
    }
  });
});

describe("Find many items by id's", () => {
  const client = new Client();
  test('Testing correct set (2 items, 2 exists)', async () => {
    expect((await client.Items.Many(items.correct.requested as number[])).length).toBe(
      items.correct.expected,
    );
  });
  test('Testing semi-correct set (2 items, 1 exists)', async () => {
    expect((await client.Items.Many(items.semiCorrect?.requested as number[])).length).toBe(
      items.semiCorrect?.expected,
    );
  });
  test('Testing wrong set (2 items, 0 exists)', async () => {
    expect((await client.Items.Many(items.wrong?.requested as number[])).length).toBe(
      items.wrong?.expected,
    );
  });
});
