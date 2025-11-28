# Subindo uma solução completa

## Arquitetura da Solução

A solução segue a seguinte arquitetura:
- **Frontend**: React (porta 3000)
- **APIs**: 
  - Java SpringBoot conectando ao Oracle (porta 8080)
  - Python FastAPI conectando ao MySQL (porta 8000)
- **Bancos de Dados**:
  - Oracle (porta 1521)
  - MySQL (porta 3306)

### Criando a Rede Docker

Primeiro, precisamos criar uma sub-rede Docker para permitir comunicação entre os containers:

```bash
docker network create -d bridge MinhaRede
```

**Parâmetros explicados:**
- `docker network`: comando para gerenciar redes Docker
- `create`: indica criação de uma nova rede
- `-d bridge`: define o driver bridge (permite comunicação livre entre containers)
- `MinhaRede`: nome da nossa rede customizada

> **Importante**: A sub-rede é essencial para que as APIs consigam "enxergar" os bancos de dados.

## Montando nosso build de banco de dados

### Preparação do Oracle

1. **Clone do repositório oficial Oracle:**
```bash
git clone https://github.com/oracle/docker-images.git
```

2. **Navegue até a pasta de dockerfiles:**
```bash
cd docker-images/OracleDatabase/SingleInstance/dockerfiles
```

3. **Execute o build da imagem Oracle:**
```bash
./buildContainerImage.sh -v 18.4.0 -x
```

> **Dica**: Digite o comando manualmente (não copie/cole) para evitar erros. O build pode levar bastante tempo.

4. **Prepare as pastas para volumes:**
Crie as seguintes pastas em seu sistema:
- `oracle/oradata` (para dados do banco)
- `oracle/setup` (inclua o arquivo `script_inicial.sql`)

## Subindo Oracle e MySql

### Subindo o Container Oracle

```bash
docker run --name MeuOracle --network MinhaRede \
  -v /D/docker/volumes/oracle/oradata:/opt/oracle/oradata \
  -v /D/docker/volumes/oracle/setup:/opt/oracle/scripts/setup \
  -p 1521:1521 -p 5500:5500 \
  -e ORACLE_PWD=MinhaSenha \
  -e ORACLE_CHARACTERSET=AL32UTF8 \
  -d oracle/database:18.4.0-xe
```

**Parâmetros importantes:**
- `--network MinhaRede`: conecta à nossa sub-rede
- `-v`: monta volumes para persistência de dados
- `-p 1521:1521`: mapeia porta do Oracle
- `-e ORACLE_PWD`: define senha do usuário SYS

> **Nota**: A primeira inicialização pode levar 30-40 minutos.

### Configuração Oracle

1. Use o Oracle SQL Developer para conectar
2. Execute o script `script_tabelas.sql` com o usuário `MeuUsuario`

### Subindo o Container MySQL

1. **Crie pasta para volume MySQL:**
```bash
mkdir -p mysql
```

2. **Execute o container MySQL:**
```bash
docker run --name MeuMySQL --network MinhaRede \
  -v /D/docker/volumes/mysql:/var/lib/mysql \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=Minha@senha \
  -e MYSQL_USER=MeuUsuario \
  -e MYSQL_PASSWORD=MinhaSenha \
  -d mysql:latest
```

### Configuração MySQL

1. Use o MySQL Workbench para conectar
2. Execute `script_inicial.sql` com usuário root
3. Execute `script_tabelas.sql` com usuário `MeuUsuario`

## Subindo Java SpringBoot

### Análise do Dockerfile Java

O Dockerfile utiliza duas imagens base:
1. **Build Stage**: `maven:3.8.5-openjdk-17-slim` para compilação
2. **Runtime Stage**: `openjdk:17-slim` para execução

**Características:**
- Expõe porta 8080
- Comando de execução: `java -jar /usr/local/lib/springbootapi.jar`
- Conecta ao banco Oracle

### Build e Execução

1. **Build da imagem:**
```bash
docker build --label springbootapi --no-cache -t springbootapi:latest .
```

2. **Criar container:**
```bash
docker run --name MeuSpringBootAPI --network MinhaRede \
  -p 8080:8080 -d springbootapi:latest
```

### API Python FastAPI

### Análise do Dockerfile Python

**Características:**
- Imagem base: `python:3.6-slim`
- Não requer compilação (linguagem interpretada)
- Expõe porta 8000
- Comando de execução: `uvicorn app.main:app --host 0.0.0.0 --port 8000`
- Conecta ao banco MySQL

### Build e Execução Python

1. **Build da imagem:**
```bash
docker build --label pythonapi --no-cache -t pythonapi:latest .
```

2. **Criar container:**
```bash
docker run --name MeuPythonAPI --network MinhaRede \
  -p 8000:8000 -d pythonapi:latest
```

## Montando nosso build de front-end

### Análise do Dockerfile React

O Dockerfile do React configura:
- Build da aplicação React
- Configuração do servidor web
- Exposição da porta 3000
- Comunicação com as APIs Java e Python

## Subindo React

### Build e Execução React

1. **Build da imagem:**
```bash
docker build --label reactsite --no-cache -t reactsite:latest .
```

2. **Criar container:**
```bash
docker run --name MeuReactSite --network MinhaRede \
  -p 3000:3000 -d reactsite:latest
```

## Verificação da Solução

### Containers Ativos

Após executar todos os comandos, você terá:
- **Oracle**: porta 1521
- **MySQL**: porta 3306  
- **API Java**: porta 8080
- **API Python**: porta 8000
- **React**: porta 3000

### Verificar Rede

Para confirmar que todos os containers estão na mesma rede:

```bash
docker network inspect MinhaRede
```

### Fluxo de Comunicação

```
React (3000) → API Java (8080) → Oracle (1521)
             → API Python (8000) → MySQL (3306)
```

## Considerações Importantes

- **Ordem de inicialização**: Bancos → APIs → Frontend
- **Dependências**: APIs dependem dos bancos estarem funcionando
- **Rede**: Todos os containers devem estar na mesma sub-rede
- **Volumes**: Essenciais para persistência de dados dos bancos

> **Ambiente de produção**: Em produção, existem outros mecanismos mais robustos para comunicação entre containers, mas esta solução é ideal para desenvolvimento e aprendizado.
