// splice -> altera o array original, seja para adicionar ou remover elementos.
// array.splice(start, deleteCount, item1, item2, itemN)
let array = [1, 2, 3, 4, 5];
array.splice(3, 2); // remove 2 elementos a partir do índice 3
// output [1, 2, 3]

array = [1, 2, 3, 4, 5];
array.splice(3, 0, 6, 7, 8); // adiciona 3 elementos a partir do índice 3

const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
names.splice(1, 1, 'Henrique'); // remove 1 elemento a partir do índice 1 e adiciona 'Henrique'
// output ['Maria', 'Henrique', 'Eduardo', 'Gabriel', 'Júlia']
names.splice(1, 2, 'Rafa', 'Joana'); // remove 2 elementos a partir do índice 1 e adiciona 'Henrique' e 'Joana'
// output ['Maria', 'Rafa', 'Joana', 'Gabriel', 'Júlia']

// unshift -> adiciona um ou mais elementos no início do array e retorna o tamanho do novo array
const array2 = [1, 2, 3, 4, 5];
const length = array2.unshift(0); // adiciona 0 no início do array
// output 6


// slice -> retorna um novo array "fatiando" o array de acordo com o início e fim e se o fim não for informado, retorna até o final do array. Caso ele seja informado o elemento do índice final não é retornado. Se ele for negativo, ele conta de trás para frente.
const array3 = [1, 2, 3, 4, 5];
const slice = array3.slice(2); // retorna um novo array a partir do índice 2
// output [3, 4, 5]
const slice2 = array3.slice(2, 4); // retorna um novo array a partir do índice 2 até o índice 4
// output [3, 4]
const negativeSlice = array3.slice(-2); // retorna um novo array a partir do índice -2
// output [4, 5]

// concat -> concatena um ou mais arrays retornando um novo array, pode ser usado para arrays e strings
const array4 = [1, 2, 3, 4, 5];
const array5 = [6, 7, 8, 9, 10];
const concat = array4.concat(array5); // concatena os arrays
// output [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const string = 'Olá, mundo!';
const concat2 = array4.concat(string); // concatena o array com a string
// output [1, 2, 3, 4, 5, "Olá, mundo!"]