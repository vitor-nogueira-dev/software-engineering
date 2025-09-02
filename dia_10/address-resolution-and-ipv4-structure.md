# Resolução de Endereços e Estrutura IPv4

## MAC e IP

### Conceitos Fundamentais

Em uma rede Ethernet, cada dispositivo possui dois tipos principais de endereços:
- **Endereço MAC (físico)**: Identificador único da placa de rede
- **Endereço IP (lógico)**: Identificador de rede e host

### Comunicação na Mesma Rede

Quando um host precisa enviar dados para outro dispositivo na **mesma rede**:
- O endereço MAC de destino é o do dispositivo final
- É necessário conhecer tanto o IP quanto o MAC do destino
- A resolução de endereços mapeia o IP conhecido para o MAC desconhecido

### Comunicação em Rede Remota

Quando o destino está em uma **rede remota**:
- O endereço MAC de destino é o do gateway padrão (roteador)
- O roteador examina o IP de destino para determinar o próximo salto
- A cada salto, o pacote é reencapsulado com novos endereços MAC
- Os endereços IP de origem e destino permanecem inalterados

### Processo de Encapsulamento

1. **Roteador recebe o quadro**: Desencapsula as informações da camada 2
2. **Análise do destino**: Usa o IP de destino para determinar o próximo dispositivo
3. **Reencapsulamento**: Cria novo frame com endereços MAC atualizados
4. **Encaminhamento**: Envia para a próxima interface

## ARP (Address Resolution Protocol)

### Função Principal

O ARP é responsável por **mapear endereços IPv4 para endereços MAC** em redes locais, oferecendo duas funções básicas:
- Resolver endereços IPv4 para endereços MAC
- Manter uma tabela de mapeamentos (cache ARP)

### Funcionamento

#### Processo de Resolução
1. **Consulta local**: Dispositivo verifica sua tabela ARP na RAM
2. **Determinação do destino**:
   - Se destino na mesma rede → procura MAC do dispositivo final
   - Se destino em rede diferente → procura MAC do gateway padrão
3. **Solicitação ARP**: Envia broadcast se MAC não estiver na tabela
4. **Resposta ARP**: Dispositivo de destino responde com seu MAC
5. **Atualização**: Adiciona mapeamento IP-MAC na tabela ARP

#### Características da Tabela ARP
- **Armazenamento**: Temporário na memória RAM
- **Estrutura**: Mapa IP ↔ MAC
- **Tempo de vida**: 15-45 segundos (varia por sistema operacional)
- **Remoção**: Timer remove entradas não utilizadas

### Considerações de Segurança e Performance

#### Impacto na Rede
- Broadcasts ARP têm impacto mínimo em redes comerciais típicas
- Muitos dispositivos ligando simultaneamente podem causar redução temporária de performance

#### ARP Spoofing
- **Risco**: Ator malicioso responde a solicitações ARP de outros dispositivos
- **Ataque**: Envenenamento ARP para interceptar tráfego
- **Prevenção**: Implementar medidas de segurança adequadas

## Descoberta de IPv6

### Protocolo Neighbor Discovery (ND/NDP)

O IPv6 usa **ICMPv6 Neighbor Discovery** em vez do ARP, fornecendo:
- Resolução de endereços
- Descoberta de roteadores
- Serviços de redirecionamento

### Mensagens ICMPv6

#### Tipos de Mensagens
1. **Neighbor Solicitation**: Solicitação de vizinho
2. **Neighbor Advertisement**: Anúncio de vizinho
3. **Router Solicitation**: Solicitação de roteador
4. **Router Advertisement**: Anúncio de roteador
5. **Redirect Message**: Mensagem de redirecionamento

#### Categorias de Comunicação
- **Dispositivo ↔ Dispositivo**: Neighbor Solicitation/Advertisement (similar ao ARP)
- **Dispositivo ↔ Roteador**: Router Solicitation/Advertisement (para SLAAC)

### Processo de Descoberta de Vizinho

1. **Solicitação**: Host envia Neighbor Solicitation em multicast
2. **Processamento**: Dispositivo de destino recebe e processa
3. **Resposta**: Envia Neighbor Advertisement com informações de MAC
4. **Atualização**: Dispositivos atualizam suas tabelas de vizinhança

## Estrutura do IPv4

### Divisão do Endereço

Um endereço IPv4 (32 bits) é dividido em duas partes:

#### Parte da Rede
- **Função**: Identifica a rede específica
- **Característica**: Bits idênticos para todos os dispositivos da mesma rede
- **Uso**: Roteamento entre redes

#### Parte do Host
- **Função**: Identifica um dispositivo específico na rede
- **Característica**: Bits únicos para cada dispositivo
- **Uso**: Entrega local de pacotes

### Máscara de Sub-rede

#### Função
- **Objetivo**: Diferenciar a parte da rede da parte do host
- **Método**: Operação lógica AND bit a bit
- **Resultado**: Determinação do endereço de rede

#### Representações

##### Formato Decimal com Pontos
Exemplo: `255.255.255.0`

##### Notação de Prefixo (CIDR)
- **Formato**: Barra (/) seguida do número de bits 1s
- **Exemplo**: `/24` (equivale a 255.255.255.0)
- **Vantagem**: Representação mais concisa

### Operação AND para Endereço de Rede

#### Processo
1. **Entrada**: Endereço IPv4 + Máscara de sub-rede
2. **Operação**: AND lógico bit a bit
3. **Resultado**: Endereço de rede

#### Exemplo Prático
```
IP:      192.168.1.10    (11000000.10101000.00000001.00001010)
Máscara: 255.255.255.0   (11111111.11111111.11111111.00000000)
AND:     192.168.1.0     (11000000.10101000.00000001.00000000)
```

### Endereços Especiais

#### Tipos Importantes
- **Endereço de Rede**: Primeiro endereço da faixa (parte host = 0)
- **Endereço de Broadcast**: Último endereço da faixa (parte host = 1s)
- **Endereços de Host**: Endereços utilizáveis entre rede e broadcast
- **Gateway Padrão**: Geralmente primeiro ou último endereço utilizável

#### Exemplos na Rede 192.168.1.0/24
- **Rede**: 192.168.1.0
- **Primeira utilizável**: 192.168.1.1 (geralmente gateway)
- **Última utilizável**: 192.168.1.254
- **Broadcast**: 192.168.1.255