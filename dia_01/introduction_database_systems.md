# Introdução aos Sistemas de Banco de Dados

## Conceitos Básicos

- **Dado**: É a menor unidade de armazenamento que precisa de processamento. Quando analisado isoladamente, não faz sentido.
- **Informação**: É o dado processado, ou seja, é o dado que foi transformado e agora possui significado.
- **Conhecimento**: É a informação que foi processada e que tem um significado mais profundo e contextualizado.

## Sistema de Arquivos

- **Definição**: Estrutura que define como os arquivos devem ser gravados e armazenados em mídias.
- **Funções**: Determina como os arquivos podem ser gravados, copiados, alterados, nomeados e excluídos.
- **Necessidade**: Qualquer manipulação de dados em uma mídia requer um sistema de arquivos.

### Objetivos dos Sistemas de Arquivos

- Fornecer mecanismos para usuários manipularem arquivos e diretórios.
- Garantir a validade e coerência dos dados.
- Otimizar o acesso aos dados.

## Definição de Banco de Dados

- **Banco de Dados**: Coleção de dados relacionados e logicamente coerentes com algum significado inerente.
- **Associação**: Sempre associado a aplicações e usuários que têm interesse nele.
- **Organização**: Sistema que reúne e mantém organizada uma série de informações relacionadas a um determinado assunto, em uma determinada ordem.

## Sistema de Gerenciamento de Banco de Dados (SGBD)

- **Definição**: Conjunto de programas que permite a criação e a manutenção de bancos de dados.
- **Construção**: Processo de armazenar os dados em um meio controlado pelo SGBD.
- **Manipulação**: Inclui funções como consultas para recuperação de dados, atualização de banco de dados e geração de relatórios.

### Estrutura de um SGBD
Usuário -> Aplicação / Consulta -> Software para processar e acessar consultas -> Banco de Dados -> Dados


## Estruturas e Tipos de Banco de Dados

- **Banco de Dados Hierárquico**: Organiza as informações de forma hierárquica, em forma de árvore.
- **Banco de Dados de Rede**: Organiza as informações de forma mais flexível, permitindo que um registro seja filho de mais de um registro pai.
- **Banco de Dados Relacional**: Organiza as informações em tabelas, onde cada tabela é um conjunto de registros.
- **Banco de Dados Orientado a Objetos**: Organiza as informações em objetos, onde cada objeto é um conjunto de atributos e métodos.

## Características de um SGBD

- **Coleção de Dados Relacionados**: Dados que representam objetos do mundo real.
- **Comparações**:
  - Sistema de Arquivos vs. Banco de Dados.
  - Banco de Dados vs. SGBD.

### Principais Características

- Natureza auto-descritiva dos dados.
- Isolamento entre programas e dados.
- Uso de abstração de dados.
- Múltiplas visões dos dados.
- Padronização dos dados.

### Vantagens

- Redução da redundância e inconsistência.
- Controle de acesso.
- Estruturas eficientes de armazenamento e consulta.
- Representação de estruturas complexas.
- Manutenção da integridade.