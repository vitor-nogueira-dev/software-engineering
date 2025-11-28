# Subindo banco de dados via pipeline

## Criando um repositório MySQL

### Preparação inicial
- **Criação do repositório**: No GitLab, criar um novo projeto em branco com nome "mysql" (ou similar se já existir)
- **Configuração inicial**: Manter como "Private", inicializar com README
- **Clone local**: Fazer git clone para máquina local

### Limpeza do ambiente
Antes de começar, é necessário limpar o ambiente Docker:

```bash
# Remover container MySQL existente
docker rm -f MeuMySQL

# (Opcional) Remover imagem MySQL - se removida, será baixada novamente na pipeline
docker rmi mysql:latest

# Limpar volume local para começar do zero
# Exemplo: excluir conteúdo de D:\docker\volumes\mysql
```

### Comando Docker de referência
O comando que será automatizado pela pipeline:

```bash
docker run --name MeuMySQL \
    --network MinhaRede \
    -v /D/docker/volumes/mysql:/var/lib/mysql \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=Minha@senha \
    -e MYSQL_USER=MeuUsuario \
    -e MYSQL_PASSWORD=MinhaSenha \
    -d mysql:latest
```

> ⚠️ **Importante**: Senhas e informações sensíveis não devem ficar expostas no script da pipeline. Isso será resolvido na seção "Secrets".

### Arquivos necessários
- `script_inicial.sql` - Script de inicialização do banco
- `script_tabelas.sql` - Script para criação de tabelas

## Criando um repositório: Oracle

### Preparação inicial
- **Criação do repositório**: Criar projeto separado com nome "oracle" (ou similar)
- **Separação necessária**: Cada repositório só pode ter um arquivo `.gitlab-ci.yml`
- **Clone local**: Fazer git clone para máquina local

### Configuração especial do Oracle
O Oracle requer configuração adicional de arquivos:

1. **Criar pasta setup**: No diretório local, exemplo: `D:\docker\volumes\oracle\setup`
2. **Copiar script inicial**: Baixar `script_inicial.sql` do repositório de referência
3. **Colocar na pasta setup**: Este arquivo será lido pelo container durante inicialização

### Limpeza do ambiente Oracle
```bash
# Remover container Oracle existente
docker rm -f MeuOracle

# Remover imagem Oracle (obrigatório - será rebuilda)
docker rmi oracle/database:18.4.0-xe

# Limpar volume local
# Exemplo: excluir conteúdo de D:\docker\volumes\oracle
```

### Comando Docker Oracle de referência
```bash
docker run --name MeuOracle \
    --network MinhaRede \
    -v /D/docker/volumes/oracle/oradata:/opt/oracle/oradata \
    -v /D/docker/volumes/oracle/setup:/opt/oracle/scripts/setup \
    -p 1521:1521 \
    -p 5500:5500 \
    -e ORACLE_PWD=MinhaSenha \
    -e ORACLE_CHARACTERSET=AL32UTF8 \
    -d oracle/database:18.4.0-xe
```

### Diferença principal
- **Build necessário**: Oracle requer build de imagem customizada (não está disponível publicamente)
- **Stage adicional**: Pipeline terá stage de "build" antes do "deploy"

## Secrets

### Por que usar Secrets?
- **Segurança**: Evitar exposição de senhas em código
- **Boas práticas**: Separar configuração sensível do código
- **Flexibilidade**: Diferentes ambientes podem ter diferentes credenciais

### Configuração no GitLab

#### Para repositório MySQL:
1. Ir em **Settings > CI/CD**
2. Expandir seção **Variables**
3. Adicionar variáveis (todas com "Mask variable" marcado):
   - `mysqlrootpassword` = `Minha@senha`
   - `mysqluser` = `MeuUsuario`
   - `mysqluserpassword` = `MinhaSenha`

#### Para repositório Oracle:
1. Mesmos passos acima
2. Adicionar variável:
   - `oraclesyspassword` = `MinhaSenha`

### Uso nas pipelines
As variáveis ficam disponíveis como variáveis de ambiente:
```yaml
script:
  - docker run -e MYSQL_ROOT_PASSWORD=$mysqlrootpassword
```

