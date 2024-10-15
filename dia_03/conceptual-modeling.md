### Modelagem Conceitual

- **Entidade**: é um objeto ou conceito do mundo real que pode ser diferenciado de outros objetos. Exemplo: pessoa, carro, produto, etc.
- **Atributo**: é uma característica ou propriedade de uma entidade. Exemplo: nome, idade, cor, etc.

Ex: Objeto "Livro", no contexto de uma biblioteca:
- Nome: Livro
- Características:
  - Título, Autor, Editora, Ano de Publicação, Número de Páginas, etc.
- Comportamentos: 
  - Emprestar, Devolver, Reservar, etc.

#### Modelagem conceitual
- Consiste em abstrair informações do contexto modelado.
- Como modelamos nosso "mini mundo"
- Devemos extrair o mácimos de informações para uma modelagem correta
- Totalmente independente de tecnologia
- Modelo Entidade-Relacionamento (MER)  
  - Proposto por Peter Chen em 1976

Para que não serve o MER:
- Não descreve o tipo de dados de cada atributo de cada entidade
- Não mostra os aspectos complexos no relacionamento entre entidades
- Não mostra aspecos técnicos do projeto (tecnologias, por exemplo)
- Não descreve a segurança do banco

#### Simbologia

- **Entidade**: retângulo
- **Atributo**: elipse
- **Attr Identificador**: círculo preenchido
  - Atributo que identifica unicamente uma entidade
  - Não pode ser nulo
  - Ex: CPF, matrícula...
- **Attr Comum**: círculo vazio
  - Atributo que não identifica unicamente uma entidade
  - Pode ser nulo
- **Relacionamento**: losango

#### Cardinalidade 

- Ex: LIVRO X AUTOR
- Cada livro precisa ter ao menos um autor, mas pode ter vários.
- Cada autor pode ter um livro, mas também pode ter vários
- Chamamos essa relação de `1:N` (um para muitos)

- Ex: MÉDICO x PACIENTE
- Cada médico pode ter vários pacientes
- Cada paciente pode ter vários médicos
- Chamamos essa relação de `N:N` (muitos para muitos)

- A cardinalidade mínima pode ser 0 ou 1
- A cardinalidade máxima pode ser 1 ou N

- Notações:
- (0, 1) - Zero ou uma ocorrência
- (1, 1) - Uma ocorrência
- (0, N) - Zero ou mais ocorrências
- (1, N) - Uma ou mais ocorrências
- A cardinalidade vai dos dois lados de um relacionamento
- Ex: (1, N) x (0, N)
