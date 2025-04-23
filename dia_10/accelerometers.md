# Acelerômetros
Acelerômetros são sensores que medem a aceleração linear em uma ou mais direções. Eles são amplamente utilizados em dispositivos móveis para detectar movimento, inclinação e orientação.

## Fundamentos de Acelerômetros
### O que é um Acelerômetro?
Um acelerômetro é um sensor que mede a aceleração linear em uma ou mais direções. A aceleração é a taxa de mudança da velocidade de um objeto. Acelerômetros podem medir a força da gravidade e movimentos dinâmicos, como vibrações ou movimentos rápidos.

### Como Funcionam os Acelerômetros?
Os acelerômetros contêm pequenos componentes que se movem em resposta à aceleração. Quando o dispositivo se move, esses componentes se deslocam, e o sensor converte esse movimento em sinais elétricos que podem ser medidos.

### Aplicações Comuns dos Acelerômetros
- **Detecção de Movimento:** Utilizado em dispositivos móveis para detectar movimentos e gestos.
- **Inclinação e Orientação:** Determina a inclinação e orientação do dispositivo.
- **Atividades Físicas:** Medição de passos e atividades físicas em smartwatches e dispositivos de fitness.
- **Automotivo:** Monitoramento de segurança em airbags e sistemas de estabilidade.

### Benefícios dos Acelerômetros
- **Precisão:** Fornece medições precisas de movimento e orientação.
- **Versatilidade:** Pode ser usado em várias aplicações, desde dispositivos móveis até equipamentos industriais.
- **Baixo Consumo de Energia:** Ideal para dispositivos móveis devido ao seu baixo consumo de energia.

### Acessando Acelerômetros com Flutter

1. Adicionar Dependências ao pubspec.yaml
```yaml
dependencies:
  flutter:
    sdk: flutter
  sensors_plus: ^2.0.0
```
2. Importar o Pacote sensors_plus
```dart
import 'package:flutter/material.dart';
import 'package:sensors_plus/sensors_plus.dart';
```
3. Código para Acessar Dados do Acelerômetro
```dart
import 'package:flutter/material.dart';
import 'package:sensors_plus/sensors_plus.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SensorScreen(),
    );
  }
}

class SensorScreen extends StatefulWidget {
  @override
  _SensorScreenState createState() => _SensorScreenState();
}

class _SensorScreenState extends State<SensorScreen> {
  double x = 0.0, y = 0.0, z = 0.0;

  @override
  void initState() {
    super.initState();
    accelerometerEvents.listen((AccelerometerEvent event) {
      setState(() {
        x = event.x;
        y = event.y;
        z = event.z;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dados do Acelerômetro'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Eixo X: $x'),
            Text('Eixo Y: $y'),
            Text('Eixo Z: $z'),
          ],
        ),
      ),
    );
  }
}
```
**Explicação:** Este código configura um listener para eventos do acelerômetro e atualiza a interface do usuário com os valores do eixo X, Y e Z em tempo real.

1. Código para Detecção de Movimento

```dart
import 'package:flutter/material.dart';
import 'package:sensors_plus/sensors_plus.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MotionDetectionScreen(),
    );
  }
}​

class MotionDetectionScreen extends StatefulWidget {
  @override
  _MotionDetectionScreenState createState() => _MotionDetectionScreenState();
}

class _MotionDetectionScreenState extends State<MotionDetectionScreen> {

  String motionStatus = "Nenhum movimento detectado";

  @override
  void initState() {
    super.initState();
    accelerometerEvents.listen((AccelerometerEvent event) {
      if (event.x > 1 || event.y > 1 || event.z > 1) {
        setState(() {
          motionStatus = "Movimento detectado!";
        });
      } else {
        setState(() {
          motionStatus = "Nenhum movimento detectado";
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Detecção de Movimento'),
      ),
      body: Center(
        child: Text(motionStatus),
      ),
    );
  }
}
```

