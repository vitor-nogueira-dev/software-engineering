# Identificação de Code Smells

- Indicadores de problemas potenciais no código
- Não se trata de erros diretamente, mas sim de mais práticas que comprometem a manutenibilidade.
- Identificar e corrigir esses `code smells` logo nas fases iniciais do desenvolvimento é fundamental para evitar problemas estruturais e funcionais maiores no futuro.
- Além disso, essa prática contribui significativamente para a manutenção do código, tornando-o mais limpo, compreensível e sustentável ao longo do tempo, o que facilita atualizações e expansões sem comprometer a integridade do sistema.
- Identificar e corrigir esses `code smells` ajuda a evitar dificuldades de manutenção e reduz o risco de bugs em versões posteriores do software.

### Características de um Code Smell
- **Complexidade desnecessária**:
  - Código muito complexo, difícil de entender e manter.
  - Muitas condições aninhadas, loops complexos, etc.
- **Repetição excessiva**:
  - Código repetido em várias partes do sistema.
  - Código duplicado, sem necessidade.
- **Dificuldade de leitura**: 
  - Código difícil de entender, comentários insuficientes.
  - Nomes de variáveis e funções sem significado.


### Principais tipos de Code Smells

1. **Método grande (Large Method)**:
  - Um método que faz muitas coisas ao mesmo tempo, sendo difícil de entender, manter ou testar.
  - Exemplo: Um método que abre uma conexão com o banco de dados, processa as informações e gera um relatório.
  - Solução: Dividir o método em métodos menores, cada um com uma responsabilidade específica.

2. **Código duplicado (Duplicate Code)**:
  - Repetição de trechos de código em diferentes partes do sistema.
  - Exemplo: Um trecho de código que valida um formulário de cadastro de usuário é repetido em várias páginas do sistema.
  - Solução: Criar uma função ou método que encapsule o código duplicado e chamar essa função em vez de repetir o código.

3. **Classe grande (Large Class)**:
  - Uma classe com muitos atributos e métodos, tornando-a difícil de entender e manter.
  - Exemplo: Uma classe que representa um pedido de compra com muitos atributos e métodos relacionados.
  - Solução: Dividir a classe em classes menores, cada uma com uma responsabilidade específica.

### Impacto de code smells na qualidade
- Tornam o código mais difícil de entender, resultando em um maior esforço e tempo para corrigir erros.
- **Métrica de manutenção**: complexidade ciclomática.
- Devido a complexidade adicional que code smells introduzem, os desenvolvedores precisam gastar mais esforço na leitura e interpretação do código antes de implementar mudanças.