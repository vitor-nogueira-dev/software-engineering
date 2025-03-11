# Boas Práticas do Mercado

## Preparação para testes unitários
- Os testes unitários tornam seu projeto mais ágil proque você terá segurança de que recursos antigos não foram impactados com novas implementações. Além disso, eles ajudam a encontrar bugs no início do ciclo de desenvolvimento.
- Antes de iniciar a implementação dos testes unitários, tenha atenção nos seguintes pontos:
  1. Escolha uma convenção para nomear os testes.
  2. Organize seus pensamentos ao escrever o teste
  3. Considere implementar casos felizes e de erro
  4. Acompanhe a porcentagem de cobertura de testes
- Algumas boas práticas que vão garantir que sua implementação de testes unitários realmente faz a diferença no projeto.
- Frameworks de teste mais utilizados, de acordo com o State of JS 2020:
  - Jest
  - Mocha
  - Storybook
  - Jasmine
  - Cypress
  - Puppeteer
  - Testing Library
  - WebdriverIO
  - AVA
  - Playwright

- Para utilizar o Jest, podemos seguir os passos:
  1. Instalhar globalmente o Jest: `npm install -g jest`
  2. Aidicionar ao projeto utilizando o comando: `npm install --save-dev jest`
  3. Atualizar o arquivo package.json especificando a chave `test` com o comando: `"test": "jest"`
  4. Escrever o caso de teste
  5. Executar o comando `npm test`

## Versionamento de código e boas práticas
- Neste ponto, estamos falando da importância do versionamento do código que é um sistema de controle de versão de códigos e scripts específicos.
- `Git` é um sistema de controle de versão distribuído usado para rastrear alterações no código-fonte durante o desenvolvimento de software.