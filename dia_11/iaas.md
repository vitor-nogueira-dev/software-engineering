# Infrastructure as a Service (IaaS)

## Finalidade dos modelos de Infrastructure as a Service (IaaS)

### O que é IaaS?
- **Evolução do conceito**: Anteriormente conhecido como HaaS (Hardware as a Service)
- **Definição**: Serviço que oferece infraestrutura computacional completa em nuvem, incluindo servidores virtuais, armazenamento e recursos de rede
- **Solução financeira**: Permite acesso a recursos computacionais robustos por uma fração do investimento inicial necessário para infraestrutura física

### Benefícios principais:
- **Flexibilidade de pagamento**: Modelos de assinatura ou pay-per-use (pague pelo que usar)
- **Escalabilidade dinâmica**: Ajuste automático de recursos conforme a demanda
- **Redução de custos**: Elimina necessidade de grandes investimentos iniciais em hardware
- **Eliminação de ociosidade**: Pague apenas pela capacidade utilizada
- **Redução de riscos**: Transfere preocupações de infraestrutura física para o provedor

### Exemplos de provedores:
- Microsoft Azure
- Amazon AWS
- IBM Cloud

## Funcionamento de um IaaS

### Estrutura básica:
- **Sistema computacional completo**: Processadores, memória e armazenamento virtualizados
- **Responsabilidade do cliente**: Instalação e configuração de sistema operacional, banco de dados e aplicações
- **Modelo de cobrança**: Baseado na quantidade de recursos destinados ao cliente durante determinado período

### Componentes incluídos:
- **Recursos de rede**: Conectividade e serviços de rede
- **Recursos computacionais**: Poder de processamento virtualizado
- **Armazenamento de dados**: Soluções de storage escaláveis
- **Sistemas operacionais**: Plataforma base para aplicações

### Evolução dos conceitos:
- **Think Clients**: Computadores simplificados que dependiam totalmente de servidores
- **Computadores básicos modernos**: Capazes de acessar IaaS e realizar atividades locais
- **Cloud Broker**: Intermediário especializado que facilita a contratação de serviços

## IaaS como base para SaaS e PaaS

### Arquitetura em camadas:
IaaS forma a base fundamental para outros modelos de serviço em nuvem:

#### **SaaS (Software as a Service)**:
- **Definição**: Aplicação gerenciada pelo provedor, acessada via navegador
- **Características**: Manutenção, atualizações e correções por conta do provedor
- **Público-alvo**: Empresas onde tecnologia é acessória

#### **PaaS (Platform as a Service)**:
- **Definição**: Plataforma de desenvolvimento fornecida por provedor externo
- **Características**: Infraestrutura gerenciada pelo provedor, aplicações gerenciadas pelo usuário
- **Público-alvo**: Desenvolvedores e programadores
- **Base**: Consome infraestrutura do IaaS para construir soluções de hospedagem e middleware

### Relação entre os modelos:
- **IaaS**: Infraestrutura básica (servidores, rede, armazenamento)
- **PaaS**: Plataforma construída sobre IaaS (hospedagem, SO, middleware)
- **SaaS**: Aplicações completas construídas sobre PaaS/IaaS

## Exemplos de IaaS

### Provedores principais:

#### **Eucalyptus**:
- Software livre e framework modular
- Gerencia infraestrutura de computadores e armazenamento
- Ambiente modular para prestadores de serviço

#### **CloudSim**:
- Voltado para simulações
- Ambiente de teste e desenvolvimento

#### **Amazon Elastic Compute Cloud (EC2)**:
- Solução comercial líder de mercado
- Ambiente virtual para desenvolvimento e execução de aplicações Linux
- Configuração personalizável de máquinas virtuais

#### **Red Hat Cloud Suite** (Destaque):
- **Características principais**:
  - Tecnologias totalmente integradas
  - Baseado em OpenStack®
  - Custo inferior comparado a alternativas
  - Infraestrutura altamente escalável
  - Suporte premiado internacionalmente

- **Benefícios**:
  - Redução significativa do TCO (Custo Total de Propriedade)
  - Entrega agilizada de serviços
  - Melhoria constante na capacidade de processamento
  - Robustez e escalabilidade comprovadas

### Cloud Service Broker (CSB):
- **Função**: Corretor de serviços em nuvem
- **Benefício**: Simplifica gestão de ambientes complexos multi-provedor
- **Vantagem**: Interface única de negociação e gerenciamento