### Diagrama de Classe

#### Relação dos Relacionamentos

Os relacionamentos entre classes podem variar em termos de força e dependência. Abaixo estão os tipos de relacionamentos classificados como fracos ou fortes:

#### Relações Fracas
- **Dependência**: Uma classe depende de outra se ela usa a outra classe como parâmetro em um método ou se chama seus métodos.
- **Associação**: Um relacionamento geral onde uma classe usa ou interage com outra classe. Pode ser um-para-um, um-para-muitos, muitos-para-um ou muitos-para-muitos.
- **Agregação**: Uma forma especial de associação que representa uma relação "todo-parte". A parte pode existir independentemente do todo.

#### Relações Fortes
- **Composição**: Uma forma mais forte de agregação onde a parte não pode existir independentemente do todo. Se o todo for destruído, a parte também será.
- **Herança**: Um relacionamento onde uma classe (subclasse) herda os atributos e métodos de outra classe (superclasse). Representa uma relação "é-um".

#### Exemplo
Se temos uma relação de herança, é considerado um relacionamento forte em comparação com uma associação simples.