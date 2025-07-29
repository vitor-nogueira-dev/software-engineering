# Arquitetura de aplicações em Camadas
- “Arquitetura” é um termo que muitas pessoas, com pouca concordância entre si, tentam definir. (Fowler)

De acordo com Fowler (2007, p. 37): ao pensar em um sistema em termos de camadas, você imagina os subsistemas principais no software dispostos de forma parecida com camadas de um bolo em que cada camada repousa sobre uma camada mais baixa.

Com a perspectiva das camadas de um bolo, podemos concluir, de acordo com Fowler (2007, p. 37) que a camada superior usará serviços da camada imediatamente inferior a esta, ou seja, a camada mais alta usa serviços da mais baixa. Além desta dinâmica, devemos salientar que camadas não vizinhas não se relacionam diretamente, ou seja, não usam serviços uma da outra.

Assim como um bolo pode ter duas ou dezenas de camadas, fica claro que existem inúmeras vantagens de se usar a abordagem da arquitetura de software em camadas. Como vantagem da arquitetura em camadas, Fowler (2007, p. 37) apresenta:

- Você pode compreender uma única camada como um todo coerente sem saber muito sobre as outras camadas. Você pode compreender como construir um serviço FTP sobre TCP sem conhecer os detalhes de como funciona o protocolo ethernet.
- Você pode substituir camadas por implementações alternativas dos mesmos serviços básicos. Um serviço FTP pode rodar sem modificações sobre ethernet, PPP, ou seja, lá o que usado pelo provedor.
- Você minimiza as dependências entre camadas. Se o provedor alterar o sistema físico de transmissão, não precisamos alterar nosso serviço FTP.
- Camadas são bons lugares para padronização. TCP e IP são padrões porque eles definem como suas camadas podem operar.
- Uma vez que você tenha construído uma camada, ela pode ser usada por muitos serviços de nível mais alto. Desta forma, TCP/IP é usado por FTP, Telnet, SSH e HTTP. De outra maneira, todos esses protocolos de nível mais alto teriam que escrever seus próprios protocolos de nível mais baixo.

## MODELO ARQUITETURAL DAS APLICAÇÕES CORPORATIVAS PARA WEB
- Em 1990 sistemas cliente/servidor mostraram ao mundo uma noção do que viria a ser a arquitetura por camadas.

1. Camada - o chantilly - Interface do Usuário;
2. Camada - o recheio - Aplicação e banco de dados;

- Com a internet a dupla Cliente/Servidor não mais seria prática, o bolo precisava de ganache, não somente de pão de ló.
- Cria-se a camada de apresentação separando o usuário da lógica de seu sistema
- Aplicações Coorporativas necessitam de dados persistentes pois permeiam muitas instâncias

1. Camada de apresentação (interface)
2. Camada de domínio (lógica)
3. Camada Fonte de Dados

- Com 3 camadas, se padroniza aquilo que antes seria específico de cada cliente.
- Banco de dados, por exemplo, é uma camada que não precisa ser customizada a cada cliente, atualizações são simplificadas neste modelo.

## Modelo Multicamadas
- A evolução do conceito de Cliente/Servidor nasce com as 3 camadas: Apresentação - Lógica - Dados
- Se muitas funcionalidades são comuns em sistemas, pra que fazer tudo novo? Viva a 4 camada
- Quando se separa em mais camadas existe aumento de escalabilidade e resiliência, mas aumenta a latência (ping)

## ARQUITETURA EFICIENTE PARA PROJETOS CLOUD
- SAAS - software como serviço, já instalado, direto no navegador.
- PAAS - Alívio aos desenvolvedores, concentração em seu objetivo.
- LAAS - Infraestrutura ao click do mouse, sem exageros sem escassez, sob medida.