### Estrutura de Controle no Java
Essa Classe Java é um exemplo de como criar uma interface com o usuário. Através da classe `JOptionPane` é possível criar uma janela de diálogo para interagir com o usuário.
- Temos a estrutura de controle `switch` que permite a execução de um bloco de código de acordo com o valor de uma variável.
- O método `charAt` é utilizado para obter um caractere de uma string.

```java
import javax.swing.*;

public class EstruturaControle {
    public static void main(String[] args) {
        int num1, num2, produto;
        char opcao;
        String msg="";

        num1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro número: "));
        num2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo número: "));
        opcao = JOptionPane.showInputDialog("Digite a opção: \n1 - Produto dos números\n2 - Produto do primeiro número elevado ao segundo").charAt(0);

        switch(opt) {
            case '1':
                if(num1 > 0 && num2 > 0) {
                    produto = num1 * num2;
                    msg += "Produto dos números: " + num1 + " e " + num2 + " é: " + produto + "\n";
                } else {
                    msg += "Os números não são positivos\n";
                }
                break;
            case '2':
                if(num1 > 0) {
                    produto = num1;
                    for(int i=1; i<=num2; i++) {
                        produto *= num1;
                    }
                    msg += "Produto do número: " + num1 + " elevado a " + num2 + " é: " + produto + "\n";
                } else {
                    msg += "O primeiro número não é positivo\n";
                }
                break;
            default:
                msg += "Opção inválida\n";JOptionPane.showMessageDialog(null, "Opção inválida, tente novamente");
        }

        JOptionPane.showMessageDialog(null, msg);

        System.exit(0);
    }
}
```

