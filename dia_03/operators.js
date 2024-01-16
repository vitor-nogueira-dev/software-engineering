var number = 4;
// number = number * 10 -> forma completa
number *= 10; // forma abreviada

var sum = 10;
sum++; // sum = sum + 1

var subtraction = 10;
subtraction--; // subtraction = subtraction - 1

sum < subtraction; // false
sum > subtraction; // true

if (sum > subtraction && sum < number) {
  console.log('Sum é maior que subtraction e menor que number');
}

if (sum > subtraction && sum % 2 === 1) {
  console.log('Sum é maior que subtraction e não é par');
}

if (sum > subtraction || sum % 2 === 0) {
  console.log('Sum é maior que subtraction ou é par');
}

const resultado = number % 2 === 0 ? 'É par' : 'É ímpar';

console.log(resultado);
