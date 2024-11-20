# Funções

### O que são funções?
- Funções são blocos de código que podem ser chamados em qualquer parte do programa. Elas são úteis para evitar repetição de código e para organizar o programa em partes menores e mais fáceis de entender.
- Ela pode ser chamada em qualquer parte do programa, quantas vezes for necessário. O que permite modularizar o código e organizar o programa em partes menores e mais fáceis de entender.

### Como criar uma função?
- Para criar uma função, utilizamos a palavra reservada `function` seguida do nome da função e dos parênteses `()`. O bloco de código da função é delimitado por chaves `{}`.

```javascript
function nomeDaFuncao() {
  // bloco de código
}
```

- Adicionando parâmetros à função:

```javascript
function nomeDaFuncao(parametro1, parametro2) {
  // bloco de código
}
```

## Importância das funções
- **Reutilização de código**: funções permitem que um bloco de código seja reutilizado em diferentes partes do programa.
- **Absração**: funções permitem que o programador abstraia detalhes de implementação, focando apenas na funcionalidade da função.
- **Organização**: funções permitem organizar o código em partes menores e mais fáceis de entender.

### Arrow functions
- Arrow functions são uma forma mais curta de escrever funções em JavaScript. Elas são muito utilizadas em funções anônimas e funções de callback.

```javascript
const nomeDaFuncao = () => {
  // bloco de código
}
```