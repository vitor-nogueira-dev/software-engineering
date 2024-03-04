const myPromise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve('Promise resolvida');
  } else {
    reject('Promise rejeitada');
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
