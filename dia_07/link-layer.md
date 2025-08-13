# Camada de Enlace

## Proposição

A camada de enlace de dados (camada 2 do modelo OSI) tem como principais funções:

- **Preparação dos dados**: Prepara os dados da camada de rede para a camada física
- **Encapsulamento**: Aceita pacotes da camada 3 e os encapsula em quadros da camada 2
- **Controle de transmissão**: Controla como os dados são transmitidos e recebidos na mídia
- **Detecção de erros**: Executa detecção de erros e rejeita quadros corrompidos
- **Endereçamento**: Adiciona informações de destino e origem da camada 2

### Subcamadas IEEE 802

A camada de enlace é dividida em duas subcamadas:

1. **Logical Link Control (LLC)**:
   - Comunica entre software de rede (camadas superiores) e hardware (camadas inferiores)
   - Identifica qual protocolo da camada de rede está sendo usado

2. **Media Access Control (MAC)**:
   - Responsável pelo encapsulamento de dados e controle de acesso à mídia
   - Fornece endereçamento de camada de enlace
   - Inclui: delimitação de quadro, endereçamento e detecção de erros

## Topologias

### Topologias WAN

**Ponto a Ponto**
- Link permanente entre dois endpoints
- Conexão direta simples

**Hub and Spoke (Estrela)**
- Site central interconecta sites filiais
- Filiais se comunicam apenas através do site central

**Mesh (Malha)**
- Cada sistema está interconectado a todos os outros
- Alta disponibilidade, mas custos elevados

### Topologias LAN

**Estrela (Star)**
- Dispositivos conectados a um dispositivo central (switch)
- Fácil instalação e solução de problemas

**Estrela Estendida**
- Extensão da topologia estrela
- Múltiplos switches interconectados

**Barramento (Bus) - Legado**
- Todos os dispositivos em um cabo compartilhado
- Terminações nas extremidades

**Anel (Ring) - Legado**
- Dispositivos conectados em formato circular
- Usado em tecnologias como Token Ring e FDDI

### Tipos de Comunicação

- **Half-duplex**: Transmissão e recepção alternadas (não simultâneas)
- **Full-duplex**: Transmissão e recepção simultâneas

## Métodos de Controle de Acesso

### Acesso Baseado em Contenção

**CSMA/CD (Collision Detection)**
- Usado em LANs Ethernet legadas (topologia barramento)
- Detecta colisões quando dois dispositivos transmitem simultaneamente
- Dispositivos param e retransmitem após detectar colisão

**CSMA/CA (Collision Avoidance)**
- Usado em redes sem fio (WLAN)
- Evita colisões esperando antes de transmitir
- Inclui informação de duração da transmissão

### Acesso Controlado

- Cada nó tem tempo específico para usar o meio
- Usado em redes determinísticas como Token Ring
- Menos eficiente devido à espera por turnos

## Estrutura do Frame

### Componentes Básicos

Todo quadro da camada de enlace possui três partes:

1. **Header (Cabeçalho)**:
   - Contém informações de controle
   - Endereços de origem e destino da camada 2

2. **Data (Dados)**:
   - Contém o pacote da camada de rede (IPv4 ou IPv6)
   - Payload a ser transportado

3. **Trailer**:
   - Informações de controle de erro (ex: CRC)
   - Detecta erros na recepção

### Endereçamento

- **Endereços físicos**: Únicos para cada dispositivo
- **Não hierárquicos**: Não indicam localização na rede
- **Escopo local**: Usados apenas na mesma mídia compartilhada
- **Permanentes**: Dispositivo mantém o mesmo endereço mesmo ao mudar de rede

### Protocolos por Tipo de Rede

**LANs**:
- Ethernet (com fio)
- IEEE 802.11 (sem fio - WLAN)

**WANs**:
- PPP (Point-to-Point Protocol)
- HDLC (High-Level Data Link Control)
- Frame Relay
- ATM (Asynchronous Transfer Mode)
- IP/MPLS (IP/Multi Protocol Label Switching)