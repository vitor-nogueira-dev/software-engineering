# REST
- REST (`“Representational State Transfer”`) é um estilo arquitetural amplamente utilizado para o desenvolvimento de APIs (`Application Programming Interfaces`) baseadas na web. Criado por Roy Fielding em sua tese de doutorado em 2000, o REST é projetado para tirar o máximo proveito do protocolo HTTP, fornecendo uma maneira simples e padronizada de comunicação entre sistemas.

Uma API RESTful é caracterizada por ser leve, escalável e fácil de implementar. Suas principais características incluem:
- **Client-Server (Cliente-Servidor):** Separar as responsabilidades entre cliente e servidor permite maior flexibilidade e manutenção.
- **Stateless (Sem Estado):** Cada requisição enviada pelo cliente ao servidor deve conter todas as informações necessárias para processá-la. O servidor não armazena o estado da sessão.
- **Cacheability (Cacheável):** Respostas das APIs podem ser armazenadas em cache para melhorar a eficiência.
- **Interface Uniforme:** Uso consistente de recursos e operações que seguem padrões estabelecidos.

- Vejamos alguns conceitos Fundamentais:
  - No REST, tudo é considerado um recurso; cada recurso é identificado por uma URL (“Uniform Resource Locator”). Por exemplo:
  - `https://api.exemplo.com/usuarios/1` — Representa o usuário com ID 1.
  - `https://api.exemplo.com/produtos` — Representa a coleção de todos os produtos.

Já os `verbos` HTTP são usados para realizar ações nos recursos. Os principais verbos são:

`GET:` Recupera informações sobre um recurso.
`POST:` Cria um novo recurso.
`PUT:` Atualiza completamente um recurso existente.
`PATCH:` Atualiza parcialmente um recurso.
`DELETE:` Remove um recurso.

Por exemplo:
```http
GET /usuarios — Obtém uma lista de usuários.
POST /usuarios — Cria um novo usuário.
PUT /usuarios/1 — Atualiza as informações do usuário com ID 1.
DELETE /usuarios/1 — Exclui o usuário com ID 1.
```

## Códigos de Status HTTP
As APIs RESTful usam códigos de status HTTP para indicar o resultado das operações:

- `200 OK`: Requisição bem-sucedida.
- `201 Created`: Recurso criado com sucesso.
- `204 No Content`: Operação bem-sucedida, sem corpo de resposta.
- `400 Bad Request`: Erro na requisição do cliente.
- `401 Unauthorized`: Autenticação necessária.
- `404 Not Found`: Recurso não encontrado.
- `500 Internal Server Error`: Erro no servidor.

O estilo arquitetural REST se tornou o padrão para desenvolvimento de APIs devido à sua simplicidade e flexibilidade. Entender seus conceitos básicos, boas práticas e como implementá-lo é essencial para criar aplicações web modernas, que sejam robustas e fáceis de manter.
