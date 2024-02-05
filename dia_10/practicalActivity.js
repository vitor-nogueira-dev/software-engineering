class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.iniciarTrabalho = true;
  }

  seApresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
  }
  trabalhar() {
    return 'Estou trabalhando no momento.';
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }
  gerenciar() {
    return `No momento gerencio o departamento de ${this.departamento}.`;
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    return `Programando no momento. Estou programando em ${this.linguagem}.`;
  }
}

const funcionario = new Funcionario('João', 25, 'Analista de Sistemas');
console.log(funcionario.seApresentar()); // Olá, meu nome é João, tenho 25 anos e sou Analista de Sistemas.
console.log(funcionario.trabalhar()); // Estou trabalhando no momento.

const gerente = new Gerente('Carlos', 30, 'Gerente de Projetos', 'TI');
console.log(gerente.seApresentar()); // Olá, meu nome é Carlos, tenho 30 anos e sou Gerente de Projetos.
console.log(gerente.gerenciar()); // No momento gerencio o departamento de TI.

const desenvolvedor = new Desenvolvedor(
  'Ana',
  23,
  'Desenvolvedora de Software',
  'JavaScript'
);
console.log(desenvolvedor.seApresentar()); // Olá, meu nome é Ana, tenho 23 anos e sou Desenvolvedora de Software.
console.log(desenvolvedor.programar()); // Programando no momento. Estou programando em JavaScript.
