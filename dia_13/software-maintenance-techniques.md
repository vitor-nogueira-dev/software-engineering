# Técnicas de Manutenção de Software

## Introdução
- É o processo de modificar, adaptar e atualizar um software após suas entrega inicial:
  - Correção de erros
  - Evolução
  - Desempenho

  - **Correção de Erros:**
    - Identificar e corrigir erros é fundamental para garantir que o software funcione como esperado.
    - A correção de bugs melhora a segurança do sistema, prevenindo vulnerabilidades que poderiam ser exploradas por ataques maliciosos.
    - Esse processo contínuo ajuda a manter a confiança do usuário, mostrando que a equipe de desenvolvimento está comprometida com a qualidade do software.
  - **Evolução:**
    - A evolução do software é necessária para atender às necessidades dos usuários e às mudanças no ambiente de negócios.
    - Esse processo pode incluir a adição de novos recursos, melhorias de desempenho, integração com outros sistemas e adaptação às mudanças regulatórias.
    - Ao evoluir, o software mantém sua relevância e valor para os usuários.
  - **Desempenho:**
    - Otimizar o desempenho garante que o software funcione de maneira ágil, proporcionando uma experiência de usuário mais satisfatória.
    - Melhorar a eficiência do software pode reduzir custos operacionais e aumentar a produtividade.
    - A manutenção de desempenho é essencial em sistemas de grande escala, onde pequenos ajustes podem resultar em ganhos significativos de velocidade e capacidade.

## Manutenção corretiva
- Resolver bugs, erros de lógica e outros problemas identificados após a entrega inicial.

- Exemplo: Correção de um erro que causa o travamento do sistema.
  - Ao corrigir um travamebto, você garante que o sistema continue funcionando de maneira confiável.
  - Isso é essencial para evitar interrupções no trabalho dos usuários e manter a confiança do usuário.

## Manutenção evolutiva
- Adaptar o software para atender a novos requisitos e necessidades dos usuários.

- Exemplo: Adição de um novo recurso de relatório.
  - Ao adicionar um novo recurso, você melhora a funcionalidade do software e atende às necessidades dos usuários.
  - Isso pode ajudar a aumentar a satisfação do cliente e a competitividade do produto.

## Manutenção preventiva
- Prever e evitar problemas antes que ocorram.

- Exemplo: Reestruturação de código para evitar falhas futuras.
  - Ao reestruturar o código, você reduz a probabilidade de falhas futuras, garantindo que o software funcione de maneira confiável.
  - Isso pode economizar tempo e recursos, evitando problemas antes que eles ocorram.

## Manutenção adaptativa
- Adaptar o software a mudanças no ambiente, como atualizações de hardware ou software.

- Exemplo: Atualização de uma biblioteca de terceiros para garantir compatibilidade.
  - Ao atualizar uma biblioteca de terceiros, você garante que o software continue funcionando corretamente em um ambiente em constante mudança.
  - Isso é essencial para garantir a estabilidade e a segurança do sistema.

## Estratégias de manutenção adaptativa
- Verificar bibliotecas, frameworks e APIs que podem estar desatualizados.
  - Realizar atualizações incrementais.
  - Testar exaustivamente o software após as atualizações.
  - Aumento da vida útil do software.

  - **Realizar atualizações incrementais:**
    - Realizar atualizações incrementais é uma estratégia eficaz para manter o software atualizado e seguro.
    - Esse método reduz o risco de grandes falhas, pois permite identificar e corrigir problemas específicos em cada etapa, antes de seguir para a próxima atualização.
    - Além disso, as atualizações incrementais são mais fáceis de testar e validar, o que ajuda a garantir que o software continue funcionando corretamente após cada atualização.
  - **Testar exaustivamente o software após as atualizações:**
    - Testar exaustivamente o software após as atualizações é uma prática essencial para garantir que o software continue funcionando corretamente após as atualizações.
    - Isso inclui testes unitários, testes de integração e testes de sistema para verificar se o software continua funcionando conforme o esperado.
    - A testagem é essencial para assegurar que a atualização não cause impactos negativos na funcionalidade e na experiência do usuário, mantendo a qualidade do software.
  - **Aumento da vida útil do software:**
    - Ao manter as dependências atualizadas, você aumenta a vida útil do software, garantindo que ele continue funcionando corretamente e oferecendo suporte aos usuários.
    - Dependências atualizadas também ajudam a evitar vulnerabilidades de segurança, garantindo que o software seja mais seguro e protegido contra ameaças cibernéticas.
    - Com isso, a empresa ou time de desenvolvimento evita a obsolescência prematura do software, mantendo sua relevância e valor para os usuários.

### Técnicas de manutenção evolutiva

1. Refatoração de Código:
  - Reescrever partes do código para torná-lo mais legível, eficiente e fácil de manter.
  - Reduzir a complexidade do código.
  - Facilitar futuras expansões.
  - Reduz a chance de erros.
2. Modularização:
  - Dividir o sistema em módulos independentes para facilistar a adição ou modificação de funcionalidades específicas.
  - Microserviçoes independentes.
  - Maior flexibilidade e escalabilidade.
  - Permite atualizações isolados sem impacto no sistema inteiro.
3. CI e CD
  - Automatizar o processo de integração de novas funcionalidades e entrega contínua ao código-fonte.
  - Automatizr a entrega de novas versões do software.
  - Garantia de que o software seja facilmente atualizado.
  - Acelera a implementação de novas funcionalidades.