const numbers = [1, 2, 3, 4, 5];

try {
  const doubleNumbers = numbers.map((number) => {
    if (typeof number !== 'number') {
      throw new Error('O array só pode conter números');
    }
    return number * 2;
  });
  console.log('Resultado: ', doubleNumbers);
} catch (error) {
  console.log('Ocorreu uma exceção', error.message);
}
