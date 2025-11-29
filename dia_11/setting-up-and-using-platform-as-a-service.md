# Configuração e uso de plataformas como serviços   

## Serviços gerenciados na AWS

### O que são serviços gerenciados?

A AWS oferece serviços que podem ser gerenciados e monitorados de forma centralizada, conhecidos como **AWS Managed Services (AMS)**. Esses serviços fornecem:

- Métricas e logs detalhados
- Estatísticas de uso e performance
- Recomendações baseadas em boas práticas

### Principais benefícios do AMS

**Segurança e Prevenção**
- Monitoramento 24/7 (sem períodos de inatividade)
- Detecção e prevenção de incidentes operacionais
- Redução de riscos sem comprometer a agilidade dos processos

**Observabilidade**
- Acompanhamento contínuo dos workloads
- Redução de problemas que afetam performance e disponibilidade
- Análise comparativa com políticas de segurança dinâmicas

**Conformidade e Certificações**
A AWS auxilia na conquista de certificações importantes:
- PCI-DSS
- HIPAA e HiTrust
- GDPR
- ISO
- SOC 1, 2 e 3

**Aprendizado Contínuo**
- O sistema aprende com as interações dos usuários
- Atualização constante sobre ameaças digitais
- Sugestões personalizadas baseadas em testes e evolução contínua

### Por que usar serviços gerenciados?

Com o AMS, a equipe de desenvolvimento pode focar no que realmente importa:
- Inovação
- Criação acelerada de aplicações
- Menos preocupação com infraestrutura operacional

A AWS cuida do monitoramento, segurança e conformidade, permitindo que você se concentre em desenvolver soluções inovadoras.

---

## Plataformas como Serviços - PaaS

### O que é PaaS?

**PaaS (Platform as a Service)** é um dos três principais tipos de serviços em nuvem, junto com:
- **SaaS** (Software as a Service)
- **IaaS** (Infrastructure as a Service)

### Características do PaaS

O PaaS oferece um **ambiente completo de desenvolvimento**, onde você tem acesso a:

**Ferramentas de Desenvolvimento**
- Bibliotecas prontas para uso
- Ambientes de teste
- Sistemas de deploy automatizado
- Sistema operacional próprio

**Vantagens**
- ✅ Não precisa provisionar ou configurar infraestrutura
- ✅ Não precisa gerenciar hardware ou sistemas operacionais
- ✅ Foco total no desenvolvimento das aplicações
- ✅ Controle completo sobre as aplicações implantadas

### Diferencial do PaaS

> O desenvolvedor não administra a infraestrutura subjacente, mas tem controle total das aplicações e suas configurações. Isso permite concentrar esforços na implantação e gerenciamento das aplicações, não na infraestrutura.

**Resultado prático**: desenvolvedores podem criar aplicações inovadoras em tempo recorde, focando no que fazem de melhor — desenvolver!

---

## Exemplos de aplicações com AWS Lightsail

### O que é AWS Lightsail?

O **AWS Lightsail** é um serviço simplificado que oferece:
- Instâncias VPS (Servidores Privados Virtuais)
- Armazenamento
- Contêineres
- Bancos de dados
- Economia expressiva nos custos

### Casos de uso práticos

**1. Windows Server rápido**
- Windows Server 2016, 2012 R2 ou 2016 com SQL Express
- Instalação facilitada de software Windows
- Acesso via RDP com um único clique

**2. WordPress em minutos**
- Uma das plataformas mais populares do mundo
- Instalação com poucos cliques
- Instâncias pré-configuradas e otimizadas
- Alta performance e segurança desde o início

**3. E-commerce com Magento 2**
- VPS pré-configurado para loja online
- Plataforma de código aberto líder em e-commerce
- Criar loja online atraente de forma rápida e econômica
- Escalável ao longo do tempo

**4. Servidor de e-mail**
- Servidor de recebimento (POP3/IMAP) ou envio de e-mails
- Software gratuito ou comercial (Postfix, Exim, Dovecot, Zimbra, Exchange)
- Basta iniciar uma instância e instalar o software desejado

**5. Ambientes de teste e desenvolvimento**
- Criar servidores rapidamente
- Ambientes de desenvolvimento, teste ou produção
- Fácil criação e desativação de servidores

---

## Pilha e modelos de sistemas com Lightsail

### Pilhas pré-configuradas

O AWS Lightsail oferece **pilhas de aplicação prontas para uso**:

**Aplicações disponíveis**
- WordPress
- Plesk
- LAMP (Linux, Apache, MySQL, PHP)
- Node.js

**Sistemas operacionais**
- Amazon Linux
- Windows Server
- Ubuntu
- CentOS

### Integração com AWS CloudFormation

O Lightsail trabalha em conjunto com o **AWS CloudFormation** para:

**Criar recursos automaticamente:**
- Instância Amazon EC2 a partir de uma AMI (Amazon Machine Image)
- Volume EBS (Elastic Block Store) do sistema
- Grupo de segurança para a instância

### Acesso às pilhas

Você pode acessar as pilhas do CloudFormation de duas formas:
1. Console do AWS Lightsail
2. Console do AWS CloudFormation

**⚠️ Importante:** As pilhas criam recursos permanentes no Amazon EC2. A AWS recomenda **não excluir as pilhas**. Se precisar remover recursos, delete apenas os recursos do EC2, mantendo as pilhas do CloudFormation intactas.

---

## Configuração de uma aplicação em um serviço gerenciado

### Objetivo do AWS Lightsail

Permitir que você coloque **aplicações web ou sites em funcionamento com poucos cliques**, de forma acelerada.

### Composição dos planos

Cada pacote do AWS Lightsail inclui:

**Recursos básicos:**
- 🖥️ Servidor Virtual Privado (VPS)
- 💾 Memória RAM determinada
- ⚙️ VCPU própria
- 💿 Armazenamento SSD (unidades sólidas)
- 🌐 Endereços IP estáticos
- 🔀 Gerenciamento de DNS em 3 zonas diferentes

### Principais recursos do Amazon Lightsail

| Recurso             | Descrição                                           |
| ------------------- | --------------------------------------------------- |
| **Instâncias**      | Servidores virtuais otimizados e prontos para uso   |
| **Bancos de dados** | Gerenciamento facilitado de dados                   |
| **Load Balancers**  | Distribuição de carga para alta disponibilidade     |
| **Customização**    | Integração com outros serviços AWS via conexões VPC |

### Conclusão

O AWS Lightsail oferece um **conjunto otimizado de recursos** onde:
- Instâncias, bancos de dados e load balancers facilitam a disponibilidade da aplicação
- É possível customizar com outros serviços AWS
- A integração ocorre através de conexões VPC (Virtual Private Cloud)

**Resultado:** Ambiente completo, gerenciado e escalável para suas aplicações, com foco na simplicidade e eficiência operacional.
