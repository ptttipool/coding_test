import { getDistanceMatrix } from './getDistanceMatrix';
import { stringConverterByDistanceMatrix } from './stringConverterByDistanceMatrix';

((): void => {
  const word1 = process.argv[2];
  const word2 = process.argv[2];

  if (word1 === undefined || word2 === undefined) {
    throw new Error('Invalid arguments');
  }

  // eslint-disable-next-line no-console
  console.log(
    stringConverterByDistanceMatrix({
      from: word1,
      to: word2,
      matrix: getDistanceMatrix(word1, word2),
    }),
  );
})();
