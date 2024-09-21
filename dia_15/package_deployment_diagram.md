# Diagrama de Pacote e Implantação

## O que é um Diagrama de Pacote?

Na UML (Unified Modeling Language), **pacote** é um agrupamento de elementos que podem incluir classes, interfaces, outros pacotes ou até mesmo diagramas. Embora não exista um "Diagrama de Pacote" específico, os pacotes são utilizados em diversos tipos de diagramas para organizar e estruturar melhor as informações. 

### Uso de Pacotes em Outros Diagramas

- **Pacotes de Casos de Uso**: Utilizados em **Diagramas de Casos de Uso**.
- **Pacotes de Classes**: Utilizados em **Diagramas de Classes**.
- **Pacotes de Componentes**: Utilizados em **Diagramas de Componentes**.

### Características dos Pacotes

- **Visibilidade dos Elementos**:
  - `+` (Público): Visível para todos que importam (chamados de *exports*).
  - `#` (Protegido): Visível apenas para pacotes-filhos (herança de pacotes através de relações de generalização).
  - `-` (Privado): Visível apenas para outros elementos dentro do mesmo pacote.

- **Regras de Nomeação**:
  - Elementos dentro de um pacote não podem ter o mesmo nome.
  - Elementos públicos do pacote são também chamados de elementos exportados.

- **Dependências**:
  - Pacotes podem ter dependências semelhantes às do diagrama de classes, indicando que um elemento depende de outro.

## O que é um Diagrama de Implantação?

Enquanto outros diagramas da UML focam em aspectos lógicos do sistema, o **Diagrama de Implantação** aborda os aspectos físicos. Ele ilustra a organização do hardware e como o software está ligado aos dispositivos físicos, como computadores e periféricos.

### Componentes do Diagrama de Implantação

- **Nós (Nodos)**: Representam os recursos de infraestrutura, servidores, ou dispositivos físicos. São os componentes básicos do diagrama.
- **Associações de Comunicação**: Linhas que conectam os nós, indicando ligações físicas que permitem a comunicação e troca de informações entre eles.
- **Artefatos**: Dentro de um nó, os artefatos especificam conjuntos concretos de informações utilizados ou produzidos por processos de desenvolvimento, instalação ou operação do sistema. Representados por retângulos com a palavra-chave `«artifact»`.
