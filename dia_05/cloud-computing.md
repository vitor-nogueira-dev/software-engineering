# Computação na Nuvem

## Visão geral dos serviços de computação

### O que é Computação em Nuvem?
A computação em nuvem pode ser entendida como **qualquer serviço web acessível via navegador**, independente da localização geográfica do usuário. Os serviços mais conhecidos incluem:
- **Armazenamento** (storage)
- **Máquinas virtuais** (VMs)
- **Hospedagem de sites**
- **Capacidade computacional**

### Vantagens para as Empresas
A contratação de serviços em nuvem oferece benefícios significativos:
- **Economia de capital**: Evita compra de hardware que se torna obsoleto
- **Pagamento por uso**: Paga-se apenas pelo que é utilizado
- **Acesso à tecnologia de ponta**: Hardware mais moderno sem investimento inicial
- **Flexibilidade financeira**: Recursos podem ser aplicados estrategicamente

### Principais Provedores
O mercado de nuvem é dominado por grandes empresas:
- **Amazon Web Services (AWS)** - Líder de mercado
- **Google Cloud Platform**
- **Microsoft Azure**
- **Oracle Cloud**
- **IBM Cloud**
- **Red Hat**

### Benefícios da Capacidade Computacional na Nuvem
- **Dinâmica e elástica**: Recursos se ajustam automaticamente à demanda
- **Sem ociosidade**: Hardware otimizado constantemente
- **Escalabilidade**: Aumento/redução automática conforme necessidade
- **Economia**: "Não precisa pagar pelo que não está usando"

---

## Tipos de Instâncias Amazon EC2

### O que é EC2?
**EC2 (Elastic Compute Cloud)** é o serviço de computação da AWS:
- **Elastic**: Recursos podem ser aumentados/diminuídos dinamicamente
- **Compute**: Refere-se à capacidade computacional
- **Cloud**: Recursos oferecidos na nuvem

### Conceito de Instâncias
- **Instâncias** = Configurações diferentes de máquinas virtuais
- Cada instância é otimizada para tipos específicos de workload
- Variam em CPU, memória, armazenamento e rede

### Modalidades de Contratação

#### 1. **Instâncias Sob Demanda (On-Demand)**
- **Cobrança**: Por hora ou por segundo
- **Características**:
  - Sem contratos de fidelidade
  - Sem pagamentos antecipados
  - Capacidade ajustável conforme necessidade
- **Ideal para**: Cargas de trabalho imprevisíveis

#### 2. **Instâncias Spot**
- **Cobrança**: Grandes descontos (até 90%)
- **Características**:
  - Utiliza capacidade ociosa da AWS
  - Pode ser interrompida a qualquer momento
- **Ideal para**: Workloads flexíveis e tolerantes a interrupções

#### 3. **Instâncias Reservadas**
- **Cobrança**: Descontos significativos (até 75%)
- **Características**:
  - Compromisso de 1 ou 3 anos
  - Possibilidade de modificar família, SO, etc.
- **Ideal para**: Cargas de trabalho previsíveis e estáveis

#### 4. **Savings Plans**
- **Modelo**: Preço flexível com compromisso de uso
- **Características**:
  - Compromisso em USD/hora por 1-3 anos
  - Compatível com EC2 e Fargate
  - Flexibilidade para mudar tipos de instância

#### 5. **Hosts Dedicados**
- **Características**:
  - Servidores físicos de uso exclusivo
  - Permite uso de licenças vinculadas ao hardware
- **Ideal para**: Compliance e requisitos de licenciamento específicos

---

## Escalabilidade Amazon EC2

### Por que Escalabilidade é Importante?
Aplicações web têm **cargas de trabalho variáveis**:
- Volume de requisições muda durante o dia
- Diferenças entre aplicações
- Picos e vales de uso imprevisíveis

### Planos de Escalabilidade AWS
Permitem configurar **escalabilidade automática** para recursos AWS escaláveis:
- Pesquisa e configuração automática de recursos
- Integração com AWS CloudFormation
- Templates de pilha para coleções de recursos

### EC2 Auto Scaling
**Funcionalidade principal**: Iniciar e terminar instâncias automaticamente

**Benefícios**:
- **Detecção automática**: Encontra recursos que podem ser escalados
- **Escalabilidade dinâmica**: Ajusta capacidade baseado em métricas
- **Recomendações integradas**: Otimiza performance, custos ou ambos
- **Escalabilidade preditiva**: Antecipa picos regulares de demanda

### Como Funciona
1. **Monitoramento**: Métricas de utilização e throughput
2. **Decisão**: Baseada em thresholds configurados
3. **Ação**: Adiciona ou remove instâncias automaticamente
4. **Balanceamento**: Distribui carga entre instâncias disponíveis

---

## Direcionamento de Tráfego para EC2

### Importância do Direcionamento
O direcionamento de tráfego é **vital** para:
- Conectar domínios web às instâncias EC2
- Distribuir carga entre múltiplas instâncias
- Manter performance independente do cenário de uso

### Cenários de Uso

#### 1. **Acesso via Domínio Web**
- Configuração de DNS para apontar para instâncias EC2
- Permite acesso externo através de URLs amigáveis
- Essencial para aplicações web públicas

#### 2. **Auto Scaling Integration**
- **Processo**: Quando instância atinge capacidade mínima
- **Ação**: Auto-scaling direciona carga para outras instâncias
- **Resultado**: Mantém performance consistente

### Recursos de Escalabilidade Dinâmica

#### **Detecção de Recursos**
- AWS Auto Scaling encontra recursos escaláveis automaticamente
- Identifica aplicações que se beneficiariam de escalabilidade

#### **Métricas de Escalabilidade**
- **Métricas padrão**: CPU, memória, rede
- **Métricas customizadas**: Específicas da aplicação
- **Thresholds configuráveis**: Pontos de ação para scale-up/down

#### **Estratégias de Otimização**
- **Performance**: Máxima velocidade de resposta
- **Custo**: Mínimo gasto operacional
- **Balanceado**: Equilibrio entre performance e custo

#### **Escalabilidade Preditiva**
- **Funcionalidade**: Antecipa picos regulares
- **Benefício**: Escalabilidade mais rápida
- **Uso**: Para padrões de tráfego conhecidos
