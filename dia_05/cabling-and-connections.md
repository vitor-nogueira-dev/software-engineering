# Cabeamentos e Conexões

## Tipos de Cabeamentos

A camada física inclui diferentes tipos de cabeamento:

### Cabos de Cobre
- **Transmissão**: Dados transmitidos como pulsos elétricos
- **Tipos**: Par trançado ou coaxial
- **Vantagens**: Baixo custo e fácil instalação
- **Limitações**: Atenuação do sinal com a distância

### Fibra Óptica
- **Transmissão**: Dados transmitidos como pulsos de luz (infravermelho)
- **Recepção**: Fotodetector identifica bits 0s e 1s
- **Vantagens**: Alta capacidade e imunidade a interferências

## Cabeamento de Cobre

### Características Gerais
- Comum em redes locais (LANs)
- Transmissão via pulsos elétricos
- Limitações de distância devido à atenuação
- Suscetível a interferências

### Tipos de Interferência

#### EMI/RFI (Interferência Eletromagnética/Radiofrequência)
- **Fontes**: Ondas de rádio, lâmpadas fluorescentes, motores elétricos
- **Efeito**: Distorção e corrupção dos sinais

#### Crosstalk (Diafonia)
- **Causa**: Campo magnético de um fio induz sinal no fio adjacente
- **Resultado**: Interferência entre sinais adjacentes

### Proteção Contra Interferências
- Blindagem metálica e aterramento adequado
- Pares de fios trançados
- Seleção adequada do tipo de cabo
- Projeto adequado da infraestrutura
- Técnicas de manuseio e terminação corretas

### Tipos de Cabos de Cobre

#### UTP (Unshielded Twisted Pair)
- **Características**: Mais comum, quatro pares trançados, capa plástica
- **Uso**: Interconexão de hosts com dispositivos de rede
- **Conector**: RJ-45

#### STP (Shielded Twisted Pair)
- **Características**: Melhor proteção contra ruído que UTP
- **Proteção**: Blindagem + entrelaçamento de fios
- **Requisitos**: Conectores blindados especiais e aterramento correto
- **Custo**: Mais caro que UTP

#### Cabo Coaxial
- **Estrutura**:
  - Fio de cobre central
  - Isolante plástico flexível
  - Malha de cobre ou folha metálica
  - Capa plástica externa
- **Usos atuais**:
  - Instalações sem fio (conexão de antenas)
  - TV/Internet a cabo (tecnologia HFC)
  - Interconexão de equipamentos de rádio/satélite

## UTP (Unshielded Twisted Pair)

### Padrões e Normas
- **TIA/EIA-568**: Padrão para cabeamento comercial em LANs
- **IEEE**: Define características elétricas do cabeamento
- **Categorização**: Baseada na capacidade de transmissão

### Funcionamento
- **Cancelamento**: Fios em pares com campos magnéticos opostos
- **Variação de torções**: Número diferente de tranças por par
- **Proteção**: Baseada no efeito de cancelamento dos pares trançados

### Categorias de Cabos UTP

| Categoria | Velocidade Suportada | Uso Principal                             |
| --------- | -------------------- | ----------------------------------------- |
| Cat 3     | -                    | Comunicação de voz (legado)               |
| Cat 5     | 100 Mbps             | Transmissão de dados                      |
| Cat 5E    | 1 Gbps               | Transmissão de dados                      |
| Cat 6     | 10 Gbps              | Alta velocidade com separador entre pares |
| Cat 7     | 10 Gbps              | Alta performance                          |
| Cat 8     | 40 Gbps              | Aplicações de altíssima velocidade        |

### Convenções de Fiação

#### Cabo Direto (Straight-through)
- **Uso**: Host ↔ Switch, Switch ↔ Roteador
- **Características**: Tipo mais comum

#### Cabo Cruzado (Crossover)
- **Uso**: Dispositivos do mesmo tipo (Switch ↔ Switch, Host ↔ Host)
- **Status**: Considerado legado devido à tecnologia auto MDIX
- **Auto MDIX**: Detecta automaticamente o tipo de cabo necessário

### Padrões de Conectores
- **T568A e T568B**: Padrões para organização dos pares por cor
- **Conectores**: RJ-45 (macho e fêmea)

## Fibra Óptica

### Características Gerais
- **Evolução**: Disseminação com tecnologia FTTH (Fiber To The Home)
- **Transmissão**: Pulsos de luz infravermelha
- **Material**: Fibra de vidro (silício muito puro)
- **Vantagens**: Baixa atenuação, imunidade a EMI/RFI, alta capacidade

### Tipos de Fibra Óptica

