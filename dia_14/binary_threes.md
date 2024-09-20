### Árvores Binárias

#### Árvore Binária de Busca (ABB)

##### Definição
- A Árvore Binária de Busca (ABB) é uma estrutura de dados hierárquica que organiza informações de maneira eficiente para operações de busca, inserção e remoção. Cada nó na ABB possui até duas subárvores: uma à esquerda e outra à direita.

##### Estrutura
- **Raiz**: O nó superior da árvore.
- **Subárvore Esquerda**: Contém nós com valores menores que o valor do nó pai.
- **Subárvore Direita**: Contém nós com valores maiores ou iguais ao valor do nó pai.

##### Propriedades
- **Organização**: A ABB organiza os dados de forma que, para qualquer nó, todos os valores na subárvore esquerda são menores e todos os valores na subárvore direita são maiores ou iguais.
- **Busca Binária**: A principal operação em uma ABB é a busca binária, que permite localizar um valor de forma eficiente, reduzindo o espaço de busca pela metade a cada comparação.

##### Operações
- **Inserção**:
  - Inicia na raiz e percorre a árvore até encontrar a posição correta para o novo nó.
  - Se o valor a ser inserido for menor que o valor do nó atual, move-se para a subárvore esquerda; caso contrário, move-se para a subárvore direita.
  - Insere o novo nó na posição encontrada.
  
- **Remoção**:
  - Encontra o nó a ser removido.
  - Se o nó não tiver filhos, simplesmente o remove.
  - Se o nó tiver um filho, substitui o nó pelo seu filho.
  - Se o nó tiver dois filhos, encontra o sucessor (menor valor na subárvore direita) ou o predecessor (maior valor na subárvore esquerda) para substituir o nó e ajusta a árvore.

- **Busca**:
  - Inicia na raiz e percorre a árvore comparando o valor buscado com o valor do nó atual.
  - Se o valor buscado for menor que o valor do nó atual, move-se para a subárvore esquerda; se for maior, move-se para a subárvore direita.
  - Repete o processo até encontrar o valor ou alcançar um nó folha.

##### Vantagens
- **Eficiência**: Operações de busca, inserção e remoção são realizadas em tempo O(log n) em uma árvore balanceada.
- **Flexibilidade**: Pode ser usada para implementar outras estruturas de dados, como conjuntos e mapas.

##### Desvantagens
- **Desbalanceamento**: Inserções sequenciais podem desbalancear a árvore, transformando-a em uma lista ligada e degradando a eficiência para O(n).