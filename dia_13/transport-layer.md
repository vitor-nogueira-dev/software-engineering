# Camada de Transporte

## Transporte de Dados

### Papéis e Função

- **Comunicação lógica**: Estabelece comunicação entre aplicativos em hosts diferentes
- **Estabelecimento de sessão**: Cria sessões temporárias entre dois hosts
- **Transmissão confiável**: Garante a entrega confiável de informações para aplicativos
- **Independência de infraestrutura**: Não precisa conhecer detalhes sobre:
  - Tipo de host de destino
  - Tipo de meio de transmissão
  - Caminho percorrido pelos dados
  - Congestionamento de enlaces
  - Tamanho da rede

### Rastreio de Conversas Individuais

- **Conversação**: Conjunto de dados que flui entre aplicativos de origem e destino
- **Rastreamento separado**: Cada conversação é mantida e rastreada independentemente
- **Múltiplas comunicações**: Um host pode ter vários aplicativos comunicando simultaneamente
- **Limitações de pacote**: Dados são divididos devido às limitações de tamanho dos pacotes

### Segmentação de Dados

A camada de transporte divide os dados da aplicação em blocos menores para facilitar o gerenciamento e transporte:

- **TCP**: Dados divididos em **segmentos**
- **UDP**: Dados divididos em **datagramas**
- **Vantagens**: Facilita gerenciamento e transporte dos dados

### Adição de Informação no Cabeçalho

- **Cabeçalho**: Contém informações organizadas em campos específicos
- **Controle**: Valores dos campos permitem diferentes funções de gerenciamento
- **Garantia**: Assegura que aplicativos recebam os dados corretos
- **Informações de controle**: Incluídas nos cabeçalhos dos segmentos enviados

### Identificação de Aplicações

- **Número de porta**: Identificador único para cada aplicação
- **Separação**: Permite gerenciar múltiplas comunicações com diferentes requisitos
- **Processo exclusivo**: Cada software que acessa a rede recebe um número de porta único

### Multiplexação

- **Segmentação e multiplexação**: Permite que diferentes conversações se intercalem na mesma rede
- **Prevenção de monopolização**: Evita que um fluxo (como streaming de vídeo) consuma toda a banda
- **Verificação de erros**: Confirma se segmentos foram alterados durante a transmissão
- **Comunicações simultâneas**: Possibilita múltiplas comunicações ao mesmo tempo

## TCP (Transmission Control Protocol)

### Visão Geral

- **Protocolo confiável**: Garante que os dados cheguem ao destino
- **Orientado a conexão**: Estabelece conexão antes de transmitir dados
- **Controle de estado**: Mantém o estado da conversação e rastreia informações
- **Processamento adicional**: Requer mais processamento nos hosts de envio e recepção

### Funcionalidades

#### Orientação a Conexão
- **Negociação**: Estabelece conexão permanente (sessão) entre origem e destino
- **Gerenciamento de tráfego**: Negocia quantidade de tráfego a ser encaminhada
- **Controle de dados**: Gerencia dados de comunicação entre os dispositivos

#### Garantia de Entrega Confiável
- **Proteção contra corrupção**: Garante que segmentos corrompidos sejam detectados
- **Proteção contra perda**: Assegura que segmentos perdidos sejam retransmitidos
- **Confirmação de entrega**: Cada segmento enviado deve chegar ao destino

#### Fornecimento de Entrega Ordenada
- **Numeração sequencial**: Segmentos são numerados e sequenciados
- **Remontagem correta**: Garante que segmentos sejam remontados na ordem correta
- **Múltiplas rotas**: Compensa diferentes taxas de transmissão em rotas variadas

#### Suporte a Controle de Fluxo
- **Gerenciamento de recursos**: Monitora recursos limitados (memória, processamento)
- **Regulação de taxa**: Controla a quantidade de dados transmitidos pela fonte
- **Prevenção de sobrecarga**: Evita retransmissões desnecessárias

### Portas TCP

As portas TCP identificam diferentes serviços e aplicações:
- **Números padronizados**: Associados a protocolos específicos da camada de aplicação
- **Identificação única**: Cada serviço possui uma porta específica
- **Comunicação direcionada**: Permite envio de dados para a aplicação correta

### Header TCP (Cabeçalho)

O cabeçalho TCP contém campos essenciais para controle da comunicação:
- **Campos de controle**: Gerenciam o estabelecimento e encerramento de conexões
- **Bits de controle**: Controlam diferentes aspectos da comunicação
- **Informações de sequência**: Garantem ordem e integridade dos dados

## UDP (User Datagram Protocol)

### Visão Geral

- **Protocolo sem conexão**: Não requer conexão pré-estabelecida
- **Sem estado (stateless)**: Não rastreia informações entre cliente e servidor
- **Melhor esforço**: Não garante confirmação de recebimento
- **Processamento rápido**: Datagramas são processados mais rapidamente que TCP
- **Sem confiabilidade**: Não provê controle de fluxo ou garantias de entrega

### Funcionalidades

#### Características do UDP
- **Protocolo leve**: Oferece segmentação básica sem overhead do TCP
- **Simplicidade**: Definido pelo que não faz comparado ao TCP

