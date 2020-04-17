const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomRationalNumber = (min, max) => {
  return getRandomIntegerNumber(min, max) + Math.floor(Math.random() * 10) / 10;
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getArrayRandomItems = (array, count) => {
  const newArray = [];

  while (newArray.length < count) {
    const randomItem = getRandomArrayItem(array);
    if (newArray.indexOf(randomItem) === -1) {
      newArray.push(randomItem);
    }
  }

  return newArray;
};

const getRandomDate = (minYear, maxYear) => {
  const start = new Date(minYear, 0);
  const end = new Date(maxYear, 0);

  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export {getRandomIntegerNumber, getRandomRationalNumber, getRandomArrayItem,getArrayRandomItems, getRandomDate};
