### Módulos e matrizes

Essa Classe Java é um exemplo de como usar módulos para realizar operações matemáticas com dois números inteiros.
- Os módulos `soma`, `produto`, `diferenca` e `divisao` são utilizados para realizar as operações matemáticas.

```java
import javax.swing.*;

public class ModulosMatrizes {
    public static void main(String[] args) {
        int num1, num2;
        String msg="";

        num1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro número: "));
        num2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo número: "));

        msg += "Soma: " + soma(num1, num2) + "\n";
        msg += "Produto: " + produto(num1, num2) + "\n";
        msg += "Diferença: " + diferenca(num1, num2) + "\n";
        msg += "Divisão: " + divisao(num1, num2) + "\n";

        JOptionPane.showMessageDialog(null, msg);

        System.exit(0);
    }

    public static int soma(int num1, int num2) {
        return num1 + num2;
    }

    public static int produto(int num1, int num2) {
        return num1 * num2;
    }

    public static int diferenca(int num1, int num2) {
        return num1 - num2;
    }

    public static double divisao(int num1, int num2) {
        return (double) num1 / num2;
    }
}
```

Exercício:
- Declara variáveis: vetor de inteiros
- Recebe números inteiros num vetor de 5 posições
- Calcula a somatória e a produtória desses números com um procedimento e uma função, ambos sem parâmetros
- Mostra as informações

```java
import javax.swing.*;

public class ModulosMatrizes {
    public static void main(String[] args) {
        int[] vetor = new int[5];
        String msg="";

        for(int i=0; i<5; i++) {
            vetor[i] = Integer.parseInt(JOptionPane.showInputDialog("Digite o número " + (i+1) + ": "));
        }

        msg += "Somatória: " + somatoria(vetor) + "\n";
        msg += "Produtória: " + produtoria(vetor) + "\n";

        JOptionPane.showMessageDialog(null, msg);

        System.exit(0);
    }

    public static int somatoria(int[] vetor) {
        int soma = 0;
        for(int i=0; i<vetor.length; i++) {
            soma += vetor[i];
        }
        return soma;
    }

    public static int produtoria(int[] vetor) {
        int produto = 1;
        for(int i=0; i<vetor.length; i++) {
            produto *= vetor[i];
        }
        return produto;
    }
}
```