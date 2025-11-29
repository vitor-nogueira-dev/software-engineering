# Análise de custos dentro da AWS

## AWS Organizations

O AWS Organizations é um serviço de gerenciamento centralizado que permite consolidar e organizar múltiplas contas AWS em uma única estrutura hierárquica.

### O que é?

É uma solução que surgiu da necessidade de empresas gerenciarem várias contas AWS de forma eficiente. Antes da computação em nuvem, as empresas mantinham dezenas de licenças de software, mas na nuvem o desafio passou a ser controlar o uso desses serviços de forma estratégica e econômica.

### Como funciona?

- **Consolidação**: Agrupa várias contas AWS em uma organização central
- **Dashboard unificado**: Permite visualizar e gerenciar todos os recursos em um único painel
- **Configurações padronizadas**: Aplica políticas e configurações uniformes em todas as contas
- **Integração**: Conecta-se com diversos outros serviços AWS

### Principais benefícios

1. **Escalabilidade rápida**: Dimensione cargas de trabalho com agilidade
2. **Ambientes personalizados**: Crie configurações específicas para diferentes equipes
3. **Segurança centralizada**: Proteja e audite todo o ambiente de um único local
4. **Gestão de permissões simplificada**: Controle acessos de forma mais eficiente
5. **Provisionamento otimizado**: Distribua recursos entre contas de maneira inteligente

### Quando usar?

É essencial quando a empresa está em expansão e precisa gerenciar múltiplos sistemas, instâncias e equipes diferentes, mantendo a organização e otimizando os custos operacionais.

## Traga sua própria licença (BYOL)

BYOL (Bring Your Own License) é uma funcionalidade que permite migrar softwares licenciados que você já possui para o ambiente AWS.

### Por que existe?

Muitas empresas investiram alto valor em licenças de software e não podem simplesmente abandoná-las ao migrar para a nuvem. O BYOL permite aproveitar esses investimentos existentes.

### Como funciona?

- **Não é um sistema**: É uma funcionalidade de plataformas como EC2
- **Instâncias dedicadas**: Você cria máquinas virtuais para hospedar seus softwares proprietários
- **Responsabilidade compartilhada**: A manutenção do software portado é sua responsabilidade
- **Hardware específico**: AWS pode oferecer hardware dedicado quando necessário para conformidade

### Requisitos para elegibilidade

Para usar BYOL, é preciso avaliar:
- Termos da licença
- Requisitos de mobilidade
- Data de compra
- Acordo de uso deve permitir instalação em VM

### Licenças Microsoft compatíveis

- Microsoft Enterprise Enrollment/Agreement (EA)
- Microsoft Server and Cloud Enrollment (SCE)
- Microsoft Enterprise Subscription Agreement (EAS)
- Microsoft Product and Services Agreement (MPSA)
- Microsoft Open/Open Value/Open Value Subscription
- Microsoft Enrollment for Education Solutions (EES)

### Importante considerar

A migração com BYOL demanda análise cuidadosa dos detalhes do licenciamento. Dependendo da complexidade, pode ser mais vantajoso migrar apenas os dados e adotar novas soluções.

## Benefícios do AWS Budgets

AWS Budgets é um serviço que permite configurar orçamentos personalizados e receber alertas sobre o consumo de recursos AWS, evitando custos imprevisíveis.

### Problema que resolve

Sem controle adequado, um usuário AWS pode ter acesso irrestrito aos serviços e acabar com uma fatura inesperada. O AWS Budgets previne isso através de monitoramento e alertas.

### Funcionalidades principais

1. **Orçamentos personalizados**: Configure limites de gastos específicos
2. **Alertas configuráveis**: Receba notificações por e-mail ou SNS
3. **Períodos flexíveis**: Monitore mensal, trimestral ou anualmente
4. **Múltiplas contas**: Acompanhe contas associadas e várias instâncias

### AWS Budget Actions

Complementa o serviço básico permitindo configurar **ações automáticas** quando limites são atingidos:
- Reduz velocidade de consumo
- Bloqueia uso de recursos
- Executa ações pré-definidas

### Monitoramento de Reserved Instances (RI)

- Define metas de utilização ou cobertura de RI
- Alerta quando utilização cai abaixo do esperado
- Compatível com: Amazon EC2, RDS, Redshift e ElastiCache

### Benefício prático

Transforma o consumo imprevisível em despesas planejadas e controláveis, permitindo que o gestor mantenha o orçamento sob controle.

## Benefícios do AWS Cost Explorer

AWS Cost Explorer é uma ferramenta com interface visual intuitiva que facilita a análise e compreensão dos custos e uso dos serviços AWS.

### O que oferece?

- **Visualização facilitada**: Gráficos, tabelas e relatórios personalizados
- **Análise de custos**: Visão geral e detalhada dos gastos
- **Relatórios customizados**: Crie análises específicas para suas necessidades

### Principais recursos

1. **Custos mensais por serviço**
   - Identifica os 5 serviços que mais aumentam custos
   - Detalhamento minucioso de todos os serviços em formato de tabela

2. **Granularidade flexível**
   - Visualização por hora, dia ou mês
   - Análise detalhada por recurso específico

3. **Savings Plans**
   - Oferece economia de até 72% no uso de computação AWS
   - Modelo de preço flexível como alternativa ao on-demand

### Diferencial estratégico

O Cost Explorer não apenas mostra gastos, mas **orienta escolhas inteligentes**:
- Ajuda a selecionar o melhor Savings Plan
- Compara custos entre diferentes opções
- Identifica oportunidades de economia

### Impacto no orçamento

A orientação fornecida pelo Cost Explorer pode reduzir significativamente os custos operacionais, tornando o uso da AWS mais eficiente e econômico.

## Calculadora de preços da AWS

O AWS Pricing Calculator é uma ferramenta web gratuita que permite estimar e planejar os custos de uso dos serviços AWS antes de contratá-los.

### Objetivo principal

Facilitar o processo de migração para a nuvem, oferecendo clareza sobre o impacto financeiro dos serviços no orçamento da empresa.

### Principais funcionalidades

1. **Preços transparentes**
   - Visualiza os cálculos por trás das estimativas
   - Analisa custos por serviço ou grupos de serviços
   - Entende a composição dos preços

2. **Organização em grupos**
   - Classifica estimativas em grupos hierárquicos
   - Alinha com a arquitetura do projeto
   - Facilita análise de custos por componente

3. **Compartilhamento de estimativas**
   - Salva links para revisitar depois
   - Estimativas armazenadas em servidores públicos AWS
   - Exporta em CSV ou PDF para stakeholders

### Usos estratégicos

- **Planejamento de migração**: Projeta custos antes de migrar
- **Busca de economia**: Identifica opções mais baratas (ex: instâncias spot)
- **Ferramenta de convencimento**: Demonstra viabilidade financeira da nuvem
- **Tomada de decisão**: Resolve dúvidas sobre custos antes de migrar

### Vantagens adicionais

- **Gratuito**: Sem custos para usar
- **Preços atualizados**: Sempre considera promoções vigentes
- **Transparente**: Mostra apenas preços reais da AWS

### Benefício prático

Elimina incertezas financeiras e permite planejar a migração para nuvem com confiança, sabendo exatamente quanto custará cada serviço antes de contratar.

