# Ambientes

## Branches no Gitlab

As **branches** (galhos) são essenciais para o trabalho colaborativo em desenvolvimento de software. Elas funcionam como cópias independentes do repositório que permitem que múltiplos desenvolvedores trabalhem simultaneamente sem interferir no trabalho uns dos outros.

### Principais tipos de branches:

- **Main/Master/Prod/Production**: Código em produção, disponível para clientes
- **Staging/QA/Hom/Homologação**: Ambiente para testes de qualidade antes da produção
- **Release/Dev/Development**: Ambiente de desenvolvimento para testes iniciais
- **Feature**: Branch específica para desenvolvimento de uma funcionalidade
- **Emergency/HotFix**: Para correções urgentes que precisam ir direto para produção

### Como funciona o fluxo:
1. Cada desenvolvedor cria sua própria branch (Feature)
2. Desenvolve sua funcionalidade isoladamente
3. Faz merge request para integrar com outras branches
4. O código passa por diferentes ambientes até chegar à produção

## Environment no script

O atributo **Environment** no script de CI/CD permite organizar e acompanhar as execuções das pipelines por ambiente. É uma forma de visualizar as implantações realizadas.

### Implementação no script:
```yaml
environment:
  name: release
  url: http://localhost:3000
```

### Benefícios:
- Visão organizada das implantações por ambiente
- Acompanhamento do histórico de deployments
- Melhor controle sobre o que foi implantado em cada ambiente
- Interface visual no GitLab em "Deployments" → "Environments"

### Monitoramento:
No GitLab, você pode acompanhar as implantações através do menu "Deployments" → "Environments", onde verá:
- Status de cada implantação
- Histórico de deployments
- Informações sobre cada ambiente

## Release branch

A **Release branch** representa uma versão do código que está pronta para ser liberada. É o ponto onde o desenvolvedor indica que terminou o desenvolvimento e o produto está pronto para implantação.

### Características importantes:
- **Não implica automaticamente em deploy**: Múltiplos desenvolvedores podem fazer merge para Release
- **Controle de execução**: Use atributos como `only` para controlar quando a pipeline executa
- **Ambiente específico**: Pode ter seu próprio environment configurado

### Configuração para branch específica:
```yaml
only:
  - develop  # Pipeline só executa na branch develop
```

### Fluxo típico:
1. Desenvolvedor termina feature
2. Faz merge request para Release
3. Release acumula várias features
4. Quando pronto, Release vai para ambiente de desenvolvimento (develop)
5. Depois segue para homologação e produção

## Environment dinâmico

O **Environment dinâmico** permite criar ambientes temporários para testar releases específicas. É útil para validar alterações antes de enviar para o ambiente principal.

### Características principais:
- **Temporário**: Criado sob demanda e pode ser removido facilmente
- **Paralelo**: Funciona junto com outros ambientes (ex: development)
- **Configuração específica**: Usa portas, nomes e configurações diferentes

### Implementação:
```yaml
environment:
  name: release/$CI_COMMIT_REF_NAME
  url: http://localhost:3001
  on_stop: limpar_ambiente
```

### Recursos do ambiente dinâmico:
- **Botão Stop**: Permite parar e limpar o ambiente facilmente
- **Variáveis dinâmicas**: Usa `$CI_COMMIT_REF_NAME` para nomes únicos
- **Limpeza automática**: Job específico para remover containers e imagens

### Exemplo prático:
- **Desenvolvimento**: reactsite:latest na porta 3000
- **Release dinâmica**: reactsite:Release_1.0 na porta 3001
- **Coexistência**: Ambos rodando simultaneamente para comparação

## Git Flow

O **Git Flow** é uma metodologia de organização de branches que estabelece um fluxo padronizado de trabalho em equipe.

### Estrutura do fluxo:
1. **Feature branches**: Criadas a partir de develop para novas funcionalidades
2. **Develop branch**: Integra todas as features prontas
3. **Release branches**: Prepara versões para produção
4. **Main/Master**: Código estável em produção
5. **Hotfix branches**: Correções urgentes direto da produção

### Fluxo prático de trabalho:
```
1. git checkout develop
2. git checkout -b feature_A
3. # Desenvolvimento da funcionalidade
4. git push origin feature_A
5. # Merge request: feature_A → develop
6. # Após aprovação: merge da feature
7. # Repetir para outras features
8. # Quando develop estiver pronto: release → staging → production
```

### Proteção de branches:
- **Branch principal protegida**: Apenas merge requests são aceitos
- **Revisão de código**: Outros desenvolvedores aprovam as mudanças
- **Testes automáticos**: Pipeline valida antes do merge
- **Rastreabilidade**: Histórico completo de todas as alterações

### Vantagens do Git Flow:
- **Organização**: Cada tipo de trabalho tem sua branch específica
- **Paralelização**: Múltiplos desenvolvedores trabalham simultaneamente
- **Segurança**: Código principal sempre estável
- **Flexibilidade**: Fácil rollback e correções de emergência
- **Visibilidade**: Clara separação entre desenvolvimento, homologação e produção