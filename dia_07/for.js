const cars = [
  {
    modelo: 'Ka',
    marca: 'Ford',
    ano: 2018,
    preco: 20000,
  },
  {
    modelo: 'HB20',
    marca: 'Hyundai',
    ano: 2019,
    preco: 45000,
  },
  {
    modelo: 'Gol',
    marca: 'Volkswagen',
    ano: 2018,
    preco: 30000,
  },
];
let total = 0;
for (let i = 0; i < cars.length; i++) {
  total += cars[i].preco;
}
console.log(total);

module.exports = { cars };