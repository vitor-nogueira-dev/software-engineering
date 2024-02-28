function processName(name, callback) {
  if (typeof name !== 'string') {
    callback(new Error('O nome precisa ser uma string'));
    return;
  }
  if (name.length === 0) {
    callback(new Error('O nome precisa ter pelo menos um caractere'));
    return;
  }
  callback(null, name);
}

function callback(error, name) {
  if (error) {
    console.log('Ocorreu um erro', error.message);
    return;
  }
  console.log('Nome processado:', name);
}

processName('Lucas', callback);
processName(123, callback);
