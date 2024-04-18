algoritmo "Enquanto1a5soma"

var
// Seção de Declarações das variáveis
i, soma, num: inteiro

inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
  i <- 1
  enquanto (i<=5) faca
    escreval ("Digite um número do tipo inteiro para a SOMA:")
    leia (num)
    soma <- soma + num
    i <- i+1
  fimenquanto
  escreva ("Resultado da SOMA: ", soma)
fimalgoritmo


algoritmo "Para1a5multiplica"

var
// Seção de Declarações das variáveis
i, mult, num: inteiro

inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
  mult <- 1
  para i de 1 ate 5 faca
    escreval ("Digite um número do tipo inteiro para a MULTIPLICAÇÃO:")
    leia (num)
    mult <- mult * num
    i <- i+1
  fimpara
  escreva ("Resultado da MULTIPLICAÇÃO: ", mult)
fimalgoritmo

algoritmo "Repita1a5multiplica"

var
// Seção de Declarações das variáveis
i, mult, num: inteiro

inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
  mult <- 1
  repita
    escreval ("Digite um número do tipo inteiro para a MULTIPLICAÇÃO: ")
    leia (num)
    mult <- mult * num
    i <- i+1
  ate (i>=5)
  escreva ("Resultado da MULTIPLICAÇÃO: ", mult)
fimalgoritmo


algoritmo "Multiplica10numeros"

var
// Seção de Declarações das variáveis
i, mult, num: inteiro

inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
  mult <- 1
  para i de 1 ate 10 faca
    escreval ("Digite um número do tipo inteiro para a MULTIPLICAÇÃO:")
    leia (num)
    mult <- mult * num
    i <- i+1
  fimpara
  escreva ("Resultado da MULTIPLICAÇÃO: ", mult)
fimalgoritmo

algoritmo "Multiplica10numeros2"

var
// Seção de Declarações das variáveis
i, mult, num: inteiro

inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
  mult <- 1
  i <- 1
  enquanto (i<=10) faca
    escreval ("Digite um número do tipo inteiro para a MULTIPLICAÇÃO:")
    leia (num)
    mult <- mult * num
    i <- i+1
  fimenquanto
  escreva ("Resultado da MULTIPLICAÇÃO: ", mult)
fimalgoritmo