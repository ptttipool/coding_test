import { stringConverterByDistanceMatrix } from '../stringConverterByDistanceMatrix';

describe('stringConverterByDistanceMatrix', (): void => {
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
      result: 'execution',
    },
  ])(
    'should return the matrix of operations',
    ({
      result,
      ...args
    }: {
      readonly from: string;
      readonly to: string;
      readonly matrix: readonly number[][];
      readonly result: string;
    }): void => {
      expect(stringConverterByDistanceMatrix(args)).toStrictEqual(result);
    },
  );
});
