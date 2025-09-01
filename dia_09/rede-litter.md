# Camada de Rede

## Compreendendo os princípios da camada de rede

### Características da camada de rede

A **camada de rede** (camada 3 do modelo OSI) é responsável por permitir que dispositivos finais troquem dados entre diferentes redes. Seus principais protocolos são:

- **IPv4** e **IPv6**: protocolos de roteamento principais
- **OSPF**: protocolo de roteamento dinâmico
- **ICMP**: protocolo de mensagens de controle

### Operações básicas da camada de rede

Para realizar comunicação ponta a ponta, a camada de rede executa quatro operações fundamentais:

1. **Endereçamento** dos dispositivos finais
2. **Encapsulamento** dos dados
3. **Roteamento** dos pacotes
4. **Desencapsulamento** no destino

### Características do protocolo IP

#### Connectionless (Sem conexão)
- Não estabelece conexão prévia com o destino
- Não há caminho pré-estabelecido para os pacotes
- Pacotes podem seguir rotas diferentes e chegar fora de ordem

#### Best Effort (Melhor esforço)
- Não garante a entrega dos pacotes
- Não verifica se o destino está disponível
- Reduz o overhead do protocolo

#### Media Independent (Independente do meio)
- Funciona sobre qualquer tipo de mídia física (cobre, fibra óptica, wireless)
- A camada de enlace prepara o pacote para transmissão
- Considera o MTU (Maximum Transmission Unit) para fragmentação quando necessário

## Entendendo o pacote IPv4 e detalhes do IPv6

### Estrutura do pacote IPv4

O cabeçalho IPv4 contém campos essenciais para o roteamento:

#### Campos principais:
- **Versão**: 4 bits identificando IPv4 (0100)
- **DS (DiffServ)**: 8 bits para prioridade do pacote
- **TTL (Time To Live)**: 8 bits limitando o tempo de vida do pacote
- **Protocolo**: 8 bits identificando o payload (TCP=6, UDP=17, ICMP=1)
- **IP de Origem**: 32 bits do endereço fonte
- **IP de Destino**: 32 bits do endereço destino
- **Header Checksum**: detecção de corrupção no cabeçalho

### Estrutura do pacote IPv6

O IPv6 apresenta melhorias significativas:

#### Campos principais:
- **Versão**: 4 bits identificando IPv6 (0110)
- **Traffic Class**: 8 bits equivalente ao DS do IPv4
- **Payload Length**: 16 bits indicando tamanho dos dados
- **Next Header**: 8 bits equivalente ao campo Protocolo do IPv4
- **Hop Limit**: similar ao TTL do IPv4

#### Vantagens do IPv6:
- Não possui Header Checksum (melhor performance)
- Cabeçalho fixo de 40 bytes
- Verificação de integridade nas camadas superiores/inferiores

## Como funciona o processo de roteamento e suas características

### Encaminhamento de pacotes

Os hosts podem enviar pacotes para:

1. **Próprio host**: interface de loopback (127.0.0.1 para IPv4 ou ::1 para IPv6)
2. **Host local**: mesmo segmento de rede
3. **Host remoto**: rede diferente (requer roteador)

### Gateway padrão

O **gateway padrão** é o dispositivo responsável por rotear tráfego para outras redes:

#### Características:
- Possui endereço IP no mesmo range da rede local
- Aceita e encaminha dados para fora da rede local
- Essencial para comunicação com redes remotas
- Configurado via DHCP no IPv4

### Decisão de roteamento

#### Processo de encaminhamento:
1. Roteador recebe pacote na interface
2. Examina endereço IP de destino
3. Consulta tabela de roteamento
4. Encaminha usando a melhor rota correspondente
5. Reencapsula com novo header da camada 2

### Tabela de roteamento

Contém três tipos de entradas:

1. **Redes conectadas diretamente**: interfaces ativas do roteador
2. **Redes remotas**: conectadas através de outros roteadores  
3. **Rota padrão**: gateway de último recurso

### Tipos de roteamento

#### Roteamento estático
- **Configuração**: manual pelo administrador
- **Características**: rotas fixas configuradas manualmente
- **Desvantagem**: necessita atualização manual em mudanças de topologia

#### Roteamento dinâmico
- **Funcionamento**: roteadores aprendem rotas automaticamente
- **Protocolos**: OSPF, EIGRP, IS-IS, BGP
- **Vantagens**: 
  - Adaptação automática a mudanças de topologia
  - Descoberta automática de redes remotas
  - Escolha do melhor caminho disponível
  - Busca por rotas alternativas quando necessário
