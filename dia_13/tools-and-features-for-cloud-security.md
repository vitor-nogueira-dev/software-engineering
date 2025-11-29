# Ferramentas e características para segurança na nuvem

## Modelo de responsabilidade compartilhada

O **Modelo de Responsabilidade Compartilhada** da AWS define claramente as responsabilidades de segurança entre o provedor (AWS) e o cliente:

### Divisão de responsabilidades

- **Segurança DA nuvem (AWS)**: A AWS é responsável por proteger toda a infraestrutura física que executa os serviços na nuvem, incluindo hardware, software, redes e instalações.

- **Segurança NA nuvem (Cliente)**: O cliente é responsável pela segurança dos dados, aplicações e configurações que utiliza. A extensão dessa responsabilidade varia conforme o tipo de serviço:
  - **IaaS** (ex: EC2): Exige mais configurações de segurança pelo cliente
  - **PaaS/SaaS**: Responsabilidades mais compartilhadas

### Importância do modelo

- Torna a plataforma mais segura para ambas as partes
- Define claramente o que cada lado deve gerenciar
- Protege provedor e cliente de falhas de segurança
- Reduz problemas operacionais através da clareza de responsabilidades

> **Ponto de atenção**: Comportamentos humanos como compartilhamento indiscriminado de senhas ou hospedagem de conteúdo protegido por direitos autorais destacam a importância de cada parte cumprir suas responsabilidades.

## Autenticação multifator (MFA)

A **Autenticação Multifator (MFA)** é um recurso do IAM que adiciona uma camada extra de segurança ao processo de login, exigindo não apenas senha, mas também um código adicional.

### Tipos de MFA disponíveis

1. **Dispositivos MFA virtuais**: Aplicativos que geram códigos de 6 dígitos através de algoritmos. Exemplo: Google Authenticator, Authy.

2. **Chaves de segurança U2F**: Dispositivo físico conectado via USB que usa padrão aberto. O login só é concluído com a chave conectada fisicamente.

3. **Hardware MFA**: Dispositivo físico dedicado que gera códigos numéricos de 6 dígitos.

4. **MFA baseado em SMS**: Código enviado via mensagem de texto (menos recomendado).

### Características importantes

- Pode ser habilitado para qualquer usuário, incluindo o usuário raiz
- Cada dispositivo MFA é atribuído exclusivamente a um único usuário
- Aumenta significativamente a segurança da conta
- **Recomendação**: Sempre habilitar MFA para o usuário raiz

## AWS Identity and Access Management (IAM)

O **IAM** é o sistema de controle de identidade e acesso da AWS, permitindo gerenciar de forma granular quem pode acessar quais recursos.

### Principais funcionalidades

- Criar múltiplos usuários a partir da conta raiz
- Definir permissões específicas por usuário ou grupo
- Controlar níveis de acesso (leitura, escrita, exclusão, etc.)
- Criar políticas personalizadas de segurança

### Recursos do IAM

- Acesso ao Console de Gerenciamento da AWS
- Acesso programático via API/CLI
- Autenticação Multifator (MFA)
- Gerenciamento de grupos de usuários
- Políticas de acesso granulares
- Federação de identidades
- Integração com AWS STS (Security Token Service)

### Melhores práticas

1. **Usar o usuário raiz o mínimo possível**: Criar usuários administrativos para tarefas do dia a dia
2. **Princípio do menor privilégio**: Conceder apenas as permissões necessárias para cada usuário
3. **Usar grupos**: Facilita o gerenciamento de permissões para múltiplos usuários
4. **Habilitar MFA**: Especialmente para usuários com privilégios elevados
5. **Rotacionar credenciais**: Alterar senhas e chaves de acesso periodicamente

> **Custo**: O IAM é gratuito! Porém, os serviços que você acessa através dele podem ter custos.

## AWS WAF (Web Application Firewall)

O **AWS WAF** é um firewall de aplicações web que monitora e controla o tráfego HTTP/HTTPS, protegendo aplicações contra ataques comuns.

### Serviços integrados

- Amazon CloudFront
- API REST do Amazon API Gateway
- Application Load Balancer
- AWS AppSync GraphQL API
- Amazon ECS (via load balancer)

### Capacidades de proteção

- **Filtragem por IP**: Controla quais endereços IP podem fazer solicitações
- **Análise de strings**: Bloqueia requisições baseadas em padrões de consulta
- **Páginas de erro customizadas**: Exibe mensagens personalizadas quando há bloqueio
- **Proteção de conteúdo**: Vai além do firewall tradicional, protegendo também o conteúdo hospedado
- **Regras personalizáveis**: Define condições específicas de bloqueio/permissão

### Diferencial

Ao contrário dos firewalls tradicionais que apenas controlam portas e protocolos, o AWS WAF analisa o conteúdo das requisições, oferecendo proteção em camada de aplicação (Layer 7).

## AWS Key Management Service (KMS)

O **AWS KMS** é o serviço gerenciado de criação e controle de chaves criptográficas da AWS.

### Funcionalidades principais

- **Criação de chaves**: Gera chaves criptográficas seguras
- **Gerenciamento**: Controla o uso e ciclo de vida das chaves
- **Criptografia/Descriptografia**: Processa dados de forma segura
- **Auditoria**: Integração com CloudTrail para logs de uso das chaves

### Características de segurança

- Usa módulos HSM (Hardware Security Modules) validados pelo FIPS 140-2
- Serviço resiliente e altamente disponível
- Integrado com a maioria dos serviços AWS que usam criptografia
- Registra todos os usos das chaves para conformidade e auditoria

### Casos de uso

- Criptografia de dados em repouso (S3, EBS, RDS)
- Criptografia de dados em trânsito
- Gerenciamento centralizado de chaves
- Conformidade com requisitos regulatórios (LGPD, GDPR, etc.)

### Integração com outros serviços

Praticamente todos os serviços AWS que utilizam criptografia se integram ao KMS, permitindo:
- Controle centralizado sobre dados criptografados
- Auditoria completa do uso de chaves via CloudTrail
- Políticas de acesso granulares para diferentes equipes
