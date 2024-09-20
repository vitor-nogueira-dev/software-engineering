### Entendendo os Percursos em Árvores

## Árvores Binárias

Uma **árvore binária** é uma estrutura de dados composta por nós, onde cada nó possui no máximo dois filhos, conhecidos como subárvore à esquerda e subárvore à direita. Uma árvore binária pode estar vazia ou conter:

- **Nó raiz**: o nó principal da árvore.
- **Subárvore à esquerda**: uma árvore binária que contém nós com valores menores que o nó raiz.
- **Subárvore à direita**: uma árvore binária que contém nós com valores maiores ou iguais ao nó raiz.

Cada elemento da árvore é chamado de **nó** e cada conexão entre dois nós é denominada **arco**.

## Árvore Binária de Busca (ABB)

A **árvore binária de busca (ABB)**, também conhecida como árvore binária de pesquisa, é uma variação da árvore binária que organiza os dados de forma ordenada, permitindo buscas eficientes. As principais características da ABB são:

- **Subárvore Esquerda**: Todos os elementos na subárvore esquerda de um nó possuem valores **menores** que o valor do nó.
- **Subárvore Direita**: Todos os elementos na subárvore direita de um nó possuem valores **maiores ou iguais** ao valor do nó.

O objetivo principal de uma ABB é estruturar as informações de forma que seja possível realizar buscas binárias de maneira eficiente. As operações fundamentais nas ABBs incluem inserção, remoção e busca de elementos.

## Percursos em Árvores Binárias

Os percursos em árvores binárias são métodos para visitar todos os nós da árvore em uma ordem específica. Os principais percursos são:

### Percurso em Ordem

No **percurso em ordem**, a árvore é percorrida na sequência: **esquerda**, **raiz**, **direita**. Esse método resulta em uma ordenação crescente dos elementos da árvore.

**Ordem de visitação**: Esquerda → Raiz → Direita

**Exemplo de sequência**: 2, 4, 6, 7, 8, 9, 11, 12, 15

### Percurso Pós Ordem

No **percurso pós ordem**, a árvore é percorrida na sequência: **esquerda**, **direita**, **raiz**. Esse método é útil, por exemplo, para liberar memória de estruturas hierárquicas.

**Ordem de visitação**: Esquerda → Direita → Raiz

**Exemplo de sequência**: 2, 6, 8, 7, 4, 12, 15, 11, 9

### Percurso Pré Ordem

No **percurso pré ordem**, a árvore é percorrida na sequência: **raiz**, **esquerda**, **direita**. Esse percurso é útil para copiar a estrutura da árvore ou para criar uma representação prefixa da mesma.

**Ordem de visitação**: Raiz → Esquerda → Direita

**Exemplo de sequência**: 9, 4, 2, 7, 6, 8, 11, 15, 12