export const convertJsonToData = async <T>(
  importFunction: () => Promise<{ data: T }>
) => {
  const { data } = await importFunction();

  return data;
};

export const sortObjectByKey = <T extends Record<string, any>>(
  arr: T[],
  key: keyof T
): T[] => {
  return arr.slice().sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return bValue - aValue; // Numeric comparison
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return bValue.localeCompare(aValue); // String comparison
    }

    return 0; // If not comparable, keep original order
  });
};

export const reverseObjectValue = <T extends Record<string, any>>(
  arr: T[]
): T[] => {
  return arr.map((obj) => {
    const updatedObj = { ...obj };

    (Object.keys(updatedObj) as (keyof T)[]).forEach((key) => {
      let value = updatedObj[key];

      if (typeof value === 'number') {
        value = value.toString(); // Convert number to string for reversal
      }

      if (typeof value === 'string') {
        const reversedValue = value
          .split(' ')
          .map((word: string) => {
            const length = word.length;
            const middleIndex = Math.ceil(length / 2);

            const firstHalf = word
              .slice(0, middleIndex)
              .split('')
              .reverse()
              .join('');
            const secondHalf = word
              .slice(middleIndex)
              .split('')
              .reverse()
              .join('');

            return firstHalf.concat(secondHalf);
          })
          .join(' ');

        updatedObj[key] = isNaN(Number(reversedValue))
          ? reversedValue
          : Number(reversedValue);
      }
    });

    return updatedObj as T;
  });
};

export const createSelectOptions = (object: { [key: string]: string }) => {
  return Object.keys(object).map((key) => {
    return { label: key, value: object[key] };
  });
};
