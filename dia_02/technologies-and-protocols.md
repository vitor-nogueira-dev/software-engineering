# Tecnologias e Protocolos

## Introdução

Este documento aborda as principais tecnologias e protocolos utilizados em redes de computadores, fornecendo uma compreensão técnica sobre como as redes funcionam e se conectam à Internet.

## Conexões com a Internet

### Tipos de Conexão para Usuários Residenciais e Small Office

#### Dial-up (Acesso Discado)
- **Características**: Opção econômica usando linha telefônica e modem
- **Largura de banda**: Baixa (ordem de kbits/s)
- **Uso**: Limitado devido à baixa velocidade

#### DSL (Digital Subscriber Lines)
- **Características**: Maior largura de banda e conexão sempre ativa
- **Tecnologia**: Utiliza linha telefônica existente
- **Tipo comum**: ADSL (Asymmetric DSL) - download > upload
- **Público-alvo**: Usuários residenciais e pequenos escritórios

#### Cable Modem
- **Provedor**: Empresas de TV a cabo
- **Característica**: Dados transmitidos no mesmo cabo da TV
- **Vantagens**: Maior largura de banda e disponibilidade

#### Conexão Celular
- **Tecnologia**: Rede de telefonia celular
- **Limitação**: Desempenho dependente da tecnologia celular disponível
- **Mobilidade**: Principal vantagem

#### Satélite
- **Benefício**: Conectividade em áreas remotas
- **Requisito**: Linha de visão direta para o satélite
- **Aplicação**: Locais onde outras tecnologias são inviáveis

### Tipos de Conexão para Empresas e Organizações

#### Linhas Dedicadas
- **Características**: Circuitos reservados na rede do provedor
- **Finalidade**: Conectar escritórios geograficamente separados
- **Modelo**: Aluguel mensal ou anual

#### Metro Ethernet (Ethernet MAN)
- **Definição**: Extensão da tecnologia LAN para MAN/WAN
- **Padrão**: Desenvolvido pelo Metro Ethernet Forum
- **Aplicação**: Ambientes corporativos

#### Business DSL
- **Tipos**: SDSL (Symmetric DSL) - mesma taxa upload/download
- **Diferencial**: Serviço corporativo com SLA
- **Aplicação**: Empresas de médio porte

#### Satélite Empresarial
- **Uso**: Quando conexões cabeadas ou móveis não estão disponíveis
- **Aplicação**: Backup ou conexão primária em locais remotos

### Evolução das Redes: Dedicadas vs Convergentes

#### Redes Tradicionais (Dedicadas)
- **Rede de dados**: Serviço exclusivo para computadores
- **Rede de telefonia**: Serviço exclusivo para voz
- **Rede de transmissão**: Serviço exclusivo para TV broadcast

#### Redes Convergentes
- **Conceito**: Uma infraestrutura para voz, dados e vídeo
- **Tecnologias**: IP/MPLS e SDN-WAN
- **Vantagem**: Redução de custos e complexidade

## Redes Confiáveis

### Definição
Redes que implementam critérios e requisitos para comunicação segura e eficiente, considerando escalabilidade, tolerância a falhas, segurança e qualidade de serviço.

### Arquitetura de Rede
- **Definição**: Tecnologias que suportam infraestrutura e serviços
- **Componentes**: Protocolos e regras programadas
- **Base**: Implementação das camadas do modelo OSI

### Pilares da Confiabilidade

#### 1. Tolerância a Falhas
- **Objetivo**: Limitar dispositivos afetados durante falhas
- **Mecanismo**: Recuperação rápida através de caminhos alternativos
- **Implementação**: Redes comutadas por pacotes com roteamento dinâmico
- **Redundância**: Múltiplos caminhos para o mesmo destino

#### 2. Escalabilidade
- **Definição**: Capacidade de suportar novos usuários sem degradar performance
- **Implementação**: Seguir padrões e protocolos aceitos
- **Benefício**: Crescimento ordenado da rede

#### 3. Qualidade de Serviço (QoS)
- **Função**: Gerenciar congestionamento e garantir entrega confiável
- **Foco**: Priorizar tráfego sensível ao atraso
- **Critério**: Tipo de tráfego, não o conteúdo

#### 4. Segurança
- **Proteção física**: Dispositivos de conectividade
- **Proteção lógica**: Prevenção de acesso não autorizado
- **Base**: Tríade CIA (Confidentiality, Integrity, Availability)

## Regras de Comunicação

### Fundamentos da Comunicação

#### Elementos Básicos
1. **Fonte da mensagem (remetente)**
   - Pessoas ou dispositivos eletrônicos
   - Responsável por enviar a mensagem

2. **Destino da mensagem (receptor)**
   - Recebe e interpreta a mensagem
   - Pode ser único ou múltiplo

3. **Canal**
   - Meio físico de transmissão
   - Caminho da origem ao destino

### Protocolos de Comunicação

#### Regras e Requisitos
- **Identificação**: Remetente e destinatário
- **Linguagem**: Comum entre as partes
- **Temporização**: Velocidade e tempo de entrega
- **Confirmação**: Requisitos de reconhecimento

### Aspectos Técnicos da Comunicação

#### 1. Codificação
- **Transmissão**: Conversão de informações para formato adequado
- **Recepção**: Decodificação para interpretar informações
- **Exemplos**: Bits em tensões elétricas, luz infravermelha, frequências

#### 2. Formatação e Encapsulamento
- **Estrutura**: Formato específico dependente do tipo de mensagem
- **Analogia**: Carta dentro do envelope com endereço
- **Protocolo**: IP como "envelope" da mensagem

#### 3. Tamanho da Mensagem
- **Fragmentação**: Divisão em partes menores (frames)
- **Requisitos**: Atender tamanhos mínimo e máximo
- **Processamento**: Facilitar compreensão pelo receptor

#### 4. Aspectos Temporais
- **Controle de fluxo**: Gerenciamento da taxa de transmissão
- **Tempo limite**: Aguardo por resposta em tempo aceitável
- **Método de acesso**: Quando enviar mensagem

#### 5. Opções de Entrega
- **Unicast**: Um destinatário específico
- **Multicast**: Grupo de destinatários
- **Broadcast**: Todos os destinatários da rede
