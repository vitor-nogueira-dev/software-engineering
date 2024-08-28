### Conceitos finais de OO e Requisitos

#### Tipos de Polimorfismo
- Existem 2 tipos de polimorfismo
  - **Dinâmico**
    - Sobrescrita (override, binding dinâmico)
    - Está diretamente relacionado com a herança. Com a sobrescrita, conseguimos especializar os métodos herdados das superclasses, alterando (redefinindo) o seu comportamento nas subclasses por um mais específico.
    - Mesmo nome de método e argumentos iguais
    - Decisão de qual método é chamado é feita em tempo de execução
  - **Estático**
    - Sobrecarga (overload)
    - Está diretamente relacionada com o polimorfismo. Mesmo nome de método e arqumentos diferentes (tipo de retorno ou número de argumentos)
    - Estamos construindo um novo comportamento e não redefinindo o compormento (sobrescrita)
    - Ocorre em tempo de compilação