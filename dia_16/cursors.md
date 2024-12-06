# Cursores Implícitos e Explícitos

## O que são Cursores Implícitos?
Cursores são estruturas que armazenam resultados e informações de comandos DML. São automaticamente criados pelo SGBDR para os comandos `INSERT`, `UPDATE`, `DELETE`, `SELECT INTO`, e `SELECT BULK COLLECT INTO`. Cursores implícitos são mais comumente utilizados nas duas últimas formas do comando `SELECT`.

## Exemplos de Uso

### Exemplo 1: Atribuição de Variáveis
```sql
DECLARE
  linha_filasWK ROWTYPE;
BEGIN
  SELECT * INTO linha_filasWK FROM filas ORDER BY 1;
  DBMS_OUTPUT.PUT_LINE('Filial: ' || linha_filasWK.id ||
                       ', Vendas: ' || linha_filasWK.vendas);
END;
```

### Exemplo 2: Tratando Erros
```sql
CREATE OR REPLACE PROCEDURE get_filial(p_id IN NUMBER) AS
  linha_filas filas%ROWTYPE;
BEGIN
  SELECT * INTO linha_filas FROM filas WHERE id = p_id;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Nenhuma filial encontrada.');
  WHEN TOO_MANY_ROWS THEN
    DBMS_OUTPUT.PUT_LINE('Mais de uma filial encontrada.');
END;
```

## Tratamento de Exceções
Diversos erros são comuns, como:
- `ORA-01403`: Dados não encontrados.
- `ORA-01422`: A consulta retornou mais linhas do que o esperado.

## Execução em Massa (BULK)
O PL/SQL permite tratar múltiplas linhas usando `BULK COLLECT INTO` e `FORALL`.

### Exemplo de `FORALL`
```sql
FORALL i IN 1..100
  INSERT INTO tabela VAL VALUES (valor_array(i));
```

## Atributos de Cursores Implícitos
O SGBDR Oracle fornece atributos para os cursores implícitos, que incluem:
- `SQL%FOUND`: Retorna TRUE se uma linha foi afetada.
- `SQL%NOTFOUND`: Retorna TRUE se nenhuma linha foi afetada.
- `SQL%ROWCOUNT`: Retorna o número de linhas afetadas.

## Cursores Explícitos
Cursores explícitos são declarados no PL/SQL com a diretiva `CURSOR`. O usuário deve abrir, executar e fechar manualmente o cursor.

### Exemplo de Uso de Cursor Explícito
```sql
DECLARE
  CURSOR c_filial IS SELECT * FROM filas;
  v_linha c_filial%ROWTYPE;
BEGIN
  OPEN c_filial;
  LOOP
    FETCH c_filial INTO v_linha; 
    EXIT WHEN c_filial%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(v_linha.coluna);
  END LOOP;
  CLOSE c_filial;
END;
```

## Atributos de Cursores Explícitos
Os atributos incluem:
- `cursor%FOUND`: TRUE se a linha foi retornada.
- `cursor%NOTFOUND`: TRUE se nenhuma linha foi retornada.
- `cursor%ROWCOUNT`: Retorna número de linhas retornadas até o momento.

## Cláusula FOR UPDATE
A cláusula `FOR UPDATE` é empregada nas consultas para garantir que as linhas resultantes sejam trancadas para alterações.

### Exemplo de Uso
```sql
CURSOR c_pedido IS 
  SELECT * FROM pedidos WHERE condicao FOR UPDATE;

OPEN c_pedido;
LOOP
  FETCH c_pedido INTO variavel;
  UPDATE pedidos SET coluna = valor WHERE CURRENT OF c_pedido;
END LOOP;
CLOSE c_pedido;
```

## Uso de Cursores em Packages
Cursores podem ser usados em packages, tanto declarando a consulta no corpo quanto na especificação.

### Exemplo de Declaração em Package
```sql
CREATE OR REPLACE PACKAGE pkg AS
  CURSOR c_filmes IS SELECT * FROM filmes; 
END pkg;
```

### Exemplo de Uso
```sql
DECLARE
  v_filme pkg.c_filmes%ROWTYPE;
BEGIN
  OPEN pkg.c_filmes;
  LOOP
    FETCH pkg.c_filmes INTO v_filme;
    EXIT WHEN pkg.c_filmes%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE(v_filme.coluna);
  END LOOP;
  CLOSE pkg.c_filmes;
END;
```
