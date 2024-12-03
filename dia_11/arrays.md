# Arrays 

- O que são arrays?
  - Arrays são objetos que armazenam múltiplos valores em uma única variável. Eles são usados para armazenar coleções de elementos, como listas de itens.

- Como criar um array?
  - Para criar um array, você pode usar a palavra-chave `new` seguida do nome do tipo de array e de um par de colchetes `[]`. Por exemplo, para criar um array de números inteiros, você pode usar a seguinte sintaxe:
    ```javascript
    const numeros = [1, 2, 3, 4, 5];
    const numeros = new Array();
    ```

- Como adicionar elementos a um array?
  - Para adicionar elementos a um array, você pode usar o método `push()`. Por exemplo, para adicionar um número ao array `numeros`, você pode usar a seguinte sintaxe:
    ```javascript
    numeros.push(10);
    ```

- Como acessar elementos de um array?
  - Para acessar elementos de um array, você pode usar a notação de colchetes `[]` seguida do índice do elemento que deseja acessar. Por exemplo, para acessar o primeiro elemento do array `numeros`, você pode usar a seguinte sintaxe:
    ```javascript
    console.log(numeros[0]); // 1
    ```

- Como remover elementos de um array?
  - Para remover elementos de um array, você pode usar o método `pop()`. Por exemplo, para remover o último elemento do array `numeros`, você pode usar a seguinte sintaxe:
    ```javascript
    numeros.pop();
    ```

- Como percorrer um array?
  - Para percorrer um array, você pode usar um loop `for`. Por exemplo, para percorrer o array `numeros` e exibir cada elemento no console, você pode usar a seguinte sintaxe:
    ```javascript
    for (let i = 0; i < numeros.length; i++) {
      console.log(numeros[i]);
    }
    ```