**Explicação:** Este código detecta movimento baseado nos valores do acelerômetro e atualiza a interface do usuário para exibir “Movimento detectado!” quando um movimento significativo é detectado.​

1. Código para Controle de Jogo
```dart
import 'package:flutter/material.dart';
import 'package:sensors_plus/sensors_plus.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: GameControlScreen(),
    );
  }
}

class GameControlScreen extends StatefulWidget {
  @override
  _GameControlScreenState createState() => _GameControlScreenState();
}

class _GameControlScreenState extends State<GameControlScreen> {

  double x = 0.0, y = 0.0;

  @override
  void initState() {
    super.initState();
    accelerometerEvents.listen((AccelerometerEvent event) {
      setState(() {
        x = event.x;
        y = event.y;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Controle de Jogo por Inclinação'),
      ),

      body: Center(
        child: Transform.translate(
          offset: Offset(x * 10, y * 10),
          child: Container(
            width: 50,
            height: 50,
            color: Colors.blue,
          ),
        ),
      ),
    );
  }
}
```
**Explicação:** Este código usa os dados do acelerômetro para controlar a posição de um quadrado azul na tela, movendo-o conforme a inclinação do dispositivo.

1. Filtro de Média Móvel
```dart
import ‘package:flutter/material.dart’;
import ‘package:sensors_plus/sensors_plus.dart’;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FilteredSensorScreen(),
    );
  }
}

class FilteredSensorScreen extends StatefulWidget {
  @override
  _FilteredSensorScreenState createState() => _FilteredSensorScreenState();
}

class _FilteredSensorScreenState extends State<FilteredSensorScreen> {

  double x = 0.0, y = 0.0, z = 0.0;
  List<double> xValues = [], yValues = [], zValues = [];
  int windowSize = 10;

  @override
  void initState() {
    super.initState();
    accelerometerEvents.listen((AccelerometerEvent event) {

      xValues.add(event.x);
      yValues.add(event.y);
      zValues.add(event.z);

      if (xValues.length > windowSize) {
        xValues.removeAt(0);
        yValues.removeAt(0);
        zValues.removeAt(0);
      }
      setState(() {
        x = xValues.reduce((a, b) => a + b) / xValues.length;
        y = yValues.reduce((a, b) => a + b) / yValues.length;
        z = zValues.reduce((a, b) => a + b) / zValues.length;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dados Filtrados do Acelerômetro'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Eixo X: $x'),
            Text('Eixo Y: $y'),
            Text('Eixo Z: $z'),
          ],
        ),
      ),
    );
  }
}
```
**Explicação:** Este código aplica um filtro de média móvel aos dados do acelerômetro para suavizar as leituras, reduzindo o ruído e proporcionando valores mais estáveis.

Tratamento de Dados para Precisão

1. Tratamento de Dados para Precisão
```dart
import 'package:flutter/material.dart';
import 'package:sensors_plus/sensors_plus.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: PreciseSensorScreen(),
    );
  }
}

class PreciseSensorScreen extends StatefulWidget {
  @override
  _PreciseSensorScreenState createState() => _PreciseSensorScreenState();
}

class _PreciseSensorScreenState extends State<PreciseSensorScreen> {
  double x = 0.0, y = 0.0, z = 0.0;

  @override
  void initState() {
    super.initState();
    accelerometerEvents.listen((AccelerometerEvent event) {
      setState(() {
        x = _treatData(event.x);
        y = _treatData(event.y);
        z = _treatData(event.z);
      });
    });
  }

  double _treatData(double value) {
    // Aplicar tratamento de dados, por exemplo, arredondamento
    return double.parse(value.toStringAsFixed(2));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Tratamento de Dados do Acelerômetro'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Eixo X: $x'),
            Text('Eixo Y: $y'),
            Text('Eixo Z: $z'),
          ],
        ),
      ),
    );
  }
}
```
**Explicação:** Este código aplica um tratamento simples de arredondamento aos dados do acelerômetro para melhorar a precisão das leituras exibidas.

