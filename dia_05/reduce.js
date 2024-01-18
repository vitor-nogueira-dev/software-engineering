// reduce -> reduz o array a um resultado de uma operação matemática
// array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum); // 15

// reduceRight -> funciona da mesma forma que o reduce, mas começa a iterar da direita para a esquerda
// array.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
const words = ['is', 'this', 'what', 'you', 'want'];

const reversedPhrase = words.reduceRight((accumulator, currentValue) => {
  return `${accumulator} ${currentValue}`;
});

console.log(reversedPhrase); // Output: 'want you what this is'
