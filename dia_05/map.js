// map -> permite iterar sobre um array e retornar um novo array com os elementos alterados de acordo com a condição e sempre retornar um array com o mesmo tamanho do array original.
// array.map(callback(element[, index[, array]])[, thisArg])

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers); // [2, 4, 6, 8, 10]

const products = [
  { id: 1, description: 'Camiseta', price: 20, category: 'Vestuário' },
  { id: 2, description: 'Mouse', price: 5, category: 'Eletrônicos' },
  { id: 3, description: 'Meia', price: 10, category: 'Vestuário' },
  { id: 4, description: 'Smartphone', price: 50, category: 'Eletrônicos' },
  { id: 5, description: 'Geladeira', price: 100, category: 'Eletrodomésticos' },
];

const saleProducts = products.map((product) => {
  if (product.category === 'Eletrônicos') {
    return {
      ...product,
      price: product.price * 0.9,
    };
  }

  return product;
});

console.log(saleProducts); 
