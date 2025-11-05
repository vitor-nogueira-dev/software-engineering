# Conceitos relacionados a acesso, serviços e controle

### O que é Computação em Nuvem?
- **Definição**: Serviços contratáveis pelo usuário incluindo armazenamento, poder computacional (máquinas virtuais) e aplicações diversas
- **Principais características**: Acesso remoto via internet, sem necessidade de investimento inicial em infraestrutura
- **Modelo de pagamento**: Pay-as-you-use (pague apenas pelo que usar)

### Amazon Web Services (AWS)
- **Origem**: Lançada em 2006, inicialmente para atender necessidades internas da Amazon
- **Diferencial**: Sistema inovador de cobrança + preços competitivos
- **Infraestrutura global**: 
  - Servidores organizados em **Zonas de Disponibilidade**
  - Agrupadas em **Regiões** distribuídas pelos 5 continentes
  - Mais de 200 serviços disponíveis

### Principais Vantagens da AWS
- **Elasticidade**: Capacidade de aumentar recursos temporariamente conforme demanda
- **Escalabilidade**: Atende desde micro empresas até grandes corporações
- **Disponibilidade global**: Acesso de qualquer lugar com internet
- **Variedade de serviços**: Computação, armazenamento, bancos de dados, análise, redes, IoT, segurança, etc.

## Nível gratuito de uso dos serviços AWS

A AWS oferece o **Free Tier** (nível gratuito) como estratégia para atrair novos usuários e permitir experimentação dos serviços.

### Características do Free Tier
- **Duração**: 12 meses a partir da criação da conta
- **Abrangência**: Praticamente todos os serviços AWS (com limites específicos)
- **Tipos de limite**: Tempo de uso, espaço de armazenamento, ou outros parâmetros específicos

### Condições para Elegibilidade
1. Estar dentro dos primeiros 12 meses após criação da conta
2. Usar apenas serviços que oferecem benefícios do Free Tier
3. Manter uso dentro dos limites estabelecidos

### ⚠️ Importante - Controle de Custos
- **Monitoramento**: Use o "Billing and Cost Management Dashboard"
- **AWS Budgets**: Sistema que notifica quando atingir 85% do limite gratuito
- **Responsabilidade**: Usuário deve acompanhar limites para evitar cobranças inesperadas

### Casos de Uso Comuns
- Ambiente de testes e desenvolvimento
- Estudos e certificações AWS
- Prova de conceito (PoC) para projetos

## Acesso ao console de gerenciamento AWS

O **AWS Management Console** é a interface principal para gerenciar todos os serviços AWS.

### Características do Console
- **Interface**: Acesso via navegador web (GUI)
- **Personalização**: Widgets customizáveis na página inicial
  - Recently Visited (Visitados recentemente)
  - AWS Health
  - Trusted Advisor
  - E muito mais

### Formas de Acesso
1. **Interface Gráfica**: Via navegador web (mais comum)
2. **Modo Texto**: Protocolo SSH (Secure Socket Shell) com credenciais de autenticação

### Vantagens do Console
- Centralização de todos os serviços AWS
- Interface intuitiva e personalizável
- Acesso de qualquer dispositivo com navegador

## Formas de acesso aos serviços AWS

A AWS implementa um modelo de segurança baseado em diferentes tipos de usuários e níveis de acesso.

### Tipos de Usuários AWS

#### 1. Usuário Raiz (Root User)
- **Características**: Poderes totais sobre a conta
- **Responsabilidades**: 
  - Gerenciamento de custos
  - Cancelamento da conta
  - Criação de outros usuários
- **Boa Prática**: Usar apenas para gestão e pagamentos

#### 2. Usuários IAM (Identity and Access Management)
- **Criação**: Feita pelo usuário raiz ou administrador IAM
- **Características**: Acessos específicos e restritos
- **Vantagem**: Maior segurança através do princípio do menor privilégio

### Estratégia de Segurança Recomendada
1. **Usuário Raiz**: Acesso limitado apenas para:
   - Gestão de pagamentos
   - Configurações de conta
   - Criação de políticas globais

2. **Usuários IAM**: Para operações do dia a dia:
   - Acessos específicos por projeto
   - Permissões granulares
   - Logs de atividades para auditoria

### Sistema de Autenticação
- **Login**: Via portal web AWS Management Console
- **Credenciais**: Email/senha (root) ou usuário/senha (IAM)
- **Segurança**: Tentativas de acesso não autorizado são registradas em logs

## Material Prático - Módulo 1

### Atividade: Criando uma Máquina Virtual com VirtualBox

**Objetivo**: Compreender a importância das Máquinas Virtuais na computação em nuvem através de prática hands-on.

#### Por que Máquinas Virtuais são importantes?
- **Conceito**: Computador lógico dentro de outro computador físico
- **Escalabilidade**: Servidores podem hospedar dezenas/centenas de VMs
- **Flexibilidade**: Permite testar diferentes sistemas operacionais
- **Fundamento da Nuvem**: Base tecnológica para serviços como AWS EC2

#### Materiais Necessários
- VirtualBox (software de virtualização gratuito)
- ISO do Ubuntu Linux (distribuição Linux popular)
- Computador com recursos suficientes (mínimo 4GB RAM recomendado)

#### Aplicações Práticas das VMs
- **Desenvolvimento**: Testar aplicações em diferentes ambientes
- **Estudos**: Aprender novos sistemas operacionais sem risco
- **Testes**: Ambientes isolados para experimentação
- **Compatibilidade**: Garantir funcionamento em múltiplas plataformas

#### Benefícios da Virtualização Local vs Nuvem
- **Local**: Controle total, sem custos recorrentes, aproveitamento de hardware existente
- **Nuvem**: Escalabilidade instantânea, sem manutenção de hardware, acesso global
