# Principais Modelos de Referência de Rede

## Protocolos e suas Características Gerais

### O que são Protocolos?

Os protocolos de rede definem um **formato comum** e um **conjunto de regras** para a troca de mensagens entre dispositivos. São implementados em software, hardware ou ambos, e cada protocolo tem sua própria função, formato e regras de comunicação em sua respectiva camada.

### Tipos de Protocolos

#### 1. Protocolos de Comunicação
- **IP** (Internet Protocol): Responsável pelo endereçamento e roteamento
- **TCP** (Transmission Control Protocol): Garante entrega confiável dos dados
- **HTTP** (Hypertext Transfer Protocol): Comunicação web cliente-servidor

#### 2. Protocolos de Segurança
- **SSH** (Secure Shell): Acesso remoto seguro
- **SSL/TLS** (Secure Socket Layer/Transport Layer Security): Criptografia de dados

#### 3. Protocolos de Roteamento
- **RIP** (Routing Information Protocol): Roteamento por vetor de distância
- **OSPF** (Open Shortest Path First): Roteamento por estado de enlace
- **BGP** (Border Gateway Protocol): Roteamento entre sistemas autônomos

#### 4. Protocolos de Descoberta de Serviço
- **DHCP** (Dynamic Host Configuration Protocol): Configuração automática de rede
- **DNS** (Domain Name System): Resolução de nomes de domínio

### Funções dos Protocolos

| Função                     | Descrição                      | Exemplo |
| -------------------------- | ------------------------------ | ------- |
| **Endereçamento**          | Identifica emissor e receptor  | IP      |
| **Confiabilidade**         | Garante entrega dos dados      | TCP     |
| **Controle de Fluxo**      | Gerencia taxa de transmissão   | TCP     |
| **Sequenciamento**         | Ordena segmentos transmitidos  | TCP     |
| **Detecção de Erros**      | Verifica integridade dos dados | TCP, IP |
| **Interface de Aplicação** | Comunicação entre aplicações   | HTTP    |

### Suítes de Protocolos

Uma **suíte de protocolos** é um grupo de protocolos inter-relacionados que trabalham em conjunto para realizar funções de comunicação. Os protocolos são organizados em camadas, onde cada nível superior depende dos serviços dos níveis inferiores.

#### Principais Suítes Históricas:
- **TCP/IP**: Padrão aberto mantido pela IETF (atual padrão da Internet)
- **OSI**: Desenvolvido pela ISO e ITU em 1977 (modelo conceitual)
- **AppleTalk**: Protocolo proprietário da Apple (1985-1995)
- **Novell NetWare**: Protocolo proprietário IPX da Novell (1983-1995)

## Modelo TCP/IP

### Estrutura em 4 Camadas

#### 4. Camada de Aplicação
- **Função**: Representa dados para o usuário, codificação e controle de diálogo
- **Protocolos**: HTTP, HTTPS, FTP, SMTP, DNS, DHCP

#### 3. Camada de Transporte
- **Função**: Comunicação confiável entre dispositivos
- **Protocolos**: TCP, UDP

#### 2. Camada de Internet
- **Função**: Determina o melhor caminho pela rede (roteamento)
- **Protocolos**: IP, ICMP, ARP

#### 1. Camada de Acesso à Rede
- **Função**: Controla dispositivos de hardware e mídia de rede
- **Protocolos**: Ethernet, Wi-Fi (WLAN)

### Processo de Comunicação TCP/IP

#### Transmissão (Encapsulamento):
1. **Dados** → Aplicação adiciona cabeçalho
2. **Segmento** → Transporte adiciona cabeçalho TCP
3. **Pacote** → Internet adiciona cabeçalho IP
4. **Quadro** → Acesso à Rede adiciona cabeçalho Ethernet
5. **Bits** → Transmissão física

#### Recepção (Desencapsulamento):
1. **Bits** → Recepção física
2. **Quadro** → Remove cabeçalho Ethernet
3. **Pacote** → Remove cabeçalho IP
4. **Segmento** → Remove cabeçalho TCP
5. **Dados** → Processa na aplicação

## Modelo OSI (Open Systems Interconnection)

### Estrutura em 7 Camadas

#### 7. Camada de Aplicação
- **Função**: Protocolos para comunicação processo a processo
- **Exemplos**: HTTP, FTP, SMTP

