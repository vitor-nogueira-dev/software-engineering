function checkPositive(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('O argumento deve ser um array');
  }

  const allPositives = numbers.every((number) => number > 0);
  if (!allPositives) {
    throw new Error('O array só pode conter números positivos');
  }
  return true;
}

try {
  const numbers = [1, 2, 3, 4, 5];
  checkPositive(numbers);
  console.log('Todos os números são positivos');
} catch (error) {
  console.log('Ocorreu uma exceção:', error.message);
}
