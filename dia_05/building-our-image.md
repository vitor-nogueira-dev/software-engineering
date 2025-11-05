# Construindo nossa imagem

## O que é o Dockerfile?

O **Dockerfile** é um arquivo de texto que contém uma "receita de bolo" - um script com instruções passo-a-passo que define como construir uma imagem Docker.

### Características importantes:
- Nome: **"Dockerfile"** (D maiúsculo, resto minúsculo)
- Sem extensão (não é .txt, .yml ou qualquer outra)
- É o formato padrão que o `docker build` reconhece

### Exemplo de Dockerfile básico:
```dockerfile
FROM ubuntu:21.10
RUN apt-get update && apt-get install -y nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Principais comandos:

**FROM**: Define a imagem base (sempre deve ser o primeiro comando)
- Exemplo: `FROM ubuntu:21.10`
- Toda imagem precisa de uma base para se sustentar

**RUN**: Executa comandos durante a construção da imagem
- Exemplo: `RUN apt-get update && apt-get install -y nginx`
- Só é executado durante o build, não quando o container roda

**EXPOSE**: Declara qual porta o container vai expor
- Exemplo: `EXPOSE 80`
- Permite comunicação externa com o container

**CMD**: Define o comando que será executado quando o container iniciar
- Exemplo: `CMD ["nginx", "-g", "daemon off;"]`
- Só roda quando o container é iniciado, não durante o build

## Nosso primeiro build de imagem

Para construir uma imagem a partir do Dockerfile, usamos o comando `docker build`:

```bash
docker build -t meunginx:latest .
```

### Parâmetros explicados:
- `docker build`: Comando para construir imagem
- `-t meunginx:latest`: Tag da imagem (nome:versão)
- `.`: Contexto de build (diretório atual onde está o Dockerfile)

### Verificando a imagem criada:
```bash
docker image ls
```

Este comando lista todas as imagens locais, incluindo a recém-criada.

### Exemplo de uso da imagem:
```bash
docker run --name MeuNginx -p 9080:80 -d meunginx:latest
```

**Parâmetros:**
- `--name MeuNginx`: Nome do container
- `-p 9080:80`: Mapeia porta 9080 (externa) para 80 (interna)
- `-d`: Executa em background (detached mode)
- `meunginx:latest`: Imagem e tag a usar

### Testando o container:
Acesse `localhost:9080` no navegador para ver o nginx funcionando.

## Repositório local vs Repositório Remoto

### Repositório Local:
- Armazena imagens no computador local
- Comandos: `docker image ls`, `docker image rm`
- Acessível apenas na máquina atual

### Repositório Remoto:
- DockerHub, AWS ECR, Google Container Registry
- Permite compartilhamento de imagens
- Comandos: `docker push`, `docker pull`

## Subindo nossa primeira imagem construída

Para verificar se o container está rodando:
```bash
docker container ls
```

### Informações importantes da listagem:
- **NAMES**: Nome do container
- **IMAGE**: Imagem usada para criar o container  
- **COMMAND**: Comando executado (do CMD do Dockerfile)
- **PORTS**: Mapeamento de portas (0.0.0.0:9080->80/tcp)

### Parando e removendo containers:
```bash
# Parar o container
docker stop MeuNginx

# Listar todos os containers (incluindo parados)
docker container ls --all

# Remover o container
docker rm MeuNginx
```

### Removendo imagens:
```bash
# Remover uma imagem
docker image rm meunginx:latest

# Verificar se foi removida
docker image ls
```

## Layered system

O Docker usa um **sistema de camadas** onde cada instrução do Dockerfile cria uma nova camada.

### Características:
- Cada comando do Dockerfile = nova camada
- Camadas são empilhadas uma sobre a outra
- Primeira camada sempre é a imagem base (FROM)
- Mais camadas = imagem maior

### Inspecionando camadas:
```bash
docker image inspect meunginx:latest
```

Este comando mostra todas as informações da imagem, incluindo as camadas na seção "layers".

### Vantagens do sistema de camadas:
- **Reutilização**: Camadas comuns são compartilhadas
- **Eficiência**: Apenas camadas modificadas são baixadas
- **Cache**: Acelera builds subsequentes

## "Tageamento"

As **tags** permitem versionar imagens e ter múltiplas versões disponíveis.

### Formato das tags:
```
nome_da_imagem:versão
```

### Exemplos de versionamento:
```bash
# Diferentes versões da mesma imagem
docker build -t meunginx:1.0 .
docker build -t meunginx:1.1 .
docker build -t meunginx:1.2 .
docker build -t meunginx:2.0 .

# Versão "latest" (mais recente)
docker build -t meunginx:latest .
```

### Boas práticas:
- **latest**: Sempre aponta para a versão mais recente
- **Versionamento semântico**: 1.0, 1.1, 2.0, etc.
- **Ambiente específico**: dev, staging, prod

### Vantagens do tageamento:
- Permite rollback para versões anteriores
- Testes com versões específicas
- Deploy gradual de novas versões
- Isolamento entre ambientes

### Usando tags específicas:
```bash
# Usar versão específica
docker run -d meunginx:1.0

# Usar versão mais recente
docker run -d meunginx:latest
```

---

## Resumo dos Comandos Importantes

```bash
# Build
docker build -t nome:tag .

# Listar imagens
docker image ls

# Executar container
docker run --name nome -p porta_externa:porta_interna -d imagem:tag

# Listar containers
docker container ls
docker container ls --all

# Parar/remover container
docker stop nome_container
docker rm nome_container

# Remover imagem
docker image rm imagem:tag

# Inspecionar imagem
docker image inspect imagem:tag
```

