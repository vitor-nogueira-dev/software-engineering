// filter - retorna um novo array com os elementos que atendem a condição
// array.filter(callback(element[, index[, array]])[, thisArg]) -> o thisArg é opcional e é útil quando desejamos usar um contexto em nossa função "this";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEven = (number) => number % 2 === 0;
const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers); // [2, 4, 6, 8]

// com contexto é necessário que seja com uma função normal, pois as arrow functions não possuem contexto
const context = {
  min: 2,
  max: 5,
};
function isInRange(number) {
  const { min, max } = this;
  return number >= min && number <= max;
}
const numbersInRange = numbers.filter(isInRange, context);
// console.log(numbersInRange); // [2, 3, 4, 5]

const products = [
  { id: 1, description: 'Camiseta', price: 20, category: 'Vestuário' },
  { id: 2, description: 'Mouse', price: 5, category: 'Eletrônicos' },
  { id: 3, description: 'Meia', price: 10, category: 'Vestuário' },
  { id: 4, description: 'Smartphone', price: 50, category: 'Eletrônicos' },
  { id: 5, description: 'Geladeira', price: 100, category: 'Eletrodomésticos' },
];

const eletronics = products.filter(
  (product) => product.category === 'Eletrônicos'
);

console.log(eletronics);
