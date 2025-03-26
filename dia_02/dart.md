# Dart

## Variáveis
- **var**: Inferência de tipo, permite reatribuição dentro do mesmo tipo.
- **final**: Definido uma única vez, mas aceita valores dinâmicos.
- **const**: Definido em tempo de compilação, imutável e não aceita valores dinâmicos.

## Estruturas de Dados
### List
Uma lista ordenada de elementos.
```dart
List<int> numbers = [1, 2, 3, 4, 5];
numbers.add(6);
print(numbers); // [1, 2, 3, 4, 5, 6]
```

### Set
Uma coleção de elementos únicos.
```dart
Set<String> uniqueNames = {'Vitor', 'Nogueira', 'Vitor'};
print(uniqueNames); // {Vitor, Nogueira}
```

### Map
Uma coleção de pares chave-valor.
```dart
Map<String, int> ages = {'Vitor': 30, 'Ana': 25};
print(ages['Vitor']); // 30
```

## Funções
### Arrow Function
Sintaxe curta para funções de uma linha.
```dart
int add(int a, int b) => a + b;
print(add(2, 3)); // 5
```

### Função com Parâmetros e Retorno
```dart
double multiply(double a, double b) {
  return a * b;
}
print(multiply(4, 5)); // 20.0
```

## Classes
Exemplo básico de uma classe em Dart.
```dart
class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void sayHello() {
    print("Olá, meu nome é $name e tenho $age anos.");
  }
}

var person = Person("Vitor", 28);
person.sayHello(); // Olá, meu nome é Vitor e tenho 30 anos.
