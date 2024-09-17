### Diagrama de Comunicação

#### 1. O que é?
O diagrama de comunicação é uma ferramenta essencial para ilustrar a interação entre objetos em um único processo. Ele mostra como os objetos se comunicam entre si e descreve as mensagens trocadas durante a execução de um método ou algoritmo específico, como um caso de uso.

#### 2. Objetivos do Diagrama de Comunicação
- **Evidenciar a interação entre objetos**: Mostrar claramente como os objetos se comunicam e trocam mensagens.
- **Apresentar as mensagens trocadas em um caso de uso UML**: Detalhar as interações e comunicações entre os objetos.
- **Desenhar a comunicação entre objetos em um processo de negócio ou fluxo de trabalho**: Facilitar a compreensão e otimização das interações entre usuários e o sistema.

#### 3. Elementos do Diagrama de Comunicação
- **Objetos**: Entidades que se comunicam entre si no processo.
  - **Nome do objeto**: Representa o nome do objeto envolvido na comunicação.
  - **Atributos e métodos**: Representam as características e ações do objeto.
- **Vínculos**: Ligações existentes entre os objetos envolvidos no processo.
  - **Envio de mensagens**: Representa a ação de um objeto enviar uma mensagem para outro.
  - **Recebimento de mensagens**: Representa a ação de um objeto receber uma mensagem de outro.
- **Mensagens**: Instruções trocadas entre os objetos.
  - **Número e nome da mensagem**: Identificam a ordem e o conteúdo da mensagem trocada.

#### 4. Características Distintivas
- **Ênfase nas Relações**: O diagrama de comunicação dá ênfase às relações entre os objetos e classes, ao contrário do diagrama de sequência, que foca na ordem temporal.
- **Representação Visual**: Objetos são representados por retângulos, e associações entre objetos são representadas por linhas que ligam os retângulos. Uma seta, identificada com um número e um nome de mensagem, aponta para o objeto que inicia a sequência de passagem de mensagens.

### Exemplo de Diagrama de Comunicação
```plaintext
ObjetoA --------> ObjetoB
   |                |
   |                |
Mensagem1       Mensagem2
```