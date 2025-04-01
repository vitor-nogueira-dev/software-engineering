# NFC (Near Field Communication)

## O que é NFC?
- Tecnologia de comunicação sem fio de curto alcance.
- Permite a troca de dados entre dispositivos próximos (geralmente até 4 cm).
- Utiliza campos eletromagnéticos para transmitir dados.

## Como funciona o NFC?
- Por meio de indução eletromagnética entre duas antenas (emissor e receptor).
- Modo ativo
- Modo passivo

## Aplicações comuns do NFC
- Pagamentos móveis (ex: Apple Pay, Google Pay)
- Autenticação de dispositivos
- Compartilhamento de dados (ex: contatos, fotos)

## Benefícios do NFC
- Conexão rápida e fácil entre dispositivos.
- Conveniente para pagamentos e transferências de dados.
- Seguro, pois requer proximidade física.
- Versátil, com várias aplicações em diferentes setores.

## Como configurar o NFC no Flutter
1. Adicionar dependências ao `pubspec.yaml`:
```yaml
dependencies:
  nfc_manager: latest_version
```

2. Configurar AndroidManifest.xml:
- Adicione as permissões necessárias e configura o filtro de intenção para NFC.
```xml
<uses-permission android:name="android.permission.NFC" />
<uses-feature android:name="android.hardware.nfc" android:required="true" />
```

3. Criar o arquivo `res/xml/nfc_tech_filter.xml`:
- Este arquivo define os tipos de tags NFC que se aplicativo pode ler
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <tech-list>
        <tech>android.nfc.tech.Ndef</tech>
        <tech>android.nfc.tech.NdefFormatable</tech>
    </tech-list>
</resources>
```

4. Inicializar o NFC no código:
```dart
import 'package:nfc_manager/nfc_manager.dart';
import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NFC Example',
      home: Scaffold(
        appBar: AppBar(
          title: Text('NFC Example'),
        ),
        body: NFCWidget(),
      ),
    );
  }
}
class NFCWidget extends StatefulWidget {
  @override
  _NFCWidgetState createState() => _NFCWidgetState();
}

class _NFCWidgetState extends State<NFCWidget> {
  String _nfcData = 'Aguardando NFC...';

  @override
  void initState() {
    super.initState();
    _initNFC();
  }

  void _initNFC() async {
    NfcManager.instance.startSession(
      onDiscovered: (NfcTag tag) async {
        setState(() {
          _nfcData = tag.data.toString();
        });
        await NfcManager.instance.stopSession();
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(_nfcData),
    );
  }
}
```

5. Escrever o código para ler e escrever tags NFC:
```dart
import 'package:nfc_manager/nfc_manager.dart';
import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'NFC Example',
      home: Scaffold(
        appBar: AppBar(
          title: Text('NFC Example'),
        ),
        body: NFCWidget(),
      ),
    );
  }
}

class NFCWidget extends StatefulWidget {
  @override
  _NFCWidgetState createState() => _NFCWidgetState();
}

class _NFCWidgetState extends State<NFCWidget> {
  String _nfcData = 'Aguardando NFC...';

  @override
  void initState() {
    super.initState();
    _initNFC();
  }

  void _initNFC() async {
    NfcManager.instance.startSession(
      onDiscovered: (NfcTag tag) async {
        setState(() {
          _nfcData = tag.data.toString();
        });
        await NfcManager.instance.stopSession();
      },
    );
  }
  void _writeNFC() async {
    final NdefMessage message = NdefMessage([
      NdefRecord.createText('Hello, NFC!'),
    ]);

    await NfcManager.instance.writeNdef(message);
  }
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(_nfcData),
          SizedBox(height: 20),
          ElevatedButton(
            onPressed: _writeNFC,
            child: Text('Escrever NFC'),
          ),
        ],
      ),
    );
  }
}
```
