# APIs RESTful

## O que é uma API RESTful?
- API RESTful é uma interface que permite a comunicação entre sistemas através de chamadas HTTP, seguindo os princípios da arquitetura REST.

## Princípios Básicos de REST
- **Recursos:** Representações de dados, como usuários, produtos, etc.
- **Métodos HTTP:** Operações realizadas nos recursos.
- **Stateless:** Cada requisição é independente e não mantém estado entre chamadas.

- `GET:` Recupera informações de um recurso.
- `POST:` Cria um novo recurso.
- `PUT:` Atualiza um recurso existente.
- `DELETE:` Exclui um recurso.

## Status Codes
Indicadores do resultado de uma chamada HTTP. Exemplos:
- `200` **OK:** Requisição bem-sucedida.
- `201` **Created:** Recurso criado com sucesso.
- `400` **Bad Request:** Requisição inválida.
- `404` **Not Found:** Recurso não encontrado.
- `500` Internal Server Error: Erro no servidor

## Estrutura de uma URL RESTful
- Base URL: O endereço principal da API.
- Endpoint: A especificação do recurso. Ex: `/users`, `/products`.

## Consumindo APIs RESTful com Flutter

1. Adicionamos a Dependência ao pubspec.yaml
```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^0.13.3
```

2. Importamos o pacote http no arquivo Dart
```dart
import 'package:http/http.dart' as http;
import ‘dart:convert’;
```

3. Exemplo de Requisição `GET`:
```dart
import ‘package:flutter/material.dart’;

import ‘package:http/http.dart’ as http;

import ‘dart:convert’;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  Future<String> fetchData() async {
    final response = await http.get(Uri.parse("https://jsonplaceholder.typicode.com/posts/1"));
    if (response.statusCode == 200) {
      return jsonDecode(response.body)["title"];
    } else {
      throw Exception("Falha ao carregar dados");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Consumindo API REST"),
      ),
      body: Center(
        child: FutureBuilder<String>(
          future: fetchData(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return CircularProgressIndicator();
            } else if (snapshot.hasError) {
              return Text("Erro: ${snapshot.error}");
            } else {
              return Text("Título: ${snapshot.data}");
            }
          },
        ),
      ),
    );
  }
}
```

## Tratamento de Dados JSON
- O JSON (JavaScript Object Notation) é um formato leve de troca de dados, fácil de ler e escrever.
- O Dart possui suporte nativo para manipulação de JSON através do pacote `dart:convert`.

### Convertendo JSON para Objetos Dart
1. Modelo da Dados
```dart
class Post {
  final int userId;
  final int id;
  final String title;
  final String body;

  Post({required this.userId, required this.id, required this.title, required this.body});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      userId: json["userId"],
      id: json["id"],
      title: json["title"],
      body: json["body"],
    );
  }
}
```

2. Exemplo de Conversão

```dart
Future<Post> fetchPost() async {
  final response = await http.get(Uri.parse("https://jsonplaceholder.typicode.com/posts/1"));
  if (response.statusCode == 200) {
    return Post.fromJson(jsonDecode(response.body));
  } else {
    throw Exception("Falha ao carregar dados");
  }
}
```

### Convertendo Objetos Dart para JSON
1. Método toJson
```dart
class Post {
  final int userId;
  final int id;
  final String title;
  final String body;

  Post({required this.userId, required this.id, required this.title, required this.body});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      userId: json["userId"],
      id: json["id"],
      title: json["title"],
      body: json["body"],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      "userId": userId,
      "id": id,
      "title": title,
      "body": body,
    };
  }
}
```
2. Exemplo de Conversão e Envio

```dart
Future<http.Response> createPost(Post post) async {
  final response = await http.post(
    Uri.parse("https://jsonplaceholder.typicode.com/posts"),
    headers: {"Content-Type": "application/json; charset=UTF-8"},
    body: jsonEncode(post.toJson()),
  );

  if (response.statusCode == 201) {
    return response;
  } else {
    throw Exception("Falha ao criar post");
  }
}
```

## Boas Práticas e Segurança em APIs REST
- Use nomes claros e verbos HTTP apropriados para seus endpoints
- Documente sua API
- Implemente autenticação e autorização

1. Estrutura Clara de Endpoints
- Use nomes claros e verbos HTTP apropriados para seus endpoints: 

```plaintext
GET /api/v1/users
POST /api/v1/users
GET /api/v1/users/{id}
PUT /api/v1/users/{id}
DELETE /api/v1/users/{id}
```

2. Paginação e Limitação de Resultados
- Implemente paginação para lidar com grandes volumes de dados.

```plaintext
GET /api/v1/users?page=1&limit=10
```

3. Documentação da API
- Mantenha uma documentação clara e acessível para sua API, utilizando ferramentas como Swagger ou Postman.

## Segurança
1. Autenticação e Autorização
- Utilize OAuth 2.0, JWT ou outros métodos de autenticação robusta.
```json
"Authorization": "Bearer {token}"
```

2. Validação de Dados
- Valide todos os dados de entrada no servidor para prevenir injeções de SQL e outros tipos de ataques.

Exemplo de validação de dados em um POST:

```json
{
  "userId": 1,
  "title": "Exemplo",
  "body": "Conteúdo do post"
}
```

3. CORS
- Configure CORS (Cross-Origin Resource Sharing) para controlar o acesso a partir de diferentes origens.

```json
"Access-Control-Allow-Origin": "*" // Permite acesso de qualquer origem
"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE" // Permite métodos específicos
"Access-Control-Allow-Headers": "Content-Type, Authorization" // Permite cabeçalhos específicos
```

4. HTTPS
- Sempre utilize HTTPS para encriptar a comunicação entre cliente e servidor.
