# Endereços e Segmentação no IPv4

## Meios de Envio

### Unicast (Um para Um)
- **Definição**: Comunicação entre um dispositivo de origem e um único dispositivo de destino
- **Características**:
  - Pacote tem um IP de destino específico para um único destinatário
  - IP de origem é sempre unicast, independentemente do tipo de destino
  - Faixa de endereços: 1.1.1.1 a 223.255.255.255 (com algumas reservas)

### Broadcast (Um para Todos)
- **Definição**: Um dispositivo envia mensagem para todos os dispositivos no mesmo domínio de broadcast
- **Tipos**:
  - **Broadcast limitado**: Enviado para 255.255.255.255
  - **Broadcast direcionado**: Enviado para todos os hosts de uma rede específica
- **Limitações**:
  - Roteadores não propagam broadcasts
  - Consome recursos da rede
  - Todos os hosts processam o pacote
  - Deve ser limitado para não prejudicar o desempenho

### Multicast (Um para Muitos)
- **Definição**: Um host envia um único pacote para um grupo específico de hosts inscritos
- **Características**:
  - Reduz tráfego de rede comparado ao broadcast
  - Faixa de endereços reservada: 224.0.0.0 a 239.255.255.255
  - Hosts receptores são chamados de "clientes multicast"
  - Exemplo: OSPF usa endereço multicast 224.0.0.5

---

## Tipos de Endereços IPv4

### Endereços Públicos
- **Características**:
  - Roteados globalmente na Internet
  - Únicos e exclusivos
  - Alocados por provedores de serviço (ISPs)
  - Gerenciados pela IANA e distribuídos através dos RIRs

### Endereços Privados
- **Finalidade**: Uso interno em organizações e redes domésticas
- **Faixas reservadas**:
  - **Classe A**: 10.0.0.0/8 (10.0.0.0 - 10.255.255.255)
  - **Classe B**: 172.16.0.0/12 (172.16.0.0 - 172.31.255.255)
  - **Classe C**: 192.168.0.0/16 (192.168.0.0 - 192.168.255.255)
- **Limitações**:
  - Não roteáveis na Internet
  - Requerem NAT para acesso à Internet
  - Não são únicos (podem ser reutilizados)

### NAT (Network Address Translation)
- **Função**: Traduz endereços privados em públicos e vice-versa
- **Implementação**: Geralmente no roteador que conecta LAN ao ISP
- **Benefício**: Permite que dispositivos com IPs privados acessem a Internet

### DMZ (Zona Desmilitarizada)
- **Definição**: Segmento de rede com dispositivos que precisam ser acessíveis pela Internet
- **Características**:
  - Utiliza endereços IPv4 públicos
  - Separada da rede interna por firewall
  - Exemplos: servidores web, servidores de email

### Endereços de Uso Especial

#### Loopback
- **Faixa**: 127.0.0.0/8 (geralmente 127.0.0.1)
- **Função**: Host direciona tráfego para si mesmo
- **Uso**: Testes e diagnósticos locais

#### Link-Local (APIPA)
- **Faixa**: 169.254.0.0/16
- **Função**: Autoconfiguração quando DHCP não está disponível
- **Limitação**: Uso apenas em conexões ponto a ponto

### Evolução do Endereçamento

#### Sistema Classful (Antigo)
- **Classe A**: /8 - Grandes redes (até 16 milhões de hosts)
- **Classe B**: /16 - Redes médias (até 65.000 hosts)  
- **Classe C**: /24 - Redes pequenas (até 254 hosts)

#### Sistema Classless (Atual)
- **CIDR**: Classless Inter-Domain Routing
- **Vantagem**: Uso mais eficiente do espaço de endereçamento
- **Flexibilidade**: Máscaras de sub-rede variáveis baseadas na necessidade

---

## Segmentação de Rede

### Conceitos Fundamentais

#### Domínio de Broadcast
- **Definição**: Área da rede onde broadcasts são propagados
- **Limitação**: Roteadores não propagam broadcasts
- **Problema**: Domínios grandes geram tráfego excessivo

#### Necessidade de Segmentação
- **Problemas com redes grandes**:
  - Excesso de tráfego broadcast
  - Degradação de performance
  - Dificuldade de gerenciamento
  - Questões de segurança

### Benefícios da Segmentação
1. **Redução de tráfego**: Broadcasts limitados a cada segmento
2. **Melhoria de performance**: Menos congestionamento
3. **Segurança**: Implementação de políticas por segmento
4. **Isolamento**: Problemas localizados não afetam toda a rede
5. **Gerenciamento**: Organização por localização, função ou tipo de dispositivo

---

## Subredes

### Conceito Básico
- **Definição**: Divisão de uma rede maior em redes menores
- **Método**: "Empréstimo" de bits da parte de host para criar mais redes
- **Trade-off**: Mais subredes = menos hosts por subrede

### Subnet Boundary (Limite de Octeto)

#### Exemplo com /8 → /16
- **Rede original**: 10.0.0.0/8 (16.777.214 hosts)
- **Após subdivisão**: 256 subredes /16
- **Hosts por subrede**: 65.534

#### Exemplo com /8 → /24  
- **Rede original**: 10.0.0.0/8
- **Após subdivisão**: 65.536 subredes /24
- **Hosts por subrede**: 254

### Subredes Dentro do Octeto

#### Exemplo Prático /16 → /23
- **Requisito**: 100 subredes mínimo
- **Bits emprestados**: 7 bits (2⁷ = 128 subredes)
- **Nova máscara**: 255.255.254.0 (/23)
- **Hosts por subrede**: 510 (2⁹ - 2)

#### Cálculo de Endereços
- **Primeira subrede**: 172.16.0.0/23
  - Primeiro host: 172.16.0.1
  - Último host: 172.16.1.254
  - Broadcast: 172.16.1.255

### VLSM (Variable Length Subnet Masking)
- **Definição**: Uso de máscaras de tamanhos diferentes na mesma rede
- **Objetivo**: Maximizar eficiência do uso de endereços
- **Aplicação**: Especialmente importante em redes com endereços públicos limitados
- **Benefício**: Minimiza desperdício de endereços não utilizados

### Considerações de Design
- **Crescimento futuro**: Planejar expansão da rede
- **Tipos de dispositivos**: Diferentes necessidades por segmento
- **Políticas de segurança**: Isolamento entre departamentos
- **Performance**: Balanceamento de carga entre subredes