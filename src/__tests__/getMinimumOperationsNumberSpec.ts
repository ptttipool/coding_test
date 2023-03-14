import { getMinimumOperationsNumber } from '../getMinimumOperationsNumber';

describe('getMinimumOperationsNumber', (): void => {
  it.each([
    {
      from: 'intention',
      to: 'execution',
      matrix: [
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
      result: 5,
    },
  ])(
    'should return the metrics of operations',
    ({
      to,
      matrix,
      result,
      from,
    }: {
      readonly from: string;
      readonly to: string;
      readonly result: number;
      readonly matrix: number[][];
    }): void => {
      expect(getMinimumOperationsNumber(to.length - 1, from.length - 1, matrix)).toStrictEqual(result);
    },
  );
});