#### Limitações do UDP
- **Reconstrução simples**: Dados reconstruídos na ordem de recebimento
- **Sem retransmissão**: Não reenvia segmentos perdidos
- **Sem estabelecimento de sessão**: Comunicação direta sem negociação prévia
- **Sem controle de recursos**: Não informa sobre disponibilidade de recursos

### Header UDP (Cabeçalho)

- **Simplicidade**: Cabeçalho mais simples que o TCP
- **Campos básicos**: Contém apenas informações essenciais
- **Menor overhead**: Reduz o processamento necessário

### Aplicações Adequadas para UDP

#### Vídeo e Multimídia
- **Tolerância a perdas**: Aceita alguma perda de dados
- **Baixo atraso**: Exige latência mínima
- **Exemplos**: VoIP, streaming de vídeo ao vivo

#### Solicitação e Resposta Simples
- **Transações básicas**: Host envia solicitação e pode receber resposta
- **Exemplos**: DNS, DHCP

#### Aplicativos com Confiabilidade Própria
- **Comunicação unidirecional**: Não requer controle de fluxo complexo
- **Gerenciamento próprio**: Aplicativo gerencia detecção e recuperação de erros
- **Exemplos**: SNMP, TFTP

## Processo de Comunicação TCP e UDP

### Socket

- **Definição**: Combinação de endereço IP e número de porta
- **Composição**: IP de origem + porta de origem OU IP de destino + porta de destino
- **Exemplo**: 192.168.1.7:80
- **Encapsulamento**: Portas colocadas no segmento, depois encapsuladas em pacote IP

### Socket Pairs (Pares de Sockets)

- **Comunicação completa**: Combinação de sockets de origem e destino
- **Identificação única**: Cada comunicação possui par único de sockets
- **Roteamento**: Permite direcionamento correto dos dados

### TCP Port Allocation (Alocação de Portas TCP)

- **Requisições ao servidor**: Clientes fazem requisições usando portas específicas
- **Respostas do servidor**: Servidor responde através da mesma conexão
- **Gerenciamento**: Sistema operacional gerencia alocação de portas

### Estabelecimento de Conexão TCP

- **Three-way handshake**: Processo de três etapas para estabelecer conexão
- **Mensagens de controle**: Troca de mensagens específicas entre cliente e servidor
- **Sincronização**: Estabelece números de sequência iniciais

### Encerramento de Conexão TCP

- **Four-way handshake**: Processo de quatro etapas para encerrar conexão
- **Encerramento gracioso**: Garante que todos os dados sejam transmitidos
- **Liberação de recursos**: Libera recursos após encerramento completo

## Controle de Fluxo e Confiabilidade

### Numeração e Reenvio

- **Retransmissão**: TCP reenvia pacotes perdidos
- **Numeração sequencial**: Pacotes são numerados para controle de ordem
- **Controle de fluxo**: Mantém fluxo adequado para evitar sobrecarga
- **Remontagem**: Segmentos são remontados na ordem correta

### Números de Sequência

- **ISN (Initial Sequence Number)**: Número de sequência inicial definido na configuração
- **Incremento**: Número incrementado conforme bytes são transmitidos
- **Rastreamento**: Permite identificação única de cada segmento
- **Reconhecimento**: Segmentos ausentes são identificados e solicitados

### Buffer de Recepção

- **Armazenamento temporário**: Segmentos colocados em buffer de recepção
- **Ordenação**: Segmentos organizados na sequência correta
- **Processamento**: Segmentos fora de ordem retidos para posterior processamento
- **Entrega**: Dados remontados passados para camada de aplicação

### Perda de Dados

#### Gerenciamento de Perdas
- **Detecção**: TCP detecta segmentos perdidos ou corrompidos
- **Retransmissão**: Mecanismo de reenvio de segmentos não confirmados
- **Confirmação**: Uso de números SEQ e ACK para confirmar recebimento

#### Números SEQ e ACK
- **SEQ (Sequence Number)**: Identifica primeiro byte de dados no segmento
- **ACK (Acknowledgment Number)**: Indica próximo byte esperado pelo receptor
- **Confirmação conjunta**: Usados juntos para garantir integridade dos dados

### Window Size (Tamanho da Janela)

#### Controle de Fluxo
- **Campo de 16 bits**: Define número de bytes que podem ser enviados
- **Confirmação antes de envio**: Aguarda confirmação antes de enviar mais dados
- **Negociação inicial**: Tamanho definido durante handshake de estabelecimento

#### Funcionamento
- **Limitação de origem**: Fonte limita envio baseado no tamanho da janela
- **Confirmação de recebimento**: Confirmação permite envio de mais dados
- **Controle dinâmico**: Tamanho pode ser ajustado durante a sessão

### MSS (Maximum Segment Size) e Controle de Congestionamento

#### MSS
- **Tamanho máximo**: Maior quantidade de dados em um segmento TCP
- **Campo de opções**: Parte do cabeçalho TCP
- **Negociação**: Determinado durante estabelecimento da conexão

#### Controle de Congestionamento
- **Detecção**: Pacotes descartados indicam congestionamento
- **Falta de confirmação**: Segmentos não confirmados sugerem problemas na rede
- **Ajuste de taxa**: Redução no número de bytes enviados antes da confirmação
- **Adaptação dinâmica**: Taxa ajustada conforme condições da rede
