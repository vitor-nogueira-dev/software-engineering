### Funções sem Parâmetros

1. Modularização Procedimentos 
- **Modularização** divide um programa em partes menores, chamadas de **módulos**.
- **Função** é um tipo de módulo que executa uma tarefa específica.
- Função é um subprograma que **retorna algum valor**.
- **Procedimento** é um subprograma que **não retorna valor**.

2. Estrutura:
```alg
funcao NomeFuncao: TipoRetorno
var 
// Declaração de variáveis locais

inicio
// Comandos
retorne Expressao
fimfuncao
```

3. Exemplo:
```alg
Algoritmo "FuncaoSoma"
funcao soma: inteiro
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
  res <- soma
  escreva(res)
fimalgoritmo
```

4. Exercício:
```alg
Algoritmo "FuncaoProduto"
funcao produto: inteiro
var 
  aux: inteiro
inicio
  aux <- n * m
  retorne aux
var
  n, m: inteiro
  res: inteiro
inicio
  n <- 10
  m <- 20
  res <- produto
  escreva(res)
fimalgoritmo
```

