# Iniciando com o Node.js

### NPM (Node Package Manager)
- O NPM é um gerenciador de pacotes para JavaScript.
- Essa tecnologia organiza e otimiza as dependências de um projeto além de ajudar a manter atualizadas as versões de suas dependências. Para isso, o gerenciador cria um diretório chamado `node_modules` que armazena todas as dependências do projeto.

### Uso do export e import 

- O `module-exports`: É um objeto especial que está incluido em toda aplicação Node.js por padrão, o `module` é uma variável que apresenta o módulo atual, e o `exports` é um objeto que será exposto como um módulo.
- O `import` é uma declaração **estática** usada para vincular módulos que foram exportados e são chamados de "ligações ao vivo" porque são atualizadas pelo módulo que exporta aquela ligação

### Módulos internos e externos

1. Nativos:
  - São aqueles que fazem parte da especificação da linguagem Javascript, ou seja, são funcionalidades integradas na linguagem e disponíveis em todos os ambientes que suportam JS, como os navegadores web e o ambiente Node.js.
2. Públicos:
  - São pacotes ou módulos de código fonte aberto disponibilizados no registro público do NPM, que podem ser baixados e utilizados livremente em projetos desenvolvidos com o Node.js.
3. Criados pela aplicação:
  - São módulos personalizados que foram criados pelo desenvolvedor para atender às necessidades específicas do projeto. Esses módulos podem conter variáveis, funções e outros recursos que sÃo utilizados em diferentes partes do código fonte.

### Módulos para requisições
- São módulos internos que auxiliam o sistema na interação com outras plataformas externas. 
- Alguns módulos são o `http` e o `url`, eles ajudam na comunicação de uma API com outras APIs ou URLs externas.