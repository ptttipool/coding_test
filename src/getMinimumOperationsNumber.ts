export const getMinimumOperationsNumber = (i: number, j: number, matrix: readonly number[][]): number => {
  if (i < 0 && j < 0) {
    return 0;
  }

  if (i < 0) {
    return j + 1;
  }

  if (j < 0) {
    return i + 1;
  }

  const minimumOperationsNumber = matrix.at(i)?.at(j);

  if (minimumOperationsNumber === undefined) {
    throw new Error('Invalid matrix');
  }

  return minimumOperationsNumber;
};
