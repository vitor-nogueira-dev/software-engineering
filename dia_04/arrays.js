const arr = new Array(30); // -> Se for definido um valor único ele vai criar um array deste tamanho e sem elementos, mas com o length definido
console.log(arr.length); // -> 30

const arr2 = [30]; // -> Se for definido um valor único ele vai criar um array com este elemento
console.log(arr2.length); // -> 1

const arr3 = Array();
console.log(arr3.length); // -> 0

// Array de strings
const myArray = ['Vento', 'Sol', 'Chuva'];
console.log(myArray[0]); // -> Vento
console.log(myArray[1]); // -> Sol
console.log(myArray[2]); // -> Chuva
console.log(myArray[3]); // -> undefined

// Array de números
const myArray2 = [1, 2, 3];
myArray2[3] = 4;
console.log(myArray2[0]); // -> 1
console.log(myArray2[1]); // -> 2
console.log(myArray2[2]); // -> 3
console.log(myArray2[3]); // -> 4

let sum = 0;
for (let i = 0; i < myArray2.length; i++) {
  sum += myArray2[i];
}
const average = sum / myArray2.length;
console.log(average, '-> Média');

// join() -> Transforma um array em uma string
const stringNumbers = myArray2.join(', ');
console.log(stringNumbers, '-> String de números');

// split() -> Transforma uma string em um array
const myString = 'Vento, Sol, Chuva';
const myArray3 = myString.split(', ');
console.log(myArray3, '-> Array de strings');

// push() -> Adiciona um elemento no final do array
myArray3.push('Neve');
console.log(myArray3, '-> Array de strings');

// pop() -> Remove o último elemento do array
myArray3.pop();
console.log(myArray3, '-> Array de strings');

// unshift() -> Adiciona um elemento no início do array
myArray3.unshift('Neve'); 
console.log(myArray3, '-> Array de strings');

// shift() -> Remove o primeiro elemento do array
myArray3.shift();
console.log(myArray3, '-> Array de strings');

// splice() -> Remove elementos do array
myArray3.splice(1, 1); // -> Remove o elemento na posição 1
console.log(myArray3, '-> Array de strings');

// slice() -> Retorna um novo array "fatiando" o array de acordo com o início e fim
const myArray4 = myArray3.slice(0, 3); 
console.log(myArray4, '-> Array de strings');

// concat() -> Concatena arrays
const myArray5 = myArray3.concat(myArray4);
console.log(myArray5, '-> Array de strings');

// forEach() -> Executa uma função para cada elemento do array
myArray5.forEach((item, index) => {
  console.log(`${item} está na posição ${index}`);
});

// map() -> Retorna um novo array, de mesmo tamanho, iterando cada item de um array
const myArray6 = myArray5.map((item) => {
  return item.toUpperCase();
});
console.log(myArray6, '-> Array de strings');

// flat() -> Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth)
const myArray7 = [1, 2, [3, 4]];
const myArray8 = myArray7.flat();

console.log(myArray8, '-> Array de números');

// flatMap() -> Retorna um novo array assim como a função map() e executa um flat() de profundidade 1
const myArray9 = [1, 2, 3, 4];
const myArray10 = myArray9.flatMap((item) => [item * 2]);
console.log(myArray10, '-> Array de números com flatMap()');

// keys() -> Retorna um Array Iterator que contém as chaves para cada elemento do array
const iterator = myArray10.keys();
console.log(iterator.next(), '-> Iterator');

// values() -> Retorna um Array Iterator que contém os valores para cada elemento do array
const iterator2 = myArray10.values();
console.log(iterator2.next(), '-> Iterator');

myArray10.copyWithin(2, 0, 2);
console.log(myArray10, '-> Array de números');