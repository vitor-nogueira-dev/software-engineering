# Estágios de um fluxo de pipeline

## Preparação do ambiente

Antes de começar, precisamos preparar nosso ambiente:

1. **Clone do repositório de exemplo**:
   ```bash
   git clone https://gitlab.com/everton.juniti/descomplica
   ```

2. **Preparação do repositório de testes**:
   - Copie a pasta `springbootapi` de `cicd_backend` para seu repositório de testes
   - Esta pasta contém o código-fonte Java que usaremos

3. **Estrutura final esperada**:
   ```
   repositorio-teste/
   ├── .gitlab-ci.yml
   ├── springbootapi/
   │   ├── Dockerfile
   │   ├── pom.xml
   │   └── src/
   ```

## Definindo nosso primeiro estágio: test

O estágio de teste executa testes unitários na aplicação Java antes de prosseguir com o build.

### Script básico (.gitlab-ci.yml):

```yaml
variables:
  APP_PATH: springbootapi

stages:
  - test

Testes_Unitarios:
  stage: test
  image: maven:3.8.5-openjdk-17-slim
  script:
    - cd $APP_PATH
    - mvn test
```

### Componentes explicados:

- **Variables**: Define `APP_PATH` como variável reutilizável
- **Stages**: Declara apenas o estágio `test`
- **Job Testes_Unitarios**: 
  - Usa imagem Maven com OpenJDK 17
  - Navega para a pasta da aplicação
  - Executa `mvn test` para rodar testes unitários

### Resultado esperado:
- Pipeline executa com sucesso
- Testes unitários são validados
- Feedback visual no GitLab sobre status dos testes

## Definindo nosso segundo estágio: build

O estágio de build compila a aplicação e cria uma imagem Docker.

### Preparação do Dockerfile:
Adicione a flag `-DskipTests` no Dockerfile para evitar execução dupla de testes:

```dockerfile
# Outras instruções...
RUN mvn clean package -DskipTests
```

### Script completo com build:

```yaml
variables:
  APP_PATH: springbootapi
  DOCKER_TAG_NAME: springbootapi:latest

stages:
  - test
  - prebuild
  - build

Testes_Unitarios:
  stage: test
  image: maven:3.8.5-openjdk-17-slim
  script:
    - cd $APP_PATH
    - mvn test

Limpar_Imagem:
  stage: prebuild
  script:
    - docker stop springbootapi || FAILED=true
    - docker rm springbootapi || FAILED=true
    - docker rmi $DOCKER_TAG_NAME || FAILED=true
  variables:
    GIT_STRATEGY: none

Criar_Imagem:
  stage: build
  script:
    - docker build -t $DOCKER_TAG_NAME ./$APP_PATH
```

### Componentes explicados:

- **Prebuild**: Limpa containers e imagens existentes
  - `GIT_STRATEGY: none`: Não faz clone do repositório (não necessário)
  - `|| FAILED=true`: Ignora erros se container/imagem não existir
- **Build**: Cria nova imagem Docker com a tag definida

## Artifact

Artifacts permitem salvar e compartilhar resultados entre jobs ou disponibilizar para download.

### Configuração no pom.xml:
Adicione o plugin Surefire para gerar relatórios de teste:

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-surefire-plugin</artifactId>
  <version>3.0.0-M7</version>
  <configuration>
    <reportsDirectory>${project.build.directory}/surefire-reports</reportsDirectory>
  </configuration>
</plugin>
```

### Script com artifacts:

```yaml
Testes_Unitarios:
  stage: test
  image: maven:3.8.5-openjdk-17-slim
  script:
    - cd $APP_PATH
    - mvn test
  artifacts:
    paths:
      - $APP_PATH/target/surefire-reports/

Limpar_Imagem:
  stage: prebuild
  dependencies: []  # Não usa artifacts
  script:
    - docker stop springbootapi || FAILED=true
    - docker rm springbootapi || FAILED=true
    - docker rmi $DOCKER_TAG_NAME || FAILED=true
```

### Benefícios:
- Relatórios de teste disponíveis para download
- Compartilhamento de resultados entre jobs
- Histórico de execução de testes

## Cache

O cache otimiza performance evitando operações repetitivas como git clone.

### Implementação:

```yaml
Testes_Unitarios:
  stage: test
  image: maven:3.8.5-openjdk-17-slim
  cache:
    paths:
      - $APP_PATH/
  script:
    - cd $APP_PATH
    - mvn test

Limpar_Imagem:
  stage: prebuild
  cache: {}  # Não usa cache
  variables:
    GIT_STRATEGY: none
  script:
    - docker stop springbootapi || FAILED=true
    - docker rm springbootapi || FAILED=true
    - docker rmi $DOCKER_TAG_NAME || FAILED=true

Criar_Imagem:
  stage: build
  cache:
    paths:
      - $APP_PATH/
  variables:
    GIT_STRATEGY: none  # Usa cache ao invés de git clone
  script:
    - docker build -t $DOCKER_TAG_NAME ./$APP_PATH
```

### Vantagens:
- Reduz tempo de execução
- Evita git clone desnecessário
- Reutiliza código-fonte entre jobs

## Definindo nosso terceiro estágio: deploy

O estágio de deploy sobe um container usando a imagem recém-criada.

### Script completo final:

```yaml
variables:
  APP_PATH: springbootapi
  DOCKER_TAG_NAME: springbootapi:latest

stages:
  - test
  - prebuild
  - build
  - deploy

Testes_Unitarios:
  stage: test
  image: maven:3.8.5-openjdk-17-slim
  cache:
    paths:
      - $APP_PATH/
  script:
    - cd $APP_PATH
    - mvn test
  artifacts:
    paths:
      - $APP_PATH/target/surefire-reports/

Limpar_Imagem:
  stage: prebuild
  dependencies: []
  cache: {}
  variables:
    GIT_STRATEGY: none
  script:
    - docker stop springbootapi || FAILED=true
    - docker rm springbootapi || FAILED=true
    - docker rmi $DOCKER_TAG_NAME || FAILED=true

Criar_Imagem:
  stage: build
  dependencies: []
  cache:
    paths:
      - $APP_PATH/
  variables:
    GIT_STRATEGY: none
  script:
    - docker build -t $DOCKER_TAG_NAME ./$APP_PATH

Deploy_Container:
  stage: deploy
  dependencies: []
  cache: []
  variables:
    GIT_STRATEGY: none
  script:
    - docker run -d --name springbootapi -p 8080:8080 $DOCKER_TAG_NAME
```

### Características do deploy:
- **dependencies: []**: Não precisa de artifacts
- **cache: []**: Não precisa de cache
- **GIT_STRATEGY: none**: Não precisa do código-fonte
- **Script**: Executa container a partir da imagem criada

### ⚠️ Pré-requisito importante:
Certifique-se de que o container do banco Oracle esteja rodando antes do deploy para evitar erros de conexão.

## Resumo do fluxo completo

1. **Test**: Executa testes unitários e gera artifacts
2. **Prebuild**: Limpa containers/imagens existentes
3. **Build**: Compila aplicação e cria imagem Docker
4. **Deploy**: Sobe container com a aplicação

Este fluxo garante qualidade (testes), limpa ambiente (prebuild), prepara deploy (build) e disponibiliza aplicação (deploy).

