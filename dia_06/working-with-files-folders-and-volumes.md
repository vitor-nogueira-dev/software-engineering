# Mexendo com arquivos/pastas e volumes

## Subindo um "Olá mundo!" com Nginx

Vamos começar com um exemplo prático usando o Nginx (servidor web enxuto):

```bash
docker run --name NginxSemVolume -p 9080:80 -d nginx:latest
```

Para testar, acesse `localhost:9080` no navegador. Você verá a página padrão do Nginx.

### Explicação dos parâmetros:
- `--name NginxSemVolume`: Nome do container
- `-p 9080:80`: Mapeia porta 9080 do host para porta 80 do container
- `-d`: Executa em modo detached (background)
- `nginx:latest`: Imagem do Nginx na versão mais recente

## Volumes

Os volumes permitem que arquivos do host sejam acessados pelo container. Existem diferentes tipos de montagem:

### Bind Mount
Conecta diretamente uma pasta do host ao container.

### Volume Gerenciado
O Docker gerencia o armazenamento dos dados.

## Nosso "Olá mundo!" usando volumes

Primeiro, crie um arquivo `index.html` personalizado:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Minha Página Personalizada</title>
</head>
<body>
    <h1>Olá Mundo com Volume!</h1>
    <p>Esta página está sendo servida através de um volume Docker.</p>
</body>
</html>
```

### Usando -v (método tradicional):
```bash
docker run --name NginxComVolume -v /caminho/local:/usr/share/nginx/html -p 9180:80 -d nginx:latest
```

### Usando --mount (método recomendado):
```bash
docker run --name NginxComVolume --mount type=bind,src=/caminho/local,dst=/usr/share/nginx/html -p 9180:80 -d nginx:latest
```

### Explicação do volume:
- `src=/caminho/local`: Pasta no seu computador (host)
- `dst=/usr/share/nginx/html`: Pasta dentro do container onde o Nginx procura os arquivos
- `type=bind`: Tipo de montagem que referencia uma pasta do host

Agora ao acessar `localhost:9180`, você verá sua página personalizada!

### Vantagem dos volumes:
Você pode alterar o arquivo `index.html` diretamente no host e as mudanças aparecerão imediatamente no container (apenas atualize a página com F5).

## Subindo um banco de dados

Vamos testar com MySQL para entender a importância dos volumes para persistência de dados:

```bash
docker run --name MySQLsemVolume -p 3306:3306 -e MYSQL_ROOT_PASSWORD=MinhaSenha -e MYSQL_USER=MeuUsuario -e MYSQL_PASSWORD=MinhaSenha -d mysql:latest
```

### Parâmetros do MySQL:
- `-e MYSQL_ROOT_PASSWORD`: Define senha do usuário root
- `-e MYSQL_USER`: Cria um usuário personalizado
- `-e MYSQL_PASSWORD`: Define senha do usuário personalizado

Conecte-se ao banco e crie:
1. Um schema chamado "Teste"
2. Uma tabela com alguns dados
3. Insira algumas informações

## Os dados sumiram! Porquê?

Agora vamos fazer um experimento:

```bash
# Parar o container
docker stop MySQLsemVolume

# Remover o container
docker container rm MySQLsemVolume

# Recriar o container
docker run --name MySQLsemVolume -p 3306:3306 -e MYSQL_ROOT_PASSWORD=MinhaSenha -e MYSQL_USER=MeuUsuario -e MYSQL_PASSWORD=MinhaSenha -d mysql:latest
```

### O que aconteceu?
Os dados desapareceram! Isso ocorre porque:

1. **Sem volumes**: Cada vez que um container é criado, o Docker cria automaticamente um volume temporário
2. **Dados temporários**: Os dados ficam armazenados apenas enquanto o container existe
3. **Volumes automáticos**: O Docker Desktop mostra vários volumes criados automaticamente, cada um com timestamps diferentes

## Usando um volume para nosso banco de dados

Agora vamos criar um container MySQL com volume persistente:

```bash
# Crie uma pasta local primeiro
mkdir -p /caminho/local/mysql-data

# Execute o container com volume
docker run --name MySQLcomVolume -v /caminho/local/mysql-data:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=MinhaSenha -e MYSQL_USER=MeuUsuario -e MYSQL_PASSWORD=MinhaSenha -d mysql:latest
```

### O que acontece:
- O MySQL cria arquivos de inicialização na pasta local (`/caminho/local/mysql-data`)
- Cada schema criado gera uma pasta correspondente
- Todas as configurações ficam persistidas no host

### Testando a persistência:
```bash
# Parar o container
docker stop MySQLcomVolume

# Remover o container
docker container rm MySQLcomVolume

# Recriar apontando para o mesmo volume
docker run --name MySQLcomVolume -v /caminho/local/mysql-data:/var/lib/mysql -p 3306:3306 -d mysql:latest
```

### Observações importantes:
1. **Comando mais simples**: Não precisamos passar novamente as variáveis de ambiente (senha, usuários) pois já estão configuradas no volume
2. **Inicialização mais rápida**: O MySQL carrega as configurações existentes
3. **Dados preservados**: Schemas, tabelas e dados permanecem intactos
4. **Sem volumes automáticos**: O Docker Desktop não cria volumes adicionais pois estamos usando bind mount

## Conclusões

### Vantagens dos volumes:
- **Persistência**: Dados sobrevivem à destruição/recriação de containers
- **Flexibilidade**: Arquivos podem ser editados diretamente no host
- **Performance**: Acesso direto aos arquivos sem overhead adicional
- **Backup**: Fácil backup dos dados (apenas copie a pasta do host)

### Quando usar volumes:
- ✅ Aplicações que precisam persistir dados
- ✅ Arquivos de configuração personalizados
- ✅ Logs que precisam ser preservados
- ✅ Bancos de dados
- ✅ Sites estáticos com conteúdo personalizado

### Quando NÃO usar volumes:
- ❌ Aplicações completamente stateless
- ❌ Containers temporários/descartáveis
- ❌ Quando não há necessidade de personalização
