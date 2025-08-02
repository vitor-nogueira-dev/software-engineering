# Infraestrutura Básica de Segurança para Web

## Introdução a aspectos de segurança em aplicações web

A segurança em ambientes web tornou-se crítica com a migração massiva dos negócios para a internet. Os principais problemas de segurança em nuvem incluem:

### Principais Categorias de Problemas:

| Categoria | Descrição |
|-----------|-----------|
| **Segurança de rede** | Transferência de dados, firewalls e configurações de segurança |
| **Interface** | APIs, administração do ambiente e mecanismos de autenticação |
| **Segurança de dados** | Confidencialidade, integridade e disponibilidade (CIA) |
| **Virtualização** | Isolamento de recursos e vulnerabilidades do hypervisor |
| **Governança** | Perda de controle administrativo e dependência de serviços |
| **Conformidade** | SLA, auditoria e transparência dos serviços |
| **Questões legais** | Localização dos dados e aspectos forenses |

### Diferença na Responsabilidade:
- **Solução local**: Empresa é responsável por toda a segurança
- **Solução em nuvem**: Responsabilidade compartilhada com o provedor

## Principais componentes da infraestrutura Cloud

A infraestrutura cloud é composta por centenas ou milhares de máquinas físicas conectadas em rede, cada uma executando múltiplas máquinas virtuais conforme a capacidade do hardware.

### Componentes Essenciais:

- **Hipervisor**: Virtual Machine Manager que compartilha recursos físicos entre múltiplos inquilinos
- **Software de implantação**: Facilita a implantação e integração de aplicações na nuvem
- **Software de gerenciamento**: Mantém e configura a infraestrutura das aplicações
- **Rede**: Conecta serviços pela internet, personalizável pelo cliente
- **Servidor**: Gerencia compartilhamento de recursos, alocação e segurança
- **Armazenamento**: Mantém múltiplas réplicas para maior confiabilidade

### Principais Benefícios:
1. **Redução de custos**: Elimina necessidade de comprar infraestrutura completa
2. **Flexibilidade**: Escalabilidade de hardware e software conforme demanda
3. **Abstração**: Facilidade de acesso sem conhecimento técnico da infraestrutura

## Recursos de alta disponibilidade para todos os componentes da infraestrutura Web

A alta disponibilidade é essencial para aplicações críticas na nuvem, garantindo acesso contínuo aos recursos mesmo diante de falhas.

### Características da Alta Disponibilidade:
- **Definição**: Capacidade do provedor entregar serviços continuamente ao cliente
- **Necessidade**: 61% das atividades comerciais no Reino Unido usam serviços cloud
- **Desafios**: Segurança, gerenciamento de riscos e manutenção da disponibilidade

### Soluções Implementadas:
- Armazenamento redundante
- Links de acesso múltiplos
- Sistemas geradores de energia
- Servidores redundantes
- Infraestrutura projetada para zero interrupção

## Infraestrutura de Hardware: Plataformas de Hardware, virtualização e consolidação de servidores

### Virtualização:
Permite executar cargas de trabalho em computadores com menor capacidade física através de máquinas virtuais, centralizando o conceito de cloud computing.

**Relação com Cloud**: Embora relacionados, virtualização e cloud computing são conceitos distintos. É possível ter cloud sem virtualização, mas não é comum nem eficiente.

### Estrutura dos Data Centers:
- **Manifestação física**: Data centers abrigam servidores que oferecem serviços cloud
- **Base de comunicação**: Infraestrutura de rede interliga servidores físicos em grande escala
- **Gerenciamento**: Cada servidor físico contém múltiplas VMs gerenciadas por hypervisor

### Consolidação de Servidores:
**Definição**: Organizar recursos subutilizados em quantidade menor de máquinas.

**Benefícios**:
- Economia de hardware
- Melhor gerenciamento da infraestrutura
- Menos espaço físico ocupado
- Redução de gastos com eletricidade e manutenção
- Maior flexibilidade e escalabilidade

**Taxa de Consolidação**: Número de servidores virtuais que "cabem" em um servidor físico, variando conforme capacidade de processamento, memória e utilização de recursos.

**Impacto Ambiental**: Elemento essencial para estratégias de TI verde, reduzindo custos e trazendo