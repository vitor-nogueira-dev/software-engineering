const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
  'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const firstTrimester = months.slice(0, 3);
console.log(firstTrimester); // ['Janeiro', 'Fevereiro', 'Março']
const secondTrimester = months.slice(3, 6);
console.log(secondTrimester); // ['Abril', 'Maio', 'Junho']
const thirdTrimester = months.slice(6, 9);
console.log(thirdTrimester); // ['Julho', 'Agosto', 'Setembro']
const lastTrimester = months.slice(9, 12);
console.log(lastTrimester); // ['Outubro', 'Novembro', 'Dezembro']