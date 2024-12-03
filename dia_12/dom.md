# Document Object Model (DOM)

## O que é o DOM?

O Document Object Model (DOM) é uma interface de programação que permite ao JavaScript interagir e manipular documentos HTML. Ele representa a estrutura do documento HTML como uma árvore de objetos, onde cada elemento, atributo e texto é um nó nessa árvore. Essa estrutura hierárquica permite que o JavaScript acesse e modifique qualquer parte do documento de forma dinâmica.

## Importância da Manipulação do DOM

A manipulação do DOM é essencial para criar páginas web interativas e dinâmicas. Com o DOM, podemos fazer alterações em tempo real, respondendo às ações do usuário, atualizando conteúdo, modificando estilos e muito mais. Por exemplo, um site de notícias que atualiza o feed de notícias sem precisar recarregar a página é possível graças à manipulação do DOM.

## Seleção de Elementos

### `getElementById`

O método `getElementById` permite selecionar um elemento HTML pelo seu ID, um atributo único que identifica o elemento. Uma vez selecionado, podemos modificar o conteúdo do elemento, seus atributos ou até mesmo removê-lo da página.

```javascript
// Seleciona um elemento pelo ID e modifica seu conteúdo
let elemento = document.getElementById('meuElemento');
elemento.textContent = 'Novo Conteúdo';
```

### `getElementsByClassName`

O método `getElementsByClassName` seleciona todos os elementos que possuem uma determinada classe. As classes, diferente dos IDs, podem ser atribuídas a múltiplos elementos, permitindo aplicar alterações em grupo.

```javascript
// Seleciona todos os elementos com a classe 'destaque' e muda a cor de fundo
let elementos = document.getElementsByClassName('destaque');
for (let i = 0; i < elementos.length; i++) {
  elementos[i].style.backgroundColor = 'yellow';
}
```

## Criação de Elementos

O DOM permite criar novos elementos dinamicamente com o método `createElement`. Podemos definir seus atributos, conteúdo e usar `appendChild` para adicioná-lo à estrutura da página.

```javascript
// Cria um novo parágrafo e adiciona ao corpo do documento
let novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Este é um novo parágrafo.';
document.body.appendChild(novoParagrafo);
```

## Manipulação de Atributos

Podemos usar `getAttribute` para obter o valor de um atributo específico de um elemento e `setAttribute` para definir ou modificar o valor de um atributo.

```javascript
// Obtém e define atributos de um elemento
let imagem = document.getElementById('minhaImagem');
let srcAtual = imagem.getAttribute('src');
imagem.setAttribute('src', 'novoCaminho/paraImagem.jpg');
```

## Eventos

Os eventos permitem que o JavaScript responda a interações do usuário, como cliques do mouse, movimentos do cursor ou pressionamento de teclas. Podemos usar    para associar uma função a um evento específico.

```javascript
// Adiciona um evento de clique a um botão
let botao = document.getElementById('meuBotao');
botao.addEventListener('click', function() {
  alert('Botão clicado!');
});
```


