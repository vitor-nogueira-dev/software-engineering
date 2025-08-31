# Comutação Ethernet

## Objetivo e Estrutura

### Tecnologia Ethernet - Características Principais

A Ethernet é uma família de tecnologias de rede definida pelos padrões **IEEE 802.2** e **802.3**, utilizada em:
- **LANs com fio**: Par trançado (UTP/STP), fibra óptica, cabo coaxial (legado)
- **LANs sem fio (WLANs)**
- **Camadas de operação**: Enlace e Física

### Larguras de Banda Suportadas

| Velocidade | Descrição            |
| ---------- | -------------------- |
| 10 Mbit/s  | Ethernet clássica    |
| 100 Mbit/s | Fast Ethernet        |
| 1 Gbit/s   | Gigabit Ethernet     |
| 10 Gbit/s  | 10 Gigabit Ethernet  |
| 40 Gbit/s  | 40 Gigabit Ethernet  |
| 100 Gbit/s | 100 Gigabit Ethernet |

### Subcamadas da Camada de Enlace

#### Subcamada MAC (Media Access Control)
- **Função**: Encapsulamento de dados e controle de acesso ao meio
- **Responsabilidades**:
  - Estrutura do frame Ethernet
  - Endereçamento MAC (origem e destino)
  - Detecção de erros (FCS - Frame Check Sequence)

#### Subcamada LLC (Logical Link Control)
- **Função**: Adiciona informações de controle da Camada 2
- **Objetivo**: Facilitar a entrega do pacote ao nó de destino

## Comunicação e Acesso

### Ethernet Legada vs. Moderna

#### Ethernet Legada (Half-Duplex)
- **Topologia**: Barramento ou hubs
- **Método de acesso**: CSMA/CD (Carrier Sense Multiple Access with Collision Detection)
- **Característica**: Meio compartilhado, apenas um dispositivo transmite por vez
- **Gerenciamento**: Detecção de colisões e algoritmo de back-off

#### Ethernet Moderna (Full-Duplex)
- **Equipamento**: Switches
- **Vantagem**: Comunicação simultânea em ambas as direções
- **Controle**: Não requer CSMA/CD

## Frame Ethernet

### Estrutura e Tamanhos

- **Tamanho mínimo**: 64 bytes
- **Tamanho máximo padrão**: 1518 bytes
- **Frames menores**: Considerados "fragmentos de colisão" (descartados)
- **Frames maiores**: "Jumbo frames" (>1500 bytes de dados)

### Campos do Frame Ethernet

#### 1. Preâmbulo (7 bytes) + SFD (1 byte)
- **Função**: Sincronização entre dispositivos
- **Uso**: Preparação dos receptores para novo frame

#### 2. Destination MAC Address (6 bytes)
- **Função**: Identificador do destinatário
- **Tipos**: Unicast, Multicast ou Broadcast
- **Processo**: Comparação com endereço MAC local

#### 3. Source MAC Address (6 bytes)
- **Função**: Identifica a interface de origem

#### 4. EtherType (2 bytes)
- **Função**: Identifica protocolo da camada superior
- **Exemplos**:
  - 0x800: IPv4
  - 0x86DD: IPv6
  - 0x806: ARP

#### 5. Data (46-1500 bytes)
- **Conteúdo**: Dados encapsulados da camada superior
- **Padding**: Bits adicionais quando necessário para atingir tamanho mínimo

#### 6. FCS - Frame Check Sequence (4 bytes)
- **Função**: Detecção de erros
- **Método**: CRC (Cyclic Redundancy Check)
- **Processo**: Comparação entre CRC transmitido e recalculado

## Endereço MAC

### Características Fundamentais

- **Tamanho**: 48 bits (6 bytes)
- **Representação**: Hexadecimal
- **Unicidade**: Cada dispositivo possui endereço único
- **Também conhecido como**: BIA (Burned-in Address)

### Estrutura do Endereço MAC

- **OUI (24 bits)**: Identificador Organizacional Único (fornecedor)
- **Identificador do dispositivo (24 bits)**: Atribuído pelo fabricante

### Tipos de Endereçamento

#### 1. Unicast
- **Uso**: Comunicação um-para-um
- **Características**: Endereço exclusivo de dispositivo específico
- **Protocolos relacionados**: ARP (IPv4), ND (IPv6)

#### 2. Broadcast
- **Endereço**: FF-FF-FF-FF-FF-FF
- **Comportamento**: Enviado para todas as portas do switch
- **Limitação**: Não atravessa roteadores
- **Exemplo de uso**: DHCP, ARP

#### 3. Multicast
- **IPv4**: Inicia com 01-00-5E
- **IPv6**: Inicia com 33-33
- **Comportamento**: Enviado para grupo específico de dispositivos
- **Faixas IP**:
  - IPv4: 224.0.0.0 a 239.255.255.255
  - IPv6: ff00::/8

### Processamento do Frame

1. **Recepção**: NIC examina endereço MAC de destino
2. **Comparação**: Verifica correspondência com endereço local
3. **Decisão**:
   - **Correspondência**: Aceita o frame
   - **Sem correspondência**: Descarta o frame
   - **Broadcast/Multicast**: Sempre aceita

## Tabela MAC

### Funcionamento do Switch

Um switch Ethernet da Camada 2:
- Usa endereços MAC para decisões de encaminhamento
- Ignora dados da camada superior
- Mantém tabela de endereços MAC dinâmica

### Processo de Aprendizagem

#### Como o Switch Aprende
1. **Análise**: Examina endereço MAC de origem dos frames recebidos
2. **Registro**: Adiciona endereço MAC + porta à tabela
3. **Atualização**: Renova temporizador (padrão: 5 minutos)
4. **Manutenção**: Remove entradas antigas automaticamente

### Processo de Encaminhamento

#### Para Endereços Unicast
- **MAC conhecido**: Encaminha pela porta específica
- **MAC desconhecido**: Flooding (todas as portas exceto entrada)

#### Para Broadcast/Multicast
- **Comportamento**: Sempre flooding para todas as portas

### Processo de Filtragem

Quando a tabela MAC está populada:
- **Eficiência**: Encaminhamento direto para porta específica
- **Benefício**: Reduz tráfego desnecessário na rede
- **Resultado**: Melhoria na performance geral

### Comunicação com Redes Remotas

Quando o destino está em rede remota:
- **Frame Ethernet**: Enviado para MAC do gateway padrão (roteador)
- **Processo**: Roteador processa e encaminha para rede de destino
- **Importante**: Frame Ethernet não atravessa roteadores diretamente

## Resumo dos Benefícios

- **Eficiência**: Comunicação full-duplex com switches
- **Escalabilidade**: Suporte a múltiplas velocidades
- **Confiabilidade**: Detecção de erros com FCS
- **Flexibilidade**: Suporte a diferentes tipos de endereçamento
- **Performance**: Encaminhamento inteligente baseado em tabela MAC
