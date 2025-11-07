# Computação na Nuvem sem Servidor

## Sistema de Mensagens e Enfileiramento

### Amazon Simple Queue Service (SQS)

O **Amazon Simple Queue Service (SQS)** é um serviço fundamental para o funcionamento da arquitetura serverless na AWS. Ele atua como um **serviço de filas de mensagens gerenciado** que permite:

- **Desacoplamento** de microsserviços e sistemas distribuídos
- **Escalabilidade** de aplicações sem servidor
- **Transporte e organização** de requisições para serviços serverless

#### Características principais:

- **Capacidade**: Processa qualquer volume de mensagens sem perdas
- **Configuração**: Rápida implementação via console, SDK ou CLI
- **Integração**: Funciona nativamente com outros serviços AWS (especialmente Lambda)

#### Tipos de filas:

1. **Filas Padrão**:
   - Melhor performance de saída
   - Melhor classificação
   - Ao menos uma entrega garantida

2. **Filas FIFO**:
   - Mensagens processadas exatamente uma vez
   - Ordem de envio preservada (First In, First Out)

#### Benefícios do SQS:

- **Elimina sobrecarga administrativa**: AWS gerencia toda infraestrutura
- **Segurança**: Criptografia Server-Side Encryption (SSE) para dados sensíveis
- **Confiabilidade**: Transmissão sem perda de mensagens
- **Escalabilidade elástica**: Ajuste automático conforme demanda
- **Custo-benefício**: Pagamento baseado no uso

## Computação sem servidor

### Conceito Serverless

A **computação sem servidor (serverless)** é uma abstração onde o desenvolvedor não precisa se preocupar com a infraestrutura subjacente. É importante entender que:

> **"Sem servidor" é uma abstração para o cliente** - os servidores ainda existem, mas são totalmente gerenciados pelo provedor de nuvem.

#### Características principais:

- **Cobrança baseada em uso**: Paga apenas pelos recursos consumidos durante a execução
- **Escalabilidade automática**: Dimensionamento baseado na demanda
- **Foco no código**: Desenvolvedores concentram-se apenas na lógica de negócio
- **Não há provisionamento**: Sem necessidade de reservar servidores ou largura de banda

#### Componentes necessários:

Para funcionar adequadamente, serviços serverless dependem de:
- **Banco de dados** gerenciados
- **Armazenamento** em nuvem
- **FaaS (Function as a Service)**: Execução de código sem armazenamento de arquivos

## AWS Lambda

### Função como Serviço (FaaS)

O **AWS Lambda** é o serviço serverless mais popular da AWS, permitindo executar código sem provisionar ou gerenciar servidores.

#### Funcionalidades principais:

- **Infraestrutura gerenciada**: Alta disponibilidade automática
- **Administração completa**: Manutenção de servidor e SO pela AWS
- **Escalabilidade automática**: Provisionamento baseado na demanda
- **Monitoramento integrado**: Logs e métricas automáticos

#### Vantagens para desenvolvedores:

1. **Flexibilidade**: Suporta múltiplas linguagens de programação
2. **Simplicidade**: Apenas fornece o código, AWS executa
3. **Custo eficiente**: Cobrança apenas durante execução da função
4. **Gatilhos automatizados**: Execução baseada em eventos específicos

#### Diferencial de cobrança:

- **EC2**: Cobrança por tipo de instância + tempo de execução total
- **Lambda**: Cobrança apenas pelo tempo de execução específico da função

## Contêiners

### Estrutura e Funcionamento

Os **contêineres** são a tecnologia base que permite o funcionamento do Lambda de forma eficiente.

#### Analogia conceitual:

Assim como contêineres de transporte marítimo:
- **Padronização**: Formato uniforme para diferentes cargas
- **Isolamento**: Cada contêiner é independente
- **Transporte eficiente**: Dependem de um "navio" (host) para funcionar

#### Vantagens dos contêineres vs. Máquinas Virtuais:

| Aspecto           | Contêineres         | Máquinas Virtuais |
| ----------------- | ------------------- | ----------------- |
| **Kernel**        | Compartilhado       | Individual        |
| **Recursos**      | Menor consumo       | Maior consumo     |
| **Inicialização** | Mais rápida         | Mais lenta        |
| **Gestão**        | Centralizada e ágil | Mais complexa     |

#### Benefícios econômicos:

- **Economia de recursos**: Kernel compartilhado reduz uso de CPU, RAM e armazenamento
- **Maior densidade**: Mais aplicações por servidor físico
- **Gestão simplificada**: Controle centralizado via host comum

## AWS Elastic Beanstalk

### Plataforma de Implantação Completa

O **AWS Elastic Beanstalk (EBS)** é uma plataforma que simplifica a implantação e monitoramento de aplicações, mantendo controle total sobre os recursos.

#### Funcionamento:

1. **Input**: Desenvolvedor fornece apenas o código da aplicação
2. **Processamento automático**:
   - Provisionamento de capacidade
   - Balanceamento de carga
   - Configuração de escalabilidade
   - Monitoramento de saúde
3. **Output**: Aplicação funcionando com infraestrutura otimizada

#### Linguagens e tecnologias suportadas:

- **Linguagens**: Java, .NET, PHP, Node.js, Python, Ruby, Go
- **Contêineres**: Docker
- **Servidores web**: Apache, Nginx, Passenger, IIS

#### Métodos de acesso:

- **Console AWS**: Interface gráfica
- **CLI**: Linha de comando para automação

#### Benefícios principais:

1. **Setup ágil**: Implementação automatizada de infraestrutura
2. **Controle avançado**: Escalabilidade automática com configurações personalizáveis
3. **Produtividade**: Desenvolvedor foca apenas no código
4. **Custo zero**: EBS não cobra taxas adicionais (apenas recursos AWS consumidos)
5. **Atualizações automáticas**: Plataforma sempre com patches mais recentes

#### Modelo de cobrança:

- **EBS**: Gratuito
- **Recursos utilizados**: Cobrados conforme uso (armazenamento, banco de dados, etc.)

### Casos de uso ideais:

- **Desenvolvimento rápido**: Prototipagem e MVPs
- **Aplicações web tradicionais**: Sites e APIs
- **Ambientes de teste**: Criação rápida de ambientes temporários
- **Migração para nuvem**: Transição gradual de aplicações legadas