### Iniciando com UML

1. O que é ? 
   - É uma linguagem ou notação de diagramas para especificar, visualizar e documentar modelos de software orientados por objetos
   - A UML não é uma metodologia de desenvolvimento
   - Basicamente, a UML permite que desenvolvedores visualizem os produtos de seus trabalhos em diagramas padronizados
   - O UML é controlado pelo Object Management Group (OMG)
   - É importante distinguir entre um modelo UML e um diagrama (ou conjunto de diagramas) de UML


#### Modelagem de software 
   - É a atividade de construir modelos que expliquem as características ou o comportamento de um software ou de um sistema de software
   - Frequentemente a modelagem de software usa algum tipo de notação gráfica e são apoiados pelo uso da Ferramentas CASE 
   - A modelagem de software normalmente utiliza a construção de modelos gráficos

#### Visibilidades 

- `public`:
  - A visibilidade `public` é a visibilidade padrão em UML
  - Ela indica que o elemento é visível para todos os outros elementos do modelo
  - A visibilidade `public` é representada por um sinal de mais (+) antes do nome do elemento

- `private`:
  - A visibilidade `private` indica que o elemento é visível apenas para o elemento que o contém
  - A visibilidade `private` é representada por um sinal de menos (-) antes do nome do elemento

- `protected`:
  - A visibilidade `protected` indica que o elemento é visível para o elemento que o contém e para as subclasses do elemento que o contém
  - A visibilidade `protected` é representada por um sinal de hash (#) antes do nome do elemento

- `package(default)`: 
  - A visibilidade `default` indica que o elemento é visível para todos os elementos do mesmo pacote
	- A visibilidade `default` é representada por um sinal de til (~) antes do nome do elemento
	- A visibilidade `default` é a visibilidade padrão em Java