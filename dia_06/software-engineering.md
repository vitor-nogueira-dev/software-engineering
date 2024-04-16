### Engenharia de Software

- Uma disciplina que reune motodologias, métodos e ferramentas a serem utilizadas desde a percepção até o momento em que o sistema desenvolvido deixa de ser operacional, visando resolver problemas inerentes ao processo de desenvolvimento e ao produto de software.

> Desenvolvimento > Validação > Manutenção

- Baixo custo 
- Produção mais rápida
- Melhor qualidade

#### Requisitos 
- Correspondem ao conjunto de necessidades dos usuário em relação ao sistema. Requisitos podem ser `funcionais` (o que o sistema deveria fazer) e `não funcionais` (restrições, isto é, o que o sistema não deveria fazer)

**Requisitos funcionais**
Ex: O sistema deve permitir que o usuário faça login

**Requisitos não funcionais**
Ex: O sistema deve ser capaz de suportar 1000 usuários simultâneos

**Extração de requisitos**
- É uma das tarefas mais desafiadoras na área de desenvolvimento de sistemas, envolve várias técnicas tais como entrevistas, formulários, workshops, documentação, análise de cenários, etc. A extração de requisitos pode resutar em um documento de requisitos definidos pelo padrão IEEE 830

**Protótipos**
- São modelos iniciais de um sistema que permitem ao usuário visualizar o sistema antes de sua implementação. Protótipos podem ser `descartáveis` (utilizados apenas para a validação de requisitos) ou `evolutivos` (utilizados para a evolução do sistema)

#### Ciclos de vida 
- É uma sequência de atividades que são realizadas durante o processo de desenvolvimento de software. Os ciclos de vida podem ser `clássicos` (cascata, espiral, etc) ou `ágeis` (scrum, xp, etc)

Etapas do ciclo de vida clássico:
- Análise 
- Projeto
- Codificação
- Testes
- Implementação
- Manutenção

> Modelos de ciclo de vida de processo de software são descrições abstratas do processo de desenvolvimento, mostrando as principais atividades e informações usadas na produção e manutenção de software, bem como a ordem que as atividades são executadas.

**Modelo evolutivo**
- É um modelo de ciclo de vida de software que combina elementos de especificação e desenvolvimento de protótipos, com ênfase na entrega de um sistema funcional o mais rápido possível. O modelo evolutivo é uma abordagem iterativa e incremental que é especialmente útil para sistemas grandes e complexos.

**Modelo espiral**
- É um modelo de ciclo de vida de software que combina elementos de design e prototipagem em espiral, com ênfase na entrega de um sistema funcional o mais rápido possível. O modelo espiral é uma abordagem iterativa e incremental que é especialmente útil para sistemas grandes e complexos.

#### Garantia de qualidade 
- Significa a definição de procedimentos, processos, e padrões que visam reforçar que a qualidade de software seja atingida. A garantia de qualidade também inclui todo o gerenciamento de configuração, atividades de verificação e validação aplicadas após o produto ter sido entregue por uma equipe de desenvolvimento.

**Verificação:** consiste em avaliar se existem falhas e problemas com o software (seja no código, nas funcionalidades, interface, dentre muitos outros detalhes) antes que ele seja entregue ao cliente ou disponibilizado para o público final.

**Validação:** é um processo que comprova documentalmente que o sistema cumpre com as funções das quais foi designado, em conformidade com as especificações dos requisitos do usuário e com a garantia de segurança e rastreabilidade de informações.


#### Testes de software

**Tipos:**

- Caixa branca:
  - Nesse processo, o usuário analisa por qual caminho ocorre o fluxo de dados e é possível verificar se há a passagem correta em todas as condições esperadas.
- Caixa preta
  - O usuário não tem acesso ao código fonte e nem a sua estrutura. Como é baseado nos requisitos funcionais, ele também é chamado de teste funcional.
- Regressão
- Usabilidade
- Segurança
- Integração
- Performance
- Instalação
- Manutenção
- Funcional