# PL/SQL Overview: Procedures, Functions, and Packages

## Procedures e Functions

A PL/SQL fornece duas ferramentas principais para organizar o código: procedures e functions. Ambas são blocos de código nomeados e reutilizáveis, mas possuem diferenças em como retornam valores.

### Procedures

- **Procedures**: Executam tarefas específicas e podem receber parâmetros de entrada e saída, mas não necessariamente retornam um valor.
  
**Exemplo de Procedure**:

```sql
CREATE PROCEDURE incrementar (p_valor IN OUT NUMBER) IS
BEGIN
    p_valor := p_valor + 1;
END;
```

### Functions

- **Functions**: Sempre retornam um valor ao final de sua execução utilizando a palavra-chave `RETURN`.

**Exemplo de Function**:

```sql
CREATE FUNCTION calcular_dobro (p_numero IN NUMBER) RETURN NUMBER IS
BEGIN
    RETURN p_numero * 2;
END;
```

### Exemplo de Fatorial

Functions podem ser utilizadas recursivamente, como no cálculo do fatorial:

```sql
CREATE FUNCTION fatorial(n IN NUMBER) RETURN NUMBER IS
BEGIN
    IF n = 0 THEN
        RETURN 1;
    ELSE
        RETURN n * fatorial(n - 1);
    END IF;
END;
```

## Packages

### Especificação e Corpo

Um **package** encapsula procedures, functions, variáveis e outros elementos:

- **Especificação**: Define a interface pública do package.
- **Corpo**: Contém a implementação dos objetos.

**Exemplo de Package**:

```sql
CREATE PACKAGE exemplo_package AS
    PROCEDURE dizer_ola;
END exemplo_package;

CREATE PACKAGE BODY exemplo_package AS
    PROCEDURE dizer_ola IS
    BEGIN
        DBMS_OUTPUT.PUT_LINE('Olá, mundo!');
    END dizer_ola;
END exemplo_package;
```

### Variáveis Globais e Privadas

- **Variáveis globais**: Declaradas na especificação, persistem durante a sessão.
- **Variáveis privadas**: Declaradas no corpo, só são acessíveis dentro do package.

## Sobrecarga (Overloading)

Permite criar procedures e functions com o mesmo nome, mas diferentes parâmetros.

```sql
CREATE PACKAGE exemplo_sobrecarga AS
    PROCEDURE imprimir_valor(p_valor IN NUMBER);
    PROCEDURE imprimir_valor(p_valor IN VARCHAR2);
END exemplo_sobrecarga;
```

O compilador identificar qual versão executar baseado nos argumentos fornecidos.

## Tratamento de Erros com Exceptions

Gestão de erros é essencial para robustez do sistema. Exceptions permitem capturar e tratar erros sem interrupções inesperadas.

**Exemplo de Exception**:

```sql
CREATE PROCEDURE dividir (a IN NUMBER, b IN NUMBER) IS
    resultado NUMBER;
BEGIN
    IF b = 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Divisão por zero não é permitida.');
    ELSE
        resultado := a / b;
        DBMS_OUTPUT.PUT_LINE('Resultado: ' || resultado);
    END IF;
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Erro ocorrido: ' || SQLERRM);
END;
```