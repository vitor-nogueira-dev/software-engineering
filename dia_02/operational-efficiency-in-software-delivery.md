# Eficiência operacional em entrega de software

## Build, deploy, run e só?

O **build** é o processo de compilação do código-fonte escrito em uma linguagem de programação, transformando-o em uma aplicação executável (como Word, Excel, etc.).

### O fluxo tradicional vs. moderno

**Antigamente:**
- Build manual na máquina do desenvolvedor
- Aplicação enviada por email ou pasta de rede
- Desenvolvedor com "acesso de Deus" ao servidor
- Implantação manual no servidor
- Alto risco de erro humano

**Atualmente:**
- Build automatizado em servidores
- Continuous Integration (CI)
- Continuous Delivery (CD) 
- Continuous Deployment
- Processo seguro e automatizado

### Os três pilares modernos:

1. **Continuous Integration (CI)**: Integração contínua do código com build e testes automatizados
2. **Continuous Delivery**: Aplicação sempre pronta para produção em ambiente de testes
3. **Continuous Deployment**: Implantação automatizada em produção com possibilidade de rollback

## Colaboração no código, como era?

### Ferramentas antigas (problemas do passado):
- **Pasta compartilhada na rede**: Código em diretórios compartilhados
- **Visual SourceSafe (Microsoft)**: Ferramenta antiga da Microsoft
- **IBM Rational ClearCase**: Solução IBM para controle de versão

### Limitações do modelo antigo:
- ❌ Apenas 1 pessoa podia fazer "check-in" por vez
- ❌ Não permitia trabalho colaborativo real
- ❌ Gerava confusão e necessitava organização manual
- ❌ Dependia de pessoa experiente para coordenar
- ❌ Alto risco de perda de código
- ❌ Backup manual e inconsistente

### Problemas recorrentes:
- Conflitos de código não resolvidos
- Perda de alterações
- Dificuldade de rastreamento de mudanças
- Processo lento e ineficiente

## SCM (Source Control Management)

### Definição
**SCM (Source Control Management)** ou **Gestão de Controle de Fonte** são ferramentas modernas que evoluíram para permitir:

### Funcionalidades principais:
- ✅ **Colaboração simultânea**: Vários desenvolvedores trabalhando ao mesmo tempo
- ✅ **Fluxos automatizados**: Build disparado automaticamente ao salvar código
- ✅ **Testes automáticos**: Aplicação testada automaticamente
- ✅ **Deploy automático**: Implantação em servidores sem intervenção manual
- ✅ **Rollback automático**: Volta para versão anterior em caso de problemas

### Benefícios do SCM moderno:
- 🔒 **Segurança**: Humanos não precisam acessar servidores diretamente
- ⚡ **Velocidade**: Processo automatizado é mais rápido
- 💰 **Economia**: Reduz tempo e custos operacionais
- 🛡️ **Confiabilidade**: Menor chance de erro humano
- 🔄 **Recuperação**: Facilita rollback em caso de problemas

## Gitlab: SCM + CI + CD

### O que é o Gitlab?
O **Gitlab** é uma plataforma completa que combina:
- **SCM**: Controle de código-fonte
- **CI**: Integração contínua
- **CD**: Entrega e implantação contínua

### Vantagens do Gitlab:
- 🤝 **Colaboração**: Facilita trabalho em equipe entre desenvolvedores
- 📋 **Organização**: Ajuda líderes técnicos a organizar entregas
- 🔄 **Fluxo integrado**: CI/CD na mesma ferramenta
- ⚡ **Agilidade**: Acelera entregas dos times
- 📝 **Rastreabilidade**: Histórico completo de mudanças

### Funcionalidades principais:
- Repositório de código (Git)
- Merge requests / Pull requests
- Issue tracking
- Wiki integrada
- CI/CD pipelines
- Container registry
- Monitoramento

## Automação com pipelines

### O que são Pipelines?
**Pipelines** são scripts automatizados que definem uma "receita" do que fazer com o código-fonte a cada atualização.

### Gitlab Pipeline - Funcionalidades:
- 🧪 **Testes unitários**: Execução automática de testes
- 🔨 **Build**: Compilação automática da aplicação
- 📦 **Empacotamento**: Criação de artefatos para deploy
- 🚀 **Deploy**: Implantação em ambientes (dev, test, prod)
- 📊 **Monitoramento**: Acompanhamento do processo

### Estrutura típica de uma pipeline:
```yaml
stages:
  - test
  - build
  - deploy

test_job:
  stage: test
  script:
    - run_tests.sh

build_job:
  stage: build
  script:
    - build_application.sh

deploy_job:
  stage: deploy
  script:
    - deploy_to_server.sh
```

### Benefícios das pipelines:
- ✅ Processo padronizado e repetível
- ✅ Redução de erros manuais
- ✅ Feedback rápido sobre problemas
- ✅ Histórico de todas as execuções
- ✅ Rollback automático quando necessário

## Apresentando: Docker, Gitlab, CI/CD

### Docker + Gitlab = Poder máximo

### O que é Docker?
**Docker** é uma tecnologia de **containers** que permite:
- 📦 **Empacotamento**: Aplicação + dependências em um container
- 🚀 **Velocidade**: Deploy muito mais rápido que VMs tradicionais
- 🌐 **Portabilidade**: Roda em qualquer ambiente compatível
- 🔄 **Consistência**: Mesmo ambiente em dev, test e produção

### Vantagens da combinação Docker + Gitlab:
- ⚡ **Implantação rápida**: Containers sobem em segundos
- 🔧 **Facilidade**: Deploy simplificado através de pipelines
- 🌍 **Flexibilidade**: Deploy em qualquer ambiente
  - On-Premise (servidores próprios)
  - Nuvem privada
  - Nuvem pública (AWS, Azure, GCP)

### Compatibilidade Docker:
- ✅ Linux (todas as distribuições)
- ✅ Windows Server
- ✅ macOS (desenvolvimento)
- ✅ Ambientes de nuvem
- ✅ Kubernetes e orquestradores

### Workflow completo: Git + CI/CD + Docker
1. **Developer**: Faz push do código para Gitlab
2. **CI Pipeline**: 
   - Executa testes automatizados
   - Faz build da aplicação
   - Cria imagem Docker
3. **CD Pipeline**:
   - Deploy da imagem em ambiente de teste
   - Testes de integração
   - Deploy em produção (se aprovado)
4. **Monitoramento**: Acompanha aplicação em produção
5. **Rollback**: Volta versão anterior se necessário

### Cultura DevOps essencial:
- 🔄 **Entregas frequentes**: Pelo menos 1x ao dia
- 🚀 **Falhar rápido**: Para corrigir rápido
- 🤝 **Colaboração**: Desenvolvedores + Operações
- 📊 **Monitoramento**: Observabilidade constante
- 🎯 **Foco no cliente**: Mínimo impacto na disponibilidade