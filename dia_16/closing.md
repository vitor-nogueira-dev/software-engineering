# Fechamento

## Recap: o que resolvemos com containers

Os **containers** são a solução atual para melhor aproveitamento de recursos físicos de servidores. Com eles, conseguimos resolver vários problemas:

### Principais benefícios:
- **Eficiência de recursos**: Não precisamos de 1 servidor para cada aplicação
- **Agilidade**: Disponibilizamos soluções em segundos (vs. tempo para iniciar VMs completas)
- **Menos overhead**: Sem necessidade de gerenciar SO completo (patches, atualizações, etc.)
- **Melhor uso de CPU e memória**: Recursos direcionados especificamente para a aplicação

### O que vimos na prática:
- **Aplicações em containers**: Bancos de dados, APIs (back-end), sites (front-end)
- **Comunicação**: Como containers se comunicam através de redes
- **Acesso externo**: Como o sistema host acessa aplicações via bind de portas
- **Persistência de dados**: Uso de volumes para manter dados mesmo quando containers são destruídos e recriados

## Recap: Docker

O **Docker** é a tecnologia que utilizamos para gerenciar containers, funcionando como um hypervisor especializado.

### Capacidades do Docker:
- **Gestão de containers**: Criar, executar, parar, remover
- **Gestão de redes**: Criação de networks para comunicação entre containers
- **Gestão de volumes**: Persistência e compartilhamento de dados
- **Gestão de imagens**: Build, download, upload de imagens

### Imagens que construímos:
- **Banco de dados**: Oracle em container
- **Back-end**: Aplicações em Java e Python
- **Front-end**: Aplicações React

### Como trabalhamos:
- **Imagens base**: Ubuntu enxuto, Java pré-instalado, Node.js
- **Build customizado**: Criação de nossas próprias imagens
- **Docker Hub**: Uso de imagens pré-prontas da comunidade
- **Interface**: Comandos CLI e Docker Desktop (mesma funcionalidade, interface diferente)

## Recap: o que resolvemos com pipelines

As **pipelines** automatizam processos de desenvolvimento, implementando cultura DevOps através de 3 práticas fundamentais:

### 1. Continuous Integration (CI)
- **Objetivo**: Colaboração contínua com código
- **Como**: Submissão e revisão de código de forma integrada
- **Resultado**: Integração contínua em um produto final

### 2. Continuous Delivery (CD)
- **Objetivo**: Transformar código em algo implantável e testável
- **Como**: Automação do processo de build e testes
- **Resultado**: Feedback rápido sobre problemas no software

### 3. Continuous Deployment
- **Objetivo**: Automação completa do processo
- **Como**: Pipeline totalmente automatizada, sem intervenção manual
- **Resultado**: Múltiplas entregas por dia

### Benefícios das pipelines:
- **Redução de erros humanos**: Processos consistentes e repetíveis
- **Padronização**: Mesmos passos, mesma ordem, sempre
- **Foco no que importa**: Desenvolvedores concentrados em regras de negócio

## Recap: GitLab CI/CD

O **GitLab CI/CD** foi nossa ferramenta para implementar CI/CD através de scripts YAML legíveis.

### Funcionalidades utilizadas:
- **Repositório e versionamento**: GitLab como fonte central do código
- **Pipeline automatizada**: Criação de releases testáveis
- **Separação de ambientes**: Desenvolvimento vs. Release

### Configurações avançadas:
- **Regras condicionais**: Jobs executados baseados em branches específicas
- **Passos manuais**: Quando necessário, inserção de aprovações manuais
- **Variáveis**: Normais, internas do GitLab e secrets (senhas/tokens)
- **GitLab Runner**: Executor local das pipelines

### Ambiente de trabalho:
- **Ambiente de desenvolvimento**: Estável para uso dos desenvolvedores
- **Ambiente de release**: Separado para testes sem impactar desenvolvimento
- **Integração com Docker**: Manipulação de imagens e containers via pipeline

## Explore mais...

### Kubernetes - Próximo nível em containers

O **Docker** foi revolucionário, mas a evolução natural é o **Kubernetes**.

#### O que é Kubernetes:
- **Orquestração de containers**: Mesmos conceitos do Docker, gestão mais avançada
- **Pods**: Grupos de containers funcionando como micro ecossistemas
- **Gerenciamento avançado**: Melhor controle de recursos e escalabilidade

#### Kubernetes na nuvem:
- **AWS**: EKS (Amazon Elastic Kubernetes Service)
- **Google Cloud**: GKE (Google Kubernetes Engine)  
- **Azure**: AKS (Azure Kubernetes Service)

#### Vantagens do Kubernetes:
- **Portabilidade**: Facilita migração entre provedores de nuvem
- **Padronização**: Suportado de forma similar por todos os grandes provedores
- **Escalabilidade**: Gestão automática de recursos baseada em demanda

**Recomendação**: Continue estudando Kubernetes como próximo passo natural na evolução de containers e DevOps.