### Proteção adicional
- **Branches protegidas**: Secrets só funcionam em branches protegidas ou com tags
- **Configuração necessária**: Proteger branches "release_*" antes de usar

## Before e After scripts

### Conceito
Scripts que executam antes (before_script) e depois (after_script) do script principal de cada job.

### Comportamento
- **Global**: Se declarado no nível raiz, aplica-se a todos os jobs
- **Local**: Se declarado dentro de um job, sobrescreve o global
- **Ordem de execução**: before_script → script → after_script

### Exemplo de uso
```yaml
before_script:
  - echo "Verificando se Docker está rodando"
  - docker --version
  
script:
  - docker run mysql:latest
  
after_script:
  - echo "Limpando recursos temporários"
  - docker system prune -f
```

### Aplicação prática no projeto
O before_script verifica:
- Se o container já existe e está rodando → nada a fazer
- Se o container existe mas não está rodando → inicia o container
- Se o container não existe → cria novo container

Esta lógica evita conflitos e garante idempotência da pipeline.

## Only e Except

### Conceito
Controles condicionais que determinam quando um job deve ou não executar.

### Only (Apenas quando)
Define condições onde o job **DEVE** executar:

```yaml
job_name:
  only:
    - /^release_.*$/  # Apenas em branches que começam com "release_"
```

**Exemplo prático**: Job só executa em branches como:
- `release_1.0`
- `release_2.1`
- `release_hotfix_1.0.1`

### Except (Exceto quando)
Define condições onde o job **NÃO DEVE** executar:

```yaml
job_name:
  except:
    - main  # Nunca executar na branch main
```

### Estratégia do projeto
- **Produção controlada**: Deploys só em branches de release
- **Proteção da main**: Branch principal protegida de deploys acidentais
- **Workflow organizado**: Desenvolver em feature branches, criar releases para deploy

### Fluxo recomendado
1. Desenvolver em branch feature
2. Merge para main
3. Criar branch `release_x.y` a partir da main
4. Pipeline executa automaticamente
5. Deploy realizado

## Subindo os containers de banco de dados

### Configuração dos Runners
Para que as pipelines funcionem, é necessário:

1. **Habilitar runner**: Em cada repositório (MySQL e Oracle):
   - Settings > CI/CD > Runners
   - Clicar "Enable for this project" no runner usado anteriormente

2. **Ajustar timeout**: Principalmente para Oracle (build demorado):
   - Settings > CI/CD > General pipelines
   - Aumentar timeout de "1h" para "2h"

### Proteção de branches
Como as secrets só funcionam em branches protegidas:

1. **Criar branch release**: `release_1.0` a partir da main
2. **Proteger a branch**: Settings > Repository > Protected branches
   - Selecionar a branch de release
   - "Allowed to merge": Developers + Maintainers
   - "Allowed to push": None (força merge requests)

### Arquivos de pipeline
Copiar os arquivos `.gitlab-ci.yml` dos repositórios de referência:
- **MySQL**: `cicd_database/mysql/.gitlab-ci.yml`
- **Oracle**: `cicd_database/oracle/.gitlab-ci.yml`

### Execução
1. **Criar branch release**: `release_1.0`
2. **Pipeline inicia automaticamente**: Due aos triggers "only"
3. **Acompanhar logs**: Verificar execução no GitLab CI/CD
4. **Containers criados**: Bancos ficam disponíveis após sucesso

### Estrutura final da pipeline Oracle
```yaml
stages:
  - build    # Build da imagem Oracle customizada
  - deploy   # Deploy do container
```

### Estrutura da pipeline MySQL
```yaml
stages:
  - deploy   # Apenas deploy (imagem pública disponível)
```

### Monitoramento
- **Logs da pipeline**: GitLab CI/CD > Pipelines
- **Containers Docker**: Docker Desktop ou `docker ps`
- **Conectividade**: Testar conexão com os bancos após deploy

---

## Dicas

- **Separação de responsabilidades**: Cada banco em repositório próprio
- **Segurança**: Nunca expor credenciais em código
- **Automação**: Pipeline cuida de todo o processo de deploy
- **Controle**: Branches de release controlam quando fazer deploy
- **Idempotência**: Scripts verificam estado antes de agir