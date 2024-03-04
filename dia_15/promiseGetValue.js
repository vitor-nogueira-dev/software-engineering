function getValue(value) {
  return new Promise((resolve, reject) => {
    if (value > 10) {
      value += 1;
      resolve(value);
    } else {
      reject(value);
    }
  });
}

function doubleValue(value) {
  return value * 2;
}

function addTen(value) {
  return value + 10;
}

getValue(11)
  .then((result) => {
    console.log('Valor obtido:', result);
    return doubleValue(result);
  })
  .then((result) => {
    console.log('Valor após dobrar o valor:', result);
    return addTen(result);
  })
  .then((result) => console.log('Resultado final (após adicionar 10):', result))
  .catch((error) => console.log(error));
