# Estruturas de Controle de Fluxo em PL/SQL

## Estruturas de Decisão

As estruturas de decisão são fundamentais para criar programas que respondem a condições específicas. Em PL/SQL, temos duas principais:

### Comando IF

O comando `IF` permite executar blocos de código diferentes dependendo do resultado de uma condição.

**Exemplo:**

```plsql
DECLARE
    num INTEGER := 10;
BEGIN
    IF num > 0 THEN
        DBMS_OUTPUT.PUT_LINE('Número positivo');
    ELSIF num < 0 THEN
        DBMS_OUTPUT.PUT_LINE('Número negativo');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Número zero');
    END IF;
END;
```

### Comando CASE

O comando `CASE` oferece uma sintaxe mais elegante para testar múltiplos valores de uma expressão.

**Exemplo:**

```plsql
DECLARE
    status VARCHAR2(10) := 'A';
BEGIN
    CASE status
        WHEN 'A' THEN 
            DBMS_OUTPUT.PUT_LINE('Ativo');
        WHEN 'I' THEN 
            DBMS_OUTPUT.PUT_LINE('Inativo');
        ELSE 
            DBMS_OUTPUT.PUT_LINE('Desconhecido');
    END CASE;
END;
```

## Estruturas de Repetição

As estruturas de repetição são essenciais para executar um bloco de código várias vezes. Em PL/SQL, temos três principais:

### Comando LOOP

O comando `LOOP` cria um loop simples que se repete indefinidamente até que um comando de saída, como `EXIT`, seja encontrado.

**Exemplo:**

```plsql
DECLARE
    counter INTEGER := 0;
BEGIN
    LOOP
        counter := counter + 1;
        DBMS_OUTPUT.PUT_LINE('Contagem: ' || counter);
        EXIT WHEN counter >= 5; -- condição de saída
    END LOOP;
END;
```

### Comando FOR

O comando `FOR` é utilizado para loops com um número predefinido de iterações, controladas por um contador.

**Exemplo:**

```plsql
BEGIN
    FOR i IN 1..5 LOOP
        DBMS_OUTPUT.PUT_LINE('Iteração: ' || i);
    END LOOP;
END;
```

### Comando WHILE

O comando `WHILE` executa um bloco de código enquanto uma condição for verdadeira.

**Exemplo:**

```plsql
DECLARE
    counter INTEGER := 0;
BEGIN
    WHILE counter < 5 LOOP
        counter := counter + 1;
        DBMS_OUTPUT.PUT_LINE('Contagem: ' || counter);
    END LOOP;
END;
```