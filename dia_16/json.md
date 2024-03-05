### Padrão JSON

- É um formato leve e independente de linguagem para troca de dados. Ele é baseado na sintaxe do JavaScript, mas pode ser usado com qualquer outra linguagem de programação. O JSON é amplamente utilizado para transmitir e armazenar dados estruturados.

- O formato JSON é muito semelhante a um objeto JavaScript, mas é independente de linguagem. O JSON é composto por pares de chave/valor, onde a chave é sempre uma string e o valor pode ser qualquer tipo de dado JSON, incluindo array ou outro objeto JSON.

- Métodos para manipular JSON:
  - `JSON.parse()`: Converte uma string JSON em um objeto JavaScript.
  - `JSON.stringify()`: Converte um objeto JavaScript em uma string JSON.

```
{
  "nome": "João",
  "idade": 30,
  "casado": false,
  "filhos": ["Pedro", "Maria"]
}
```