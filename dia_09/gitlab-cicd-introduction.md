# Gitlab CI/CD: Introdução

## O que é o Gitlab CI/CD?

**CI/CD** significa **Continuous Integration/Continuous Deployment** (Integração Contínua/Implantação Contínua).

O GitLab CI/CD é uma plataforma integrada que permite:

- **Continuous Integration (CI)**: Automatiza o processo de integração de código, executando testes e builds sempre que há mudanças no repositório
- **Continuous Deployment (CD)**: Automatiza o processo de deploy da aplicação para diferentes ambientes (desenvolvimento, homologação, produção)

### Principais benefícios:
- ✅ Detecção precoce de erros
- ✅ Redução de tempo de deploy
- ✅ Maior confiabilidade nas entregas
- ✅ Automatização de processos repetitivos
- ✅ Melhoria na qualidade do código

### Contexto com Containers:
No contexto de desenvolvimento com containers (como visto nas questões sobre Docker), o GitLab CI/CD é especialmente útil para:
- Automatizar o build de imagens Docker
- Executar testes em containers isolados
- Fazer deploy automático de aplicações containerizadas
- Gerenciar diferentes versões de imagens

## O que é o Gitlab Runner?

O **GitLab Runner** é um agente que executa os jobs definidos no pipeline de CI/CD.

### Características principais:
- **Executor**: É quem realmente executa os comandos definidos nos jobs
- **Flexibilidade**: Pode ser instalado em diferentes plataformas (Linux, macOS, Windows)
- **Escalabilidade**: Permite executar múltiplos jobs simultaneamente
- **Isolamento**: Cada job é executado em um ambiente isolado

### Tipos de Executors:
1. **Shell**: Executa comandos diretamente no shell do sistema
2. **Docker**: Executa jobs dentro de containers Docker
3. **Kubernetes**: Executa jobs em clusters Kubernetes
4. **VirtualBox**: Executa jobs em máquinas virtuais

### Por que usar Docker como executor?
- Isolamento completo entre jobs
- Ambiente consistente e reproduzível
- Facilita o gerenciamento de dependências
- Permite usar diferentes versões de linguagens/ferramentas

## O que é um job do Gitlab CI/CD?

Um **job** é a menor unidade de trabalho em um pipeline do GitLab CI/CD.

### Estrutura de um job:
```yaml
nome_do_job:
  stage: build
  script:
    - echo "Executando comandos"
    - mvn clean compile  # Exemplo para Java
  only:
    - main
```

### Elementos principais:
- **script**: Comandos que serão executados
- **stage**: Fase do pipeline (build, test, deploy)
- **image**: Imagem Docker a ser utilizada
- **only/except**: Condições para execução
- **artifacts**: Arquivos gerados que podem ser usados por outros jobs

### Exemplo prático com diferentes linguagens:

**Java (SpringBoot):**
```yaml
build_java:
  stage: build
  image: maven:3.8-openjdk-11
  script:
    - mvn clean compile
    - mvn package
  artifacts:
    paths:
      - target/*.jar
```

**Python:**
```yaml
test_python:
  stage: test
  image: python:3.9
  script:
    - pip install -r requirements.txt
    - python -m pytest tests/
```

**React:**
```yaml
build_frontend:
  stage: build
  image: node:16
  script:
    - npm install
    - npm run build
  artifacts:
    paths:
      - dist/
```

### Relação com as questões estudadas:
- **Java**: Precisa da fase de build pois é uma linguagem compilada
- **Python**: Não precisa de compilação pois é interpretada em tempo de execução
- **React**: Gera arquivos estáticos que executam no browser do cliente

## Instalando e configurando o Gitlab Runner

### Pré-requisitos:
- Docker instalado (recomendado para usar executor Docker)
- Acesso administrativo ao sistema
- Token de registro do GitLab

### Passos para instalação:

#### 1. Download do GitLab Runner:
```bash
# Linux
sudo curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64

# macOS
sudo curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-darwin-amd64
```

#### 2. Dar permissões de execução:
```bash
sudo chmod +x /usr/local/bin/gitlab-runner
```

#### 3. Registrar o Runner:
```bash
gitlab-runner register
```

