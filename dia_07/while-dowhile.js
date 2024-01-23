const { cars } = require('./for');
let i = 0;

let total = 0;
while (i < cars.length) {
  total += cars[i].preco;
  i++;
}

do {
  console.log(i);
  i++;
} while (i < 5);

