export const getRandomElement = array => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const getRandomNumber = () => {
  const min = 50;
  const max = 2000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};