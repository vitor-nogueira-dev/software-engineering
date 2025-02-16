# Entendendo o padrão MVC


### Definição de Arquitetura de uma aplicação
- Arquiteturas de aplicação são técnicas e padrões usados para projetas e desenvolver uma aplicação.
- Ela fornece um roadmap e práticas recomendadas a serem seguidas durante o desenvolvimento para ter uma aplicação bem estruturada e de fácil manutenção.

* Aspectos de uma boa estrutura
- Interoperabilidades, Compatibilidade,e Performance: A aplicação deve ser compatível com diferentes dispositivos e sistemas operacionais.
- Desempenho e Escalabilidade: A aplicação deve ser capaz de lidar com um grande número de usuários simultaneamente. E sua capacidade de escalar para lidar com um grande número de usuários.

### Diferença entre Arquitetura e Design Pattern
- A maioria das arquiteturas são inspiradas em sistemas que resolvem problemas parecidos aos que estão sendo solucionados por ela.
- O design  pattern geralmente é relacionado a soluções prontas e pontuais no nível de código.
- A arquitetura de software é responsável pelo esqueleto e pela infraestrutura de alto nível de um sistema.
- O design pattern é responsável pela estrutura no nível de código. como cada módulo executa uma função, o escopo das classes e também os objetivos das funções

#### Arquitetura da Aplicação
- Requisitos (equipe, ou cliente final)
- Infraestrutura (servidores, serviços, gateways, banco de dados, etc)
- Definições 

#### Exemplos de arquitetura
- **serverless**: refere-se à solução de aplicativo que depende de serviços de terceiros para gerenciar a complexidade dos servidores e o gerenciamento do backend
- **orientada a eventos**: tem como base principal o desacoplamento das partes do sistema e como cada parte será acionada quando um evento interessante de outra parte for acionado.
- **microserviços**: é um uso muito popular nos últimos anos, ele depende de serviços modulares pequenos e independentes, em que cada serviço resolve um problema específico ou executa uma tarefa exclusiva, eles se comunicam através de uma API bem definida.

#### Design Pattern
- Trecho de código específico
- Comportamento da aplicação
- Independente do resto

### Arquitetura MVC
- MVC é um design pattern que separa a aplicação em três camadas:
- Controller: Responsável por receber as requisições do usuário e chamar o model e a view.
- Model: Responsável por representar os dados da aplicação e a lógica de negócios.
- View: Responsável por exibir os dados ao usuário.