# Exceções em Flutter
- O tratamento de exceções é uma parte fundamental do desenvolvimento de aplicações robustas. Em Flutter, a detecção e o gerenciamento de erros permitem criar experiências de usuário mais suaves e confiáveis.

## O que são Exceções?
Exceções são eventos inesperados que ocorrem durante a execução de um programa, resultando em interrupções ou comportamento inesperado. Em Flutter, elas podem ser causadas por diversos fatores, como falhas de rede, entradas inválidas ou acessos a recursos inexistentes.

### Tipos de Exceções Comuns em Flutter

- **FormatException**:
Ocorre quando o formato dos dados fornecidos não é válido.
Exemplo: Ao tentar converter uma string inválida em um número.
- **TimeoutException**:
Lançada quando uma operação leva mais tempo do que o esperado.
Exemplo: Quando uma solicitação de rede não retorna em um tempo razoável.
- **SocketException**:
Relacionada a problemas de conexão de rede.
Exemplo: Quando o dispositivo não consegue se conectar à internet.
- **AssertionError**:
Aparece quando uma afirmação (assert) falha durante a execução em debug.
Exemplo: Quando uma condição esperada não é atendida.
- **FlutterError**:
Específica do Flutter, ocorre em situações como erros na árvore de widgets.
Exemplo: Quando um widget não pode ser renderizado corretamente.

## Tratamento de Exceções
O Flutter oferece ferramentas robustas para tratar exceções e minimizar o impacto de erros no app. Alguns métodos comuns incluem:

- **Try-Catch**:
Usado para capturar e lidar com exceções específicas ou genéricas.
```dart
try {
  int result = int.parse('abc');
} catch (e) {
  print('Erro: $e');
}
```
- **Finally**:
Adiciona um bloco para executar código independentemente de a exceção ter ocorrido ou não.
```dart
try {
  int result = int.parse('abc');
} catch (e) {
  print('Erro: $e');
} finally {
  print('Execução concluída');
}
```

- **Async e Await com Tratamento**:
Exceções em operações assíncronas são tratadas usando os mesmos blocos try-catch.
- **ErrorWidget.builder**:
Personaliza a interface exibida em caso de erro na árvore de widgets.
```dart
ErrorWidget.builder = (FlutterErrorDetails details) {
return Center(child: Text('Ocorreu um erro!'));
};
```
## ​Boas Práticas no Tratamento de Exceções
- **Evite Silenciar Erros**: Sempre registre ou notifique erros inesperados para investigação posterior.
- **Use Logs**: Ferramentas como Firebase Crashlytics ajudam a monitorar exceções em produção.
- **Feedback ao Usuário**: Informe o usuário quando um erro ocorrer e, se possível, ofereça soluções.
- **Validações Antecipadas**: Prevenir erros com validações adequadas antes de executar operações.