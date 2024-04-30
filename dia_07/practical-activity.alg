algoritmo "Média de notas"

var
  nomes: vetor[1..5] de caractere
  notas: vetor[1..5] de real
  media: real
  soma: real
  i: inteiro

inicio
  soma <- 0
para i de 1 ate 5 faca
    escreval("Digite o nome do aluno ", i, "de 5: ")
    leia(nomes[i])
    escreval("Digite a nota do aluno ", i, "de 5: ")
    leia(notas[i])
    soma <- soma + notas[i]
fimpara
media <- soma / 5

escreval("A média das notas é: ", media)

fimalgoritmo
