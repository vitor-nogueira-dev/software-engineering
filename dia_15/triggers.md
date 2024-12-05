# Triggers (Gatilhos)

### Exemplos e Referências
Os exemplos apresentados são adaptados de "SQL: The Complete Reference" de Groff, Weinberg e Oppel. Os scripts para criação e população das tabelas estão no material de apoio.

### O que são Triggers
Triggers são programas armazenados que são ativados por eventos específicos. Os cinco tipos de eventos que podem acioná-los são:

- Comandos DML (INSERT, UPDATE e DELETE) em tabelas.
- Comandos DDL (CREATE, ALTER, DROP).
- Estados do SGBD: inicialização, desligamento, etc.
- Comandos DML em views.
- Suspensão de comandos por esgotamento de recursos.

Triggers são úteis para garantir o cumprimento de regras de negócio nas aplicações.

### Triggers DML
Os triggers DML são os mais usados. Podem ser disparados antes ou depois de um comando DML e podem operar no nível de comando ou de registro. Um trigger é definido conforme mostrado no exemplo de código fornecido.

- **CREATE TRIGGER**: Cria um trigger com a opção de substituir um existente.
- **BEFORE/AFTER**: Define quando o trigger será acionado.
- **INSERT, DELETE, UPDATE**: Define quais comandos acionam o trigger.
- **FOR EACH ROW**: Define o trigger no nível de registro.
- **FOLLOWS/PRECEDES**: Define a ordem de disparo.
- **ENABLE/DISABLE**: Habilita ou desabilita o trigger.
- **WHEN**: Condições para acionar o trigger.
- **DECLARE, BEGIN, EXCEPTION**: Estrutura de bloco como em procedures.

Alterar ou excluir triggers pode ser feito com os comandos:
- `ALTER TRIGGER nome_trigger ENABLE | DISABLE`
- `DROP TRIGGER nome_trigger`

### Pseudoregistros OLD e NEW
OLD e NEW contêm valores antes e depois de um evento DML. Em INSERT, só NEW têm valores válidos; em DELETE, só OLD; em UPDATE, ambos.

Cuidados:
- Use ‘:’ antes de OLD e NEW no bloco de comandos.
- OLD e NEW só existem em triggers no nível de linha.
- Não se pode modificar OLD; NEW pode ser modificado.

Triggers no nível de linha não podem consultar ou alterar sua tabela sem usar a diretiva `PRAGMA AUTONOMOUS_TRANSACTION`.

### Identificando o Evento que Disparou o Trigger
Funções como INSERTING, DELETING e UPDATING identificam o comando DML que acionou o trigger.

### Definindo a Ordem de Disparo de Triggers
Use FOLLOWS e PRECEDES para definir a ordem de disparo quando múltiplos triggers são aplicáveis.

### Triggers DDL
Disparados por comandos DDL, esses triggers são associados a um esquema ou ao banco de dados inteiro. Eles seguem uma definição similar aos triggers DML.

### Exemplo
Um exemplo de trigger DDL é criado para exibir uma mensagem após o comando RENAME.