### Entendendo Árvores

#### 1. O que é uma Árvore?
- **Definição**: Árvores são estruturas de dados hierárquicas e não lineares, compostas por nós conectados por arestas.
- **Características**:
  - **Bidimensionais e Heterogêneas**: Podem armazenar diferentes tipos de dados.
  - **Operações Básicas**: Inserção, remoção e consulta.
  - **Recursão**: Simplifica a implementação de algoritmos em árvores.
  - **Acesso**: Pode ser direto ou sequencial.

#### 2. Elementos da Árvore
- **Raiz**: O nó superior da árvore, que não possui pai.
- **Nós Folhas**: Nós terminais que não possuem filhos.
- **Nós Interiores**: Nós que compõem a estrutura entre a raiz e as folhas.
- **Trajetória**: O caminho entre dois nós.
- **Grau de um Nó**: O número de filhos que um nó possui.
- **Altura da Árvore**: O número de níveis na árvore, desconsiderando o nível da raiz.

#### 3. Árvore Binária
- **Definição**: Árvores binárias são aquelas em que cada nó pode ter zero, um ou dois filhos.
- **Profundidade de um Nó**: A distância de um nó até a raiz. Nós com a mesma profundidade estão no mesmo nível.

#### 4. Árvores Degeneradas
- **Definição**: Árvores degeneradas são aquelas onde cada nível possui apenas um nó, formando uma estrutura linear.
- **Desvantagem**: Extremamente ineficientes para busca, pois exigem percorrer todos os nós até encontrar o desejado.

#### 5. Tipos de Árvores
- **Árvores Binárias**:
  - **Definição**: Árvores que se ramificam em até dois filhos por nó.
  - **Árvores Binárias de Busca**: Organizam os dados para buscas eficientes, com nós menores à esquerda e maiores à direita da raiz.
- **Árvores Binárias de Busca**:
  - **Definição**: Árvores binárias organizadas para buscas eficientes.
  - **Busca**: Feita de forma recursiva, comparando o valor buscado com o valor do nó atual.
- **Árvores Balanceadas**:
  - **Problema**: Inserções sequenciais em ordem crescente ou decrescente podem gerar árvores degeneradas, prejudicando a eficiência da busca.
  - **Solução**: Árvores balanceadas, como AVL e Rubro-Negra, garantem buscas eficientes.

#### 6. Operações em Árvores
- **Inserção**:
  - **Regras**: Em árvores binárias, elementos menores são inseridos à esquerda e maiores ou iguais à direita da raiz.
  - **Limitação**: O processo é teoricamente ilimitado, mas limitado na prática pela memória do computador.
- **Remoção**:
  - **Destruição**: A remoção do acesso à raiz torna a árvore inacessível, embora os dados possam permanecer na memória por um tempo.
  - **Liberação de Memória**: Feita pelo garbage collector ou manualmente.
- **Busca**:
  - **Exibição**: Pode ser feita recursivamente, percorrendo a árvore pela esquerda ou direita, a partir da raiz.
  - **Remoção**: Sempre ocorre nas folhas. Se o elemento a ser removido não for uma folha, é necessário manipular a árvore para que ele se torne uma.
