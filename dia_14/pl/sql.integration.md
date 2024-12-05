# Trabalhando com SQL e PL/SQL

A linguagem SQL é crucial para a manipulação de dados e objetos em bancos de dados relacionais. Ela se divide em várias sublinguagens que permitem diferentes interações com o banco de dados:

- **DDL (Data Definition Language)**: Define e modifica objetos no banco de dados.
- **DML (Data Manipulation Language)**: Manipula dados contidos no banco.
- **DQL (Data Query Language)**: Realiza consultas para recuperação de dados.
- **TCL (Transaction Control Language)**: Controla transações no banco de dados.

## Integração entre SQL e PL/SQL

Embora a integração entre SQL e PL/SQL seja natural, existem restrições. Comandos DDL não são diretamente utilizáveis dentro de PL/SQL, enquanto comandos DML e DQL são comumente empregados.

## Operações DML em PL/SQL

### INSERT

Utilizado para inserir novos registros em tabelas. O uso de tipos RECORD em PL/SQL pode simplificar a passagem de parâmetros durante essa operação. 

**Exemplo de Inserção**:

```sql
DECLARE
    v_registro tabela%ROWTYPE;
BEGIN
    v_registro.coluna1 := valor1;
    v_registro.coluna2 := valor2;
    INSERT INTO tabela VALUES v_registro;
END;
```

### UPDATE

O comando UPDATE modifica registros existentes. A cláusula WHERE especifica quais registros serão alterados, enquanto SET define os novos valores.

**Exemplo de Atualização**:

```sql
BEGIN
    UPDATE tabela
    SET coluna = valor
    WHERE condicao;
END;
```

Ancoragem de tipos com `%ROWTYPE` permite representar e manipular registros completos de uma tabela.

### DELETE

DELETE remove registros de uma tabela. O uso cauteloso da cláusula WHERE é essencial para evitar a remoção de todos os dados.

**Exemplo de Exclusão**:

```sql
BEGIN
    DELETE FROM tabela
    WHERE condicao;
END;
```

### Claúsula RETURNING

A cláusula RETURNING, combinada com INSERT, UPDATE ou DELETE, retorna informações sobre a operação executada, como o número de registros afetados. Já RETURNING INTO armazena os valores retornados em variáveis, e RETURNING BULK COLLECT INTO manipula múltiplas linhas, utilizando coleções.

## Estruturas de Dados

PL/SQL suporta tipos estruturados, como VARRAY e tabelas aninhadas, que permitem armazenar múltiplos valores em colunas. 

- **VARRAYs**: Possuem tamanho fixo.
- **Tabelas aninhadas**: Exigem definição de armazenamento.

Coleções são automaticamente inicializadas e ajustadas, dispensando alocação manual.

## Controle de Transações

Transações asseguram a atomicidade das operações no banco de dados:

- **COMMIT**: Completa transações com sucesso.
- **ROLLBACK**: Desfaz alterações em caso de erro ou necessidade.

Blocos PL/SQL podem atuar como transações autônomas, isolando suas operações. Isso é útil em procedimentos como registros de logs ou operações de limpeza, onde o estado do banco precisa ser mantido independentemente da transação principal.

A diretiva `PRAGMA AUTONOMOUS_TRANSACTION` define um bloco como transação autônoma, permitindo que ele seja commitado ou rollbackado independentemente da transação externa.
