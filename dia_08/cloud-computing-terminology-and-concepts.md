# Fundamentos de Cloud Computing: terminologias e conceitos

## Benefícios da Cloud Computing

### Democratização do Acesso à Tecnologia
- **Igualdade competitiva**: Pequenas empresas podem competir com grandes corporações em pé de igualdade
- **Acesso a recursos avançados**: Sistemas, hardware, armazenamento, segurança e conectividade de ponta
- **Eliminação de barreiras**: Não é necessário investimento inicial em infraestrutura física

### Modelo de Negócio Econômico
- **Pagamento sob demanda**: Pague apenas pelo que usar
- **Custo mensal reduzido**: Muito inferior a soluções locais equivalentes
- **Sem investimento inicial**: Elimina necessidade de compra de licenças e hardware
- **Flexibilidade financeira**: Investimentos distribuídos mensalmente conforme utilização

### Implementação e Manutenção Simplificadas
- **Rapidez na implementação**: Muito mais rápido que soluções desktop tradicionais
- **Suporte técnico incluído**: Migração de dados e consultoria especializizada
- **Menor necessidade de pessoal dedicado**: Manutenção fica por conta do provedor
- **Serviços integrados**: Backup, segurança e outros recursos inclusos

### Padronização e Evolução
- **Sistemas baseados em padrões**: Facilita integração e uso
- **Evolução contínua**: Crescente sofisticação dos serviços
- **Integração natural**: Como visto nos serviços de e-mail e armazenamento (Google Drive, OneDrive)

### Principais Vantagens Compiladas
- ✅ Economia significativa de custos
- ✅ Acesso remoto aos recursos
- ✅ Escalabilidade automática
- ✅ Facilidade de implementação
- ✅ Competitividade empresarial
- ✅ Agilidade nas rotinas de trabalho

## Desafios da Cloud Computing

### Concentração de Demanda nos Provedores
- **Alta demanda por processamento**: Centenas de milhares de clientes simultâneos
- **Responsabilidade concentrada**: Toda infraestrutura fica com o provedor
- **Necessidade de escalabilidade**: Atender crescimento exponencial de usuários

### Principais Desafios Identificados
- 🔧 **Segurança de dados**: Proteção de informações sensíveis em ambiente compartilhado
- 🔧 **Gerenciamento de dados**: Controle e organização de grandes volumes de informação
- 🔧 **Capacidade de processamento**: Manter performance com alta demanda
- 🔧 **Disponibilidade**: Garantir serviços sempre acessíveis
- 🔧 **Evolução tecnológica contínua**: Acompanhar avanços e demandas do mercado

### Evolução Tecnológica como Solução
- **Miniaturização de componentes**: Transistores de 250nm (anos 90) para 6nm (atualmente)
- **Maior eficiência energética**: Processadores mais potentes com menor consumo
- **Evolução constante**: Necessidade de colaboração e consciência dos desenvolvedores

## Cloud Privada

### Conceito e Características
Uma nuvem privada é desenvolvida para atender exclusivamente uma empresa, hospedada em sua própria intranet ou data center, oferecendo:
- **Dedicação exclusiva**: 100% dos recursos dedicados a um cliente
- **Maior controle de segurança**: Gestão completa dos acessos e dados
- **Infraestrutura personalizada**: Adaptada às demandas específicas do negócio

### Tipos de Cloud Privada

#### 🏢 Cloud Privada Interna (Local)
- **Localização**: Hospedada dentro da organização
- **Responsabilidade**: Departamento de TI da empresa
- **Vantagens**: 
  - Maior proteção e controle
  - Processo mais padronizado
  - Escalabilidade proporcional às necessidades
- **Responsabilidades**: 
  - Configurações de segurança
  - Monitoramento de atividades
  - Aquisição e manutenção de recursos físicos

#### ☁️ Cloud Privada Externa
- **Localização**: Hospedada por provedor externo
- **Características**:
  - Ambiente exclusivo com garantia de privacidade
  - Infraestrutura dedicada
  - Recursos negociáveis conforme demanda
- **Vantagens**:
  - Dimensionamento flexível da demanda
  - Custo mensal otimizado
  - Sem necessidade de hardware próprio

### Considerações para Escolha
- **Custos**: Privada interna tem custos iniciais superiores
- **Segurança**: Níveis maiores em ambiente controlado
- **Aproveitamento**: Uso de infraestrutura existente
- **Necessidades específicas**: Atividades que exigem servidores físicos locais

## Elasticidade, Resiliência, On-Demand e Uso Medido

### 🔄 Elasticidade
**Definição**: Capacidade de expandir e contrair a infraestrutura conforme a demanda

#### Características
- **Dimensionamento automático**: Ajuste dinâmico de recursos
- **Recursos flexíveis**: Armazenamento, processamento e memória adaptáveis
- **Resposta a picos**: Ajuste automático durante alta demanda

#### Tipos de Escalonamento
- **Horizontal**: Adição de mais recursos (preferido)
- **Vertical**: Aumento da capacidade dos recursos existentes (requer indisponibilidade temporária)

### 🛡️ Resiliência
**Definição**: Capacidade de manter operação mesmo com problemas, similar ao corpo humano

#### Características Essenciais
- **Robustez**: Sistema capaz de lidar com falhas
- **Adaptabilidade**: Encontrar alternativas quando problemas ocorrem
- **Auto-correção**: Capacidade de resolver problemas automaticamente
- **Alta confiabilidade**: Disponibilidade global dos serviços

#### Questões para Implementação Resiliente
- Preparação para disponibilidade global
- Replicação de bancos de dados entre regiões
- Serviços auxiliares (Block Storage, File Storage, Object Storage)
- Considerações específicas por tipo de serviço

### 📋 On-Demand (Sob Demanda)
**Definição**: Capacidade do consumidor provisionar recursos de forma independente e automática

#### Características
- **Provisionamento unilateral**: Sem necessidade de interação humana com provedor
- **Recursos disponíveis**: Tempo de computação, conectividade, armazenamento
- **Automatização**: Processo completamente automatizado
- **Independência**: Controle total do usuário sobre os recursos

### 📊 Uso Medido
**Definição**: Sistemas que controlam e otimizam recursos automaticamente através de medição

#### Funcionalidades
- **Monitoramento**: Controle automático de recursos
- **Otimização**: Aproveitamento eficiente da infraestrutura
- **Transparência**: Relatórios claros para provedor e consumidor
- **Flexibilidade**: Medição em diferentes níveis de abstração

#### Aplicação em IaaS
- **Infraestrutura como Serviço**: Hardware abstraído em pool de recursos
- **Custo baseado em uso**: Pagamento conforme utilização real
- **Base para outros serviços**: Fundamento para PaaS e SaaS
- **Ambiente virtualizado**: Flexível, padrão e operacional

### Benefícios Integrados
A combinação desses quatro elementos garante:
- ⚡ **Efetividade** para o contratante
- 💰 **Viabilidade econômica** para o provedor
- 🎯 **Modelo de negócio sustentável**
- 🚀 **Evolução contínua** dos serviços