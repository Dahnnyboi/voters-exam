interface SortableObject {
  [key: string]: any; // Allows for dynamic property names
}

export const sortObjectByKey = (
  arr: SortableObject[],
  key: string
): SortableObject[] => {
  return arr.slice().sort((a, b) => b[key] - a[key]);
};

export const reverseObjectByKey = (arr: SortableObject[], key: string) => {
  return arr.map((a) => {
    let value = a[key];

    const isNumber = typeof value === 'number';

    // type checkings
    if (isNumber) value = value.toString();
    if (typeof value !== 'string' || !a[key]) return { ...a, [key]: a[key] };

    const splits = value.split(' ');
    let results = '';

    splits.forEach((split) => {
      const length = split.length;
      const isEven = length % 2 === 0;

      const middleIndex = isEven ? length / 2 : Math.ceil(length / 2);

      let firstHalf = split.slice(0, middleIndex);
      let secondHalf = split.slice(middleIndex, length);

      firstHalf = firstHalf.split('').reverse().join('');
      secondHalf = secondHalf.split('').reverse().join('');

      let result: string = firstHalf.concat(secondHalf);

      results = results.concat(result, ' ');
    });

    return { ...a, [key]: isNumber ? parseInt(results) : results };
  });
};

export const createSelectOptions = (object: { [key: string]: string }) => {
  return Object.keys(object).map((key) => {
    return { label: key, value: object[key] };
  });
};
