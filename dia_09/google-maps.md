# Google Maps

## O que é o Google Maps?
- Google Maps é um serviço de mapeamento desenvolvido pela Google que oferece imagens de satélite, mapas de ruas, vistas panorâmicas de ruas e condições de trânsito em tempo real.

## Principais Funcionalidades do Google Maps
- Mapas Interativos: Permite a visualização e interação com mapas.
- Rotas e Navegação: Fornece direções e rotas entre diferentes locais.
- Visualização de Tráfego: Mostra condições de trânsito em tempo real.
- Pontos de Interesse: Exibe locais de interesse como restaurantes, hospitais, etc.

## Benefícios de Integrar Google Maps no Flutter
- Interatividade: Melhora a experiência do usuário com mapas interativos.
- Informações em Tempo Real: Acesso a dados atualizados de tráfego e locais.
- Funcionalidade Ampla: Possibilidade de implementar navegação, rotas e muito mais.

Passos para Exibir um Mapa

1. Adicionar Dependências ao pubspec.yaml
```yaml
dependencies:
  flutter:
    sdk: flutter
  google_maps_flutter: ^2.0.6
```

2. Obter Chaves de API do Google Maps
- Acesse o Google Cloud Console.
- Crie um projeto e ative a API do Google Maps.
- Gere uma chave de API.

3. Configurar o AndroidManifest.xml
```xml
<manifest xmlns:android=“http://schemas.android.com/apk/res/android”
    package=“com.example.google_maps_app”>
    <application>
        <meta-data
            android:name=“com.google.android.geo.API_KEY”
            android:value=“YOUR_API_KEY”/>
    </application>

</manifest>
```

4. Configurar o Info.plist para iOS
```xml
<key>GMSApiKey</key>
<string>YOUR_API_KEY</string>
```

5. Código para Exibir o Mapa
```dart
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MapScreen(),
    );
  }
}

class MapScreen extends StatefulWidget {
  @override
  _MapScreenState createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  late GoogleMapController mapController;
  final LatLng _center = const LatLng(45.521563, -122.677433);
  void _onMapCreated(GoogleMapController controller) {
    mapController = controller;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(‘Google Maps no Flutter’),
        backgroundColor: Colors.green[700],
      ),
      body: GoogleMap(
        onMapCreated: _onMapCreated,
        initialCameraPosition: CameraPosition(
          target: _center,
          zoom: 11.0,
        ),
      ),
    );
  }
}
```
**Nota**: Este código configura um mapa básico usando o Google Maps no Flutter, exibindo um mapa centrado em uma localização específica.

## Marcadores e Animações no Mapa

1. Adicionar um Marcador Simples
```dart
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MapScreen(),
    );
  }
}

class MapScreen extends StatefulWidget {
  @override
  _MapScreenState createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  late GoogleMapController mapController;
  final LatLng _center = const LatLng(45.521563, -122.677433);
  final Set<Marker> _markers = {};

  void _onMapCreated(GoogleMapController controller) {
    mapController = controller;
    _markers.add(
      Marker(
        markerId: MarkerId('id-1'),
        position: _center,
        infoWindow: InfoWindow(
          title: 'Marcador Inicial',
          snippet: 'Descrição do marcador',
        ),
        icon: BitmapDescriptor.defaultMarker,
      ),
    );
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Google Maps no Flutter'),
        backgroundColor: Colors.green[700],
      ),
      body: GoogleMap(
        onMapCreated: _onMapCreated,
        initialCameraPosition: CameraPosition(
          target: _center,
          zoom: 11.0,
        ),
        markers: _markers,
      ),
    );
  }
}
```
**Nota**: Este código adiciona um marcador ao mapa na posição especificada, com uma janela de informações.

2. Animação para Nova Posição
```dart
void _moveCamera() {
  mapController.animateCamera(
    CameraUpdate.newCameraPosition(
      CameraPosition(
        target: LatLng(37.7749, -122.4194),
        zoom: 14.0,
        bearing: 45.0,
        tilt: 45.0,
      ),
    ),
  );
}

@override
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(
      title: Text('Google Maps no Flutter'),
      backgroundColor: Colors.green[700],
    ),
    body: GoogleMap(
      onMapCreated: _onMapCreated,
      initialCameraPosition: CameraPosition(
        target: _center,
        zoom: 11.0,
      ),
      markers: _markers,
    ),
    floatingActionButton: FloatingActionButton(
      onPressed: _moveCamera,
      tooltip: 'Mover Câmera',
      child: Icon(Icons.camera_alt),
    ),
  );
}
```
**Nota**: Este código adiciona um botão flutuante que, ao ser pressionado, anima a câmera para uma nova posição com uma nova configuração de zoom, inclinação e direção.

## Geolocalização e Serviços de Localização

- Obtendo a Localização Atual

1. Adicionar Dependências ao pubspec.yaml
```yaml
dependencies:
  flutter:
    sdk: flutter
  google_maps_flutter: ^2.0.6
  geolocator: ^7.7.0
```
**Nota**: A biblioteca `geolocator` é usada para obter a localização atual do dispositivo.

2. Solicitar Permissões de Localização
- AndroidManifest.xml
```xml
<uses-permission android:name=“android.permission.ACCESS_FINE_LOCATION” />
<uses-permission android:name=“android.permission.ACCESS_COARSE_LOCATION” />
```
- Info.plist
```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>Precisamos da sua localização para mostrar onde você está no mapa.</string>
```

3. Código para Obter a Localização Atual
```dart
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MapScreen(),
    );
  }
}

class MapScreen extends StatefulWidget {
  @override
  _MapScreenState createState() => _MapScreenState();

}

class _MapScreenState extends State<MapScreen> {
  late GoogleMapController mapController;
  Position? _currentPosition;
  final LatLng _initialPosition = const LatLng(45.521563, -122.677433);
  final Set<Marker> _markers = {};
  void _onMapCreated(GoogleMapController controller) {
    mapController = controller;
    _getCurrentLocation();
  }

  _getCurrentLocation() async {
    Position position = await Geolocator.getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
    setState(() {
      _currentPosition = position;
      mapController.animateCamera(
        CameraUpdate.newLatLng(LatLng(position.latitude, position.longitude)),
      );

      _markers.add(
        Marker(
          markerId: MarkerId('currentLocation'),
          position: LatLng(position.latitude, position.longitude),
          infoWindow: InfoWindow(title: 'Você está aqui'),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Google Maps no Flutter'),
        backgroundColor: Colors.green[700],
      ),
      body: GoogleMap(
        onMapCreated: _onMapCreated,
        initialCameraPosition: CameraPosition(
          target: _initialPosition,
          zoom: 11.0,
        ),
        markers: _markers,
      ),
    );
  }
}
```
**Nota**: Este código obtém a localização atual do dispositivo e atualiza o mapa para exibir a posição do usuário com um marcador.