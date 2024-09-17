### Diagrama de Componente

#### 1. O que é?
O diagrama de componente é um diagrama que mostra a organização e a estrutura de um sistema de software. Ele exibe a maneira como os componentes de software interagem e se comunicam entre si. Este diagrama é uma representação de estrutura estática que descreve a arquitetura de um sistema de software, destacando os componentes de software, as interfaces entre esses componentes e as dependências entre eles.

#### 2. Objetivos do Diagrama de Componente
- **Visualizar a Arquitetura**: Fornecer uma visão clara da arquitetura do sistema, mostrando como os componentes se encaixam e interagem.
- **Especificar Interfaces**: Detalhar as interfaces que os componentes expõem e consomem, facilitando a compreensão das interações.
- **Gerenciar Dependências**: Identificar e gerenciar as dependências entre componentes, ajudando a minimizar o acoplamento e a melhorar a modularidade.
- **Documentar o Sistema**: Servir como documentação técnica que pode ser usada para manutenção, evolução e comunicação entre equipes de desenvolvimento.

#### 3. Notação do Diagrama de Componente
- **Componentes**: Representados por retângulos com o nome do componente dentro. Podem incluir uma pequena caixa com duas divisões na parte superior direita para indicar que é um componente.
- **Interfaces**: Representadas por círculos (lollipops) para interfaces fornecidas e semicírculos (sockets) para interfaces requeridas.
- **Dependências**: Representadas por linhas tracejadas com uma seta, indicando que um componente depende de outro.
- **Pacotes**: Representados por pastas, agrupando componentes relacionados para mostrar a organização do sistema.

#### 4. Elementos do Diagrama de Componente
- **Componentes**: Unidades modulares de software que encapsulam uma parte da funcionalidade do sistema.
  - **Exemplo**: Um componente de "Autenticação" que gerencia o login e a segurança dos usuários.
- **Interfaces**: Pontos de interação entre componentes, especificando os serviços que um componente fornece ou consome.
  - **Exemplo**: Uma interface "IUserService" que define métodos para gerenciar usuários.
- **Dependências**: Relações que mostram como um componente depende de outro para funcionar.
  - **Exemplo**: Um componente de "Relatório" que depende do componente de "Banco de Dados" para obter dados.
- **Pacotes**: Agrupamentos de componentes que ajudam a organizar e modularizar o sistema.
  - **Exemplo**: Um pacote "Serviços" que contém componentes como "Autenticação", "Usuário" e "Relatório".

#### 5. Exemplo de Diagrama de Componente
```plaintext
+-------------------+
|    Autenticação   |
|-------------------|
| + login()         |
| + logout()        |
+-------------------+
         |
         v
+-------------------+
|      Usuário      |
|-------------------|
| + criarUsuario()  |
| + deletarUsuario()|
+-------------------+
         |
         v
+-------------------+
|   Banco de Dados  |
|-------------------|
| + salvarDados()   |
| + obterDados()    |
+-------------------+