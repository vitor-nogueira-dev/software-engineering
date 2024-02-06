### CSS - Cascading Style Sheets

- O CCS, é o acrônimo de Cascading Style Sheets, cuja tradução para português significa Folhas de estilo em cascata. É uma linguagem usada para formatar a apresentação de uma página em HTML no navegador. Os padrões desta linguagem são definidos pelo W3C, mesmo consórcio que define os padrões para a linguagem HTML.
A sintaxe do CSS compõe-se de um seletor, abertura de chaves, declaração de propriedade e valor para esta, como no exemplo a seguir, onde atribui-se ao seletor p a fonte verdana e o tamanho de 20px.

```css
p {
    font-family: verdana;
    font-size: 20px;
}
```

- O seletor aponta para o elemento HTML que se deseja estilizar.
- O bloco de declaração contém uma ou mais declarações separadas por ponto e vírgula.
- Cada declaração inclui um nome de propriedade CSS e um valor, separados por dois pontos.
- Os blocos de declaração são cercados por chaves.

##### Formas de adicionar CSS ao documento HTML

- **Inline**: Adiciona-se o CSS diretamente na tag HTML, como no exemplo a seguir:

```html
<p style="color: red;">Este é um parágrafo</p>
```

- **Interno**: Adiciona-se o CSS diretamente na tag HTML, como no exemplo a seguir:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: red;
        }
    </style>
</head>
<body>
    <p>Este é um parágrafo</p>
</body>
</html>
```

- **Externo**: Adiciona-se o CSS em um arquivo separado, como no exemplo a seguir:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <p>Este é um parágrafo</p>
</body>
</html>
```
