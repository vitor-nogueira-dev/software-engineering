### Entendendo a Lista Ligada

#### 1. Tipo Nó
- **Definição**: Um nó é a unidade básica de uma lista ligada. Cada nó armazena um valor e um ponteiro para o próximo nó na sequência.
- **Estrutura**:
  - **Valor**: O dado armazenado no nó.
  - **Ponteiro**: Referência para o próximo nó na lista.
- **Termos Importantes**:
  - **Cabeça (Head)**: O primeiro nó da lista.
  - **Cauda (Tail)**: O último nó da lista, que aponta para `NULL`.
  - **Nó Folha**: Um nó que não aponta para nenhum outro nó (geralmente o último nó).

#### 2. Contar Nós
- **Objetivo**: Determinar o número de nós presentes na lista ligada.
- **Passos**:
  - Inicializar um contador com 0.
  - Percorrer a lista ligada a partir da cabeça.
  - Incrementar o contador a cada nó encontrado.
  - Retornar o valor do contador.

#### 3. Mostrar Lista Ligada
- **Objetivo**: Exibir os valores armazenados em cada nó da lista ligada.
- **Passos**:
  - Inicializar um ponteiro com a cabeça da lista.
  - Percorrer a lista ligada.
  - Mostrar o valor de cada nó.
  - Atualizar o ponteiro para o próximo nó.
  - Repetir o processo até que o ponteiro seja `NULL`.

#### 4. Elemento Início da Lista
- **Objetivo**: Retornar o primeiro elemento da lista sem removê-lo.
- **Passos**:
  - Verificar se a lista não está vazia.
  - Se a lista estiver vazia, exibir uma mensagem informando que a lista está vazia.
  - Caso contrário, retornar o valor do primeiro nó.

#### 5. Elemento Final da Lista
- **Objetivo**: Retornar o último elemento da lista sem removê-lo.
- **Passos**:
  - Percorrer a lista ligada até encontrar o último nó.
  - Verificar se a lista não está vazia.
  - Se a lista estiver vazia, exibir uma mensagem informando que a lista está vazia.
  - Caso contrário, retornar o valor do último nó.

#### 6. Inserir Nó no Início
- **Objetivo**: Adicionar um novo nó no início da lista ligada.
- **Passos**:
  - Criar um novo nó.
  - Verificar se a lista está vazia.
  - Se a lista estiver vazia, atualizar os ponteiros de cabeça e cauda para apontar para o novo nó.
  - Caso contrário, o ponteiro do novo nó deve apontar para o nó inicial atual.
  - Atualizar o ponteiro de cabeça da lista para apontar para o novo nó.

#### 7. Inserir Nó no Final
- **Objetivo**: Adicionar um novo nó no final da lista ligada.
- **Passos**:
  - Criar um novo nó.
  - Verificar se a lista está vazia.
  - Se a lista estiver vazia, atualizar os ponteiros de cabeça e cauda para apontar para o novo nó.
  - Caso contrário, o ponteiro do último nó atual deve apontar para o novo nó.
  - Atualizar o ponteiro de cauda da lista para apontar para o novo nó.