# Eficiência e escalabilidade em infraestrutura de TI

## Pré-história: a época do OnPremises

### Mainframe
- **Características**: Infraestrutura antiga e cara
- **Desvantagens**:
  - Necessita de local amplo e seguro
  - Licenciamento caro (IBM)
  - **Risco de ponto único de falha**: se o mainframe para, tudo é impactado
  - Todas as camadas da aplicação ficam em uma única infraestrutura

### Plataforma Distribuída OnPremise
- **Conceito**: Alternativa mais "barata" ao mainframe
- **Características**:
  - Segregação de necessidades em servidores distintos
  - Uso de sistemas operacionais versáteis (Windows Server, Linux)
  - Distribuição de aplicações entre vários servidores
  - **Gestão própria**: empresa adquire/aluga datacenters

#### Problemas do modelo OnPremise tradicional:
- Compra de servidores "parrudos" com meses de antecedência
- **Recursos ociosos**: servidores enormes ficavam subutilizados
- Desperdício de energia elétrica e recursos humanos
- Aplicações implantadas aos poucos, mas servidor consome recursos 24/7

## Chegada do Hypervisor

### Tecnologia de Virtualização
- **Hypervisor**: Aplicação específica (ex: Hyper-V, VMware) que permite criar máquinas virtuais
- **Funcionamento**: Usa recursos físicos (CPU, RAM, disco) para criar "mini servidores"

#### Vantagens:
- Múltiplos "mini servidores" em uma única máquina física
- Cada VM pode ter sistema operacional diferente do HOST
- Melhor isolamento: 1 aplicação para 1 "mini servidor"
- Remove dependência do SO do HOST

#### Desvantagens persistentes:
- Ainda há problema de recursos ociosos até utilização completa
- **Overhead de SO**: cada VM precisa de seu próprio sistema operacional
- Tempo de inicialização (como ligar um computador)
- **Gestão complexa**: patches de segurança em múltiplos SOs (HOST + todas as VMs)

## Eficiência organizacional: Multi Tenancy

### Evolução para Cloud

#### Cloud Privada
- **Conceito**: "Nuvem privada" usando infraestrutura própria
- **Características**:
  - Aplicações como serviços web (mesmo internos)
  - Subdivisão de servidores através de virtualização
  - Preparação para migração à nuvem pública
  - Mantém datacenter próprio (custos de terreno, energia, segurança, funcionários)

#### Cloud Pública
- **Provedores**: AWS, Microsoft Azure, GCP
- **Vantagens**:
  - **Pagamento por uso**: sem recursos ociosos
  - Sem necessidade de infraestrutura própria
  - Sem custos de manutenção física
  - Maior eficiência: múltiplos clientes utilizam recursos rapidamente
  - Contratos de longa duração reduzem custos

## Chegada dos Containers

### Tecnologia de Containers (Docker)
- **Diferença fundamental**: Containers usam capacidades do SO do HOST
- **Não precisam de SO próprio**: diferente das VMs

#### Vantagens dos Containers:
1. **Inicialização quase instantânea**: sem boot de SO
2. **Manutenção simplificada**: patches apenas no SO HOST
3. **Portabilidade**: Docker instalável em qualquer SO
4. **Compatibilidade Linux**: WSL permite Linux em Windows Server

#### Limitação:
- Aplicações devem ser compatíveis com o SO do HOST
- **Solução**: Uso do Linux (padrão para containers) resolve a portabilidade

### Comparação Visual dos Modelos:

| Aspecto           | Máquina Física        | Máquinas Virtuais           | Containers                |
| ----------------- | --------------------- | --------------------------- | ------------------------- |
| **SO**            | 1 SO para todas apps  | 1 SO por VM + HOST          | Compartilha SO HOST       |
| **Inicialização** | Rápida (apps diretas) | Lenta (boot do SO)          | **Instantânea**           |
| **Recursos**      | Compartilhados        | Isolados por VM             | Compartilhados eficientes |
| **Manutenção**    | 1 SO apenas           | HOST + todos os SOs das VMs | **Apenas SO HOST**        |
| **Isolamento**    | Baixo                 | Alto                        | Médio/Alto                |

## Escalabilidade: OnPremises x Containers

### Evolução da Eficiência

#### OnPremises Tradicional:
- ❌ Recursos ociosos por longos períodos
- ❌ Compra antecipada de hardware
- ❌ Custos fixos independente do uso
- ❌ Baixa agilidade para provisionamento

#### Containers + Cloud:
- ✅ **Pagamento por uso real**
- ✅ **Provisionamento instantâneo**
- ✅ **Portabilidade entre ambientes**
- ✅ **Menor overhead operacional**

### Cenários de Uso dos Containers:
- **OnPremise**: Para empresas que mantêm infraestrutura própria
- **Cloud Privada**: Preparação para migração
- **Cloud Pública**: Máxima eficiência e economia