### Exception
- Em JavaScript temos a possibilidade de tratar exceções, ou seja, quando um erro ocorre, podemos tratar esse erro e evitar que o programa pare de funcionar.
- Quando um erro ocorre, a execução do programa é interrompida e o controle é passado para o primeiro bloco de código que trata o erro.
- O bloco de código que trata o erro é chamado de bloco de tratamento.

#### Exemplo
```javascript
function soma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parâmetros devem ser números');
  }
  return a + b;
}
try {
  // Código que pode gerar um erro
  console.log(soma(1, '2'));
} catch (error) {
  // Código que trata o erro
  console.log(error);
} finally {
  // Código que sempre será executado
  console.log('Sempre será executado');
}
```