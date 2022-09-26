type Part = string | string[] | number | number[] | undefined;
type TestData = {
  requested: Part;
  expected: Part;
};
type TestDataset = {
  correct: TestData;
  semiCorrect?: TestData;
  wrong?: TestData;
};

const tokens: TestDataset = {
  correct: {
    requested: '564F181A-F0FC-114A-A55D-3C1DCD45F3767AF3848F-AB29-4EBF-9594-F91E6A75E015',
    expected: 'API_TESTING',
  },
  wrong: {
    requested: 'IM-NOT-ACTUALLY-A-TOKEN',
    expected: 'Unauthorized',
  },
};

const item: TestDataset = {
  correct: { requested: 19684, expected: 'Mithril Ingot' },
  wrong: { requested: 1, expected: 'Request error: no such id' },
};

const characters: TestDataset = {
  correct: { requested: 'Eff Testing Warr', expected: 'male' },
  wrong: { requested: 'Imnotacharacter', expected: 'Request error: no such id' },
};

const charsCount: TestDataset = {
  correct: { requested: undefined, expected: 2 },
};

const items: TestDataset = {
  correct: {
    requested: [19684, 19685],
    expected: 2,
  },
  semiCorrect: {
    requested: [19684, 1],
    expected: 1,
  },
  wrong: {
    requested: [1, 2],
    expected: 0,
  },
};

export { tokens, item, items, characters, charsCount };
export default { tokens, item, items, characters, charsCount };
