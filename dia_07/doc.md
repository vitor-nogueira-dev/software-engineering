### Sistemas Operacionais

- Um sistema operacional visa abstrair o acesso e gerenciar os recursos de hardware, provendo aos aplicativos um ambiente de execução no qual o acesso aos recursos se faz através de interfaces simples, independentes das caracterísitcias e detalhes de baixo nível, e no qual os conflitos no uso de hardware são minimizados.
- Os sistemas operacionas podem ser classificados segundo diversos parâmetros e perspectivas, como tamanho, velocidade, suporte a recursos específicos, acesso à rede, etc.

> Para que serve um sistema operacionals ?
- Cada computador possui normalmente um só processador
- O uso dele, deve ser distribuído entre os programas presentes no sistema, de forma que cada um deles possa executr na velocidade adequada para cumprir suas funções sem prejudicar os outros.
- Tambéms a memória RAM deve ser gerenciada e distribuída de forma justa entre as aplicações.
- Gerenciar as impressões em computadores em rede, por exemplo, é uma tarefa necessária que o sistema operacional faz.

> Tipos de sistemas operacionais
- **Desktop:** Voltado para atendimento de usuários finais, com interface gráfica e aplicativos de uso geral.
- **Servidor:** Voltado para atendimento de aplicações de rede, com suporte a múltiplos usuários e alta disponibilidade.
- **Distribuído:** Voltado para atendimento de aplicações distribuídas, com suporte a múltiplos processadores e memória compartilhada.
- **Multiusuário:** Voltado para atendimento de múltiplos usuários, com suporte a múltiplas sessões e ambientes de execução isolados.
- **De rede:** Voltado para atendimento de aplicações de rede, com suporte a múltiplos protocolos e serviços.
- **Embutido:** Voltado para atendimento de aplicações embarcadas, com suporte a hardware específico e baixo consumo de recursos.

##### Modelo de von Neumann

- **Unidade de Controle:** (que busca cada instrução dos programas na memória e executa sobre os dados de entrada)
- **Unidade Lógica e Aritmética ULA:** (parte da unidade central de processamento que realiza operações aritméticas e lógicas)
- **Memória:** (armazena dados e instruções)
- Os **dispositivos de entrada e saída** interagem com o modelo, mas não fazem parte dos componentes principais.

- A CPU é um componente vital para o computador. Muitos confundem a CPU com gabinete, mas vale lembrar que o gabinete é a parte externa do computador, enquanto a CPU ou processador é a parte interna (o cérebro do computador).

- A unidade lógica e aritmética (ULA) é a parte da CPU que realiza operações aritméticas e lógicas. Executando operações númericas, como adição, subtração, multiplicação e divisão, e operações lógicas, como AND, OR e NOT. Além da preparação de informações para desvios do programa.

- A unidade de controle e a unidade lógica e aritmética formam a unidade central de processamento (UCP), ou simplesmente processador.

- A memória de um sistema de computador tem a função de armazenar dados e instruções; é organizada em posições, que podem ser visualizadas como elementos em uma matriz.
- Cada elemento da memória tem um endereço único. Assim, pode-se falar de uma memória que tenha x posições: cada posição pode ser referenciada diretamente de acordo com a sua colocação na sequência. 
- Por exemplo, se uma memória tem 4096 posições, existem posições de memória 0, 1, 2, 3, ..., 4095.
- Um registrador é uma pequena memória interna do processador, que armazena dados temporariamente.

- Intruções em um computador são executadas em uma sequência deterinada por suas posições de memória.
- Na maioria dos computadores, intruções e dados são distribuídos em posições de memória.

##### Drivers (Controladores)

- São programas que permitem a comunicação entre o sistema operacional e os dispositivos de hardware.
- Os drivers são necessários para que o sistema operacional possa controlar os dispositivos de hardware.
- É ele que cuida quando ao se abrir um requerimento, o processo seja executado, sendo permitida a interação do software com o dispositivo.

##### Programas

- Um programa é constituído de uma sequência predeterminada de instruções que são executadas por um computador.
- O programa e os dados correspondentes estão armazenados na memória do computador; o conjunto de instruções (ou programa) deve ser interpretado para a realização do processamento, isto é, a informação codificada correspondente às ações e aos operandos precisa ser entendida e então processada.

#### Ciclo de execução 
> Processos na CPU
- **Novo:** Um novo processo foi adicionado à fila de execuções, então a CPU deverá buscar os dados necessários para executar o programa
- **Pronto:** O processo está pronto para ser executado, mas a CPU ainda não o executou
- **Em execução:** O processo está sendo executado pela CPU
- **Em espera:** O processo está esperando por um evento externo, como a entrada de dados
- **Terminado:** O processo foi finalizado

##### Rotina Boostrap

- A rotina de bootstrap é um conjunto de instruções que são executadas quando o computador é ligado.
- Quando o usuário liga o computador, o processador executa a rotina de bootstrap, que é armazenada em um chip de memória ROM (Read Only Memory). 