### Classe Java e Interface com Usuário

Essa Classe Java é um exemplo de como criar uma interface com o usuário. Através da classe `JOptionPane` é possível criar uma janela de diálogo para interagir com o usuário.
- O método `showInputDialog` é utilizado para exibir uma caixa de diálogo para entrada de dados.
- O método `showMessageDialog` é utilizado para exibir uma caixa de diálogo para exibir uma mensagem.
- O método `parseInt` é utilizado para converter uma string em um número inteiro.
- O método `pow` da classe `Math` é utilizado para calcular a potência de um número.

```java
import javax.swing.*;

public class Calculadora {
    public static void main(String[] args) {
        int num1, num2, quociente;
        double potencia;
        String msg="";

        num1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro número: "));
        num2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo número: "));

        quociente = (int)num1 / (int)num2;
        potencia = Math.pow(num1, num2);

        msg += "Quociente da divisão de: " + num1 + " por " + num2 + " é: " + quociente + "\n";
        msg += "Potência de: " + num1 + " elevado a " + num2 + " é: " + potencia + "\n";
        JOptionPane.showMessageDialog(null, msg);

        System.exit(0);
    }
}
```
