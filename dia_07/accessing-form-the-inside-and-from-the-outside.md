# Acessando "de dentro" e "de fora"

## Conceito: host e seus containers

O Docker funciona com uma arquitetura baseada em **host** e **containers**:

- **Host**: É a base que sustenta todo o funcionamento dos containers
- **Containers**: "Rodam em cima" do host, usando seus recursos (CPU, memória, disco, rede)

### Como funciona a comunicação

Os containers compartilham recursos do host de forma inteligente:
- Usam a placa de rede do host para conectividade com a internet
- Pegam "um pedacinho emprestado" dos recursos necessários para se sustentar
- Todo gerenciamento é feito pelo Docker automaticamente

**Importante**: O host não é necessariamente o sistema operacional do seu computador!

## Windows vs Linux vs Mac

Cada sistema operacional tem suas particularidades para rodar Docker:

### Windows
- Pode usar **WSL** (Windows Subsystem for Linux) para rodar containers Linux
- Também pode usar **Hyper-V** para containers Windows nativos
- Containers Windows só rodam em hosts Windows (limitação de portabilidade)

### Mac (macOS)
- **Obrigatoriamente** usa um host baseado em Linux "por trás da cortina"
- Não há opção de containers nativos do Mac
- Boa portabilidade por usar Linux como base

### Linux
- Execução nativa, sem camadas de virtualização
- Melhor performance por ser o ambiente nativo do Docker
- Total compatibilidade com todas as imagens baseadas em Linux

## Qual é a melhor escolha de host?

**Resposta: Host baseado em Linux!** 

### Vantagens do Linux como host:
- ✅ Funciona em **qualquer sistema operacional** (Windows, Mac, Linux)
- ✅ **Máxima portabilidade** das soluções
- ✅ Compatibilidade com a **maior variedade de imagens**
- ✅ Comunidade e ecossistema mais amplo

### Por que Linux é preferível:
```
Windows + WSL + Docker = Linux containers ✅
Mac + Docker = Linux containers ✅  
Linux + Docker = Linux containers ✅
```

Construindo imagens baseadas em Linux, você garante que sua solução rode em qualquer lugar!

## Acessando um container

### Estrutura dos "mini sistemas operacionais"
Cada container funciona como um **mini computador independente**:

```
┌─────────────────────────────────────┐
│           HOST LINUX                │
├─────────────────────────────────────┤
│  Container 1    Container 2         │
│  (Ubuntu)       (CentOS)            │
│  ┌─────────┐    ┌─────────┐        │
│  │ Nginx   │    │  Java   │        │
│  │ (port   │    │  App    │        │
│  │  80)    │    │ (port   │        │
│  └─────────┘    │ 8080)   │        │
│                  └─────────┘        │
└─────────────────────────────────────┘
```

### Comando para "entrar" em um container:
```bash
docker exec -it NOME_DO_CONTAINER bash
```

- `docker exec`: executa comandos em container ativo
- `-it`: modo interativo (terminal)
- `bash`: tipo de terminal a usar

## O que é a tal da Porta?

### Analogia simples: Sistema de Endereçamento
Imagine uma rua com várias casas (containers):

🏠 **Casa 1** → Número **80** (Container Nginx)  
🏠 **Casa 2** → Número **8080** (Container Java)  
🏠 **Casa 3** → Número **3306** (Container MySQL)

### Como funciona o "bind de porta":
- **Porta interna**: número que o serviço usa dentro do container
- **Porta externa**: número que usamos para acessar do host
- **Bind**: conexão entre porta externa ↔ porta interna

### Regra importante:
⚠️ **Uma mesma porta externa não pode ser usada por 2 containers ativos simultaneamente!**

## Acessando um container pela Porta

### Exemplo prático: Container Nginx

#### 1. Container SEM bind de porta:
```bash
docker run --name NginxSemBindDePorta -d nginx
```
- ❌ Não acessível do host
- ✅ Acessível apenas internamente (porta 80)

#### 2. Container COM bind de porta:
```bash
docker run --name NginxComBindDePorta -p 9280:80 -d nginx
```
- ✅ Acessível do host via `localhost:9280`
- ✅ Redireciona porta 9280 → porta 80 interna

### Comunicação entre containers

#### Containers na mesma rede (bridge padrão):
```bash
# Verificar a rede padrão
docker network inspect bridge

# De dentro de um container, chamar outro:
curl IP_DO_OUTRO_CONTAINER:PORTA_INTERNA
# Exemplo: curl 172.17.0.5:80
```

#### Containers em redes diferentes:
- ❌ **Não se enxergam** (redes isoladas)
- Exemplo: rede `172.17.x.x` não acessa `172.18.x.x`

### Entendendo localhost:

#### Do host (seu computador):
```bash
curl localhost:9280  # Acessa o container com bind
```

#### De dentro do container:
```bash
curl localhost:80    # Acessa o PRÓPRIO container (não o host!)
```

### Resumo da comunicação:
```
Host (Windows/Mac/Linux)
    ↓ bind de porta (ex: 9280:80)
Container A ←→ Container B (mesma rede)
    ↓ localhost dentro do container
Próprio Container A
```

### Comandos essenciais:
```bash
# Listar containers ativos
docker ps

# Entrar no container
docker exec -it NOME_CONTAINER bash

# Verificar redes
docker network ls
docker network inspect NOME_REDE

# Criar container com bind de porta
docker run -p PORTA_EXTERNA:PORTA_INTERNA -d IMAGEM
```