# Comunicação e Camada Física

## Encapsulamento

### Conceito
O encapsulamento é o processo de "ligação" entre as camadas que promove comunicação estruturada. À medida que os dados passam pela pilha de protocolo, informações de controle são adicionadas em cada camada.

### Unidades de Dados de Protocolo (PDU)
Cada camada possui nomes específicos para suas PDUs:
- **Dados**: Camada de Aplicação
- **Segmento** (TCP) ou **Datagrama** (UDP): Camada de Transporte
- **Pacote**: Camada de Rede
- **Quadro (Frame)**: Camada de Enlace

### Segmentação
**Problema**: Grandes fluxos de dados causam atrasos e vulnerabilidade a falhas de enlace.

**Solução**: Divisão do fluxo em unidades menores para transmissão.

**Vantagens**:
- **Velocidade**: Permite multiplexação de conversas na rede
- **Eficiência**: Retransmissão apenas de segmentos perdidos, não de todo o fluxo

### Sequenciamento
Processo de enumeração de segmentos para garantir:
- Chegada ao destino correto
- Remontagem na ordem original
- Integridade da mensagem

*O TCP é responsável pelo sequenciamento dos segmentos.*

### Processo de Encapsulamento

**Transmissão**:
1. Cada camada adiciona cabeçalho de controle
2. Dados são passados para a camada inferior
3. Processo repete até a camada física
4. Bits são transmitidos pelo meio

**Recepção**:
1. Processo inverso a partir dos bits recebidos
2. Percorre a pilha até a camada de aplicação
3. Entrega a mensagem ao destino

## Acesso aos Dados

### Endereçamento por Camadas

**Camada de Transporte**:
- Números de porta para identificar aplicativos

**Camada de Rede**:
- Endereços lógicos (IP) que identificam redes
- Endereço IP contém:
  - **Porção da rede** (IPv4) ou **Prefixo** (IPv6)
  - **Porção do host** (IPv4) ou **ID da interface** (IPv6)

**Camada de Enlace**:
- Endereços físicos MAC (Media Access Control)
- Identifica dispositivos na LAN através das NICs

### Funcionamento dos Endereços

**Endereços de Rede (Camada 3)**:
- Entregam pacotes da origem ao destino
- Funcionam tanto em redes locais quanto remotas

**Endereços de Enlace (Camada 2)**:
- Entregam quadros entre NICs na mesma rede
- São atualizados a cada salto na rede

## Características da Camada Física

### Função Principal
Fornece condições para transportar bits do quadro através de meios de transmissão:
- Metálico
- Fibra óptica
- Aéreo (wireless)

### Processo de Codificação
1. Recebe quadros completos da camada de enlace
2. Codifica como série de sinais
3. Transforma bits em:
   - Sinais elétricos
   - Sinais ópticos
   - Ondas de radiofrequência

### Conectividade Sem Fio
Dispositivos wireless conectam-se através de:
- Pontos de acesso (Access Points - AP)
- Roteadores sem fio

### NICs (Network Interface Cards)
**Tipos**:
- **Ethernet**: Conexões com fio
- **WLAN**: Conexões sem fio

**Aplicações**:
- Dispositivos podem ter um ou ambos os tipos
- Tablets/smartphones: apenas WLAN
- Impressoras de rede: geralmente apenas Ethernet

### Padrões e Organizações
**Organizações regulamentadoras**:
- ISO (Organização Internacional de Padronização)
- TIA/EIA (Telecommunications Industry Association)
- ITU (União Internacional de Telecomunicações)
- ANSI (American National Standards Institute)
- IEEE (Instituto de Engenheiros Elétricos e Eletrônicos)
- FCC, ETSI (autoridades nacionais)

### Áreas Funcionais

**Componentes Físicos**:
- Dispositivos eletrônicos
- Mídia (cabos, fibras)
- Conectores

**Codificação de Linha**:
- Método de converter bits em códigos predefinidos
- Exemplo: Codificação Manchester (Ethernet 10 Mbps)
  - Bit 0: transição alto → baixo
  - Bit 1: transição baixo → alto

### Largura de Banda

**Definição**: Capacidade de um meio em transportar dados

**Fatores determinantes**:
- Propriedades do meio físico
- Tecnologias de sinalização
- Tipo de modulação

**Terminologia**:
- **Latência**: Tempo total para dados viajarem entre pontos
- **Taxa de transferência (Throughput)**: Medida real de bits transmitidos
- **Goodput**: Dados úteis transferidos (excluindo overhead)

**Relação**: `Goodput < Throughput ≤ Largura de Banda`

### Unidades de Medida
| Unidade | Valor                       |
| ------- | --------------------------- |
| bps     | bits por segundo            |
| Kbps    | kilobits por segundo (10³)  |
| Mbps    | megabits por segundo (10⁶)  |
| Gbps    | gigabits por segundo (10⁹)  |
| Tbps    | terabits por segundo (10¹²) |