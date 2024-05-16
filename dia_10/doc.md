### Procedimentos com Parâmetros
- **Modularização:** divisão de tarefas, o programa é dividido em partes ou módulos.
- **Procedimentos:** são módulos que realizam uma tarefa específica, sem retornar um valor.
- **Estrutura:**
```alg
procedimento nome_do_procedimento(parametro1, parametro2, ..., parametroN)
var 
  // declaração de variáveis do procedimento

inicio
  // instruções do procedimento
fim_procedimento
```

- Exemplo de algoritmo com parâmetros:
```alg
Algoritmo "Multiplicação"
procedimento multi(x,y:inteiro)
var
  aux: inteiro
inicio
  aux <- x * y
  res <- aux
fim_procedimento

var 
  res, a, b: inteiro

inicio
  a <- 10
  b <- 20
  multi(a,b)
  escreva("Resultado: ", res)
fimalgoritmo
```