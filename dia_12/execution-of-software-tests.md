# Execução de Testes de Software

### Testes Manuais
- Flexível, permite testes exploratório, porém demorado e propenso a erros humanos.
  - **Flexibilidade para testes exploratórios**:
  - Testes manuais permitem quer o testador explore o software de forma livre e criativa, sem restrições rígidas, o que ajuda a descobrir problemas inesperados ou ocultos.
  - **Demanda por Tempo e Recurso**:
    - Como são realizados manualmente, esses testes exigem mais tempo, especialmente em sistemas complexos. A repetição de testes também pode ser cansativa para o testador.
  - **Susceptibilidade a Erros Humanos**:
    - Por serem realizados manualmente, os testes manuais são propensos a erros humanos, o que pode levar a resultados inconsistentes.

### Testes Automatizados
- Utiliza scripts e ferramentas para executar testes automaticamente, sem intervenção humana direta.
  - **Redução de Erros Humanos**:
    - Os testes automatizados reduzem a probabilidade de erros humanos, pois são executados sem intervenção humana direta.
  - **Cobertura abrangente**:
    - Os testes automatizados podem abranger uma ampla gama de cenários e condições, garantindo que o software seja testado em diferentes circunstâncias.
  - **Limitação para Testes Exploratórios e de Usabilidade**:
    - Os testes automatizados podem ser limitados em sua capacidade de explorar o software de forma livre e criativa, especialmente em cenários complexos.
    - Os testes automatizados podem não capturar todos os aspectos de usabilidade, como a experiência do usuário, que podem ser mais difíceis de testar de forma automatizada.

### Testes semi-automatizados
- Combina elementos de testes manuais e automatizados, permitindo uma combinação de eficiência e flexibilidade.
  - **Equilíbrio entre Eficiência e Flexibilidade**:
    - Os testes semi-automatizados permitem que os testadores combinem a eficiência dos testes automatizados com a flexibilidade dos testes manuais.
    - Os testes semi-automatizados podem ser configurados para executar testes automatizados em cenários específicos e, em seguida, permitir que os testadores interajam manualmente para explorar o software de forma livre e criativa.
  - **Planejamento Cuidadoso**:
    - Os testes semi-automatizados exigem planejamento cuidadoso para definir quais testes serão automatizados e quais serão realizados manualmente.
  - **Ideal para cenários complexos**:
    - Os testes semi-automatizados são ideais para cenários complexos em que a automação completa pode ser difícil ou impraticável.
    - Os testes semi-automatizados podem ser usados para testar sistemas complexos que envolvem múltiplas interações e fluxos de trabalho.

## Ambientes de Teste
- Eles são projetados para simular condições reais de uso do software, ajudando a identificar problemas antes de serem lançados para o público.
  - **Hardware**:
    - Define os requisitos de equipamentos físicos, como servidores e dispositivos, que suportam o sistema durante os testes.
  - **Software**:
    - Define os requisitos de software, como sistemas operacionais e aplicativos, que suportam o sistema durante os testes.
  - **Dados**:
    - Refere-se ao uso de dados de teste representativos que simulem os dados reais que o sistema processará.
  - **Redes**:
    - Envolve a configuração de redes e conexões necessárias, incluindo velocidade, latência e segurança, para simular condições de rede do ambiente de produção.

## Ambiente de Desenvolvimento
- Não reflete totalmente o ambiente de produção. Ele é configurado pra ser um espaço onde os desenvolvedores criam, testam, e validam pequenas partes do código em tempo real.

## Ambiente de Homologação
- Não reflete totalmente o ambiente de produção. Onde o software é testado em condições semelhantes às do ambiente de produção, antes de ser lançado para o público.

## Ambiente de Produção
- Testes não devem ser realizados nesse ambiente.
- É o ambiente onde o software é executado em tempo real, em condições reais de uso. É o ambiente final onde o software é disponibilizado para os usuários finais.- Ele precisa ser altamente estável, com monitoramento contínuo de desempenho e segurança.


## Testes de Software Automatizados
- Testes executados por ferramentas ou scripts, sem intervenção humana direta, usados em:
  - Testes repetitivos
  - Validação de funcionalidade crítica
  - Cenários que exigem múltiplas combinações de dados e dispositivos

  - **Testes Repetitivos**:
    - É ideal para tarefas que precisam ser realizadas com frequência, como testes de regressão.
  - **Validação de Funcionalidade Crítica**:
    - Funções essenciais de um sistema, como autenticação e transações, devem ser confiáveis.
  - **Cenários Complexos**:
    - Em ambientes onde é necessários testar a compatibilidade em diferentes dispositivos, navegadores ou configurações de dados, a automação é essencial.

  - **Vantagens**:
    - Rapidez e eficiência
    - Repetibilidade
    - Cobertura
    - Consistência

  - **Desvantagens**
    - Custo inicial
    - Manutenção
    - Limitação de cenários exploratórios