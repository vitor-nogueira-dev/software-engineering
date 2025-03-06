# Planejamento de Testes

### Definição
- Planejamento de testes é o processo de definir, organizar e coordenar as atividades de teste de software. O objetivo é garantir que os testes sejam realizados de forma eficiente e eficaz, garantindo a qualidade do software.
- Ele começa com a definição de uma estratégia de teste, que inclui a escolha dos tipos de testes (funcionais, de desempenho, de segurança etc.) e a metodologia (manual ou automatizada).

### Principais componentes
- Planejamento de testes
  - Escopo de testes
  - Estratégia de teste
  - Cronograma de testes

* Etapas:
  - **Análise de requisitos**:
    - Consiste em examinar os requisitos do software para entender o que deve ser testado
    - Essa etapa ajuda a identificar quais funcionalidades são essenciais, quais cenários precisam de cobertura e se há requisitos específicos de desempenho ou segurança.
  - **Definição de objetivos**:
    - Nesta fase, os objetivos de teste são estabelecidos.
    - Isso inclui decidir o que se pretende alcançar com os testes, como identificar falhas, verificar a conformidade com os requisitos e assegurar a qualidade do software antes do lançamento.
  - **Identificação de recursos**:
    - Nesta etapa, os recursos necessários para os testes são identificados.
    - Isso inclui pessoas, ferramentas, ambientes de teste e dados de teste.
  - **Riscos e mitigações**:
    - Avalia os possíveis riscos que podem impactar o processo de teste, como falta de recursos, limitações técnicas ou prazos apertados.
    - Para cada risco identificado, são definidas estratégias de mitigação para miniizar seus efeitos e garantir a continuidade do processo.
  - **Critérios de aceitação**:
    - Definem os critérios que devem ser atendidos para considerar que os testes foram bem-sucedidos.
    - Esses critérios são usados para validar se o software atende aos requisitos de qualidade, desempenho e segurança antes de ser lançado.

### Benefícios
- Detecção precoce de problemas
- Eficiência no uso de recursos
- Redução de custos 
- Garantia de qualidade

## Tipos de testes de software

### Testes funcionais:
- Verificam se o software atende aos requisitos funcionais especificados.
- Exemplos: 
  - **Testes de unidade**:
    - Foca em verificar cada componente ou módulo individualmente.
    - Garante que cada unidade de código funcione conforme o esperado quando integrada a outras partes do sistema.
    - É realizado frequentemente pelos desenvolvedores durante a fase de desenvolvimento.
  - **Testes de integração**:
    - Avalia a interação entre diferentes módulos ou componentes do software.
    - Verifica se as partes integradas funcionam corretamente quando combinadas.
    - Ajuda a identificar problemas de comunicação entre módulos.
  - **Testes de sistema**:
    - Testa o sistema como um todo para garantir que todos os componentes funcionam em conjunto 
    - Confirma que o software atende aos requisitos funcionais e de desempenho.
    - É geralmente executado após todos os módulos estare integrados.

### Testes não funcionais:
- Avalia atributos que não estão relacionados diretamente aos requisitos funcionais, como desempenho, segurança, usabilidade e compatibilidade.
- Exemplos:
  - **Testes de desempenho**:
    - Verifica como o sistema se comporta em situações de alto tráfego e estresse.
    - É essencial para garantir uma experiência de usuário satisfatória em condições variadas.
  - **Testes de segurança**:
    - Examina a resistência do sistema contra ameaças e tentativas de acesso não autorizado.
    - Verifica a eficácia das medidas de proteção de dados e privacidade.
    - Ajuda a identificar e corrigir vulneralibidade antes que possam ser exploradas.
  - **Testes de usabilidade**:
    - Mede a facilidade de uso do sistema e sua intuitividade para o usuário final.
    - Avalia aspectos como a simplicidade da interface e a experiência do usuário.
    - É importante para garantir que o sistema seja acessível e agradável de usar.

### Testes de regressão:
- Reexecuta os testes funcionais após alterações no software para garantir que as mudanças não afetaram o comportamento já validado.
- O teste de regressão verifica se as novas alteraçòes ou correções de bugs não introduziram novos problemas.

### Testes de aceitação:
- Realizados para validar se o software atende aos critérios de aceitação definidos pelo cliente.
- São realizados para garantir que o software atende às expectativas do cliente e está pronto para ser lançado.

## Estratégias de Planejamento de Testes
- Baseada em **risco**:
  - Prioriza os testes nas áreas mais críticas e com maior probabilidade de falhas
  - **Identificação de riscos**:
    - Esse processo envolve a análise do software para identificar áreas que apresenta maios probabilidade de falhas ou impactos significativos se um problema ocorrer.
    - A identificação de riscos considera fatores como complexidade do código, frequência de mudanças e importância das funcionalidades para os usuários.
    - Esse mapeamento permite que a equipe priorize os testes nas áres mais vulneráveis.
  - **Priorização em áreas de alto impacto**:
    - Com os riscos identificados, as áreas de alto impacto são priorizadas para testes, garantindo que funcionalidades críticas sejam avaliadas primeiro.
    - Essa priorização ajuda a alocar recursos de teste de forma mais eficiente.
    - Esse recurso concentra esforços em partes do sistema onde falhas poderiam causar maiores prejuízos, como perda de dados, comprometimento de segurança ou insatisfação do usuário final.

- Baseada em **requisitos**:
  - Testes são desenhados diretamente a partir dos requisitos funcionais e não funcionais do software.
  - **Mapeamento de requisitos**:
    - Essa etapa envolve a identificação e documentação detalhada dos requisitos funcionais e não funcionais do software.
    - Cada requisito é mapeado para garantir que as expectativas dos usuários sejam atendidas.
    - Esse mapeamento ajuda a desenvolver casos de teste que cobrem todos os aspectos importantes do software.
  - **Cobertura completa**:
    - O objetivo é garantir que todos os requisitos sejam testados adequadamente.
    - Isso significa que nenhum requisito importante ficará sem testes.
    - A cobertura completa é essencial para garantir que o software atenda aos requisitos e atenda às necessidades dos usuários.

- Baseada em **contexto**:
  - Adapta a estratégia de testes ao contexto específico do projeto, incluindo prazo, equipe e recursos.
    - **Prazos e oraçamento**:
      - Nesta abordagem, a estratégia de testes é adaptada considerando os prazos e orçamentos disponíveis.
      - Em projetos com prazos apertados ou orçamentos limitados, a estratégia de testes pode ser ajustada para se concentrar em áreas críticas e priorizar os testes mais importantes.
      - Essa adaptação ajuda a garantir que os testes sejam executados de forma eficiente dentro das restrições disponíveis.
    - **Complexidade do software**:
      - Quanto mais complexo o software, mais abrangente deve ser a estratégia de testes.
      - Sistemas com muitas interdependências, funcionalidades críticas e integrações exigem uma cobertura de teste mais ampla e aprofundada.
      - A complexidade do software influencia a seleção de ferramentas, métodos e o nível de automação para assegurar que todos os components funcionem corretamente em conjunto.