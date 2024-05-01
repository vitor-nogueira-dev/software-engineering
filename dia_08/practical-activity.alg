algoritmo "matriz"

var
    matriz: vetor[1..3,1..2] de inteiro
    i,j: inteiro
    sum: inteiro

inicio
  sum <- 1
  para i de 1 ate 3 faca
      para j de 1 ate 2 faca
          sum <- sum + 2
          matriz[i,j] <- sum
      fimpara
  fimpara

  para i de 1 ate 3 faca
      para j de 1 ate 3 faca
          escreval('O valor para a linha ', i ,' e coluna ', j ,': ')
          escreval(matriz[i,j])
      fimpara
  fimpara
fimalgoritmo
