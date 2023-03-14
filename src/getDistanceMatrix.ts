import { getMinimumOperationsNumber } from './getMinimumOperationsNumber';

export const getDistanceMatrix = (word1: string, word2: string): number[][] => {
  const firstWordLength = word1.length;
  const secondWordLength = word2.length;
  const matrix: number[][] = Array(firstWordLength);

  for (let i = 0; i < firstWordLength; i++) {
    matrix[i] = Array(secondWordLength);

    for (let j = 0; j < secondWordLength; j++) {
      (<number[]>matrix[i])[j] = Math.min(
        getMinimumOperationsNumber(i - 1, j, matrix) + 1,
        getMinimumOperationsNumber(i, j - 1, matrix) + 1,
        getMinimumOperationsNumber(i - 1, j - 1, matrix) + (word1[i] === word2[j] ? 0 : 1),
      );
    }
  }

  return matrix;
};