#### 6. Camada de Apresentação
- **Função**: Representação comum dos dados (criptografia, compressão)
- **Exemplos**: SSL/TLS, JPEG, MPEG

#### 5. Camada de Sessão
- **Função**: Organiza diálogo e gerencia troca de dados
- **Exemplos**: NetBIOS, SQL sessions

#### 4. Camada de Transporte
- **Função**: Segmentação, transferência e remontagem de dados
- **Exemplos**: TCP, UDP

#### 3. Camada de Rede
- **Função**: Roteamento de pacotes entre dispositivos
- **Exemplos**: IP, ICMP, OSPF

#### 2. Camada de Enlace
- **Função**: Troca de quadros entre dispositivos na mesma rede
- **Exemplos**: Ethernet, Wi-Fi, PPP

#### 1. Camada Física
- **Função**: Transmissão de bits pelo meio físico
- **Exemplos**: Cabos, conectores, sinais elétricos

### Relação entre Modelos OSI e TCP/IP

| OSI          | TCP/IP          | Observação                        |
| ------------ | --------------- | --------------------------------- |
| Aplicação    | Aplicação       | Funcionalidades similares         |
| Apresentação | ↗ Aplicação     | Integradas na camada de aplicação |
| Sessão       | ↗ Aplicação     | Integradas na camada de aplicação |
| Transporte   | Transporte      | Correspondência direta            |
| Rede         | Internet        | Correspondência direta            |
| Enlace       | ↘ Acesso à Rede | Integradas na camada de acesso    |
| Física       | ↘ Acesso à Rede | Integradas na camada de acesso    |

### Benefícios dos Modelos em Camadas

- ✅ **Auxiliam no projeto de protocolos** com funções específicas
- ✅ **Fomentam competição** entre fornecedores
- ✅ **Isolam mudanças** em uma camada das outras
- ✅ **Fornecem linguagem comum** para descrever redes

## Organizações e Padrões

### Padrões Abertos vs Proprietários

**Padrões Abertos** favorecem:
- Interoperabilidade entre produtos
- Competição justa no mercado
- Inovação tecnológica
- Prevenção de monopólios

### Organizações de Padrões Gerais

#### IEEE (Institute of Electrical and Electronics Engineers)
- **Responsabilidade**: Padrões de indústria em tecnologia
- **Principais padrões**: 
  - 802.3 (Ethernet)
  - 802.11 (Wi-Fi/WLAN)

#### ITU-T (International Telecommunications Union)
- **Responsabilidade**: Padrões de telecomunicações
- **Principais padrões**: DSL, GPON, DWDM, IPTV

#### TIA (Telecommunications Industry Association)
- **Responsabilidade**: Equipamentos de comunicação
- **Foco**: Rádio, torres celulares, VoIP, satélites

#### EIA (Electronic Industries Alliance)
- **Responsabilidade**: Padrões de fiação e conectores

### Organizações da Internet

#### Hierarquia da Internet (de cima para baixo):

```
ISOC (Internet Society)
    ↓
IAB (Internet Architecture Board)
    ↓
├── IETF (Internet Engineering Task Force)
│   └── IESG (Internet Engineering Steering Group)
└── IRTF (Internet Research Task Force)
```

#### ICANN e IANA
- **ICANN**: Coordena alocação de IPs e nomes de domínio
- **IANA**: Supervisiona gerenciamento técnico sob ICANN

### Principais Organizações de Internet

| Organização                                         | Sigla | Função Principal                    |
| --------------------------------------------------- | ----- | ----------------------------------- |
| Internet Society                                    | ISOC  | Promove desenvolvimento da Internet |
| Internet Architecture Board                         | IAB   | Gerencia padrões da Internet        |
| Internet Engineering Task Force                     | IETF  | Desenvolve protocolos TCP/IP e RFCs |
| Internet Research Task Force                        | IRTF  | Pesquisa para evolução da Internet  |
| Internet Engineering Steering Group                 | IESG  | Gerenciamento técnico da IETF       |
| Internet Corporation for Assigned Names and Numbers | ICANN | Coordena IPs e domínios             |
| Internet Assigned Numbers Authority                 | IANA  | Gerencia alocação técnica           |
