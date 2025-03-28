# Persistência de Objetos

- Vamos usar a api `shared_preferences` para persistir dados simples, como `int`, `double`, `String`, `bool` e `List<String>`.
- Para persistir objetos mais complexos, como `List<Produto>`, precisamos converter o objeto em um formato que possa ser armazenado, como JSON.
- Para isso, podemos usar a biblioteca `json_serializable`, que gera código para serializar e desserializar objetos Dart em JSON.

## Exemplo de Persistência de Objetos
```dart

// É necessário importar ela no pubspec.yaml
// dependencies:
  // shared_preferences: ^2.0.13

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(home: MyHomePage());
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final TextEditingController _controller = TextEditingController();

  String _savedData = "Nenhum dado salvo";

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  Future<void> _loadData() async {
    // Obtém uma instância de SharedPreferences
    final prefs = await SharedPreferences.getInstance();

    // Carrega a string salva ou mostra 'Nenhum dado salvo' se não houver dado salvo
    setState(() {
      _savedData = prefs.getString('my_key') ?? "Nenhum Dado Salvo";
    });
  }

  Future<void> _saveData(String value) async {
    // Obtém uma instância de SharedPreferences
    final prefs = await SharedPreferences.getInstance();

    // Salva a string com a chave 'my_key'
    await prefs.setString('my_key', value);

    // Carrega a string salva ou mostra 'Nenhum dado salvo' se não houver dado salvo
    setState(() {
      _savedData = value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text("Persistência de Dados"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: <Widget>[
            TextField(
              controller: _controller,
              decoration: const InputDecoration(labelText: 'Digite um texto'),
            ),
            const SizedBox(height: 20),

            ElevatedButton(
              onPressed: () {
                _saveData(_controller.text);
              },
              child: const Text('Salvar Dados'),
            ),
            const SizedBox(height: 20),

            Text('Dado salvo: $_savedData'),
          ],
        ),
      ),
    );
  }
}
```