### Exceções### Exceções Direcionadas e Personalizadas

#### Introdução
- **Exceções Direcionadas**: Tratamento de exceções geradas ao chamar métodos nas APIs Java.
- **Exceções Personalizadas**: Criação de exceções específicas para representar erros únicos no aplicativo, proporcionando um significado distinto a problemas que podem ocorrer no código.

#### Criação de Exceções Personalizadas
- **Definição da Classe de Exceção**:
  - Crie uma subclasse de uma classe de exceção existente.
  - Exemplo: `SaldoContaException` para representar erros relacionados ao saldo da conta bancária.

```java
public class SaldoContaException extends Exception {
    private float saldoConta;

    public SaldoContaException(float f) {
        super();
        this.saldoConta = f;
    }

    public SaldoContaException(String message) {
        super(message);
    }

    public float getSaldoConta() {
        return saldoConta;
    }
}