Durante o registro, você precisará informar:
- URL do GitLab (https://gitlab.com ou sua instância)
- Token de registro (obtido nas configurações do projeto)
- Descrição do runner
- Tags (opcional)
- Executor (recomendado: docker)
- Imagem padrão do Docker (ex: alpine:latest)

#### 4. Configurações importantes:

**Para executor Docker:**
```toml
[[runners]]
  name = "docker-runner"
  url = "https://gitlab.com/"
  token = "seu-token"
  executor = "docker"
  [runners.docker]
    image = "alpine:latest"
    privileged = false
    disable_cache = false
    volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock"]
```

### Verificação da instalação:
```bash
gitlab-runner list
gitlab-runner verify
```

## Criando nosso repositório no Gitlab

### 1. Criando o projeto:
- Acesse https://gitlab.com
- Clique em "New project"
- Escolha "Create blank project"
- Defina nome, descrição e visibilidade

### 2. Estrutura básica do projeto:
```
projeto/
├── .gitlab-ci.yml          # Arquivo de configuração do CI/CD
├── src/                    # Código fonte
├── tests/                  # Testes automatizados
├── Dockerfile              # Para containerização
├── docker-compose.yml      # Para ambiente completo
└── README.md               # Documentação
```

### 3. Criando o arquivo `.gitlab-ci.yml`:

#### Exemplo básico:
```yaml
stages:
  - build
  - test
  - deploy

variables:
  DOCKER_DRIVER: overlay2

build_job:
  stage: build
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker build -t meu-app .
    - docker push registry.gitlab.com/usuario/projeto:latest

test_job:
  stage: test
  image: node:16
  script:
    - npm install
    - npm test

deploy_job:
  stage: deploy
  script:
    - echo "Deploy para produção"
  only:
    - main
```

#### Exemplo avançado com múltiplos serviços:
```yaml
stages:
  - build
  - test
  - deploy

# Build da aplicação Java
build_backend:
  stage: build
  image: maven:3.8-openjdk-11
  script:
    - cd backend
    - mvn clean package
  artifacts:
    paths:
      - backend/target/*.jar

# Build do frontend React
build_frontend:
  stage: build
  image: node:16
  script:
    - cd frontend
    - npm install
    - npm run build
  artifacts:
    paths:
      - frontend/dist/

# Testes com banco de dados
test_with_database:
  stage: test
  image: maven:3.8-openjdk-11
  services:
    - mysql:8.0
  variables:
    MYSQL_ROOT_PASSWORD: senha123
    MYSQL_DATABASE: teste
  script:
    - mvn test

# Deploy usando Docker Compose
deploy_production:
  stage: deploy
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker-compose up -d
  only:
    - main
```

### 4. Configurações do projeto:

#### Settings > CI/CD:
- **Variables**: Definir variáveis de ambiente (senhas, tokens)
- **Runners**: Visualizar runners disponíveis
- **Pipeline schedules**: Agendar execuções automáticas

#### Variáveis importantes:
```yaml
variables:
  # Para Docker
  DOCKER_HOST: tcp://docker:2375
  DOCKER_DRIVER: overlay2
  
  # Para banco de dados
  DB_HOST: mysql
  DB_NAME: $CI_PROJECT_NAME
  
  # Para deploy
  ENVIRONMENT: production
```

### 5. Monitoramento e debugging:

#### Visualização de pipelines:
- **CI/CD > Pipelines**: Lista de execuções
- **CI/CD > Jobs**: Detalhes de cada job
- **Operations > Environments**: Ambientes de deploy

#### Logs e debugging:
- Cada job mostra logs em tempo real
- Artifacts podem ser baixados
- Histórico completo de execuções

### Dicas importantes:

1. **Segurança**: Use variáveis protegidas para informações sensíveis
2. **Cache**: Configure cache para acelerar builds
3. **Artifacts**: Salve apenas o necessário para economizar espaço
4. **Only/Except**: Use condições para otimizar execuções
5. **Manual jobs**: Para deploys que precisam de aprovação manual

### Exemplo de workflow completo:
```yaml
include:
  - template: Security/SAST.gitlab-ci.yml
  
stages:
  - build
  - test
  - security
  - deploy

.common_script: &common_setup
  - echo "Configuração comum"
  - export PATH=$PATH:/usr/local/bin

build:
  <<: *common_setup
  stage: build
  script:
    - echo "Building application..."

deploy_staging:
  stage: deploy
  script:
    - echo "Deploy para staging"
  environment:
    name: staging
    url: https://staging.exemplo.com
  only:
    - develop

deploy_production:
  stage: deploy
  script:
    - echo "Deploy para produção"
  environment:
    name: production
    url: https://exemplo.com
  when: manual
  only:
    - main
```

---

## Resumo dos conceitos importantes:

- **CI/CD** automatiza integração e deploy
- **GitLab Runner** executa os jobs
- **Jobs** são as tarefas individuais do pipeline
- **Containers** fornecem isolamento e consistência
- **Diferentes linguagens** têm necessidades específicas de build
- **Configuração adequada** é essencial para sucesso do projeto