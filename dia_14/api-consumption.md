# Consumo de APIs

## Conceito de eventos, callback e promessas

- A arquitetura baseada em eventos trabalha com duas partes principais: os `event emitters` e os `event listeners` (emissores e ouvidores de eventos).
- No navegador, os ventos estão muitas vezes relacionados a ações do usuário, como por exemplo um clique em um botão, preenchimento de um input ou qualquer outro tipo de interação; são eventos disparados por elementos HTML.

- No Node.js, objetos podem ter métodos como instâncias de evnt emitter, que emitem eventos em situações determinadas a estes eventos, uma vez emitidos, são "escutados" por event listeners, que disparam funções callback relacionadas a cada listener
- Exemplo: 
```js
import {createServer} from 'http';
const server = createServer();
server.on('request', (req, res) => {
  console.log('request received');
  res.end('Hello World');
});
```

- **Processos**:
  - É a execução de um conjunto de instruções de um programa. No caso de programas executados pelo Node.js, os processos são responsáveis por "escutar" eventos e responder de acordo.
- **Eventos**:
  - São um conjunto de ações que são realizadas em um determinado elemento. Muitas das interações do usuario que está visitando sua página com o conteúdo do seu site podem ser consideradas eventos.
- **Threads**:
  - São a menor unidade de processamento de um programa. São a forma como as instruções de um programa são separadas e "agendadas" para serem processadas pelo computador.

## Loop de eventos
- É iniciado junto com a aplicação e cada loop é composto pelas seguintes fases de execução:
  - **Callback dos temporizadores expirados**:
    - São os primeiros a serem executados assim que possível ou seja, quando a call stack se encontra vazia.
  - **I/O polling**:
    - Eventos de I/O que estão prontos para serem processados, a maior parte os callbacks é referente a este tipo de operação e ocorre nesta fase.
  - **setImmediate**:
    - Um tipo de temporizador especial que podemos usar quando queremos que um callback seja processado `imediatamente` (casos de uso mais avançados).
  - **Eventos de encerramento**:
    - Métodos para fechar conexões abertas, como conexões com bancos ou sockets.

## Módulos de Consumo de API
- O consumo de APIs em Node.js pode ser feitos utilizando algumas opções, sendo elas:
  - Request (deprecado)
  - Axios (mais utilizado)
  - Método fetch() (nativo do navegador, sendo mais leve)
- Cada um destes tem particularidades e orientações de uso e `desuso`. 

## Conceito de APIs falsas para consumo
- O uso de Fake APIs, também conhecidas como APIs falsas, é uma prática comum em desenvolvimento de software. Elas são úteis para simular comportamentos de APIs reais sem a necessidade de uma API real.
- Elas permitem que os testes de integração e unidade sejam realizados desde o início do processo de desenvolvimento, mesmo antes das APIs reais estar disponíveis.

### Principais benefícios:
- **Isolamento de Componentes**:
  - Poder isolar componentes do sistema para testá-los individualmente, garantindo que funcionem corretamente antes de integrá-los complementamente facilitando a detecção e resolução de problemas.
- **Redução de dependências externas**:
  - Reduz a vulnerabilidade a possíveis instabilidades ou mudanças nas APIs reais. Isso mantém o desenvolvimento fluindo mesmo quando as APIs reais estão em evolução.
- **Simulação de cenários**:
  - Incluindo respostas de erro, latência de rede e situações excepcionais. Isso ajuda a validar como seu sistema lida com diferentes condições, preparando-o para um funcionamento mais robusto no mundo real.
- **Documentação e design de interface**:
  - Criar a documentação e o design de interface da API antes mesmo de sua implementação real ajudando a garantir que a API seja bem projetada, documentada e fácil de usar.
- **Economia de recursos**:
  - Como não é preciso consumir recursos das APIs reais, isso ajuda a economizar recursos e dinheiro, além de evitar problemas de rate limit e custos de consumo de API.

### Exemplos de APIs falsas:
- JSONPlaceholder: https://jsonplaceholder.typicode.com/
- Fake Store API: https://fakestoreapi.com/