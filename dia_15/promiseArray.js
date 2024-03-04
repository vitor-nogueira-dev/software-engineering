function sumArray(array) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      return reject('O valor passado não é um array');
    }

    const sum = array.reduce((acc, curr) => acc + curr, 0);
    resolve(sum);
  });
}

const array = [1, 2, 3, 4, 5, 6];

sumArray(array)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
