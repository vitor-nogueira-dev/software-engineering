### Modelagem Lógica

A modelagem lógica é uma etapa crucial no processo de design de banco de dados, onde a estrutura conceitual é refinada e adaptada para um modelo mais detalhado e específico. Este nível de modelagem é mais complexo e é influenciado pela tecnologia que será utilizada.

#### Características da Modelagem Lógica

- **Complexidade**: É o nível mais detalhado e complexo de modelagem de dados.
- **Sucessão**: Vem após a modelagem conceitual.
- **Influência Tecnológica**: A tecnologia escolhida pode influenciar a modelagem.

#### Conceitos Importantes

- **Entidade**: Um objeto do mundo real com existência independente. Exemplos: pessoa, carro, produto.
- **Atributo Chave**: Um atributo que identifica unicamente uma entidade. Exemplos: CPF, placa do carro, código do produto.
- **Atributo Comum**: Um atributo que não é chave. Exemplos: nome, endereço, telefone.
- **Relacionamento**: Uma associação entre entidades. Exemplo: um cliente faz um pedido.

#### Tipos de Dados

- **Numéricos**: Inteiros, reais.
- **Caracteres**: Texto.
- **Datas**: Data, hora.
- **Lógicos**: Verdadeiro ou falso.
- **Imagens**: Fotos, vídeos.
- **FK**: Chave estrangeira.
- **PK**: Chave primária.

#### Cardinalidade

A cardinalidade representa o grau de relação entre entidades no modelo conceitual. É expressa da seguinte forma:

- **(x,y)**: Onde `x` é a cardinalidade mínima e `y` é a cardinalidade máxima.

#### Chaves Únicas e Não Nulas

- **Chave Primária (PK)**: Uma chave única e não nula que identifica unicamente uma entidade.
- **Chave Estrangeira (FK)**: Uma chave que faz referência a uma chave primária de outra tabela.

#### Regras de Derivação

- **Derivação**: A obtenção de um valor a partir de outros valores.
- **Regra de Derivação**: Uma regra que define como um valor é obtido a partir de outros valores.
- **Exemplo**: `idade = ano atual - ano de nascimento`.
