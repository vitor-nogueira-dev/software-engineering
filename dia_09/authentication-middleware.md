# Middleware de Autenticação

## Conceitos dos Tipos de Autenticação
- Existem vários tipos de autenticação e todos tem como objetivo:
  - proteger os sistemas, aplicativos e serviços contra invasões e violações de segurança.
- **Tokens, senhas e PINs**:
  - Os métodos tradicionais de autenticação, onde uma sequência de caracteres ou números é utilizada para verificar a identidade do usuário.
- **Autenticação de chaves públicas e privadas**:
  - Um sistema criptográfico que utiliza um par de chaves para autenticação, onde a chave privada é mantida em segredo pelo usuário e a chave pública é compartilhada.
- **Autenticação baseada em SMS**:
  - Envia um código de verificação para o usuário via SMS, que deve ser inserido para autenticar o usuário.
- **Autenticação de dois fatores**:
  - Adiciona uma camada de segurança requerendo, além da senha, um código temporário enviado via SMS ou gerado por aplicativos dedicados.
- **Autenticação biométrica e identidade digital**:
  - Utiliza características físicas ou comportamentais únicas dos indivíduos, como impressão digital, reconhecimento facial ou de voz, para autenticar o usuário.

## Definição de JWT (JSON WEB TOKEN) e quando usar
- É um padrão da internet para criação de dados como assinatura opcional ou cruptografia cujo `payload` contém o JSON que afirma algum número de declarações.
- Os tokens sÃo assinados usando um segredo privado ou chave pública/privada.

- Estrutura:
  - **Header**:
    - Cabeçalho, algoritmo utilizado e tipo de token
  - **Payload**:
    - Dado de identificação do usuário
  - **Verify Signature**:
    - Garantir que o cabeçalho e os dados são confiáveis