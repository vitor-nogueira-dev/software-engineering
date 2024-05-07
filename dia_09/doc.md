### Procedimentos sem Parâmetros

##### Modularização

- Modularização é a técnica de dividir um programa em partes menores, chamadas de módulos.
- Cada módulo é responsável por uma tarefa específica.
- A modularização facilita a manutenção do código, pois permite que cada módulo seja desenvolvido e testado separadamente.
- Além disso, a modularização facilita a reutilização de código, pois módulos que realizam tarefas semelhantes podem ser reaproveitados em diferentes partes do programa.
- Ela pode ser feita de duas formas:
  - `procedimentos` ou `funções`
  - com ou sem parâmetros

**Modularização:** divisão de tarefas, o programa é dividido em partes ou módulos.
**Procedimentos:** são módulos que realizam uma tarefa específica, sem retornar um valor.


##### Procedimentos sem Parâmetros
- Estrutura 
```alg
procedimento nome_do_procedimento
var 
  // declaração de variáveis do procedimento

inicio
  // instruções do procedimento
fim_procedimento
```

Exemplo:
```alg
procedimento exibir_mensagem
var
  procedimento exibir_mensagem

inicio  
  escreva("Olá, mundo!")
fim_procedimento

inicio
  escreva("Início do programa")
  exibir_mensagem // chamada do procedimento
fimalgoritmo
```

Exemplo, procedimento soma:
```alg
algoritmo "Exemplo soma"
procedimento soma
var 
  aux: inteiro

inicio
aux <- n + m 
res <- aux 
fimprocedimento

var 
  res, n, m: inteiro
  
inicio
  n <- 5
  m <- 3
  soma
  escreva("Resultado: ", res)
fimalgoritmo
```