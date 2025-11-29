# Armazenamento de Dados

## Amazon Elastic Block Store

O **Amazon EBS (Elastic Block Store)** é um serviço de armazenamento de blocos de alta performance da AWS, projetado para trabalhar em conjunto com instâncias EC2.

### Como funciona
- Armazena dados em **volumes (blocos)** que são anexados às instâncias EC2
- Os volumes funcionam como discos rígidos virtuais que persistem independentemente da vida útil da instância
- Permite criar sistemas de arquivos ou usar como dispositivo de bloco tradicional
- É possível alterar dinamicamente a configuração dos volumes

### Quando usar o EBS
- **Sistema de armazenamento principal** de aplicações
- **Bancos de dados** que necessitam de leituras/gravações aleatórias
- Aplicações que exigem **alta velocidade** de acesso aos dados
- Dados que precisam **persistir a longo prazo**
- **Análise de big data** e bancos de dados relacionais em contêineres
- Operações com alto throughput em gravações longas e contínuas

### Características principais
- ⚡ Alta performance e velocidade
- 💾 Persistência de dados garantida
- 🔄 Configuração dinâmica
- 🎯 Otimizado para uso com EC2

---

## Amazon Simple Storage Solution (S3)

O **Amazon S3** é o serviço de armazenamento de objetos mais popular da AWS, oferecendo escalabilidade, disponibilidade, segurança e alta performance.

### Estrutura
- Dados são armazenados em **Buckets**
- Cada arquivo pode ter até **5 terabytes**
- Permite anexar **tags de metadados** aos objetos
- Possibilita hospedar **sites estáticos** diretamente do bucket

### Principais usos
- 💾 **Backups de segurança** (independente do volume)
- 🏗️ **Data Lakes** (dados estruturados e não estruturados)
- 🌐 **Aplicações web/nuvem**
- 📦 **Armazenamento geral** de dados

### Vantagens
- Interface simples e fácil de usar
- Custo econômico (depende da classe de armazenamento escolhida)
- Controles de acesso configuráveis
- Escalabilidade automática
- Múltiplas classes de armazenamento para otimizar custos

---

## Amazon Elastic File System (EFS)

O **Amazon EFS** é um sistema de arquivos simples, elástico e gerenciado, projetado para computação em nuvem com suporte a ambientes locais.

### Características principais
- 📈 Escalonamento automático (de gigabytes a petabytes)
- 🔄 Gerenciamento elástico (se adapta ao volume de arquivos)
- 🤝 Acesso simultâneo por múltiplas instâncias
- 💰 Modelo de pagamento: **paga apenas pelo que usa** (sem taxa mínima)

### Compatibilidade
- Protocolo **NFSv4.1 e NFSv4.0**
- **Amazon EC2** (múltiplas instâncias simultâneas)
- **Amazon ECS**
- **AWS Lambda**

### Classes de armazenamento

**Classes de armazenamento padrão:**
- **EFS Standard**: resiliência Multi-AZ com alta durabilidade e disponibilidade
- **EFS Standard-IA** (Infrequent Access): para dados acessados com menos frequência

**Classes de armazenamento de uma zona:**
- **EFS One Zone**: economia adicional armazenando em uma única zona de disponibilidade
- **EFS One Zone-IA**: combinação de zona única com acesso infrequente para máxima economia

### Quando usar
- Cargas de trabalho que precisam de **acesso compartilhado**
- Aplicações que requerem **alta taxa de transferência** com baixa latência
- Sistemas que precisam de **escalonamento automático**

---

## Comparativo: armazenamento em blocos e objetos

Existem três tipos principais de armazenamento: **arquivos**, **blocos** e **objetos**. Cada um tem características e aplicações específicas.

### 🗂️ Armazenamento de Arquivos
**Como funciona:**
- Dados organizados em **pastas hierárquicas**
- Cada arquivo tem um **caminho** único para recuperação
- Metadados guardam o status e localização do arquivo

**Limitações:**
- Caminhos não podem ser muito longos
- Menos eficiente para grandes volumes

---

### 🧱 Armazenamento em Blocos (ex: EBS)

**Como funciona:**
- Dados divididos em **blocos independentes**
- Cada bloco tem seu **identificador único**
- Blocos podem estar em diferentes sistemas operacionais
- Dados são distribuídos e remontados quando solicitados

**Vantagens:**
- ⚡ Recuperação rápida (cada bloco é independente)
- 🎯 Eficiente para grandes bancos de dados
- 🔧 Fácil gestão
- 💪 Alta performance

**Desvantagens:**
- 💰 Custo mais elevado
- 🏗️ Capacidade limitada de processar metadados
- 👨‍💻 Desenvolvedor precisa gerenciar metadados na aplicação

**Quando usar:**
- Bancos de dados que exigem alta performance
- Aplicações que precisam de leitura/gravação rápida
- Ambientes SAN (Storage Area Network)

---

### 🎯 Armazenamento de Objetos (ex: S3)

**Como funciona:**
- Estrutura **plana** (sem hierarquia de pastas)
- Dados fragmentados em **objetos**
- Todos os objetos em um **único repositório**
- Cada objeto tem **identificador único**

**Metadados ricos:**
- Idade do objeto
- Configurações de segurança/privacidade
- Detalhes de acesso
- Informações customizadas (ex: câmera usada, localização, etc.)

**Vantagens:**
- 💰 Grande economia (paga apenas o que usa)
- 📈 Facilmente escalonável
- 🔍 Pesquisas robustas através dos metadados
- ⚖️ Melhor distribuição de carga

**Desvantagens:**
- 🔒 Objetos **não podem ser modificados** após inserção (gravação única)
- 🐌 Baixa velocidade de gravação
- ❌ Não funciona bem com bancos de dados tradicionais

**Quando usar:**
- Armazenamento de mídia (fotos, vídeos)
- Backups e arquivamento
- Data lakes
- Distribuição de conteúdo web

---

## 📊 Resumo Comparativo

| Característica     | Blocos (EBS)         | Objetos (S3)        |
| ------------------ | -------------------- | ------------------- |
| **Estrutura**      | Blocos independentes | Estrutura plana     |
| **Performance**    | Alta velocidade      | Velocidade moderada |
| **Custo**          | Mais caro            | Mais econômico      |
| **Modificação**    | Permite alterações   | Gravação única      |
| **Uso ideal**      | Bancos de dados      | Backups, mídia      |
| **Escalabilidade** | Manual               | Automática          |
| **Metadados**      | Limitados            | Ricos e detalhados  |