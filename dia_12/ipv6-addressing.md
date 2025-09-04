# Endereçamento IPv6

## Relação IPv4 e IPv6

### A Coexistência
- IPv4 e IPv6 devem coexistir até que uma transição completa ocorra
- O IETF criou protocolos e ferramentas para facilitar a migração das redes

### Técnicas de Migração

**1. Dual Stack**
- Permite que IPv4 e IPv6 coexistam no mesmo segmento de rede
- Dispositivos executam ambas as pilhas de protocolo simultaneamente
- Conhecido como IPv6 nativo - rede tem conexão IPv6 direta com ISP

**2. Tunneling**
- Método de transporte de pacotes IPv6 em redes IPv4
- Pacote IPv6 é encapsulado dentro de um pacote IPv4
- Permite comunicação IPv6 através de infraestrutura IPv4 existente

**3. NAT64 (Network Address Translation 64)**
- Permite comunicação entre dispositivos IPv6 e IPv4
- Usa técnica de tradução similar ao NAT tradicional
- Facilita transição gradual entre protocolos

## Representação e tipos de endereço IPv6

### Formato de Representação

**Características Básicas:**
- Endereços têm 128 bits de comprimento
- Escritos em valores hexadecimais
- Cada 4 bits representado por um dígito hexadecimal (32 valores totais)
- Não diferencia maiúsculas de minúsculas
- **Hexteto**: segmento de 16 bits (4 valores hexadecimais)

**Formato Preferido:**
- Usa todos os 32 dígitos hexadecimais
- Exemplo: `2001:0db8:0000:00a3:ab00:0ab0:00ab:1234`

### Regras de Redução da Notação

**1. Omissão de Zeros à Esquerda**
- Remove zeros iniciais em qualquer hexteto
- Exemplos:
  - `01ab` → `1ab`
  - `09f0` → `9f0`
  - `0a00` → `a00`
  - `00ab` → `ab`

**2. Dois Pontos Duplos (::)**
- Substitui sequência contínua de hextetos de apenas zeros
- Pode ser usado apenas **uma vez** por endereço
- Recomenda-se usar na sequência mais longa de zeros
- Exemplo: `fe80:0000:0000:0000:0123:4567:89ab:cdef` → `fe80::123:4567:89ab:cdef`

### Tipos de Endereços IPv6

**1. Unicast**
- Identifica exclusivamente uma interface em dispositivo IPv6
- Pacote enviado a endereço unicast é recebido por uma única interface

**2. Multicast**
- Usado para enviar um pacote IPv6 para múltiplos destinos
- Substitui funcionalidade de broadcast do IPv4

**3. Anycast**
- Endereço unicast atribuído a múltiplos dispositivos
- Pacote é roteado para o dispositivo mais próximo com esse endereço

### Comprimento de Prefixo
- IPv6 usa apenas notação de comprimento de prefixo (sem máscara decimal)
- Varia de 0 a 128 bits
- **Recomendado para LANs:** `/64` (64 bits para rede, 64 bits para interface)
- Facilita autoconfiguração (SLAAC) e gerenciamento de sub-redes

## Configurações e Endereçamento GUAs e LLAs

### Global Unicast Address (GUA)

**Características:**
- Semelhante a endereços IPv4 públicos
- Globalmente únicos e roteáveis na Internet
- Podem ser configurados estática ou dinamicamente
- Atualmente usam prefixo `2000::/3` (primeiro dígito hexadecimal: 2 ou 3)

**Estrutura do GUA:**

**1. Global Routing Prefix**
- Atribuído pelo provedor (ISP) ao cliente
- Comum: prefixo `/48` para clientes
- Exemplo: `2001:db8:acad::/48`

**2. Subnet ID**
- Usado pela organização para identificar sub-redes
- Com prefixo `/64`: ID de sub-rede de 32 bits
- Permite 4,3 bilhões de sub-redes por organização

**3. Interface ID**
- Equivalente à parte do host no IPv4
- Recomendado: 64 bits (18 quintilhões de dispositivos por sub-rede)
- Permite autoconfiguração de endereços
- Endereços all-0s e all-1s são válidos no IPv6

### Link Local Address (LLA)

**Características:**
- **Obrigatório** para toda interface IPv6
- Usado para comunicação no mesmo link (sub-rede)
- **Não roteável** além do link de origem
- Criado automaticamente se não configurado manualmente

**Funcionalidades:**
- Permite comunicação entre dispositivos IPv6 na mesma sub-rede
- Inclui comunicação com gateway padrão (roteador)
- Funciona mesmo sem GUA configurado
- Essencial para protocolos de descoberta de vizinhos

### Unique Local Address (ULA)

**Características:**
- Faixa: `fc00::/7` a `fdff::/7`
- Ainda não amplamente implementado
- Semelhante a endereços privados RFC 1918 do IPv4

**Uso:**
- Endereçamento local dentro de um site
- Dispositivos que não precisam acesso externo
- Não são roteados globalmente
- Não traduzidos para endereços IPv6 globais

## Subredes e Endereços Multicast

### Endereços Multicast IPv6

**Características:**
- Prefixo: `ff00::/8`
- Usado para enviar pacote a múltiplos destinos
- Apenas endereços de destino (nunca origem)
- Substitui broadcast do IPv4

### Tipos de Endereços Multicast

**1. Endereços Multicast Conhecidos**

**`ff02::1` - Todos os Nós**
- Todos os dispositivos IPv6 ingressam neste grupo
- Equivale ao broadcast IPv4
- Pacote é recebido por todas as interfaces IPv6 no link

**`ff02::2` - Todos os Roteadores**
- Todos os roteadores IPv6 ingressam automaticamente
- Ativado com comando `ipv6 unicast-routing`
- Pacote processado por todos os roteadores no link

**2. Endereços Multicast de Nó Solicitado**
- Mapeado para endereço multicast Ethernet especial
- Permite filtragem eficiente na placa de rede
- Reduz processamento desnecessário no dispositivo

### Criação de Sub-redes

**Vantagens do IPv6:**
- Endereços de 128 bits suportam milhões de sub-redes
- Exemplo com prefixo `/48`:
  - **ID de sub-rede:** 16 bits = 65.536 sub-redes
  - **Interface ID:** 64 bits = 18 quintilhões de hosts por sub-rede

**Processo de Sub-rede:**
- Prefixo de roteamento global permanece fixo
- Apenas hexteto de ID da sub-rede é incrementado
- Exemplo: `2001:db8:acad:0001::/64`, `2001:db8:acad:0002::/64`

### Alocação de Sub-redes

**Características:**
- Links seriais usam mesmo comprimento de prefixo que LANs (`/64`)
- Conservação de endereços não é preocupação no IPv6
- Administrador deve criar esquema lógico para endereçamento
- Cada sub-rede `/64` fornece endereços muito além do necessário

**Exemplo Prático:**
- Organização com `2001:db8:acad::/48`
- Sub-redes: `0001` a `0005` para diferentes segmentos
- Cada sub-rede suporta bilhões de dispositivos