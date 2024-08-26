### Outros conceitos de Orientação a Objetos

1. Herança
  - É um mecanismo que permite a criação de uma nova classe a partir de uma classe já existente.
  - Mecanismo que permite definir uma nova classe (subclasse) a partir de uma classe que já existe (superclasse).
  - Classe `filha` herda comportamentos e atributos da classe `pai`.
  - Relacionamento de herança chamamos de `É-UM` (is-a).
  - Ex: Diretor é um Funcionário, Professor é um funcionário

2. Tipos de Herança
  - **Simples**: Uma classe pode ser filha de apenas uma classe 
  - **Múltipla**: Uma classe pode ser filha de mais de uma classe


- As heranças, que são princípios de orientação a objetos, permitem o compartilhamento de atributos e métodos pelas classes e são usadas com o intuito de se reaproveitar código ou comportamento generalizado ou especializar operações ou atributos.
- Ela serve para criar classes que incorporem proprieddades e métodos de outras classes. Assim, é possível construir uma classe a partir de outra sem ter de reescrevê-las.

No contexto de programação orientada a objetos podemos dizer que: 
- Objetos são instâncias de classes.
- Herança é uma relação entre classes.
- Mensagens são formas de executar métodos. (podem ou não ter uma lista de parâmetros)
- Classe é como se fosse uma forma para a criação de objetos.
- Interface é um contrato que uma classe pode implementar. 

3. Polimorfismo
  - É a capacidade de um objeto poder ser referenciado de várias formas.
  - Permite que um objeto possa ser referenciado de várias formas. Quando duas ou mais classes distintas tem métodos com o mesmo nome.
  - Ex: Um método `mover` pode ser implementado de formas diferentes em classes diferentes. (Ex: Carro, Avião, Barco), mas todos possuem o método `mover`.