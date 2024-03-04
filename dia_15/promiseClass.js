class MyClass {
  constructor(valor) {
    this.valor = valor;
  }

  operationAsync() {
    return new Promise((resolve, reject) => {
      const result = this.valor * 2;

      if (result >= 0) {
        resolve(result);
      } else {
        reject('Valor negativo');
      }
    });
  }
}

const myClass = new MyClass(10);
myClass
  .operationAsync()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
