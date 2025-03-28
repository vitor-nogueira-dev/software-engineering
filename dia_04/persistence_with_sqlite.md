# Persitência com SQLite

- Para usar SQLite no Flutter, você pode usar a biblioteca `sqflite`, que fornece uma API para interagir com bancos de dados SQLite.
- Para isso, adicione a dependência `sqflite` no seu arquivo `pubspec.yaml`:
```yaml
dependencies:
  sqflite: ^2.0.0+4
```

- Depois, você pode criar um banco de dados e realizar operações CRUD (Create, Read, Update, Delete) com ele.

```dart
import 'package:flutter/material.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart' as p;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.purple,
        scaffoldBackgroundColor: Colors.purple[50],
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final TextEditingController _controller = TextEditingController();
  List<Map<String, dynamic>> _items = [];

  @override
  void initState() {
    super.initState();
    _loadItems();
  }

  Future<Database> initializeDB() async {
    String path = await getDatabasesPath();
    return openDatabase(
      p.join(path, 'examplo.db'),
      onCreate: (database, version) async {
        await database.execute('''
          CREATE TABLE items(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
          )
        ''');
      },
      version: 1,
    );
  }

  Future<void> insertItem(String name) async {
    if (name.isEmpty) return;
    final db = await initializeDB();
    await db.insert('items', {'name': name}, conflictAlgorithm: ConflictAlgorithm.replace);
    _controller.clear();
    await _loadItems();
  }

  Future<void> updateItem(int id, String newName) async {
    final db = await initializeDB();
    await db.update('items', {'name': newName}, where: 'id = ?', whereArgs: [id]);
    await _loadItems();
  }

  Future<void> deleteItem(int id) async {
    final db = await initializeDB();
    await db.delete('items', where: 'id = ?', whereArgs: [id]);
    await _loadItems();
  }

  Future<void> _loadItems() async {
    final db = await initializeDB();
    final data = await db.query('items');
    setState(() {
      _items = data;
    });
  }

  void _showEditDialog(int id, String currentName) {
    _controller.text = currentName;
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text("Editar Item"),
        content: TextField(
          controller: _controller,
          decoration: const InputDecoration(hintText: "Digite o novo nome"),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text("Cancelar"),
          ),
          ElevatedButton(
            onPressed: () {
              updateItem(id, _controller.text);
              Navigator.pop(context);
            },
            child: const Text("Salvar"),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.purple,
        title: const Text("SQLite com Flutter"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: <Widget>[
            TextField(
              controller: _controller,
              decoration: InputDecoration(
                labelText: 'Digite um nome',
                labelStyle: const TextStyle(color: Colors.purple),
                filled: true,
                fillColor: Colors.white,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () => insertItem(_controller.text),
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.purple,
                textStyle: const TextStyle(color: Colors.white),
                padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 15),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
              ),
              child: const Text('Adicionar', style: TextStyle(fontSize: 18, color: Colors.white)),
            ),
            const SizedBox(height: 20),
            Expanded(
              child: ListView.builder(
                itemCount: _items.length,
                itemBuilder: (context, index) {
                  return Card(
                    margin: const EdgeInsets.symmetric(vertical: 8),
                    color: Colors.purple[50],
                    child: ListTile(
                      leading: const Icon(Icons.person, color: Colors.purple),
                      title: Text(
                        _items[index]['name'],
                        style: const TextStyle(fontSize: 18, color: Colors.black87),
                      ),
                      onTap: () => _showEditDialog(_items[index]['id'], _items[index]['name']),
                      trailing: IconButton(
                        icon: const Icon(Icons.delete, color: Colors.red),
                        onPressed: () => deleteItem(_items[index]['id']),
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```