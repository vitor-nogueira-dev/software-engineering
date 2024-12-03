# Aprofundando em JavaScript

## Eventos em JavaScript

Os eventos são a espinha dorsal da interatividade, permitindo que nossas páginas respondam a ações do usuário, como cliques, movimentos do mouse e entradas de teclado. Imagine um botão que, ao ser clicado, exibe uma mensagem de boas-vindas – isso é possível graças aos eventos!

### `addEventListener`

Em JavaScript, utilizamos o método `addEventListener` para "escutar" eventos específicos em elementos da página. Esse método atua como um observador atento, pronto para executar um código específico quando o evento desejado ocorre.

#### Exemplo de Uso

```javascript
// Seleciona o botão pelo ID e adiciona um evento de clique
let botao = document.getElementById('meuBotao');
botao.addEventListener('click', function() {
  alert('Bem-vindo!');
});
```

## Validação de Dados

A validação de dados é outro pilar fundamental no desenvolvimento web. Ela garante que as informações inseridas pelos usuários em formulários estejam corretas e completas antes de serem processadas.

## Técnicas de Validação

Podemos, por exemplo, verificar se um campo de e-mail contém o símbolo "@" ou se um campo de senha atende aos requisitos mínimos de segurança. Através da validação, podemos garantir a integridade dos dados e proporcionar uma experiência mais confiável aos nossos usuários.

```javascript
// Função para validar e-mail
function validarEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

// Exemplo de uso
let email = 'usuario@exemplo.com';
if (validarEmail(email)) {
  console.log('E-mail válido');
} else {
  console.log('E-mail inválido');
}
```

## Método preventDefault()

O método `preventDefault()` é outra ferramenta poderosa em nosso arsenal JavaScript. Ele nos permite impedir o comportamento padrão de certos eventos, como o envio de um formulário. Isso é particularmente útil quando queremos realizar validações personalizadas antes de enviar os dados para o servidor.

```javascript
// Impede o envio do formulário se a validação de e-mail falhar
let formulario = document.getElementById('formularioCadastro');
formulario.addEventListener('submit', function(event) {
  let email = document.getElementById('email').value;
  if (!validarEmail(email)) {
    event.preventDefault();
    alert('E-mail inválido');
  }
});
```

