# Métricas de Qualidade de Software

### Métricas de qualidade
- Medidas quantitativas usadas para avaliar a eficácia, eficiência e desempenho de um sistema ou processo de software.

  - **Melhora a manutenção do software**:
    - Métricas de qualidade permitem identificar áreas do código que podem estar suscetíveis a erros, redundâncias ou complexidade excessiva, facilitando o planejamento de manutenções preventivas e corretivas.
  - **Facilita a tomada de decisões**:
    - Elas fornecem uma base objetiva para a tomada de decisões, seja em relação ao lançamento de novas versões, adoção de novas tecnologias ou alocação de recursos para a equipe de desenvolvimento.
  - **Aumenta a confiabilidade do produto**:
    - O uso de métricas de qualidade contribui para a confiabilidade do software ao identificar e mitigar riscos, garantindo que o produto final seja mais seguro e estável.
    - Métricas como taxa de falhas, tempo médio entre falhas (MTBF) e tempo médio para recuperação (MTTR) ajudam a monitorar e melhorar a robustez do sistema.

### Componentes: mensurabilidade, objetividade e relevância
- A métrica deve ser confiável.
- As medições devem ser precisas e não subjetivas.
- A métrica deve estar alinhada aos objetivos do projeto.

## Tipos de métricas

### **Métrica de processo**:
> Avaliam a eficiência dos processos de desenvolvimento e manutenção.
- Exemplo: Velocidade de entrega (tempo médio entre entregas)
  - Essa métrica permite avaliar a agilidade da equipe em disponibilizar novas funcionalidades ou correções, indicando a eficiência do processo de desenvolvimento.
  - Um tempo médio entre entregas menor reflete um processo mais ágil e bem estruturado, enquanto intervalos maiores podem indicar gargalos ou áreas que necessitam de melhoria.

### **Métrica de produto**:
> Avaliam a qualidade do software em si (interna e externa).
- Exemplo: Complexidade ciclomática, densidade de bugs
  - A complexidade ciclomática mede a quantidade de caminhos independentes no código, indicando o nível de dificuldade para entender e testar o sistema, o que pode impactar diretamente a manutenção do software.
  - A densidade de bugs revela a quantidade de erros em relação ao tamanho do código, ajudando a identificar áreas problemáticas que precisam de atenção especial.

### **Métrica de projeto**:
> Medem aspectos relacionados à gestão do projeto.
- Exemplo: Cumprimento de prazos, esforço (horas trabalhadas)
  - O cumprimento de prazos é uma métrica essencial para monitorar se o projeto está avançando conforme o planejamento, permitindo ajustes tempestivos caso haja desvios no cronograma.
  - A métrica de esforço, medida em horas trabalhadas, ajuda a avaliar a eficiência da equipe e a identificar possívels sobrecargas de trabalho ou a necessidade de recursos adicionais.
Testar exaustivamente


## Ferramentas para coleta de métricas

- Permitem uma avaliação automatizada e precisa dos aspectos de qualidade do software.

- **Captura dados proporcionando insights**:
  - Permite a coleta de dados de forma automatizada, o que reduz a subjetividade humana e aumenta a precisão das medições.
  - Fornece insights valiosos sobre o desempenho do software, identificando áreas críticas que precisam de atenção e melhorias.
- **Facilita o monitoramento contínuo**:
  - As ferramentas de coleta de métricas permitem o monitoramento contínuo da qualidade do software, possibilitando a identificação precoce de problemas e a tomada de ações corretivas antes que impactem os usuários finais.
- **Melhora a precisão das medições**:
  - As ferramentas de coleta de métricas permitem a coleta de dados de forma automatizada, o que reduz a subjetividade humana e aumenta a precisão das medições.
  - Fornece insights valiosos sobre o desempenho do software, identificando áreas críticas que precisam de atenção e melhorias.

#### SonarQube
- Ferramenta de análise de qualidade de código, em termos de:
- **Bugs**:
  - Erros de programação que podem causar falhas no software.
  - Exemplos: erros de sintaxe, lógica incorreta, uso de variáveis não inicializadas.
- **Vulnerabilidades**:
  - Possibilidade de exploração de vulnerabilidades de segurança.
  - Exemplos: vulnerabilidades de injeção SQL, falta de autenticação adequada.
- **Padões de código**:
  - Conformidade com boas práticas de programação.
  - Exemplos: uso de nomes significativos para variáveis, formatação consistente do código.

#### Jira
- Permite a coleta de métricas relacionadas ao progresso do desenvolvimento, como:
- **Velocidade da equipe**:
  - Mede a quantidade de trabalho concluído por uma equipe em um determinado período.
  - Permite avaliar a eficiência da equipe e identificar possíveis gargalos.
- **Taxa de resolução de bugs**:
  - Mede a eficiência na resolução de problemas identificados pelos usuários.
  - Permite identificar áreas de melhoria na resolução de problemas.
- **Tempo médio de fechamento de tarefas**:
  - Mede o tempo médio necessário para concluir uma tarefa específica.
  - Permite identificar possíveis gargalos ou áreas de melhoria no processo de desenvolvimento.

#### Jenkins
- Ferramente de integração contínua que fornece:
- **Métricas de cobertura de testes**:
  - Mede a porcentagem de código que é testado pelos testes automatizados.
  - Permite identificar áreas de código que precisam de mais testes.
- **Número de builds bem-sucedidos/falhos**:
  - Mede o número de builds que foram concluídos com sucesso ou falharam.
  - Permite avaliar a estabilidade do software e identificar possíveis problemas.
- **Tempo de execução de testes**:
  - Mede o tempo médio necessário para executar os testes automatizados.
  - Permite identificar possíveis gargalos ou áreas de melhoria no processo de testes.