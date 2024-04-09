### Abstração de dados

- A forma como o usuário ou programador lida com os dados não corresponde à forma como os dados estão realmente armazenados na memória do computador ou como eles são realmente.
- Chamamos de abstração de dados, estruturas muito úteis que "mascaram" os dados para visualizar e manipular dados de forma a tornar as soluções de uso e programação mais intuitivas.

#### Vetor (array) ou lista contígua

- É uma lista linear na qual a ordem lógica dos elementos (a ordem "vista" pelo usuário) é a mesma ordem física (em memória principal) dos elementos. Isto é, elementos vizinhos na lista estarão em posições vizinhas de memória.

#### Matriz (4l x 5c) armazenada segundo a sequência de linhas

- É uma tabela organizada em linhas e colunas no formato m x n, onde m representa o número de linhas (horizontal) e n o número de colunas (vertical). A função das matrizes é relacionar dados numéricos. 


#### Listas ligadas

- É uma estrutura que corresponde a uma sequência lógica de entradas ou nós.
- Em uma lista ligada há um ou dois pontos conhecidos de acessso -- normalmente o topo da lista (seu primeiro elemento) e, eventualmente, o fim da lista (seu último elemento). Cada nó armazena também a localização do próximo elemento na sequência, ou seja, de seu nó sucessor. Desse modo, o armazenamento de uma lista não requer uma área contígua de memória.
- Nesta estrutura os nomes não ocupam uma área contígua de memória, por isso cada elemento da estrutura tem o dado (nome) e um apontador para o próximo nome.
- Para inserir ou remover um elemento, é necessário mudar os apontamentos.

#### Árvores e exemplos
- Em uma árvore, a organização dos elementos se dá de forma hierárquica, existindo um elemento que fica no topo da árvora, chamado de raiz e os elementos subordinados a ele, os nós filhos. 
- Cada nós filho pode conter zero, um ou mais de um nós filhos.

**Árvore de Pesquisa Binária**
- É uma estrutura de dados útil quando precisam ser tomadas decisões bidirecionais em cada ponto de um processo.

#### Pilha
- São estruturas de dados do tipo **LIFO (last-in first-out)**, onde o último elemento a ser inserido, será o primeiro a ser retirado.
- Assim, uma pilha permite acesso a apenas um item de dados - o último inserido. Para processar o penúltimo item inserido, deve-se remover o último.
- São muito importantes quando precisamos armazenas um conjunto de dados para ser utilizado em um determinado software.

#### Fila 
- São estruturas de dados do tipo **FIFO (first-in first-out)**, onde o primeiro elemento a ser inserido, será o primeiro a ser retirado, ou seja, adiciona-se itens no fim e remove-se do início.