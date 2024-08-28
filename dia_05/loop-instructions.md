### Intruções de loop

Os loops são estruturas de controle que permitem executar um bloco de código várias vezes.

#### For

O loop `for` é utilizado para iterar sobre uma sequência de elementos. A sintaxe é a seguinte:

```java 
for (inicialização; condição; incremento) {
    // bloco de código
}
```

Onde:

- `inicialização` é a expressão que inicializa o loop. É executada apenas uma vez, no início do loop.
- `condição` é a expressão que é avaliada a cada iteração. Se for verdadeira, o bloco de código é executado. Se for falsa, o loop é encerrado.
- `incremento` é a expressão que é executada após cada iteração. É utilizada para modificar a variável de controle do loop.

Exemplo:

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

### While

O loop `while` é utilizado para executar um bloco de código enquanto uma condição for verdadeira. A sintaxe é a seguinte:

```java
while (condição) {
    // bloco de código
}
```

O bloco de código é executado enquanto a condição for verdadeira. Se a condição for falsa, o loop é encerrado.

Exemplo:

```java
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
```

### Do-While

O loop `do-while` é semelhante ao loop `while`, mas a condição é avaliada após a execução do bloco de código. Isso garante que o bloco de código seja executado pelo menos uma vez. A sintaxe é a seguinte:

```java
do {
    // bloco de código
} while (condição);
```

Exemplo:

```java
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);
```
