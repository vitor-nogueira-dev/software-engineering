# Seleção de Modelos de Ciclo de Vida

### Critérios para seleção de modelos
- Os diferentes modelos de clico de vida de software oferecem abordagens distintas para gerenciar e organizar o desenvolvimento de software
- A escolha de um modelo adequado depende das catracterísticas do projeto, como a complexidade, técnica, tamanho e incerteza dos requisitos
- Ao selecionar um modelo de ciclo de vida, é fundamental considerar a natureza do projeto. Por exemplo, projetos com requisitos bem definidos e pouca probabilidade de mudanças podem se beneficiar do modelo Cascata
- Em contrapartida, projetos complexos e com requisitos em constante evolução são mais adequados para metodologias ágeis
- Avaliar fatores como flexibilidade, escalabilidade, o nível de colaboração necessário pode ajudar a garantir uma escolha mais alinhada com os objetivos do projeto

### Modelos de ciclo de vida comuns

## Modelo Cascata
- **Descrição**:
  - Esse modelo é uma abordagem linear e sequencial. Cada fase do projeto precisa ser concluída antes que a próxima comece (por exemplo, análise, design, implementação, testes e manutenção)
- **Quando usar**:
  - Ideal para projetos com requisitos bem definidos desde o início e pouca necessidade de mudanças durante o processo de desenvolvimento
- **Características**:
  - Baixa flexibilidade, mas fornece controle rígido sobre o processo de desenvolvimento. Adequado para projetos de médio a grande porte com baixa complexidade técnica

## Modelo Iterativo
- **Descrição**:
  - O desenvolvimento ocorre em ciclos repetidos (iterações), onde cada ciclo entrega uma parte funcional do sistema. As funcionalidades são refinadas e melhoradas a cada interação
- **Quando usar**:
  - Útil para projetos onde os requiitos podem evoluir ao longo do tempo, permitindo melhorias contínuas
- **Características**:
  - Permite ajustes ao longo do processo, com entregas contínuas. Funciona bem para projetos de médio a grande porte

## Scrum (Método Ágil)
- **Descrição**:
  - Um modelo ágil que se baseia em sprints (curtos ciclos de trabalho) para entregar partes funcionais do software. O foco é na adaptação rápuda às mudanças e no feedback contínuo dos clientes
- **Quando usar**:
  - Ideal para projetos dinâmicos, onde os requisitos mudam frequentemente. Promove entregas incrementais e constantes
- **Características**:
  - Alta flexibilidade, colaboração contínua, entrega rápida de valor e constante revisão. Adequado para projetos de pequeno a médio porte com alta complexidade técnica

## Kanban (Método Ágil)
- **Descrição**:
  - Focado na visualização e gestão do fluxo de trabalho. As tarefas são movidas entre etapas, como `A fazer`, `Em andamento` e `Concluído`, conforme o progresso, permitindo que a equipe acompanhe facilmente o progresso
- **Quando usar**:
  - Ideal para equipes que lidam com trabalho contínuo, como suporte ou manutenção de sistemas. Oferece flexibilidade para adicionar ou remover tarefas conforme necessário
- **Características**:
- Promove o fluxo contínuo de trabalho, flexibilidade para mudanças e controle de tarefas em andamento (WIP - Work In Progress). Adequado para projetos de pequeno porte

## Modelo Espiral
- **Descrição**:
  - Combina elementos de desenvolvimento iterativo e análise de riscos. Cada ciclo da espiral envolve uma fase de planejamento, avaliação de riscos, desenvolvimento e avaliação
- **Quando usar**:
  - Combina elementos de desenvolvimento iterativo e análise de riscos. Cada ciclo da espiral envolve uma fase de planejamento, avaliação de riscos, desenvolvimento e avaliação
- **Características**:
  - Muito flexível, permite o gerenciamento de riscos em cada ciclo. Funciona bem para grandes projetos que requerem planejamento detalhado e análise de riscos contínua

# Análise de adequação ao projeto

- Processo de avaliar como um determinado modelo de ciclo de vida se encaixa nas características e requisitos do projeto
- **Objetivo**: Garantir que o modelo selecionado seja apropriado para as necessidades técnicas

### Fatores críticos para análise de adequação
- **Escopo e tamanho do projeto**:
  - Projetos menores podem se beneficiar de modelos mais ágeis, como Scrum ou Kanban, que oferecem flexibilidade e adaptação rápida às mudanças
  - Já projetos grandes e com escopo mais bem definido tendem a se adaptar melhor a modelos estruturados, como Cascata ou Espiral
