### Funções com Parâmetros

- Estrutura
```alg
funcao NomeFuncao(parametro1: Tipo1, parametro2: Tipo2): TipoRetorno
var
// Declaração de variáveis locais

inicio
// Comandos
retorne Expressao
fimfuncao
```

- Exemplo
```alg
Algoritmo "FuncaoSoma"
funcao soma(n: inteiro, m: inteiro): inteiro
var 
  aux: inteiro
inicio
  aux <- n + m
  retorne aux
var
  n, m: inteiro
  res: inteiro
inicio
  n <- 10
  m <- 20
  res <- soma(n, m)
  escreva(res)
fimalgoritmo
```
