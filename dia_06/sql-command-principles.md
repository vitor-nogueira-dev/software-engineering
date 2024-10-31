# Princípios do Comando SQL

## Por que SQL?

SQL (Structured Query Language) é uma linguagem de consulta estruturada amplamente utilizada para acessar e manipular bancos de dados relacionais. Cada versão do SQL pode apresentar variações, mas a essência permanece a mesma. As declarações SQL são instruções que você escreve para interagir com um banco de dados, seja para consultar dados ou realizar alterações.

### Tipos de Declarações SQL

As declarações SQL podem ser agrupadas em quatro categorias principais:

1. **DDL (Data Definition Language) - Linguagem de Definição de Dados**
   - `CREATE`: Cria novas tabelas e outros objetos no banco de dados.
   - `ALTER`: Modifica estruturas existentes de tabelas.
   - `DROP`: Remove tabelas e objetos do banco de dados.
   - `TRUNCATE`: Remove todos os registros de uma tabela, mas mantém sua estrutura.

2. **DML (Data Manipulation Language) - Linguagem de Manipulação de Dados**
   - `SELECT`: Recupera dados de uma ou mais tabelas.
   - `INSERT`: Adiciona novos registros a uma tabela.
   - `UPDATE`: Altera dados existentes em uma tabela.
   - `DELETE`: Remove registros de uma tabela.

3. **DCL (Data Control Language) - Linguagem de Controle de Dados**
   - `GRANT`: Concede permissões a usuários para realizar ações específicas.
   - `REVOKE`: Remove permissões concedidas anteriormente.

4. **DQL (Data Query Language) - Linguagem de Consulta de Dados**
   - `BEGIN`: Inicia uma transação.
   - `COMMIT`: Confirma uma transação, salvando as alterações.
   - `ROLLBACK`: Desfaz as alterações feitas em uma transação.
   - `SAVE`: Cria um ponto de salvamento dentro de uma transação para facilitar o retorno àquele estado.

## Restrições

As restrições são regras aplicadas às colunas de dados em uma tabela e servem para limitar o tipo de dados que podem ser inseridos. Elas garantem a precisão e a confiabilidade dos dados no banco de dados. As restrições podem ser definidas tanto a nível de coluna quanto a nível de tabela.

### Exemplos de Restrições Comuns:

- **NOT NULL**: A coluna não pode conter valores nulos.
- **DEFAULT**: Define um valor padrão que será utilizado quando nenhum valor for especificado.
- **UNIQUE**: Assegura que todos os valores em uma coluna sejam distintos, evitando duplicatas.