- **Incertezas nos requisitos**:
  - Projetos onde os requisitos estão claros desde o início tendem a se beneficiar de abordagens lineares, como Cascata
  - Nele, os requisitos são detalhados no começo e seguidos até o fim do projeto
  - O modelo Espiral também é útil para lidar com incertezas, pois combina desenvolvimento iterativo com análise de riscos, permitindo que os requisitos sejam revisados e ajustados durante cada ciclo
  - No entanto, em cenários onde há incerteza nos requisitos onde os requisitos podem mudar ao longo do tempo, é mais indicado utilizar modelos interativos, como o Scrum ou Kanban
  - Eles permitem maior flexibilidade e adaptação às mudanças a longo do projeto
- **Riscos e restrições**:
  - Projetos com alto nível de riscos (técnicos, financeiros, de mercado) podem exigir um modelo de ciclo de vida que permita o gerenciamento contínuo de riscos, como o Espiral que foca na análise e mitigação de riscos a cada interação
  - Restrições de tempo, orçamento e qualidade também precisam ser consideradas na escolha do modelo
  - Modelos como Kanban e Scrum podem ser mais apropriados para projetos com restrições de tempo, pois promovem entregas incrementais rápidas
  - Já o Cascata pode ser mais adequado para projetos onde as restrições de qualidade são críticas e precisam ser rigidamente controladas

### Avaliação e decisão

- **Ferramentas para análise**:
  - Ferramentas como matriz de decisão, análise de riscos e frameworks de priorização permitem que a equipe avalie aspectos crítivos como: complexidade técnica, tamanho do projeto, incertezas nos requisitos e o nível de interação com o cliente
- **Engajamento dos stakeholders**:
  - A participação dos stakeholders é vital no processo de seleção do modelo de ciclo de vida
  - Eles precisam estar engajados para fornecer uma visão clara sobre as expectativas do projeto, prazos e qualidade desejada
  - O feedback e as necessidades deles influenciam diretamente a escolha do modelo, principalmente se o projeto exigir ajustes frequentes ou entregas incrementais
- **Adequação ao time e organização**:
  - Times mais experientes em métodos ágeis podem preferir modelos como Scrum ou Kanban, onde a flexibilidade, autonomia e a auto-organização são valorizadas
  - Por outro lado, equipes que trabalham melhor com processos bem definidos podem se adequar a um modelo Cascata, que oferece uma sequência linear previsível de fases
  - Além disso, a estrutura da organização, também deve ser levada em conta
  - Organizações com maior flexibilidade para mudanças podem se beneficiar de modelos interativos e incrementais, enquanto organizações mais tradicionais podem optar por um modelo linear

# Ferramentas de apoio à decisão
- Métodos e softwares que auxiliam na tomada de decisão, sobre o modelo de ciclo de vida mais adequado para o projeto
- Facilitar a comparação entre diferentes opções de modelos de ciclo de vida, considerando múltiplos fatores
- Softwares especializados, como ferramentas de gerenciamento de projetos (por exemplo, Jira, Trello, Asana), também ajudam no monitoramento de projetos, fornecendo insights sobre o progresso e facilitando ajustes no modelo escolhido
- Ferramentas como métodos de análise multicritério (MCDA) permitem pesar diferentes fatores que influenciam a decisão final. Isso é útil quando há múltiplos parâmeros a serem considerados, como orçamento, riscos, prazos e necessidades dos stakeholders

### Principais ferramentas

## Matriz de decisão
- Uma matriz de decisão é uma ferramenta que ajuda a avaliar diferentes opções de decisão, considerando múltiplos critérios e fatores
- Permite comparar os modelos de ciclo de vida com base em critérios como complexidade técnica, incertezas nos requisitos, tamanho do projeto e restrições de tempo e orçamento

## Trello
- O Trello é uma ferramenta de gerenciamento de projetos que permite organizar tarefas em quadros, listas e cartões
- É útil para equipes que desejam visualizar o progresso do projeto, atribuir tarefas e colaborar de forma eficiente

## MS Excel
- O Microsoft Excel é uma ferramenta amplamente utilizada para análise de dados e tomada de decisão
- É possível criar planilhas para comparar diferentes modelos de ciclo de vida, considerando múltiplos critérios e fatores

## Análise SWOT (Strengths, Weaknesses, Opportunities, Threats - Forças, Fraquezas, Oportunidades, Ameaças)
- A análise SWOT é uma ferramenta que ajuda a identificar as forças, fraquezas, oportunidades e ameaças de um projeto
- Pode ser usada para avaliar a adequação de um modelo de ciclo de vida, considerando os aspectos internos e externos que podem influenciar o sucesso do projeto