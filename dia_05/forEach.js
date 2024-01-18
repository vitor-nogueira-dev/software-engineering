// forEach -> itera sobre cada elemento de um array e não tem retorno
// array.forEach(callback(currentValue [, index [, array]])[, thisArg])

const numbers = [1, 2, 3, 4];
numbers.forEach((number, index) => console.log(`index ${index}: ${number}`));
// output index 0: 1
// output index 1: 2
// output index 2: 3
// output index 3: 4
