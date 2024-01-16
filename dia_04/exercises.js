const arrayNumbers = [19, 21, 30, 3, 45, 22, 15];

const isEven = (number) => number % 2 === 0;
const isOdd = (number) => number % 2 !== 0;
const isDivisibleBy3 = (number) => number % 3 === 0;
const isDivisibleBy5 = (number) => number % 5 === 0;

const verify = (array, callback) => {
  let result = 'Não';
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index])) {
      result = 'Sim';
    }
  }
  return result;
};

console.log(verify(arrayNumbers, isDivisibleBy3));
console.log(verify(arrayNumbers, isDivisibleBy5));
console.log(verify(arrayNumbers, isEven));
console.log(verify(arrayNumbers, isOdd));
