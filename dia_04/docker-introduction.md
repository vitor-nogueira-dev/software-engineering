# Docker: Introdução

## O que é o Docker?

**Docker** é uma ferramenta tecnológica que permite o uso de **containers** de forma fácil e eficiente em qualquer computador.

### Conceito de Container

Um **container** é o agrupamento de uma aplicação junto com todas as suas dependências, que compartilham o kernel do sistema operacional da máquina onde está rodando.

### Analogia do Videogame 🎮

Para entender melhor, imagine um container como uma caixa de videogame (Xbox ou PlayStation):
- **Na caixa vem**: console, controles, fonte de energia, manuais
- **No container vem**: aplicação + suas dependências (ex: aplicação Java + JVM)

Assim como você pode levar o videogame da sua casa para a casa de um amigo, você pode **portar um container** de um computador para outro através de **imagens**.

### Container vs Máquinas Virtuais vs Servidor Físico

| Tipo                | Analogia                        | Características                        |
| ------------------- | ------------------------------- | -------------------------------------- |
| **Servidor Físico** | Ir ao shopping/lan house jogar  | Infraestrutura completa dedicada       |
| **Máquina Virtual** | Montar lan house em cada cômodo | Ambiente isolado com recursos próprios |
| **Container**       | Usar videogame na sua sala      | Compartilha recursos do sistema host   |

### Como o Docker Funciona

O Docker utiliza os recursos do sistema operacional (Windows 10+, Linux, macOS) para:
- Gerenciar CPU, memória RAM, disco
- Dividir recursos entre containers
- Executar múltiplas aplicações isoladamente

## O que é o Docker Hub?

O **Docker Hub** é o repositório oficial onde ficam armazenadas as imagens Docker de:
- **Fornecedores oficiais**: Oracle, Nginx, Ubuntu, GitLab, etc.
- **Imagens customizadas**: Criadas por desenvolvedores da comunidade
- **Suas próprias imagens**: Que você pode criar e compartilhar

### Funcionalidades do Docker Hub
- 📥 **Download** de imagens prontas
- 📤 **Upload** de suas próprias imagens
- 🔍 **Busca** por imagens específicas
- 📊 **Estatísticas** de uso das imagens

**Link**: [hub.docker.com](https://hub.docker.com)

## Instalando o Docker Desktop

### Requisitos de Sistema (Windows)

✅ **Obrigatórios:**
- Windows 10 ou superior
- Processador 64 bits
- Mínimo 4GB RAM (recomendado 8GB+)
- Virtualização habilitada na BIOS

### Verificando Virtualização

1. **Abra o Gerenciador de Tarefas**:
   - Clique com botão direito na barra de tarefas
   - Selecione "Gerenciador de Tarefas"

2. **Verifique a Virtualização**:
   - Aba "Desempenho"
   - Procure por "Virtualização: Habilitado"

⚠️ **Se estiver Desabilitado**: Consulte o manual do fabricante do seu computador para habilitar na BIOS.

### Instalando WSL2 (Windows)

O **Windows Subsystem for Linux (WSL)** permite rodar um ambiente Linux dentro do Windows:

1. **Abra PowerShell como Administrador**
2. **Execute**: `wsl --install`
3. **Reinicie** o computador
4. **Atualize para WSL2** seguindo: [Documentação Microsoft](https://docs.microsoft.com/pt-br/windows/wsl/install-manual#step-4—download-the-linux-kernel-update-package)

### Download e Instalação

1. **Acesse**: [Docker Desktop para Windows](https://docs.docker.com/desktop/windows/install/)
2. **Baixe** o instalador
3. **Instale** (processo pode demorar alguns minutos)
4. **Reinicie** o computador
5. **Aceite** os termos na primeira execução

### Criando Conta no Docker Hub (Opcional)

```bash
# Para fazer login no Docker Hub via CLI
docker login
```

**Benefícios de ter uma conta**:
- Fazer pull de imagens privadas
- Fazer push de suas próprias imagens
- Aumentar limite de downloads

## Do que é feita uma imagem Docker?

Uma **imagem Docker** é um template imutável que contém:

### Componentes Principais

1. **Sistema Operacional Base**
   - Ubuntu, Alpine, CentOS, etc.
   
2. **Runtime da Linguagem**
   - JVM (para Java)
   - Node.js (para JavaScript)
   - Python interpreter, etc.

3. **Dependências e Bibliotecas**
   - Packages instalados
   - Arquivos de configuração

4. **Código da Aplicação**
   - Arquivos fonte
   - Assets estáticos

5. **Comandos de Execução**
   - Scripts de inicialização
   - Variáveis de ambiente

### Repositórios: Local vs Remoto

- **Repositório Local**: Imagens armazenadas no seu computador
- **Repositório Remoto**: Imagens no Docker Hub ou outros registries

### Visualizando Imagens

```bash
# Listar imagens locais
docker images

# Buscar imagens no Docker Hub
docker search <nome-da-imagem>
```

## Subindo nosso primeiro container

### Comandos Básicos

```bash
# Baixar uma imagem
docker pull hello-world

# Executar um container
docker run hello-world

# Listar containers em execução
docker ps

# Listar todos os containers (incluindo parados)
docker ps -a
```

### Exemplo Prático: Nginx

```bash
# Executar um servidor web Nginx
docker run -d -p 8080:80 --name meu-nginx nginx

# Verificar se está rodando
docker ps

# Acessar no navegador: http://localhost:8080

# Parar o container
docker stop meu-nginx

# Remover o container
docker rm meu-nginx
```

### Parâmetros Importantes

- `-d`: Executar em background (detached)
- `-p`: Mapear portas (host:container)
- `--name`: Dar um nome ao container
- `-v`: Mapear volumes (diretórios)
- `-e`: Definir variáveis de ambiente

## Versões de imagens

### Sistema de Tags

As imagens Docker utilizam um sistema de **tags** para identificar versões:

```bash
# Formato: repositório:tag
nginx:latest          # Versão mais recente
nginx:1.21           # Versão específica
nginx:1.21-alpine    # Versão específica com OS Alpine
```

### Tipos de Tags Comuns

| Tag            | Significado                     |
| -------------- | ------------------------------- |
| `latest`       | Versão mais recente (padrão)    |
| `1.0`, `2.1.3` | Versões específicas             |
| `alpine`       | Baseada em Alpine Linux (menor) |
| `slim`         | Versão reduzida                 |
| `dev`          | Versão de desenvolvimento       |

### Boas Práticas

✅ **Recomendado**:
```bash
# Use tags específicas em produção
docker pull nginx:1.21.6-alpine
```

❌ **Evite em produção**:
```bash
# Tag 'latest' pode mudar inesperadamente
docker pull nginx:latest
```

### Verificando Versões Disponíveis

1. **Docker Hub**: Acesse a página da imagem
2. **CLI**: `docker search <imagem>`
3. **API**: Consulte via REST API do Docker Hub

### Exemplo com Múltiplas Versões

```bash
# Baixar diferentes versões do Node.js
docker pull node:16-alpine
docker pull node:18-alpine
docker pull node:20-alpine

# Executar versão específica
docker run -it node:18-alpine node --version
```