### Threads

**Threads** (ou encadeamentos) são uma das funcionalidades mais poderosas e atraentes de Java, permitindo a programação **multithread** de forma eficiente e simplificada. Um programa multithread contém duas ou mais partes que podem ser executadas **simultaneamente**, cada uma denominada **thread**, proporcionando um caminho de execução separado. O **multithreading** é uma forma especializada de **multitarefa**, permitindo que múltiplas operações ocorram ao mesmo tempo dentro de um único processo.

### Benefícios do Multithreading

- **Melhoria da Performance**: Utiliza melhor os recursos da CPU, reduzindo o tempo ocioso.
- **Responsividade**: Aplicações permanecem responsivas mesmo durante a execução de operações demoradas.
- **Melhor Experiência do Usuário**: Respostas mais rápidas e eficientes.

## Definição de Thread

Formalmente, uma **thread** é uma unidade básica de processamento à qual o sistema operacional aloca tempo de CPU. Um processo pode conter múltiplas threads, cada uma executando um trecho diferente do código.

## Criando Threads em Java

Java oferece duas principais maneiras de criar threads:

### 1. Implementando a Interface `Runnable`

Esta é a abordagem mais flexível e recomendada para criar threads.

- **Passos**:
  - Criar uma classe que implementa a interface `Runnable`.
  - Implementar o método `run()`, que contém o código a ser executado pela thread.
  - Instanciar a classe `Thread`, passando a instância de `Runnable` como argumento.
  
- **Vantagens**:
  - Permite herança múltipla, já que a classe pode estender outra classe além de implementar `Runnable`.
  - Separação clara entre o que a thread faz (`Runnable`) e a própria thread (`Thread`).

### 2. Estendendo a Classe `Thread`

Esta abordagem envolve a criação de uma subclasse de `Thread` e a sobrescrita do método `run()`.

- **Passos**:
  - Criar uma classe que estende `Thread`.
  - Sobrescrever o método `run()` com o código a ser executado pela thread.
  - Instanciar a subclasse e chamar o método `start()` para iniciar a thread.

- **Limitações**:
  - Java não suporta herança múltipla, limitando a flexibilidade da classe que estende `Thread`.
  - Geralmente considerada uma má prática em termos de design de software.

## Instanciando e Iniciando Threads

Independente do método escolhido para criar a thread (`Runnable` ou estendendo `Thread`), o processo para instanciar e iniciar a thread é essencialmente o mesmo:

1. **Instanciação**:
   - Se implementando `Runnable`:
     ```java
     MinhaRunnable minhaRunnable = new MinhaRunnable();
     Thread thread = new Thread(minhaRunnable);
     ```
   - Se estendendo `Thread`:
     ```java
     MinhaThread minhaThread = new MinhaThread();
     ```

2. **Iniciando a Thread**:
   - Chamar o método `start()` no objeto `Thread` para iniciar a execução da nova thread.
     ```java
     thread.start();
     ```

## Métodos e Estados das Threads

### Principais Métodos da Classe `Thread`

- **`start()`**: Inicia a execução da thread e chama o método `run()`.
- **`run()`**: Contém o código que será executado pela thread.
- **`sleep(long millis)`**: Faz a thread atual dormir por um determinado período.
- **`setName(String name)`**: Define o nome da thread.
- **`getName()`**: Obtém o nome da thread.
- **`interrupt()`**: Interrompe a thread.
- **`join()`**: Aguarda a conclusão da thread.

### Estados das Threads

As threads em Java podem estar em diferentes **estados** durante seu ciclo de vida:

1. **New (Novo)**:
   - Estado após a criação da instância `Thread` e antes de chamar `start()`.
   
2. **Runnable (Executável)**:
   - A thread está pronta para ser executada e aguarda a alocação de CPU pelo agendador.
   
3. **Running (Em Execução)**:
   - A thread está atualmente em execução.
   
4. **Blocked (Bloqueada)**:
   - A thread está impedida de continuar sua execução até que uma condição seja satisfeita (e.g., esperando por I/O ou por um bloqueio de recurso).
   
5. **Dead (Morta)**:
   - A thread completou sua execução ou foi interrompida.

### Transições Entre Estados

- **`start()`**: Move a thread de **New** para **Runnable**.
- **Execução**: Quando o agendador seleciona a thread, ela passa para **Running**.
- **Bloqueio**: A thread pode se tornar **Blocked** devido a espera por recursos.
- **Conclusão**: Após o término do método `run()`, a thread entra no estado **Dead**.