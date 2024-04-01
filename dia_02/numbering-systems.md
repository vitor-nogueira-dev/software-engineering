### Sistemas de numeração

-> Bit = 0 ou 1 (aberto ou fechado)
-> Byte = 8 bits (Ex: 10010010 = A)


#### Binário e Decimal 

| Binário  | Decimal |
| -------- | ------- |
| 00000000 | 0       |
| 00000001 | 1       |
| 00000010 | 2       |
| 00000011 | 3       |
| 00000100 | 4       |
| ...      | ...     |
| 11111111 | 255     |


#### Armazenaemnto de dados
- 1 byte = 8 bits -> 1 caracter 
- 1 KB = 1024 bytes -> 1024 caracteres
- 1 MB = 1024 KB -> 1.048.576 caracteres

> A quantidade de algarismos disponíveis num sistema de numeração designa-se de **base**.

#### Bases numéricas
- Decimal: Base 10 (0 a 9)
- Binário: Base 2 (0 e 1)
- Octal: Base 8 (0 a 7)
- Hexadecimal: Base 16 (0 a 9 e A a F)

#### Conversão de bases
- Decimal para binário: Dividir sucessivamente por 2 o número decimal e os quocientes que vão sendo obtidos, até que o quociente seja 0.
Ex: 25 / 2 = 12, resto 1 (primeiro da direita para a esquerda)
    12 / 2 = 6, resto 0
    6 / 2 = 3, resto 0
    3 / 2 = 1, resto 1
    1 / 2 = 0, resto 1 (último da direita para a esquerda)
    11001

- Decimal para octal: Dividir sucessivamente por 8 o número decimal e os quocientes que vão sendo obtidos, até que o quociente seja 0.
Ex: 25 / 8 = 3, resto 1 (primeiro da direita para a esquerda)
    3 / 8 = 0, resto 3 (último da direita para a esquerda)
    31

- Decimal para hexadecimal: Dividir sucessivamente por 16 o número decimal e os quocientes que vão sendo obtidos, até que o quociente seja 0.
Ex: 76 / 16 = 4, resto 12 (C)
    4 / 16 = 0, resto 4
    4C

- Binário para decimal: Multiplicar cada algarismo binário pela potência de 2 correspondente à sua posição.
Ex: 11001
  = 1 * 2^4 + 1 * 2^3 + 0 * 2^2 + 0 * 2^1 + 1 * 2^0 = 16 + 8 + 1 = 25

- Binário para octal: Agrupar os algarismos binários de 3 em 3, da direita para a esquerda, e converter cada grupo em octal.
Ex: 110101
  = 110 101
  = 1*2^2 + 1*2^1 + 0*2^0 = 4 + 2 = 6 (6)
    1*2^2 + 0*2^1 + 1*2^0 = 4 + 1 = 5 (5)
  = 65

- Binário para hexadecimal: Agrupar os algarismos binários de 4 em 4, da direita para a esquerda, e converter cada grupo em hexadecimal.
Ex: 01011011
  = 0101 1011
  = 0*2^3 + 1*2^2 + 0*2^1 + 1*2^0 = 4 + 1 = 5 (5)
    1*2^3 + 0*2^2 + 1*2^1 + 1*2^0 = 8 + 2 + 1 = B (11)
  = 5B

- Octal para decimal: Multiplicar cada algarismo octal pela potência de 8 correspondente à sua posição.
Ex: 331
  = 3 * 8^2 + 3 * 8^1 + 1 * 8^0 = 192 + 24 + 1 = 217

- Octal para binário: Converter cada algarismo octal em binário.
Ex: 123
  = 1 2 3
  = 001 010 011
  = 001010011
