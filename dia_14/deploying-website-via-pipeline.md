# Subindo site via pipeline

## Criando um repositório: React

### Configuração inicial no GitLab
1. **Criação do repositório:**
   - No GitLab, crie um novo projeto
   - Nome sugerido: "react" (ou outro nome disponível)
   - Mantenha como "Private" no Visibility Level
   - Marque "Initialize repository with a README"
   - Clique em "Create project"

2. **Clone local:**
   ```bash
   git clone [url-do-seu-repositorio-react]
   ```

3. **Configuração do Runner:**
   - Acesse Settings → CI/CD → Runners
   - Clique em "Expand" na seção Runners
   - Habilite o runner local para este projeto
   - Desabilite os shared runners

### Estrutura do projeto
Copie do repositório de referência (`https://gitlab.com/everton.juniti/descomplica`):
- Pasta `cicd_frontend/reactsite` → raiz do seu repositório
- Arquivo `cicd_frontend/01-Build_React/.gitlab-ci.yml` → raiz do seu repositório

## Build de React

### Características da pipeline React
Diferentemente das APIs (Java/Python), o React não possui testes unitários neste exemplo didático, portanto:
- Não há job de testes na pipeline
- A pipeline segue os mesmos princípios de Continuous Delivery/Deployment
- Execução apenas em branches `release` ou merge requests

### Script da pipeline (.gitlab-ci.yml)
A pipeline do React é similar às demais, alterando apenas:
- Nome do container
- Bind de porta
- Tag da imagem

**Características do reuso de pipeline:**
- Mesma estrutura das pipelines Java/Python
- Alteração apenas de variáveis específicas
- Demonstra a eficiência do reuso de código em CI/CD

## Subindo o container de site

### Pré-requisitos
Antes de executar a pipeline, verifique se estão ativos:
- Bancos de dados: MeuOracle e MeuMySQL
- APIs: Java e Python

### Execução da pipeline
1. **Criação da branch release:**
   ```bash
   git checkout -b release_1.0
   git push origin release_1.0
   ```

2. **Resultado esperado:**
   - Pipeline iniciada automaticamente
   - Container React criado e em execução
   - Todos os containers da solução ativos

### Verificação dos containers
Após a execução bem-sucedida, você terá:
- Container do banco Oracle
- Container do banco MySQL  
- Container da API Java
- Container da API Python
- Container do site React

## Fazendo alterações no repositório

### Fluxo de atualização
1. **Alterações na branch main:**
   - Faça modificações no código
   - Commit e push das alterações

2. **Deploy das alterações:**
   - **Opção 1:** Criar nova branch release (ex: `release_1.1`)
   - **Opção 2:** Merge request da main para branch release existente

3. **Resultado:**
   - Pipeline executada automaticamente
   - Nova imagem construída
   - Container atualizado com as mudanças

### Exemplo prático
```bash
# Fazer alterações na main
git checkout main
# [fazer suas alterações]
git add .
git commit -m "Atualização do frontend"
git push origin main

# Criar nova release
git checkout -b release_1.1
git push origin release_1.1
```

## Testando o conjunto todo

### Acesso à aplicação
**Formas de acessar o site React:**
1. **Browser direto:** `localhost:[porta-bind]` (exemplo: `localhost:3000`)
2. **Docker Desktop:** Container React → ícone "OPEN IN BROWSER"

### Teste da integração completa
1. **Navegação no site:**
   - Efetue cadastros de usuários
   - Altere registros existentes
   - Teste todas as funcionalidades

2. **Verificação do fluxo completo:**
   - Site React → chama APIs (Java e Python)
   - APIs → interagem com bancos (Oracle e MySQL)
   - Dados persistidos nos bancos

3. **Validação nos bancos:**
   - **Oracle:** Use Oracle SQL Developer
   - **MySQL:** Use MySQL Workbench
   - Consulte as tabelas para verificar os dados inseridos

### Arquitetura da solução
**Camadas implementadas:**
- **Apresentação:** Site React (frontend)
- **Domínio:** APIs Java e Python (backend)
- **Dados:** Bancos Oracle e MySQL (persistência)

**Dependências da solução:**
- Site depende das APIs
- APIs dependem dos bancos
- Desligar qualquer container afeta a solução completa

### Observações importantes
1. **Runner sempre ativo:**
   - O runner deve permanecer em execução
   - Monitora todos os repositórios registrados
   - Sem runner = sem execução de pipelines

2. **Gerenciamento de containers:**
   - **Bancos:** Manter sempre ativos
   - **APIs:** Usar CI para feedback rápido via testes
   - **Frontend:** Usar CD/CI para deploys automatizados

3. **Benefícios demonstrados:**
   - Integração contínua com feedback rápido
   - Entrega contínua automatizada
   - Implantação contínua local via Docker
   - Solução full-stack containerizada