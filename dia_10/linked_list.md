### Entendendo Lista Ligada

#### Características
- Estrutura de dados linear
- Lista linear com elementos conectados por ponteiros
- Sequência de elementos armazenados em locais não contíguos na memória
- Armazenamento de forma lógica através de nós

#### Vantagens
- Utilização eficiente de memória dinâmica
- Pode representar estruturas como filas e pilhas
- Facilidade de inserção e remoção de elementos em qualquer posição da lista
- Permite busca eficiente de elementos em qualquer posição da lista

#### Desvantagens
- Algoritmos mais complexos em comparação a arrays
- Pode exigir o uso de recursão para simplificar algoritmos
- Manipulação de operações pode ser mais propensa a erros
- Necessidade de percorrer a lista para acessar elementos no meio

#### Operações
- **Inserir no Início**: Insere um elemento no início da lista, independentemente da quantidade de elementos presentes.
- **Inserir no Final**: Insere um elemento no final da lista, independentemente da quantidade de elementos presentes.
- **Elemento do início**: é uma operação da lista ligada que mostra, sem remover, o elemento que está no início da lista.
- **Elemento do final**: é uma operação da lista ligada que mostra, sem remover, o elemento que está no final da lista.
- **Remover**: Remove um elemento da lista, independentemente da posição em que ele se encontra.
- **Contar nós**: Conta e retorna a quantidade de nós presentes na lista.
- **Mostrar lista**: Mostra todos os elementos presentes na lista.
- **Buscar**: Busca um elemento na lista e retorna a posição em que ele se encontra.

#### Representações de Lista Ligada
- **Fila Vazia**: primeiro --> `nulo` <-- último
- **Inserções**: primeiro --> `nó1` --> `nó2` --> `nó3` <-- último [`nó3` --> `nulo`]
- **Remoções**: primeiro --> `nó2` --> `nó3` <-- último [`nó3` --> `nulo`]

#### Aplicações Computacionais 
- Listas ligadas de filas 
- Listas ligadas de pilhas
- Jogos digitais
- Planilhas eletrônicas

#### Aplicações Diversas 
- Fila de bancos atuais com senha numérica
- Lista ligada de cartas e um jogo de baralho 
- Lista ligada da sequência de jogos de um campeonato de futebol