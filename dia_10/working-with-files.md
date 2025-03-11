# Trabalando com arquivos

## Módulo Node.ja para trabalhar com arquivos
- Módulo nativo: `fs` que fornece diversos métodos versáteis para interagir com o sistema de arquivos.

- `.writeFile()`: 
  - método para criar ou substituir um arquivo.
  - parâmetros: diretório, conteúdo do arquivo e podemos fazer um tratamento de erro, caso necessário.
Exemplo:
```js
const fs = require('fs');
fs.writeFile('./arquivo.txt', 'Conteúdo do arquivo', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Arquivo criado com sucesso!');
  }
  });
```

- `.readFile()`:
  - método para ler um arquivo.
  - parâmetros: diretório e callback para tratar o erro e o conteúdo do arquivo.
Exemplo:
```js
const fs = require('fs'); 
fs.readFile('./arquivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```


## Upload de arquivos
- Para fazer upload de arquivos, podemos usar o `multer`, que é um middleware para lidar com dados de formulários multipart/form-data, que é usado principalmente para upload de arquivos.

Exemplo:
```js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Arquivo enviado com sucesso!');
});
```
