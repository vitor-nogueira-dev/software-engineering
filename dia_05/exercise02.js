const numbersAndStrings = [1, 2, 'Joana', 4, 'Rafa', 6, 'Júlio', 8, 9, 10];
const mappingValues = numbersAndStrings
  .map((elem) =>
    typeof elem === 'string'
      ? elem.toUpperCase()
      : typeof elem === 'number'
      ? elem * 2
      : elem
  )
  .filter((elem) => typeof elem === 'number')
  .reduce((acc, curr) => acc + curr, 0);

console.log(mappingValues); // 80
