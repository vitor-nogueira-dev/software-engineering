### Coleções

#### O que é ?
- Uma estrutura de dados é uma coleção de dados organizados de alguma maneira. A estrutura não apenas armazena dados, mas também suporta operações para acessar e manipular os dados. O pacote `java.util` contém um dos subsistemas mais poderosos do Java: a estrutura de coleção.
- Collection é uma hierarquia sofisticada de interfaces e classes que fornece tecnologia de ponta para gerenciar grupos de objetos. Podemos executar as seguintes atividades usando essa estrutura: 
  - Adicionar objetos à coleção
  - Remover objetos da coleção
  - Procurar objetos na coleção
  - Recuperar/obter objetos da coleção

- `List`: é uma coleção ordenada de elementos que permite elementos duplicados. A interface List é uma subinterface da interface Collection. Ele é uma coleção ordenada (às vezes chamada de sequência). Os elementos em uma lista são indexados com base em um intervalo de 0 a n-1, onde n é o tamanho da lista.
- `Set`: é uma coleção que não permite elementos duplicados. A interface Set é uma subinterface da interface Collection. Ele não mantém a ordem de inserção. Ele fornece métodos para adicionar, remover e verificar a presença de elementos.
- `Map`: é uma coleção de pares chave-valor. A interface Map é uma subinterface da interface Collection. Ele não mantém a ordem de inserção. Ele fornece métodos para adicionar, remover e verificar a presença de elementos.
- `Queue`: é uma coleção de elementos que suporta a inserção e remoção de elementos em uma ordem específica. A interface Queue é uma subinterface da interface Collection. Ele fornece métodos para adicionar, remover e verificar a presença de elementos.

#### Interface Iterator e Comparator
- `Iterator`: é uma interface que fornece métodos para iterar sobre uma coleção. Ele fornece três métodos para iterar sobre uma coleção: `hasNext()`, `next()`, `remove()`.
- `Comparator`: é uma interface funcional que fornece um método de comparação para comparar objetos. Ele fornece dois métodos para comparar objetos: `compare()` e `equals()`.

#### Vector
- `Vector`: é uma classe que implementa uma matriz dinâmica. Ele é semelhante a ArrayList, mas com duas diferenças:
  - Vector é sincronizado.
  - Vector contém muitos métodos que não são parte da estrutura de coleção.
  - Vector mantém a ordem de inserção.
  - Vector permite elementos duplicados.
  - Ele é protected

#### LinkedList
- `LinkedList`: é uma classe que implementa a interface List. Ele usa uma lista duplamente vinculada para armazenar os elementos. Ele fornece métodos para manipular a lista de maneira eficiente. Ele fornece métodos para adicionar, remover e verificar a presença de elementos.

##### Principais Métodos
- `addFirst()` ou `offerFirst()`: adiciona um elemento no início da lista.
- `addLast()` ou `offerLast()` ou `add()`: adiciona um elemento no final da lista.
- `getFirst` ou `peekFirst()`: retorna o primeiro elemento da lista.
- `getLast()` ou `peekLast()`: retorna o último elemento da lista.
- `removeFirst()` ou `pollFirst()` ou `remove()`: remove e retorna o primeiro elemento da lista.
- `removeLast()` ou `pollLast()`: remove e retorna o último elemento da lista.

#### LinkedHashSet
- `LinkedHashSet`: é uma classe que implementa a interface Set. Ele usa uma lista duplamente vinculada para armazenar os elementos. Ele fornece métodos para manipular a lista de maneira eficiente. Ele fornece métodos para adicionar, remover e verificar a presença de elementos.