# Segurança e Privacidade em Ambientes em Nuvem

## Principais desafios de segurança na nuvem

### Contexto histórico
Antes da era digital, as empresas armazenavam informações em formato físico (papéis, arquivos) protegidos por cofres e salas com alarmes. Com a migração para a nuvem, a proteção dos dados ganhou uma nova dinâmica: agora os dados ficam em servidores que podem ser acessados de qualquer lugar do mundo através de uma conexão.

### Por que a segurança na nuvem é crítica?
Com o crescimento exponencial da migração de empresas para a nuvem, também aumentaram drasticamente os ciberataques. Os motivos incluem:
- Roubo de segredos industriais e patentes
- Acesso a informações de transações comerciais
- Roubo de dados de clientes
- Ataques a instituições financeiras para desvio de recursos

### Os 4 principais desafios de segurança

1. **Violações de dados**: Acesso não autorizado aos dados através de meios fraudulentos

2. **Falha no gerenciamento de identidade**: Identidades mal configuradas no sistema podem dar acesso indevido a recursos, mesmo sem má-fé

3. **Vulnerabilidades do sistema**: Sistemas desatualizados são portas abertas para exploração de falhas de segurança. As atualizações devem ser aplicadas assim que disponíveis

4. **Sequestro de conta**: Roubo de credenciais de usuários legítimos para uso malicioso

### A questão da privacidade
O maior medo dos usuários é o vazamento de dados pessoais, especialmente credenciais de acesso (usuário e senha) que permitem acesso a:
- Serviços bancários
- Contas corporativas de e-mail
- Sistemas e aplicações web

### Soluções e responsabilidade compartilhada
A segurança na nuvem é uma **construção coletiva** que envolve:
- **Tecnologia**: Criptografia forte, autenticação multifator, biometria
- **Comportamento humano**: Criação de senhas fortes, não arquivar credenciais de forma insegura

> ⚠️ **Importante**: As medidas de segurança só são efetivas se o usuário adotar boas práticas!

---

## Ameaças na oferta de Software como um Serviço (SaaS)

### O que é SaaS?
O SaaS é a camada de serviços mais próxima do usuário final, oferecendo softwares que antes eram instalados localmente, mas agora ficam disponíveis via portal web. Exemplos: e-mail, armazenamento em nuvem, ferramentas de produtividade.

### Por que é a camada mais complexa?
- Abriga a **maioria dos usuários** (empresas e pessoas físicas)
- Oferece os **serviços mais populares**
- Concentra grande volume de dados sensíveis

### Mudança no paradigma de armazenamento
**Antes**: Dados ficavam apenas no computador do usuário (armazenamento local)  
**Agora**: Dados ficam armazenados em servidores e bancos de dados das aplicações na nuvem

### Preocupações de segurança no SaaS

#### Para empresas que migram para SaaS:
- O processo de migração requer atenção especial
- Recomenda-se o auxílio de um **Cloud Broker** (profissional especializado que indica os melhores serviços e orienta a migração)
- Riscos durante a migração:
  - Perda de informação
  - Corrompimento de bancos de dados
  - Execução incorreta de operações

#### Segurança oferecida pelos provedores:
- Geralmente é robusta
- Mas não elimina 100% dos riscos de vazamento
- Provedores como AWS oferecem serviços específicos para auxiliar na migração segura

---

## Infraestrutura como um Serviço (IaaS)

### Definição
IaaS oferece recursos de **hardware virtualizado** (anteriormente chamado de Hardware como Serviço). É voltado para organizações que priorizam segurança e gerenciamento próprio dos recursos computacionais.

### Características principais:
- Provedor oferece: Hardware virtualizado (servidores virtuais)
- Cliente gerencia: Instalação e atualização de software
- Acesso: Remoto, geralmente pela internet
- Ambiente: "Bruto", sem sistema operacional pré-instalado

### Responsabilidades do cliente IaaS

O cliente é responsável por:
1. Configurar o ambiente
2. Instalar sistemas operacionais
3. **Manter sistemas atualizados** ⚠️

### Riscos de segurança específicos

#### Negligência nas atualizações:
- Atualizações corrigem vulnerabilidades de segurança
- **Não atualizar = manter vulnerabilidades expostas**
- Sistemas desatualizados são alvos fáceis para ataques

#### Gerenciamento de acesso:
- Muitas empresas dão acesso aos recursos para membros da equipe
- Necessidade de **autenticação criptografada** robusta
- O ambiente geralmente abriga **dados sensíveis**
- O controle de acesso deve ser rigoroso

---

## Plataforma como um Serviço (PaaS)

### Definição
PaaS oferece **sistemas e frameworks** para desenvolvimento de aplicações. É utilizado principalmente por desenvolvedores.

### Diferença fundamental em relação ao IaaS

| Aspecto             | IaaS                               | PaaS                         |
| ------------------- | ---------------------------------- | ---------------------------- |
| Sistema operacional | Cliente instala e configura        | Já vem pré-configurado       |
| Atualizações de SO  | Responsabilidade do cliente        | Responsabilidade do provedor |
| Público-alvo        | Empresas que querem controle total | Desenvolvedores              |

### Vantagens de segurança
- **Provedor mantém sistemas base atualizados**
- Menos preocupação com vulnerabilidades do SO
- Foco do cliente pode ser no desenvolvimento

### Responsabilidades do cliente PaaS

#### Avaliação do provedor:
O desenvolvedor/cliente deve avaliar:
- Nível de segurança oferecido
- Políticas de proteção de dados
- Histórico de segurança do provedor

#### Medidas complementares:
Similar ao IaaS, usuários de PaaS podem implementar:
- **Autenticação de usuário** para acesso à plataforma
- Criação de **perímetros de segurança**

### Semelhança com SaaS
Assim como o SaaS, o PaaS abriga grande quantidade de arquivos e dados dos clientes, tornando a avaliação da segurança do provedor crucial.

---

## 📚 Resumo - Comparação dos Modelos

| Modelo   | Usuário típico               | O que é oferecido             | Responsabilidade do cliente      | Principal desafio de segurança        |
| -------- | ---------------------------- | ----------------------------- | -------------------------------- | ------------------------------------- |
| **SaaS** | Usuários finais, empresas    | Software pronto para uso      | Uso correto, boas práticas       | Volume de usuários, migração de dados |
| **IaaS** | Empresas que querem controle | Hardware virtualizado         | Tudo (SO, atualizações, configs) | Manter sistemas atualizados           |
| **PaaS** | Desenvolvedores              | Plataforma de desenvolvimento | Avaliar segurança do provedor    | Escolha adequada do provedor          |
