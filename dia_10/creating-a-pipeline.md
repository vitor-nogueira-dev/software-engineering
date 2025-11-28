# Criando um Pipeline

## O que é YAML?

**YAML** (YAML Ain't Markup Language) é uma linguagem de serialização de dados legível por humanos, amplamente utilizada para arquivos de configuração e pipelines CI/CD.

### Características do YAML:
- **Fácil leitura**: Sintaxe simples e clara para humanos
- **Menos verboso**: Mais conciso que XML
- **Transformação**: Pode ser convertido para qualquer linguagem de programação
- **Padrão de mercado**: Amplamente adotado na indústria

### Sintaxe Básica:

**Chave-Valor simples:**
```yaml
NomeDaAplicacao: teste
```

**Lista de itens:**
```yaml
- Item 1
- Item 2
- Item 3
```

**Valor como lista:**
```yaml
Brinquedos: [Bola, Carrinho, Boneca]
```

**Estrutura hierárquica:**
```yaml
variaveis:
  variavel1: valor1
  variavel2: valor2
  variavel3: valor3
```

📚 **Referência completa:** https://yaml.org/spec/1.2.2/

## Criando nosso primeiro script

### Estrutura básica do GitLab CI/CD

O arquivo de pipeline deve se chamar `.gitlab-ci.yml` e ser colocado na raiz do repositório.

### Stages (Estágios)

Os **stages** organizam a pipeline em etapas sequenciais:

```yaml
stages:
  - test
  - build
  - deploy
```

**Comportamento:**
- Se não definir stages, todos os jobs executam em paralelo
- Stages executam sequencialmente na ordem definida
- Dentro de cada stage, os jobs podem executar em paralelo

### Jobs (Trabalhos)

Os **jobs** são as tarefas executadas pelos runners:

```yaml
stages:
  - deploy

Implantacao_Nginx:
  stage: deploy
  script:
    - docker run -d --name nginx1 -p 8080:80 nginx

Implantacao_Nginx_2:
  stage: deploy
  script:
    - docker run -d --name nginx2 -p 8081:80 nginx
```

### Configurando paralelismo

Para executar jobs em paralelo, configure o runner:

1. Acesse o arquivo de configuração: `config.toml`
2. Altere: `concurrent = 1` para `concurrent = 4`
3. A configuração é aplicada automaticamente (sensibilizada a cada 3 segundos)

📁 **Exemplo de localização:** `D:\docker\volumes\gitlab-runner\config\config.toml`

### Executando a pipeline

1. Vá em **CI/CD → Pipelines**
2. Clique em **"Run pipeline"**
3. Confirme clicando novamente em **"Run pipeline"**

## O que é o LINT?

O **CI Lint** é uma ferramenta de validação que verifica se o script YAML está correto antes da execução.

### Como usar:

1. Acesse **CI/CD → Pipelines**
2. Clique em **"CI lint"**
3. Cole seu código YAML
4. Clique em **"Validate"**

### Benefícios:
- **Prevenção de erros**: Identifica problemas antes do push
- **Economia de tempo**: Evita múltiplos commits para correção
- **Validação sintática**: Garante que a pipeline não quebre

### Exemplo de erro comum:
```yaml
# ❌ ERRO - palavra incorreta
Job_exemplo:
  stage: deploy
  scrit:  # deveria ser "script"
    - echo "Hello World"
```

## Comando no script

A chave `script` define os comandos que serão executados em cada job.

### Comando único:
```yaml
Job_exemplo:
  stage: deploy
  script:
    - docker run -d --name nginx -p 8080:80 nginx
```

### Múltiplos comandos:
```yaml
Job_exemplo:
  stage: deploy
  script:
    - comando 1
    - comando 2
    - comando n
```

### Exemplo prático:
```yaml
Implantacao_Nginx:
  stage: deploy
  script:
    - docker run -d --name nginx1 -p 8080:80 nginx
```

**Observação:** Como o runner é baseado em Docker, podemos executar comandos Docker diretamente.

## Usando imagens

Você pode especificar diferentes imagens base para cada job ou stage.

### Imagem específica por job:
```yaml
teste_ubuntu:
  stage: test
  image: ubuntu:21.10
  script:
    - apt-get update
    - apt-get install -y curl
    - curl --version
```

### Comportamento:
- **Com `image`**: Usa a imagem especificada (ex: Ubuntu 21.10)
- **Sem `image`**: Usa a imagem padrão configurada no runner (ex: docker:19.03.12)

### Exemplo completo:
```yaml
stages:
  - test
  - deploy

teste_ubuntu:
  stage: test
  image: ubuntu:21.10
  script:
    - echo "Executando em Ubuntu"
    - cat /etc/os-release

deploy_nginx:
  stage: deploy
  script:
    - docker run -d --name nginx -p 8080:80 nginx
```

### Logs de execução:
O runner utiliza Docker internamente para:
1. Baixar a imagem especificada do Docker Hub
2. Executar os comandos dentro do container
3. Retornar os resultados da execução

---

## Dicas:

1. **Indentação**: Use espaços (não tabs) e mantenha consistência
2. **Nomes de jobs**: Use nomes descritivos para facilitar identificação
3. **Teste sempre**: Use o CI Lint antes de fazer push
4. **Paralelismo**: Configure adequadamente para otimizar tempo de execução
5. **Imagens**: Escolha imagens base apropriadas para cada tarefa