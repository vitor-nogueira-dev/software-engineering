### Formulários

Formulários são uma parte importante de qualquer aplicação web. Eles são a maneira de enviar dados para o servidor.

> method = "POST" ou "GET"
> action = "url para onde os dados serão enviados"

```html
<form method="POST" action="/login">
  <label for="username">
    Username
    <input type="text" name="username" id="username" />
  </label>
  <input type="password" name="password" />
  <input type="submit" value="Login" />
</form>
```

