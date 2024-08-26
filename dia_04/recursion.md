### Entendendo a Recursão I

1. O que é ?
  - Ideia da repetição pela recursão
  - Complexidade e simplicidade do código recursivo
  - Funções e procedimentos
  - Chamada recursiva
  - Função recursiva (recursão com cauda)
  - Procedimento recursivo (recursão sem cauda)
  - Parada do algoritmo recursivo
  - Controle de fluxo recursivo

2. Regras da Recursão
  - Saber quando parar
  - Decidir como fazer a próxima ação 
  - Quebrar uma jornada recursiva em um passo inicial + uma jornada recursiva menor

- Exemplo para o cálculo do fatorial de um número:
- **Se n = 0, então fatorial(n) = 1
Caso contrário, fatorial(n) = n * fatorial(n-1)**

3. Recursão com e sem cauda
**Com Cauda**:
  - Cauda: rastro da execução da recursão 
  - Função recursiva que retorna um valor

Ex:
```js
function fatorial(n, acumulador = 1) {
  if (n === 0) return acumulador;
  return fatorial(n - 1, n * acumulador);
}
```

**Sem Cauda**:
  - Não deixa rastro da execução da recursão
  - Procedimento recursivo que não retorna um valor
  - Resultado parcial é passado para a próxima chamada recursiva

Ex:
```js
function fatorial(n, acumulador = 1) {
  if (n === 0) return acumulador;
  return fatorial(n - 1, n * acumulador);
}
```

### Vantagens e Desvantagens e Aplicações

**Vantagens**:
  - Compactos 
  - Legíveis 
  - Fácil compreensão 
  - Fácil implementação

**Desvantagens**:
  - Consumo de memória
  - Lentidão 
  - Difícil depuração

**Aplicações**:
  - Manipulação de árvores
  - Analisadores léxicos recursivos de compiladores
  - Problemas Backtraking - tentativa e erro