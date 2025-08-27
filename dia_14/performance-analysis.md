# Análise de Desempenho em Aplicações Cloud

## Desempenho de Hardware em Aplicações Cloud

### Conceitos Fundamentais
- **Monitoramento de recursos**: CPU, memória e largura de banda são métricas essenciais tanto para provedores quanto para clientes
- **Elasticidade de recursos**: Capacidade de ajustar recursos automaticamente conforme a demanda

### Ferramentas de Avaliação AWS
- **CloudWatch**: Serviço de monitoramento que coleta métricas de desempenho
- **Auto Scaling**: Ajusta automaticamente a quantidade de instâncias baseado na demanda
- **Elastic Load Balance**: Distribui cargas de trabalho entre múltiplas instâncias

### Protocolos de Segurança e Performance
- **IPsec**: Protocolo que opera na camada de rede, fornecendo autenticação e cifração
  - **Authentication Header (AH)**: Responsável pela autenticação dos pacotes
  - **Encapsulating Security Payload (ESP)**: Responsável pela cifração dos pacotes
  - **Impacto na performance**: Comparação entre cenários com e sem IPsec para medir overhead

### Métricas de Avaliação
- **Tempo de resposta**: Medição do tempo entre requisição e resposta
- **Taxa de processamento de pacotes (TP)**: Capacidade de processar pacotes por unidade de tempo
- **Latência de rede**: Tempo de propagação dos dados através da infraestrutura

## Desempenho de Software em Aplicações Cloud

### Elasticidade como Métrica Principal
- **Definição**: Capacidade de provisionar e desprovisionar recursos de forma rápida e automática
- **Características**: Recursos virtuais praticamente infinitos e quantidade adquirível sem restrição

### Componentes da Elasticidade
- **Máquinas Virtuais**: Instâncias que podem ser escaladas horizontalmente
- **Containers**: Unidades de deployment que permitem escalabilidade granular
- **Provisionamento automático**: Ajuste de recursos baseado na carga de trabalho

### Métricas de Medição
- **Desempenho de CPU**: Utilização e capacidade de processamento
- **Utilização de memória**: Consumo e disponibilidade de RAM
- **Throughput**: Volume de dados processados por unidade de tempo
- **Adaptabilidade**: Capacidade de combinar recursos disponíveis com demanda atual

### Limitações da Elasticidade
- **Limite físico**: Como um elástico, há um ponto máximo de expansão sem danos
- **Retorno ao estado original**: Necessidade de desprovisionamento eficiente

## Conectividade em Aplicações Cloud

### Mobilidade e Acessibilidade
- **Acesso universal**: Disponibilidade através da internet em qualquer dispositivo
- **Sincronização de dados**: Manutenção da consistência entre diferentes pontos de acesso
- **Independência de localização**: Serviços acessíveis de qualquer lugar com conexão

### Impacto nos Modelos de Serviço
- **SaaS**: Acesso direto pelos executivos sem necessidade de aprovação de TI
- **PaaS**: Plataformas de desenvolvimento acessíveis remotamente  
- **IaaS**: Infraestrutura escalável e geograficamente distribuída

### Requisitos de Infraestrutura
- **Malha de redes preparada**: Combinação de tecnologias (MPLS, IP-VPN, LAN-to-LAN)
- **Qualidade de serviço**: Garantias de disponibilidade e performance
- **Controle e segurança**: Monitoramento e proteção dos dados em trânsito
- **Flexibilidade**: Adaptação a diferentes necessidades de conectividade

### Tecnologias Emergentes
- **IoT (Internet of Things)**: Expansão da conectividade para dispositivos
- **Machine Learning**: Otimização inteligente de recursos
- **Inteligência Artificial**: Automatização de decisões de performance

## Metodologias de Análise de Desempenho

### Necessidade de Avaliação Contínua
- **Percepção do usuário**: Sensibilidade à degradação de serviços
- **Requisitos de gestores**: Entrega confiável, disponível e escalável
- **Quantificação de performance**: Métricas objetivas para tomada de decisão

### Método AHP (Analytic Hierarchy Process)

#### Características
- **Classificação e comparação**: Avaliação relativa entre alternativas
- **Critérios mistos**: Suporte a critérios qualitativos e quantitativos
- **Estrutura hierárquica**: Organização de critérios de forma analisável

#### Etapas do Processo
1. **Definir objetivo**: Estabelecer meta a ser alcançada
2. **Definir alternativas**: Identificar opções disponíveis
3. **Criar hierarquia**: Estruturar critérios comparáveis
4. **Avaliar pares**: Comparação duas a duas das alternativas
5. **Determinar avaliação global**: Pontuação final de cada alternativa

#### Ferramenta Expert Choice
- **Base metodológica**: Implementação do método AHP
- **Funcionalidades**:
  - Interface gráfica intuitiva
  - Cálculos automáticos
  - Checagem de inconsistências
  - Sistema de apoio à decisão
- **Benefícios**:
  - Processo decisório transparente
  - Registro de parâmetros para consultas futuras
  - Confirmação de decisões baseadas em dados

### Aplicação Prática
- **Migração para cloud**: Avaliação de alternativas de provedores
- **Seleção de serviços**: Comparação entre diferentes ofertas
- **Otimização de custos**: Análise de custo-benefício
- **Planejamento de capacidade**: Previsão de necessidades futuras

## Estudo de Caso: Métricas de Desempenho

### Cenários de Teste
- **Cenário de referência**: Comunicação básica entre VMs sem segurança
- **Cenário IPsec**: Implementação de protocolos de segurança
- **Cenário SR-IOV**: Utilização de virtualização de I/O

### Metodologia de Comparação
1. **Levantamento de tempos de resposta**: Medição em cada cenário
2. **Cálculo de taxa de processamento**: Pacotes processados por segundo
3. **Análise comparativa**: Impacto das diferentes implementações
4. **Avaliação de overhead**: Custo adicional de segurança e virtualização

### Considerações de Infraestrutura
- **Dispositivo do cliente**: Capacidade local de processamento
- **Conexão com internet**: Largura de banda disponível
- **Roteamento de rede**: Caminhos e latência entre cliente e provedor
- **Infraestrutura do provedor**: Capacidade e distribuição geográfica