#### Fibra Monomodo (SMF - Single-Mode Fiber)
- **Núcleo**: ~10 micrometros
- **Fonte**: Laser
- **Transmissão**: Único modo de luz
- **Alcance**: Centenas de quilômetros (WANs)
- **Amplificação**: Usa amplificadores ópticos

#### Fibra Multimodo (MMF - Multimode Fiber)
- **Núcleo**: 50 ou 60 micrometros
- **Fonte**: LED ou laser
- **Transmissão**: Múltiplos modos de luz
- **Alcance**: Até 550m (LANs)
- **Velocidade**: Até 10 Gbps
- **Limitação**: Maior dispersão que SMF

### Dispersão
- **Definição**: Alargamento do pulso de luz no tempo
- **Impacto**: Interferência entre bits, causando erros
- **Comparação**: MMF tem maior dispersão que SMF

### Aplicações da Fibra Óptica
- **Redes corporativas**: Backbone e infraestrutura
- **FTTH**: Serviços residenciais (voz, dados, vídeo)
- **WANs**: Conexões de longa distância entre cidades/países
- **Redes submarinas**: Conexões transoceânicas

### Conectores de Fibra Óptica

#### ST (Straight-Tip)
- **Características**: Um dos primeiros tipos
- **Mecanismo**: Baioneta "twist-on/twist-off"

#### SC (Subscriber Connector)
- **Também chamado**: Conector quadrado/padrão
- **Mecanismo**: Push-pull (empurra-puxa)
- **Compatibilidade**: Multimodo e monomodo

#### LC (Lucent Connector)
- **Características**: Versão menor do SC
- **Vantagem**: Tamanho compacto
- **Variação**: LC duplex para transmissão/recepção

### Patch Cords (Cordões Ópticos)
- **SC-SC Multimode**: Conectores SC em ambas as extremidades
- **LC-LC Single-mode**: Conectores LC monomodo
- **ST-LC Multimode**: Conector ST em uma extremidade, LC na outra
- **SC-ST Single-mode**: Conector SC em uma extremidade, ST na outra

### Fibra vs Cobre
A fibra óptica possui capacidade de transmissão muito superior ao cobre em termos de:
- **Velocidade**: Taxas de transmissão muito maiores
- **Distância**: Alcance significativamente superior
- **Interferência**: Imunidade a EMI/RFI
- **Atenuação**: Menor perda de sinal

## Wireless

### Características Gerais
- **Transmissão**: Sinais eletromagnéticos em frequências de rádio
- **Principal vantagem**: Mobilidade

### Limitações do Wireless

#### Área de Cobertura
- **Ambiente aberto**: Funcionamento otimizado
- **Limitações**: Materiais de construção podem reduzir cobertura

#### Interferência
- **Suscetibilidade**: Dispositivos comuns podem causar interferência
- **Impacto**: Degradação da qualidade do sinal

#### Segurança
- **Risco**: Acesso não autorizado de dispositivos e usuários
- **Necessidade**: Políticas de segurança rigorosas

#### Meio Compartilhado
- **Operação**: Half-duplex (um dispositivo por vez)
- **Consequência**: Taxa reduzida com muitos usuários simultâneos

### Padrões Wireless

#### Wi-Fi (IEEE 802.11)
- **Tipo**: WLAN (Wireless LAN)
- **Protocolo**: CSMA/CA (Carrier Sense Multiple Access/Collision Avoidance)
- **Funcionamento**: NIC escuta o canal antes de transmitir

#### Bluetooth (IEEE 802.15)
- **Tipo**: WPAN (Wireless Personal Area Network)
- **Comunicação**: Ponto-a-ponto
- **Alcance**: 1 a 100 metros

#### WiMAX (IEEE 802.16)
- **Nome completo**: Worldwide Interoperability for Microwave Access
- **Topologia**: Ponto-a-multiponto
- **Finalidade**: Acesso de banda larga sem fio

#### Zigbee (IEEE 802.15.4)
- **Características**: Baixa taxa de dados e baixo consumo
- **Aplicações**: IoT, ambientes industriais
- **Vantagens**: Longo tempo de bateria, curto alcance

### Implementação em LAN

#### Dispositivos Necessários

##### Access Point (AP)
- **Função**: Concentra sinais wireless dos usuários
- **Conexão**: Liga-se à infraestrutura cabeada (Ethernet)
- **Integração**: Roteadores domésticos combinam roteador + switch + AP

##### Adaptadores NIC Wireless
- **Função**: Fornecem capacidade de comunicação sem fio aos hosts

### Benefícios e Considerações
- **Vantagens**: Economia em cabeamento, mobilidade dos hosts
- **Segurança**: Necessidade de políticas rigorosas para proteção contra acesso não autorizado