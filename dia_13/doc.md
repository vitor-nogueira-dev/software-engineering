### A linguagem Java

- **Linguagem de programação:** que tem sua própria estrutura, regras de sintaxe e paradigma de programação.
- Defiva da linguagem C, portanto suas regras de sintaze assemelham-se muito com a linguagem C.
- Ex: Os blocos de códigos são modularizados em métodos e delimitados por chaves ({ e }) e variáveis são declaras antes que sejam utilizadas. 

### O compilador Java

- Programa Java (código fonte em arquivos .java). 
- O compilador transforma os arquivos .java em arquivos .class.
- Bytecode é um conjunto de instruções que são executadas em uma máquina virtual Java (JVM).
- No tempo de execução, a JVM lê e interpreta arquivos .class e executa as intruções do programa.
- A JVM interpreta o bytecode e executa o programa.
- A JVM é o núcleo do princípi "gravação única, execução em qualquer local" da linguagem java.

Ex: (HelloWorld.java)
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```