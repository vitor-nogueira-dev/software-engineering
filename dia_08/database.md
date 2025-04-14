# Banco de Dados
- Banco de Dados é um sistema que permite a coleta, organização, armazenamento e gerenciamento de dados de maneira estruturada e eficiente. Ele é uma parte fundamental da infraestrutura de TI para muitos tipos de aplicativos e sistemas. Aqui estão alguns aspectos essenciais e conceitos chave que caracterizam bancos de dados:

## 1. Tipos de Banco de Dados:
- **Relacional (RDBMS)**: Organiza os dados em tabelas com linhas e colunas, sendo acessados via SQL (Structured Query Language). Exemplos incluem MySQL, PostgreSQL, Oracle e Microsoft SQL Server.
- **Não Relacional (NoSQL)**: Lida com dados de formas não tabulares, como chave-valor, documentos ou grafos. Exemplos incluem MongoDB, Cassandra e Redis.
- **Hierárquico:** Organiza os dados em uma estrutura de árvore, com registros filhos subordinados a registros pais.
- **Em Rede:** Similar ao hierárquico, mas com uma estrutura mais flexível, onde registros podem ter múltiplos pais e filhos.

## 2. Modelagem de Dados:
- ​A modelagem de dados é o processo de criar uma representação abstrata da estrutura do banco de dados. **Entidade-Relacionamento (ER)** é um dos métodos mais comuns, onde entidades (objetos do mundo real) são representadas por tabelas, e os relacionamentos entre elas são expressos por chaves estrangeiras.

## 3. Operações Básicas em Banco de Dados:

- **CRUD:** As operações fundamentais para manipulação de dados são:
- **C**riar (Insert)
- **R**ecuperar (Select)
- **U**pdate (Atualizar)
- **D**elete (Excluir)

- Essas operações são fundamentais para interagir com as tabelas no banco de dados.

## 4. Consultas e SQL:
- **SQL (Structured Query Language)** é a linguagem padrão usada para fazer consultas em bancos de dados relacionais. Exemplo de consulta simples:
```sql
SELECT nome, idade FROM usuarios WHERE idade > 18;
```
- Além de consultas, SQL permite a criação, modificação e exclusão de tabelas, entre outras operações.

## 5. Normalização:

​O processo de normalização visa eliminar redundâncias e dependências nos dados, dividindo grandes tabelas em menores e estabelecendo relacionamentos entre elas. As formas normais (1NF, 2NF, 3NF, etc.) são critérios para alcançar a normalização.

## 6. Índices e Desempenho:
- **Índices** são estruturas de dados que melhoram a velocidade de operações de busca no banco de dados. No entanto, seu uso excessivo pode degradar a performance de inserções e atualizações.
- **Tuning de banco de dados** envolve otimizar consultas, índices e outras configurações para melhorar o desempenho.

## 7. Backup e Recuperação:
- Manter uma estratégia de backup regular e eficiente é essencial para proteger os dados contra falhas. A recuperação pode ser feita em nível de transação ou completo.

## 8. Transações:

- Uma transação é uma unidade de trabalho que envolve uma ou mais operações em banco de dados. Para garantir integridade e consistência, as transações seguem as propriedades `ACID`:

- **A**tomicidade: a transação é completa ou não ocorre.
- **C**onsistência: o banco de dados vai de um estado válido a outro estado válido.
- **I**solamento: transações independentes.
- **D**urabilidade: os efeitos da transação são permanentes, mesmo em caso de falha.

## 9. Escalabilidade e Distribuição:

- Bancos de dados devem ser capazes de crescer conforme a necessidade de processamento de dados. Bancos **escaláveis** podem ser distribuídos em múltiplos servidores para lidar com grandes volumes de dados, como acontece com **sharding** ou **replicação** em NoSQL.

## 10. Segurança:

- ​A segurança dos dados inclui o controle de acesso e a criptografia, garantindo que apenas usuários autorizados possam visualizar ou modificar os dados.
- Os **bancos de dados** são essenciais para praticamente todas as áreas da tecnologia, pois possibilitam o armazenamento e manipulação eficaz de grandes volumes de dados. O entendimento profundo dos tipos de bancos, operações básicas, normalização e performance é crucial para a construção de sistemas eficientes e seguros.​