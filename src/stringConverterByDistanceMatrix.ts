import { getMinimumOperationsNumber } from './getMinimumOperationsNumber';

const insertIntoArray = (arr: readonly string[], index: number, newItem: string): string[] => [
  // part of the array before the specified index
  ...arr.slice(index, 0),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index),
];

type StringConvectorArgs = {
  readonly from: string;
  readonly to: string;
  readonly matrix: readonly number[][];
};

export const stringConverterByDistanceMatrix = ({ from, to, matrix }: StringConvectorArgs): string => {
  let distance = getMinimumOperationsNumber(to.length - 1, from.length - 1, matrix);
  let toIndex = to.length - 1;
  let fromIndex = from.length - 1;
  let wordToChange = Array.from(from);

  while (distance > 0) {
    const replaceOperation = getMinimumOperationsNumber(toIndex - 1, fromIndex - 1, matrix);

    if (replaceOperation < distance) {
      wordToChange[fromIndex] = to[toIndex] || '';
      toIndex--;
      fromIndex--;
      distance = replaceOperation;

      continue;
    }

    const deleteOperation = getMinimumOperationsNumber(toIndex, fromIndex - 1, matrix);

    if (deleteOperation < distance) {
      wordToChange[fromIndex] = '';
      fromIndex--;
      distance = deleteOperation;

      continue;
    }

    const insertOperation = getMinimumOperationsNumber(toIndex - 1, fromIndex, matrix);

    if (insertOperation < distance) {
      wordToChange = insertIntoArray(wordToChange, fromIndex + 1, to[toIndex] || '');
      toIndex--;
      distance = insertOperation;

      continue;
    }

    toIndex--;
    fromIndex--;
  }

  return wordToChange.join('');
};
