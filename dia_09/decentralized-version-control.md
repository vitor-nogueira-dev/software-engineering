# Controle de versão descentralizado

### Github
- É uma plataforma online que permite a hospedagem e gerencimaneto de repositórios de código-fonte.
- Além de hospedar repositórios Git, o GitHub oferece recursos para colaboração, como controle de acesso, rastreamento de problemas, solicitações de pull, revisões de código e integração com plataformas de CI/CD (Integração Contínua/Entrega Contínua).
- Facilita a colaboração em projetos de software, permitindo que desenvolvedores contribuam de forma simultânea
- Ele oferece funcionalidades como Pull Requests, Revisão de Código e Controle de versões que permitem que contribuições sejam integradas de forma organizada e segura
- Ele utiliza o git para controle de versão, rastreamento de mudanças e histórico de desenvolvimento
- O controle de versão com Git permite que desenvolvedores revertam alterações indesejadas, comparem versões anteriores e colaborem em diferentes partes do código simultaneamente sem conflitos

### Principais Funcionalidades

- **Repositórios**:
  - É o local onde todo o código-fonte do projeto e seu histórico de versão são armazenados
  - Ele podem ser públicos ou privados, acessíveis a qualquer pessoa, ou privados, restritos aos colaboradores autorizados
  - Ele atua como uma "pasta" que guarda arquivos, mudanças feitas nos arquivos ao longo do tempo e comentários sobre essas mudanças
  - Eles são a base para qualquer projeto no GitHun e permitem a colaboração e o gerenciamento de código de maneira organizada

- **Pull Requests (Solicitações de Pull)**:
  - É uma funcionalidade que permite que desenvolvedores contribuam com código para um repositório
  - Ele é utilizado para propor mudanças no código, revisar e discutir essas mudanças e integrá-las ao projeto
  - Ele permite que desenvolvedores compartilhem código, revisem e discutam mudanças antes de integrá-las ao projeto
  - Ele é uma forma de colaboração e revisão de código que facilita a integração de contribuições de diferentes desenvolvedores

- **Issues (Problemas)**:
  - É uma funcionalidade que permite que desenvolvedores registrem problemas, bugs ou tarefas relacionadas a um projeto
  - Ele é utilizado para rastrear problemas, bugs e tarefas, atribuir responsabilidades e acompanhar o progresso de um projeto
  - Ele permite que desenvolvedores relatem problemas, discutam soluções e acompanhem o progresso de um projeto
  - Ele é uma forma de gerenciar e rastrear problemas, bugs e tarefas em um projeto de forma organizada

- **Reposítorios Remotos**:
  - São repositórios hospedados em servidores remotos, como o GitHub
  - Eles permitem que desenvolvedores colaborem em projetos de forma distribuída, compartilhando código e histórico de versão

- **Comandos Comuns**:
  - `git clone`: Clona um repositório Git existente para sua máquina local
  - `git push`: Envia as alterações locais para um repositório remoto
  - `git pull`: Baixa as alterações de um repositório remoto para sua máquina local

- **Fork**:
  - É uma cópia de um repositório existente em sua própria conta do GitHub
  - Ele permite que você faça alterações em um projeto sem afetar o repositório original
  - Ele é uma forma de contribuir com projetos de código aberto, propor mudanças e colaborar com a comunidade

### Diferença entre fork e clone
- Fork:
  - Cria uma *cópia completa* no seu perfil do GitHub
  - Usado principalmente para contribuir com projetos de outros usuários
  - Modificações feitas no fork não afetam o repositório original

- Clone:
  - Cria uma *cópia local* do repositório
  - Usado para trabalhar em um projeto localmente 
  - Alterações podem ser enviadas para o repositório remoto (com permissão)

### Branch ou Ramificação
- Uma branch é uma linha paralela de desenvolvimento que permite que você trabalhe em mudanças sem afetar a versão principal do código 
- As brances permitem a implementação de novas funcionalidades, correções de bugs ou experimentações sem interferir no código principal
- Após finalizar o trabalho em uma branch, é possível integrá-la à branch principal (geralmente chamada de main ou master) através de um merge

- **Comandos básicos de branch**:
  - `git branch <nome-da-branch>`: Cria uma nova branch
  - `git checkout <nome-da-branch>`: Alterna para uma branch existente
  - `git checkout -b <nome-da-branch>`: Cria uma nova branch e alterna para ela
  - `git branch`: Lista todas as branches existentes

### Ná Prática: Colaboração em projetos via pull requests
- No fluxo básico, você cria uma branch, faz as alterações desejadas, envia para o repositório remoteo, e então abre um Pull Request
- Isso sinaliza aos mantenedores do projeto que você tem algo pronto para ser revisado e, possivelmente, integrado ao projeto principal