# API G
- As APIs do Google fornecem uma ampla gama de serviços, desde mapas e autenticação até armazenamento em nuvem e processamento de dados.

## Visão Geral das APIs do Google

### O que são APIs?
- API (Application Programming Interface) é um conjunto de definições e protocolos usados para desenvolver e integrar o software de aplicativos. As APIs permitem que diferentes sistemas se comuniquem entre si, facilitando a troca de dados e a funcionalidade.

## Principais APIs do Google
1. **Google Maps API:** Utilizada para incorporar mapas interativos, rotas e locais em aplicativos.
2. **Google Drive API:** Permite o gerenciamento de arquivos e armazenamento na nuvem.
3. **Google Calendar API:** Utilizada para acessar e gerenciar eventos de calendário.
4. **Google Sheets API:** Permite a leitura e escrita de dados em planilhas Google.

## Benefícios das APIs do Google
- **Escalabilidade:** As APIs do Google são projetadas para lidar com grandes volumes de dados e tráfego.  
- **Segurança:** Integração com autenticação segura, como OAuth 2.0.  
- **Funcionalidade Ampla:** Acesso a uma vasta gama de serviços e ferramentas.

## Configurando e Autenticando APIs do Google
Passos para Configurar e Autenticar APIs

1. **Criar um Projeto no Google Cloud Console**
- Acesse o Google Cloud Console.
- Crie um novo projeto ou use um existente.

2. **Habilitar a API Desejada**
- No painel do Google Cloud Console, navegue até a biblioteca de APIs.
- Pesquise e habilite a API que deseja usar (por exemplo, Google Drive API).

3. **Obter Credenciais de API**
- Vá para “Credenciais” no menu de navegação.
- Clique em “Criar credenciais” e selecione “ID do Cliente OAuth 2.0”.
- Configure a tela de consentimento OAuth.
- Baixe o arquivo JSON com as credenciais.

4. **Adicionar Dependências ao pubspec.yaml**
```yaml
dependencies:
  flutter:
    sdk: flutter
  googleapis: ^latest_version
  googleapis_auth: ^latest_version
  http: ^0.13.3
```

5. **Configurar Autenticação no Flutter**
```dart
import 'package:flutter/material.dart';
import 'package:googleapis/drive/v3.dart' as drive;
import 'package:googleapis_auth/auth_io.dart';
import 'package:http/http.dart' as http;

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
  final _clientId = ClientId(‘YOUR_CLIENT_ID’, ‘YOUR_CLIENT_SECRET’);
  final _scopes = [drive.DriveApi.driveFileScope];

  Future<void> _authenticate() async {
    await clientViaUserConsent(_clientId, _scopes, (url) {
      // Abra o URL em um navegador para o usuário fazer login
      print(‘Por favor, faça login em: $url’);
    }).then((authClient) {

      // Use o authClient para acessar a API do Google
      final driveApi = drive.DriveApi(authClient);
      _listFiles(driveApi);
    }).catchError((e) {
      print(‘Erro na autenticação: $e’);
    });
  }

  Future<void> _listFiles(drive.DriveApi driveApi) async {
    final fileList = await driveApi.files.list();
    fileList.files?.forEach((file) {
      print(‘Encontrado arquivo: ${file.name}’);
    });
  }
  @override

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(‘Autenticação Google API’),
      ),

      body: Center(
        child: ElevatedButton(
          onPressed: _authenticate,
          child: Text(‘Autenticar com Google’),
        ),
      ),
    );
  }
}
```