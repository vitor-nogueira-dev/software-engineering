### Diagrama de Máquina de Estado

#### 1. O que é?
O diagrama de máquina de estado é uma ferramenta essencial para ilustrar o comportamento de um objeto em resposta a eventos específicos. Ele mostra como um objeto transita por diferentes estados em resposta a eventos e descreve as transições entre esses estados.

#### 2. Estado
- **Definição**: Um estado é uma condição ou situação em que um objeto pode existir. Ele representa uma fase na vida de um objeto e é definido por suas propriedades e valores.
  - **Exemplo**: Um objeto pode estar no estado "ligado" ou "desligado".
  - **Representação**: Um estado é representado por um retângulo com cantos arredondados, dividido em duas ou três seções:
    - **Primeira seção**: Contém a descrição do estado.
    - **Segunda seção**: (Opcional) Contém as ações que ocorrem quando o objeto entra no estado.
    - **Terceira seção**: (Opcional) Contém as ações que ocorrem quando o objeto sai do estado.

#### 3. Evento
- **Definição**: Um evento é um estímulo que pode ativar a transição de um estado para outro.
  - **Estado de origem**: O estado de onde a transição parte.
  - **Estado de destino**: O estado para onde a transição vai.
  - **Evento de ativação**: O evento que faz a transição ocorrer.
  - **Condição de guarda**: Uma expressão booleana entre colchetes, colocada após o evento, que é avaliada quando a transição é iniciada. Se a expressão for avaliada como falsa, a transição não ocorre.
    - **Exemplo**: Um cliente paga uma fatura. O evento é "pagar" e a condição de guarda é "saldo suficiente".

#### 4. Junção ou Ponto de Junção
- **Definição**: Também conhecido como barra de bifurcação e ponto de união, uma junção serve para indicar a união de dois ou mais processos paralelos em um único processo.
  - **Função**: Determina o momento em que o processo passou a ser executado em paralelo e em quantos subprocessos ele foi dividido (bifurcação) ou determina o momento em que dois ou mais subprocessos se uniram em um único processo (união).


#### 5. Estado de História
- **Definição**: Um estado de história é um estado especial que permite que um objeto retorne ao último estado que ele ocupou antes de entrar em um estado de história.
  - **Função**: Ele é útil quando um objeto precisa retornar a um estado anterior, mas não se sabe qual era esse estado.