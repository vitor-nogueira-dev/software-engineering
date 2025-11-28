# Subindo API via Pipeline

## Preparação do Ambiente

### Limpeza do Ambiente Docker

Antes de começar, é necessário limpar o ambiente Docker:

**Para MySQL:**
- Excluir container `MeuMySQL` do Docker Desktop
- Limpar volume: `D:\docker\volumes\mysql` (ou seu diretório equivalente)
- Manter ou excluir imagem `mysql:latest` (opcional)

**Para Oracle:**
- Excluir container `MeuOracle` do Docker Desktop  
- Excluir imagem `oracle/database:18.4.0-xe` (será recriada via pipeline)
- Limpar volume: `D:\docker\volumes\oracle` (ou seu diretório equivalente)

### Comandos de Referência

**MySQL:**
```bash
docker run --name MeuMySQL --network MinhaRede \
  -v /D/docker/volumes/mysql:/var/lib/mysql \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=Minha@senha \
  -e MYSQL_USER=MeuUsuario \
  -e MYSQL_PASSWORD=MinhaSenha \
  -d mysql:latest
```

**Oracle:**
```bash
docker run --name MeuOracle --network MinhaRede \
  -v /D/docker/volumes/oracle/oradata:/opt/oracle/oradata \
  -v /D/docker/volumes/oracle/setup:/opt/oracle/scripts/setup \
  -p 1521:1521 -p 5500:5500 \
  -e ORACLE_PWD=MinhaSenha \
  -e ORACLE_CHARACTERSET=AL32UTF8 \
  -d oracle/database:18.4.0-xe
```

## Criação dos Repositórios

### Repositório MySQL
1. Criar novo projeto no GitLab com nome `mysql`
2. Configurar como repositório privado
3. Inicializar com README
4. Fazer git clone para máquina local
5. Adicionar arquivos: `script_inicial.sql` e `script_tabelas.sql`

### Repositório Oracle
1. Criar novo projeto no GitLab com nome `oracle`
2. Configurar como repositório privado
3. Inicializar com README
4. Fazer git clone para máquina local
5. Copiar `script_inicial.sql` do repositório de referência
6. Criar pasta `setup` e adicionar o script

## Configuração de Variáveis de Ambiente (Secrets)

Para manter segurança, configurar variáveis no GitLab em **Settings > CI/CD > Variables**.

### Variáveis do MySQL
- `mysqlrootpassword`: `Minha@senha` (marcada como "Mask variable")
- `mysqluser`: `MeuUsuario` (marcada como "Mask variable")
- `mysqluserpassword`: `MinhaSenha` (marcada como "Mask variable")

### Variáveis do Oracle
- `oraclesyspassword`: `MinhaSenha` (marcada como "Mask variable")

**Importante:** Essas variáveis só funcionam em branches protegidas ou com tags.

## Scripts de Pipeline

### Estrutura dos Scripts (.gitlab-ci.yml)

#### Before/After Scripts
- **before_script**: Executado antes de todos os jobs
- **after_script**: Executado depois de todos os jobs
- Podem ser sobrescritos a nível de job

#### Controle de Execução
- **only**: Job executa apenas sob condições específicas
  - Exemplo: `only: - /^release_\d+\.\d+$/` (executa apenas em branches release_x.y)
- **except**: Job executa exceto sob condições específicas
  - Exemplo: `except: - main` (não executa na branch main)

### Diferenças entre MySQL e Oracle
- **MySQL**: Usa imagem pública, não precisa de build
- **Oracle**: Requer stage de build para criar imagem customizada

## Configuração dos Runners

1. Acessar **Settings > CI/CD > Runners** em cada repositório
2. Clicar em "Enable for this project" para habilitar o runner
3. Configurar timeout para Oracle: **Settings > CI/CD > General pipelines**
   - Alterar timeout de 1h para 2h (devido ao build demorado)

## Execução das Pipelines

### Criação de Branch Release
1. Criar branch com padrão `release_x.y` (ex: `release_1.0`) baseada na main
2. A pipeline será automaticamente iniciada

### Proteção de Branches
Para usar as variáveis secrets, proteger a branch:
1. Ir em **Settings > Repository > Protected branches**
2. Selecionar a branch de release
3. Configurar:
   - **Allowed to merge**: Developers + Maintainers
   - **Allowed to push**: None (força merge request)

### Fluxo de Trabalho
- Modificações são feitas em branches separadas
- Merge requests são criados para branches release
- Pipeline executa automaticamente no merge
- Branches main não executam jobs por conta do `except`

## Observações Importantes

- Cada repositório pode ter apenas um arquivo `.gitlab-ci.yml`
- Branches release devem seguir o padrão `release_\d+\.\d+`
- Build do Oracle demora mais tempo que MySQL
- Secrets são mascaradas nos logs por segurança
- Configurações podem ser ajustadas conforme necessidade do projeto
