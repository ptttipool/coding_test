import { getDistanceMatrix } from '../getDistanceMatrix';

describe('getDistanceMatrix', (): void => {
  it.each([
    {
      word1: 'foo1',
      word2: 'foo',
      result: [
        [0, 1, 2],
        [1, 0, 1],
        [2, 1, 0],
        [3, 2, 1],
      ],
    },
    {
      word1: 'intention',
      word2: 'execution',
      result: [
        [1, 2, 3, 4, 5, 6, 6, 7, 8],
        [2, 2, 3, 4, 5, 6, 7, 7, 7],
        [3, 3, 3, 4, 5, 5, 6, 7, 8],
        [3, 4, 3, 4, 5, 6, 6, 7, 8],
        [4, 4, 4, 4, 5, 6, 7, 7, 7],
        [5, 5, 5, 5, 5, 5, 6, 7, 8],
        [6, 6, 6, 6, 6, 6, 5, 6, 7],
        [7, 7, 7, 7, 7, 7, 6, 5, 6],
        [8, 8, 8, 8, 8, 8, 7, 6, 5],
      ],
    },
  ])(
    'should return the metrics of operations',
    ({
      word1,
      word2,
      result,
    }: {
      readonly word1: string;
      readonly word2: string;
      readonly result: readonly number[][];
    }): void => {
      expect(getDistanceMatrix(word1, word2)).toStrictEqual(result);
    },
  );
});
