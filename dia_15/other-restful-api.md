# Outras possibilidades de API Restful

## Comparação da API Restfull NodeJS e Java
- Vamos olhar apenas para Express e Spring Boot neste momento.
- `Express`:
  - Comunidade Javascript tem um crescimento rápido e exponencial, é leve e rápido, utiliza pouca memória (single thread), é bom para tarefas de I/O, npm está sempre evoluindo.
  - Não é multi-thread, falta de chegagem de tipagem pode levar a problemas de execução, não é bom quando se necessita de muito processamento, pode ter lacunas de performance.
  - **Passo a passo**:
    - Criar o projeto usando o npm (npm init)
    - Instalar o express usando o npm
    - Implementar o arquivo principal (index.js)
    - Executar a aplicação
- `Spring Boot`:
  - Comunidade Java é madura, Java é tipado, suporte e manutenção de longo prazo, suporta para multi-thread, fácil usabilidade de dependências.
  - Alta utilização de memória, Java é verboso, estrutura que possui muitas camadas de códigos, dificultando o debug, pode ter dependências não utilizadas no projeto e o arquivo binário para deploy é muito grande.
  - **Passo a passo**:
    - Criar o arquivo `pom.xml`
    - Inicializar o projeto com spring.io
    - Criar o controlador arquivo @Controller
    - Habilitar ferramentas de aplicações web spring-boot-devtools
    - Executar a aplicação

## Arquitetura de Microserviços
- Uma arquitetura de microserviços é um tipo de arquitetura em que o aplicativo é desenvolvido como uma coleção de serviços.
- Ela fornece uma estrutura para desenvolver, implantar e manter serviços de maneira independente.

## Testes e qualidade de software
- Testes são uma séria de procedimentos que visam encontrar possíveis `bugs`, reportar `erros`, identificar `problemas` de usabilidade, bem como assegurar que todos os requisitos solicitados pelo cliente sejam atendidos.
- O teste de software é uma `etapa` que abrange o processo de validação e verificação com o intuito de identificar se o sistema desenvolvido atende aos requisitos definidos pelo usuário e assim garantir a qualidade do software.
- **Tipos de testes**:
  - Teste de unidade
  - Teste de integração
  - Teste funcional
  - Teste de carga
  - Teste de regressão 
  - Teste de segurança