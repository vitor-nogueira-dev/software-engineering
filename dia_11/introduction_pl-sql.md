# Introdução à Linguagem PL/SQL                      

## Estrutura de um Bloco PL/SQL
Exemplho: 
```sql
CABEÇALHO IS
  DECLARE 
    -- Declaração de variáveis
  BEGIN -- Início
    -- Código (SEÇÃO DE EXECUÇÃO)
  EXCEPTION
    -- Tratamento de exceções
END;
```

## Elementos da Linguagem 

- **Identificadores**: Até 30 caracteres, iniciados por letras e podem conter letras, números, underline, cifrão e cerquilha.
  - **Exemplo**: `nome`, `nome_cliente`, `nomeCliente`, `nome_cliente_1`, `nome_cliente$`, `nome_cliente#`
- **Variáveis**: Valores podem ser atribuídos e alterados durante a execução do bloco. Sempre associadas a um tipo de dado.
  - **Exemplo**: `nome VARCHAR2(30);`
- **Constantes**: Valores que não podem ser alterados durante a execução do bloco. Sempre associadas a um tipo de dado.
  - **Exemplo**: `PI CONSTANT NUMBER := 3.14159265359;`
- **Literais**: Valores fixos não identificados. Podem ser utilizados no lugar de variáveis ou constantes.
  - **Exemplo**: `10`, `3.14`, `'A'`, `'B'`, `'C'`
  - **Exemplo**: `'Olá Mundo!'`
- **Operadores**: Operam variáveis, constantes e literais. Podem ser aritméticos, relacionais, lógicos, comparação, atribuição, concatenação, entre outros.
  - **Exemplo**: `+`, `-`, `*`, `/`, `=`, `<>`, `>`, `<`, `>=`, `<=`
- **Rótulos**: Identificam um local do programa.
  - **Exemplo**: `<<nome_do_rotulo>>`

## Tipos de Dados

- **Numéricos**: `NUMBER(p, s)`, `BINARY_FLOAT`, `BINARY_DOUBLE`, `PLS_INTEGER`
- **Caracteres**: `CHAR(n)`, `VARCHAR2(n)`
- **Data e Hora**: `DATE`, `TIMESTAMP(n)`
- **Intervalos**: `INTERVAL YEAR(n) TO MONTH`, `INTERVAL DAY(n) TO SECOND(m)`

## Escopo de Variáveis

- **Local**: Declaradas dentro de um bloco e só podem ser acessadas dentro dele.
- **Global**: Declaradas fora de um bloco e podem ser acessadas por qualquer bloco.
