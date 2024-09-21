### Diagrama de Estrutura Composta e tempo 

## O que é um Diagrama de Estrutura Composta?

O **Diagrama de Estrutura Composta**, introduzido na UML 2.0, é um dos três novos diagramas propostos. Ele modela a colaboração entre objetos, representando como várias instâncias de classes, interfaces e outros elementos cooperam para fornecer um comportamento colaborativo.

### Características Principais

- **Colaboração de Objetos**: Representa a interação entre instâncias de objetos.
- **Sociedade de Elementos**: Classes, interfaces e outros elementos que cooperam para um comportamento comum.
- **Conjunto de Instâncias**: Define como as instâncias interagem através de conectores que indicam os caminhos de comunicação.

### Elementos do Diagrama

- **Papéis**: Desempenhados por instâncias que colaboram para completar uma tarefa. A parte estrutural especifica os elementos envolvidos.
- **Conectores**: Representados por segmentos de reta, mostram as interações entre as instâncias relevantes para concluir a tarefa.

### Diferença entre Estrutura Composta e Pacotes

- **Pacotes**: Agrupamentos em tempo de compilação.
- **Estrutura Composta**: Agrupamentos em tempo de execução.

## O que é um Diagrama de Tempo?

O **Diagrama de Tempo** na UML faz parte dos diagramas de interação e captura o comportamento dos objetos ao longo do tempo, utilizando um gráfico ou forma de onda. Ele mostra a alteração de estados ou condições de objetos em um eixo de tempo linear.

### Elementos do Diagrama de Tempo

- **Linha de Vida ou Objetos**: Representa um elemento individual envolvido na interação, nomeado e podendo ser organizado em "raias" ou quadros de diagrama.
- **Estado**: Representa o estado contínuo de um classificador ou de seus atributos durante a interação.
- **Restrição de Duração**: Define o intervalo de tempo que uma condição dura, verificando se a restrição foi ou não cumprida.
- **Restrição de Tempo**: Semelhante à restrição de duração, porém mais focada no intervalo de tempo.
- **Evento**: Fato que causa a mudança de estado do objeto.

### Vantagens e Desvantagens do Diagrama de Tempo

- **Vantagens**: Permite visualizar o estado de um objeto em um determinado ponto no tempo e as mudanças que ocorrem ao longo do tempo.
- **Desvantagens**: Pode ser difícil de manter e compreender devido às restrições, especialmente com tempos imprecisos ou a dificuldade de identificar todos os objetos que devem estar no diagrama.

