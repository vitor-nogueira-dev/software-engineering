### Banco de dados

- Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador.
- Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS - Database Management System).
- Juntos, os dados e o DBMS, juntamente com as aplicações associadas, são referidos como um sistema de banco de dados, muitas vezes abreviado para apenas banco de dados.

1. **Dado:** fato do mundo real que está registrado
  - Ex: endereço, data
2. **Informação:** fato útil que pode ser extraído direta ou indiretamente a partir dos dados 
  - Ex: endereço de entrega, idade
3. **Banco de dados (BD):** coleção de dados inter-relacionados e persistentes que representa um subconjunto dos fatos presentes em um domínio de aplicação.

- **Banco de dados:** instância de dados + meta-dados
- **Instância de dados:** o próprio dado 
- **Meta-dados:** dicionário de dados

### Instâncias e Esquemas 
- Os bancos de dados mudam a medida que informações são inseridas ou apagadas
- A coleção de informações armazenadas é chamada **INSTÂNCIA** do banco de dados (mudam com frquência)
- O projeto geral do banco de dados é chamado **ESQUEMA** do banco de dados (não muda com frequência)

### Independência dos dados 
1. O uso de banco de dados permite modificar o esquema dos dados em um nível sem afetar a definição do esquema em um nível mais alto.
2. Denominamos essa ação de Independência dos Dados.
3. **Independência Física:** habilidade de modificar o esquema físico sem a necessidade de reescrever os programas de aplicação. Melhorar o desempenho sem alterar o esquema lógico.
4. **Independência Lógica:** habilidade de modificar o esquema lógico sem a necessidade de reescrever os programas de aplicação. Adicionar novos tipos de dados sem alterar o esquema conceitual.

### O que é SQL?
- SQL (Structured Query Language) é uma linguagem de consulta estruturada para bancos de dados relacionais. Usada para consultar, manipular e definir dados e fornecer controle de acesso.
- O SQL foi padronizado pela primeira vez em 1986 pela ANSI (American National Standards Institute) e em 1987 pela ISO (International Organization for Standardization).
- Embora o SQL ainda seja amplamente usado hoje em dia, novas linguagens de programação de banco de dados estão surgindo, como o NoSQL.