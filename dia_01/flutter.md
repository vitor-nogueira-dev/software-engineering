# Flutter

## Estrutura de um projeto Flutter

- **`pubspec.yaml`**: Arquivo de configuração do projeto, onde são definidas as dependências (pacotes externos), informações do projeto (nome, versão, descrição) e assets (imagens, fontes, etc.).
- **`lib/`**: Diretório principal onde ficam os arquivos de código-fonte do projeto, geralmente escritos em Dart. Aqui você organiza suas telas, widgets, modelos e lógica.
- **`main.dart`**: Arquivo principal do projeto, ponto de entrada do aplicativo. Contém a função `main()` que inicializa o app com o método `runApp()`.
- **`android/` e `ios/`**: Diretórios com código nativo para cada plataforma. Geralmente só mexemos aqui para configurações específicas (ex.: permissões, ícones).
- **`test/`**: Diretório para testes unitários e de widgets.
- **`assets/`**: Diretório opcional para armazenar recursos como imagens, fontes ou arquivos JSON (deve ser declarado no `pubspec.yaml`).

# Widget e Layouts Básicos

## Widgets Fundamentais

- **MaterialApp**: Widget raiz que define a estrutura de um app com Material Design, incluindo temas, navegação e configurações globais.
- **Scaffold**: Estrutura básica de uma tela Material Design, com suporte a AppBar, body, FloatingActionButton, Drawer, etc.
- **AppBar**: Barra superior com título, ações e opções de navegação.
- **Text**: Exibe texto simples ou estilizado (com `TextStyle` para fontes, cores, etc.).
- **Container**: Contêiner versátil para agrupar widgets, com propriedades como margens, padding, cor e bordas.

## Layouts

- **Column**: Organiza widgets em uma coluna vertical.
- **Row**: Organiza widgets em uma linha horizontal.
- **ListView**: Lista rolável de widgets, ideal para muitos itens (pode ser vertical ou horizontal).
- **GridView**: Grade de widgets, útil para layouts em mosaico (ex.: galeria de fotos).
- **Stack**: Empilha widgets, permitindo sobreposição (ex.: texto sobre imagem).

## Widgets de Controle de Espaço

- **Expanded**: Expande um widget para ocupar o espaço disponível em uma `Row` ou `Column`.
- **Spacer**: Insere espaço flexível entre widgets em uma `Row` ou `Column`.
- **Padding**: Adiciona preenchimento ao redor de um widget.
- **Center**: Centraliza um widget filho no espaço disponível.
- **Align**: Alinha um widget em posições específicas (ex.: `topLeft`, `bottomRight`).
- **AspectRatio**: Mantém uma proporção fixa (ex.: 16:9) para um widget.
- **FractionallySizedBox**: Define o tamanho de um widget como uma fração do espaço pai.

## Interatividade

- **ElevatedButton**: Botão elevado com estilo Material Design.
- **TextField**: Campo de entrada de texto, com suporte a validação e controladores.
- **InkWell**: Adiciona efeito de toque (ripple) a qualquer widget.
- **GestureDetector**: Detecta gestos como toques, arrastar, zoom, etc.

## Recursos Visuais

- **Image**: Exibe imagens (de assets ou rede com `Image.network`).
- **Icon**: Exibe ícones do Material Design ou personalizados.

## Navegação

- **Navigator**: Gerencia a pilha de telas do app (`push`/`pop`).
- **MaterialPageRoute**: Implementa transições de tela com animação Material Design.
- **PageRoute**: Base para criar rotas personalizadas.

---

# Conceitos Adicionais

## Stateless vs Stateful Widgets

- **StatelessWidget**: Widgets imutáveis, usados para conteúdo estático (ex.: texto fixo, botões simples).
- **StatefulWidget**: Widgets dinâmicos que mudam de estado (ex.: contadores, formulários). Requerem uma classe `State` associada.

### Exemplo de Stateful Widget

```dart
class Contador extends StatefulWidget {
  const Contador({super.key});

  @override
  State<Contador> createState() => _ContadorState();
}

class _ContadorState extends State<Contador> {
  int _contador = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Contador: $_contador'),
        ElevatedButton(
          onPressed: () => setState(() => _contador++),
          child: const Text('Incrementar'),
        ),
      ],
    );
  }
}
```