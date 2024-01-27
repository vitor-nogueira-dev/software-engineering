### Funções

- São blocos de construção fundamentais em JavaScript.
- Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa específica, por exemplo calcula um valor de um produto.
- Para usar uma função, devemos defini-la, implementar e chamar em algum lugar no escopo do código.

#### Tipos de funções
| Tipo | Descrição |
| ------ | ------ |
| Função regular | Uma função regular é um objeto Function. |
| Função anônima | Uma função anônima é uma função sem nome. |
| Função de seta (Arrow Function) | Uma expressão de função de seta (também conhecida como função de seta) possui uma sintaxe mais curta em comparação com as expressões de função e não tem seu próprio this, arguments, super ou new.target. Essas funções são melhor aplicadas para funções que não sejam métodos e que não usem o this, arguments, super ou new.target. |

#### Sintaxe
- Função regular
```javascript
function nomeDaFuncao(parametro1, parametro2, parametro3) {
  // código a ser executado
}
```

- Função anônima
```javascript
function(parametro1, parametro2, parametro3) {
  // código a ser executado
}
```

- Função de seta (Arrow Function)
```javascript
(parametro1, parametro2, parametro3) => {
  // código a ser executado
}
```
