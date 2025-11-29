# Conectividade com a AWS

## Conceitos básicos de redes

As **redes de computadores** são fundamentalmente sistemas que permitem a conexão e comunicação entre dois ou mais computadores, possibilitando o compartilhamento de recursos e informações.

### Definição e origem
- A internet surgiu do desenvolvimento das primeiras redes de computadores
- Objetivo inicial: permitir que computadores fisicamente distantes pudessem se conectar e compartilhar recursos
- **Definição científica**: "conjunto de recursos que, corretamente interligados e configurados, permitem a efetiva troca de informações entre computadores distintos"

### Características fundamentais
- **Requisito mínimo**: dois computadores conectados com alguma forma de comunicação
- **Evolução**: redes passaram a conectar grupos de computadores mesmo geograficamente distantes
- **Tecnologias habilitadoras**: protocolos de rede e telecomunicações
- **Internet atual**: heterogenia de redes locais (LAN) e redes de longa distância (WAN)

### Componentes das redes modernas
- **Redes de telecomunicações**: redes das operadoras de telefonia
- **Redes computacionais**: redes locais LAN
- **Classificação principal**: redes públicas vs redes privadas

## Diferença entre recursos de redes públicas e privadas

### Redes Públicas
As **redes públicas** são caracterizadas pela disponibilidade ampla e acesso simplificado, sendo a internet o melhor exemplo.

#### Características principais:
- **Acesso livre**: conexão simplificada para qualquer usuário
- **Competição por recursos**: maior quantidade de usuários compartilhando a infraestrutura
- **Modelo de negócio**: funciona como serviço pago por assinatura
- **Proprietário**: pertence a um provedor de serviço (ISPs - Internet Service Providers)
- **Alcance**: oferecido para o público em geral

#### Importante destacar:
- O termo "público" refere-se à disponibilidade do serviço, não ao compartilhamento de dados privados
- Arquivos e dados permanecem devidamente protegidos mesmo em redes públicas

### Redes Privadas
As **redes privadas** são controladas por grupos específicos e não são oferecidas amplamente.

#### Características principais:
- **Controle restrito**: acesso limitado a grupos específicos
- **Implementação comum**: empresas que necessitam de maior segurança
- **Sem competitividade**: recursos dedicados sem compartilhamento externo
- **Segurança avançada**: uso intensivo de autenticação de usuário e criptografia
- **VPN**: redes privadas virtuais para empresas na computação em nuvem

#### Fatores de decisão:
- Necessidade de segurança dos arquivos que transitarão na rede
- Tipo de aplicação: destinada a grupos fechados ou usuários gerais

## Redes Globais

As **redes globais** representam a capacidade de conectar computadores independentemente da distância geográfica, sendo a internet o principal exemplo.

### Conceito e importância
- **Globalização digital**: possibilidade de conectar computadores separados por milhares de quilômetros
- **Internet como rede global**: conecta milhões de computadores, outras redes, servidores e dispositivos IoT
- **Infraestrutura dinâmica**: orientada pelas necessidades de novas aplicações

### Componentes da infraestrutura global
#### Dispositivos conectados:
- Servidores
- Roteadores
- Computadores
- Smartphones
- Tablets
- Dispositivos IoT

#### Estruturas de comunicação:
- Satélites
- Cabos ópticos
- Outros meios de transmissão

### Serviços disponíveis
- **VoIP**: telefonia via internet
- **E-mail**: correio eletrônico
- **FTP**: transferência de arquivos
- **DNS**: resolução de nomes de domínio
- **World Wide Web (www)**

### Impacto e aplicações
- **Negócios**: papel fundamental no mundo empresarial
- **Vida cotidiana**: essencial nas últimas décadas
- **Desenvolvimento**: plataforma para criação e publicação de aplicações para bilhões de usuários
- **Serviços**: consumo de entretenimento, conhecimento, compras online

## AWS Direct Connect

O **AWS Direct Connect** é um serviço da Amazon Web Services que aprimora a conectividade de redes através de conexões dedicadas de fibra óptica.

### Conceito e funcionamento
- **Definição**: serviço que melhora latência, ping e outros indicadores de qualidade
- **Tecnologia**: conexão via fibra óptica entre rede interna e local do Direct Connect
- **Nome explicativo**: "Direct Connect" = conexão direta

### Vantagens técnicas
#### Performance superior:
- **Fibra óptica**: conexões ultra velozes, muito mais rápidas que ethernet padrão
- **Latência reduzida**: melhor tempo de resposta
- **Qualidade de serviço**: indicadores aprimorados de performance

#### Conectividade direta:
- **Cabo dedicado**: uma ponta conectada ao computador/roteador do cliente
- **Outra ponta**: conectada ao roteador no AWS Direct Connect

### Integração com serviços AWS
#### Acesso direto a:
- **Amazon S3**: buckets de armazenamento
- **Amazon VPC**: Virtual Private Cloud
- **Outros serviços AWS**: sem necessidade de provedores de internet intermediários

#### Benefícios operacionais:
- Conexão direta aos serviços AWS
- Redução de dependência de provedores externos
- Maior controle sobre a conectividade
- Melhor previsibilidade de performance