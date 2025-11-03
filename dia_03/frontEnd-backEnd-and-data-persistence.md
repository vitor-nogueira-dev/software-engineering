# Front-end, back-end e persistência de dados

## O que é o front-end, back-end e persistência de dados?

A arquitetura em camadas (n-tier architecture) é um padrão fundamental na engenharia de software que separa responsabilidades em diferentes camadas. A arquitetura em 3 camadas mais comum inclui:

### 🎨 Camada de Apresentação (Front-end)
- **O que é**: A parte visual da aplicação que permite interação com o usuário
- **Exemplos**: Apps mobile, sites, interfaces web (Google, Facebook, etc.)
- **Função**: Capturar entradas do usuário (cliques, digitação, toques)
- **Responsabilidade**: Interface e experiência do usuário (UI/UX)

### ⚙️ Camada de Domínio (Back-end)
- **O que é**: O "coração" da aplicação onde ficam as regras de negócio
- **Função**: Processar as informações vindas do front-end
- **Responsabilidade**: Lógica de negócio, validações, processamento
- **Característica**: Totalmente separada da camada de apresentação

### 💾 Camada de Dados (Persistência)
- **O que é**: Responsável pelo armazenamento e recuperação de informações
- **Função**: Salvar, consultar e gerenciar dados do negócio
- **Exemplos**: Cadastros de clientes, vendas, logística
- **Responsabilidade**: Persistência e integridade dos dados

### 🏗️ Arquitetura Distribuída
Em ambientes modernos, cada camada pode rodar em infraestrutura separada:
- **Servidor Front-end**: Container/servidor dedicado para interface
- **Servidor Back-end**: Container/servidor dedicado para lógica de negócio
- **Servidor Database**: Container/servidor dedicado para banco de dados

### 🔧 Vantagens da Separação de Camadas
- **Segurança**: Front-end nunca acessa diretamente o banco de dados
- **Especialização**: Times podem focar em suas áreas de expertise
- **Manutenibilidade**: Mudanças isoladas não afetam outras camadas
- **Escalabilidade**: Cada camada pode ser escalada independentemente

### 🚀 Evolução para Microserviços
A arquitetura em camadas evoluiu para microserviços, que são:
- Serviços independentes e reutilizáveis
- Acessíveis via rede (privada ou internet)
- Modelados em torno de domínios de negócio
- Combinados para formar sistemas complexos

**Exemplo**: Um e-commerce pode ter microserviços para inventário, gestão de pedidos e envio.

## Exemplo rápido de front-end

### 📱 O que é Front-end?
O front-end é a camada de apresentação da aplicação - tudo que o usuário vê e interage. É responsável por:
- Capturar entradas do usuário
- Exibir informações de forma amigável
- Comunicar-se com o back-end via APIs

### 🛠️ Tecnologias Comuns
- **HTML/CSS/JavaScript**: Base da web
- **Frameworks**: React, Vue.js, Angular
- **Mobile**: React Native, Flutter, Swift, Kotlin
- **Desktop**: Electron, Tauri

### 💡 Exemplo Prático - Tela de Login
```html
<!DOCTYPE html>
<html>
<head>
    <title>Login - Minha Aplicação</title>
    <style>
        .login-container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        input, button {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
        }
        button {
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <div class="form-group">
                <input type="email" id="email" placeholder="Seu e-mail" required>
            </div>
            <div class="form-group">
                <input type="password" id="password" placeholder="Sua senha" required>
            </div>
            <button type="submit">Entrar</button>
        </form>
    </div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Aqui faria a chamada para o back-end
            console.log('Tentativa de login:', { email, password });
            alert('Dados capturados! Em uma aplicação real, enviaria para o back-end.');
        });
    </script>
</body>
</html>
```

### 🎯 Responsabilidades do Front-end
- **Validação inicial**: Verificar se campos obrigatórios estão preenchidos
- **Formatação**: Aplicar máscaras (CPF, telefone, etc.)
- **Feedback visual**: Loading, mensagens de erro/sucesso
- **Responsividade**: Adaptar-se a diferentes tamanhos de tela

## Integrações com API 

### 🔌 O que são APIs?
API (Application Programming Interface) é o meio de comunicação entre front-end e back-end. É como um "contrato" que define:
- Quais dados podem ser enviados
- Como os dados devem ser formatados
- Que respostas esperar

### 📡 Protocolo HTTP
A comunicação geralmente usa HTTP com diferentes métodos:
- **GET**: Buscar dados
- **POST**: Criar novos dados
- **PUT**: Atualizar dados existentes
- **DELETE**: Remover dados

### 💡 Exemplo Prático - Consumindo API
```javascript
// Função para fazer login via API
async function fazerLogin(email, senha) {
    try {
        // Fazendo requisição POST para o back-end
        const response = await fetch('https://api.minhaapp.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: senha
            })
        });

        // Verificando se a requisição foi bem-sucedida
        if (response.ok) {
            const dados = await response.json();
            console.log('Login realizado com sucesso:', dados);
            
            // Salvando token no localStorage
            localStorage.setItem('authToken', dados.token);
            
            // Redirecionando para dashboard
            window.location.href = '/dashboard.html';
        } else {
            const erro = await response.json();
            alert('Erro no login: ' + erro.message);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro de conexão. Tente novamente.');
    }
}

// Função para buscar dados do usuário
async function buscarPerfilUsuario() {
    try {
        const token = localStorage.getItem('authToken');
        
        const response = await fetch('https://api.minhaapp.com/user/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const perfil = await response.json();
            exibirPerfilNaTela(perfil);
        } else {
            console.error('Erro ao buscar perfil');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

// Função para exibir dados na tela
function exibirPerfilNaTela(perfil) {
    document.getElementById('nomeUsuario').textContent = perfil.nome;
    document.getElementById('emailUsuario').textContent = perfil.email;
    document.getElementById('avatarUsuario').src = perfil.avatar;
}
```

### 🔒 Autenticação e Segurança
```javascript
// Interceptador para adicionar token automaticamente
function configurarInterceptador() {
    const originalFetch = window.fetch;
    
    window.fetch = function(...args) {
        const token = localStorage.getItem('authToken');
        
        if (token && args[1]) {
            args[1].headers = {
                ...args[1].headers,
                'Authorization': `Bearer ${token}`
            };
        }
        
        return originalFetch.apply(this, args);
    };
}
```

### 📋 Tratamento de Estados
```javascript
// Estados da aplicação durante requisições
function mostrarLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('botaoSubmit').disabled = true;
}

function esconderLoading() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('botaoSubmit').disabled = false;
}

function mostrarErro(mensagem) {
    const divErro = document.getElementById('mensagemErro');
    divErro.textContent = mensagem;
    divErro.style.display = 'block';
}

function mostrarSucesso(mensagem) {
    const divSucesso = document.getElementById('mensagemSucesso');
    divSucesso.textContent = mensagem;
    divSucesso.style.display = 'block';
}
```

## Exemplo rápido de back-end

### 🖥️ O que é Back-end?
O back-end é a camada de domínio que processa as regras de negócio. É responsável por:
- Receber requisições do front-end
- Validar e processar dados
- Aplicar regras de negócio
- Comunicar-se com o banco de dados
- Retornar respostas estruturadas

### 🛠️ Tecnologias Comuns
- **Node.js**: JavaScript no servidor
- **Python**: Django, Flask, FastAPI
- **Java**: Spring Boot
- **C#**: ASP.NET Core
- **PHP**: Laravel, Symfony
- **Go, Rust, Ruby**: Outras opções modernas

### 💡 Exemplo Prático - API de Login (Node.js + Express)
```javascript
// server.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'minha_chave_secreta_super_segura';

// Middlewares
app.use(express.json());
app.use(cors());

// Simulando um "banco de dados" em memória
const usuarios = [
    {
        id: 1,
        nome: 'João Silva',
        email: 'joao@email.com',
        // Senha: '123456' (hasheada)
        senha: '$2b$10$rOzJKnkGQjEUlDBYKQNQieH6LcZOKUJBKO8NPHuKdqj0VTO8yoGiy',
        avatar: 'https://via.placeholder.com/100'
    }
];

// Middleware para verificar token
function verificarToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ 
            success: false, 
            message: 'Token não fornecido' 
        });
    }
    
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.usuarioId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ 
            success: false, 
            message: 'Token inválido' 
        });
    }
}

// Rota de login
app.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validação básica
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email e senha são obrigatórios'
            });
        }
        
        // Buscar usuário
        const usuario = usuarios.find(u => u.email === email);
        if (!usuario) {
            return res.status(401).json({
                success: false,
                message: 'Credenciais inválidas'
            });
        }
        
        // Verificar senha
        const senhaValida = await bcrypt.compare(password, usuario.senha);
        if (!senhaValida) {
            return res.status(401).json({
                success: false,
                message: 'Credenciais inválidas'
            });
        }
        
        // Gerar token JWT
        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            SECRET_KEY,
            { expiresIn: '24h' }
        );
        
        // Resposta de sucesso
        res.json({
            success: true,
            message: 'Login realizado com sucesso',
            token: token,
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                avatar: usuario.avatar
            }
        });
        
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor'
        });
    }
});

// Rota para buscar perfil do usuário
app.get('/user/profile', verificarToken, (req, res) => {
    try {
        const usuario = usuarios.find(u => u.id === req.usuarioId);
        
        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: 'Usuário não encontrado'
            });
        }
        
        // Retornar dados sem a senha
        res.json({
            success: true,
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                avatar: usuario.avatar
            }
        });
        
    } catch (error) {
        console.error('Erro ao buscar perfil:', error);
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor'
        });
    }
});

// Rota para criar novo usuário
app.post('/user/register', async (req, res) => {
    try {
        const { nome, email, password } = req.body;
        
        // Validações
        if (!nome || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Todos os campos são obrigatórios'
            });
        }
        
        // Verificar se email já existe
        if (usuarios.find(u => u.email === email)) {
            return res.status(400).json({
                success: false,
                message: 'Email já cadastrado'
            });
        }
        
        // Hash da senha
        const senhaHash = await bcrypt.hash(password, 10);
        
        // Criar novo usuário
        const novoUsuario = {
            id: usuarios.length + 1,
            nome,
            email,
            senha: senhaHash,
            avatar: 'https://via.placeholder.com/100'
        };
        
        usuarios.push(novoUsuario);
        
        res.status(201).json({
            success: true,
            message: 'Usuário criado com sucesso',
            usuario: {
                id: novoUsuario.id,
                nome: novoUsuario.nome,
                email: novoUsuario.email,
                avatar: novoUsuario.avatar
            }
        });
        
    } catch (error) {
        console.error('Erro no cadastro:', error);
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor'
        });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

### 🔧 Estrutura de um Back-end Profissional
```
projeto-backend/
├── src/
│   ├── controllers/     # Lógica dos endpoints
│   ├── models/         # Estruturas de dados
│   ├── services/       # Regras de negócio
│   ├── middlewares/    # Interceptadores
│   ├── routes/         # Definição de rotas
│   └── config/         # Configurações
├── tests/              # Testes automatizados
├── docs/               # Documentação
└── package.json        # Dependências
```

### 🎯 Responsabilidades do Back-end
- **Autenticação/Autorização**: Verificar identidade e permissões
- **Validação de dados**: Garantir integridade das informações
- **Regras de negócio**: Implementar lógica específica do domínio
- **Segurança**: Proteção contra ataques (SQL injection, XSS, etc.)
- **Performance**: Otimização e cache

## Acessando banco de dados

### 🗄️ O que são Bancos de Dados?
Bancos de dados são sistemas organizados para armazenar, gerenciar e recuperar informações de forma eficiente e segura. Eles garantem:
- **Persistência**: Dados não se perdem quando a aplicação é fechada
- **Integridade**: Regras que mantêm dados consistentes
- **Concorrência**: Múltiplos usuários acessando simultaneamente
- **Segurança**: Controle de acesso e backup

### 🎲 Tipos de Bancos de Dados

#### Relacionais (SQL)
- **MySQL, PostgreSQL, SQL Server, Oracle**
- Estrutura em tabelas com relacionamentos
- Linguagem SQL para consultas
- ACID (Atomicidade, Consistência, Isolamento, Durabilidade)

#### Não-Relacionais (NoSQL)
- **MongoDB, Redis, Cassandra, DynamoDB**
- Estruturas flexíveis (documentos, chave-valor, grafos)
- Escalabilidade horizontal
- Eventual consistency

### 💡 Exemplo Prático - Conectando ao Banco (Node.js + MySQL)
```javascript
// database/connection.js
const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'senha123',
    database: 'minha_aplicacao',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Criar pool de conexões
const pool = mysql.createPool(dbConfig);

// Função para executar queries
async function executeQuery(sql, params = []) {
    try {
        const [results] = await pool.execute(sql, params);
        return results;
    } catch (error) {
        console.error('Erro na query:', error);
        throw error;
    }
}

module.exports = { executeQuery, pool };
```

### 📋 Script de Criação do Banco
```sql
-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS minha_aplicacao;
USE minha_aplicacao;

-- Tabela de usuários
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    avatar VARCHAR(255),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de produtos
CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    categoria VARCHAR(50),
    estoque INT DEFAULT 0,
    ativo BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de pedidos
CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status ENUM('pendente', 'processando', 'enviado', 'entregue', 'cancelado') DEFAULT 'pendente',
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabela de itens do pedido
CREATE TABLE itens_pedido (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Inserir dados de exemplo
INSERT INTO usuarios (nome, email, senha) VALUES 
('João Silva', 'joao@email.com', '$2b$10$rOzJKnkGQjEUlDBYKQNQieH6LcZOKUJBKO8NPHuKdqj0VTO8yoGiy'),
('Maria Santos', 'maria@email.com', '$2b$10$rOzJKnkGQjEUlDBYKQNQieH6LcZOKUJBKO8NPHuKdqj0VTO8yoGiy');

INSERT INTO produtos (nome, descricao, preco, categoria, estoque) VALUES 
('Notebook Dell', 'Notebook Dell Inspiron 15', 2500.00, 'Eletrônicos', 10),
('Mouse Logitech', 'Mouse sem fio Logitech MX Master', 350.00, 'Acessórios', 25),
('Teclado Mecânico', 'Teclado mecânico RGB', 450.00, 'Acessórios', 15);
```

### 🔧 Camada de Acesso a Dados (DAO/Repository)
```javascript
// models/Usuario.js
const { executeQuery } = require('../database/connection');
const bcrypt = require('bcrypt');

class Usuario {
    constructor(id, nome, email, senha, avatar, dataCriacao) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.avatar = avatar;
        this.dataCriacao = dataCriacao;
    }

    // Buscar usuário por email
    static async buscarPorEmail(email) {
        const sql = 'SELECT * FROM usuarios WHERE email = ?';
        const results = await executeQuery(sql, [email]);
        
        if (results.length > 0) {
            const user = results[0];
            return new Usuario(
                user.id,
                user.nome,
                user.email,
                user.senha,
                user.avatar,
                user.data_criacao
            );
        }
        return null;
    }

    // Criar novo usuário
    static async criar(nome, email, senha, avatar = null) {
        const senhaHash = await bcrypt.hash(senha, 10);
        
        const sql = 'INSERT INTO usuarios (nome, email, senha, avatar) VALUES (?, ?, ?, ?)';
        const result = await executeQuery(sql, [nome, email, senhaHash, avatar]);
        
        return new Usuario(result.insertId, nome, email, senhaHash, avatar, new Date());
    }

    // Buscar usuário por ID
    static async buscarPorId(id) {
        const sql = 'SELECT * FROM usuarios WHERE id = ?';
        const results = await executeQuery(sql, [id]);
        
        if (results.length > 0) {
            const user = results[0];
            return new Usuario(
                user.id,
                user.nome,
                user.email,
                user.senha,
                user.avatar,
                user.data_criacao
            );
        }
        return null;
    }

    // Atualizar perfil
    async atualizarPerfil(nome, avatar) {
        const sql = 'UPDATE usuarios SET nome = ?, avatar = ? WHERE id = ?';
        await executeQuery(sql, [nome, avatar, this.id]);
        
        this.nome = nome;
        this.avatar = avatar;
    }

    // Verificar senha
    async verificarSenha(senha) {
        return await bcrypt.compare(senha, this.senha);
    }

    // Converter para objeto JSON (sem senha)
    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            avatar: this.avatar,
            dataCriacao: this.dataCriacao
        };
    }
}

module.exports = Usuario;
```

### 📊 Exemplo de CRUD Completo - Produtos
```javascript
// models/Produto.js
const { executeQuery } = require('../database/connection');

class Produto {
    constructor(id, nome, descricao, preco, categoria, estoque, ativo) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.estoque = estoque;
        this.ativo = ativo;
    }

    // CREATE - Criar produto
    static async criar(dados) {
        const sql = `
            INSERT INTO produtos (nome, descricao, preco, categoria, estoque, ativo) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const result = await executeQuery(sql, [
            dados.nome,
            dados.descricao,
            dados.preco,
            dados.categoria,
            dados.estoque || 0,
            dados.ativo !== undefined ? dados.ativo : true
        ]);
        
        return result.insertId;
    }

    // READ - Listar produtos
    static async listarTodos(filtros = {}) {
        let sql = 'SELECT * FROM produtos WHERE 1=1';
        const params = [];
        
        if (filtros.categoria) {
            sql += ' AND categoria = ?';
            params.push(filtros.categoria);
        }
        
        if (filtros.ativo !== undefined) {
            sql += ' AND ativo = ?';
            params.push(filtros.ativo);
        }
        
        if (filtros.busca) {
            sql += ' AND (nome LIKE ? OR descricao LIKE ?)';
            params.push(`%${filtros.busca}%`, `%${filtros.busca}%`);
        }
        
        sql += ' ORDER BY nome';
        
        const results = await executeQuery(sql, params);
        return results.map(row => new Produto(
            row.id,
            row.nome,
            row.descricao,
            row.preco,
            row.categoria,
            row.estoque,
            row.ativo
        ));
    }

    // READ - Buscar por ID
    static async buscarPorId(id) {
        const sql = 'SELECT * FROM produtos WHERE id = ?';
        const results = await executeQuery(sql, [id]);
        
        if (results.length > 0) {
            const row = results[0];
            return new Produto(
                row.id,
                row.nome,
                row.descricao,
                row.preco,
                row.categoria,
                row.estoque,
                row.ativo
            );
        }
        return null;
    }

    // UPDATE - Atualizar produto
    static async atualizar(id, dados) {
        const sql = `
            UPDATE produtos 
            SET nome = ?, descricao = ?, preco = ?, categoria = ?, estoque = ?, ativo = ?
            WHERE id = ?
        `;
        await executeQuery(sql, [
            dados.nome,
            dados.descricao,
            dados.preco,
            dados.categoria,
            dados.estoque,
            dados.ativo,
            id
        ]);
    }

    // DELETE - Remover produto (soft delete)
    static async remover(id) {
        const sql = 'UPDATE produtos SET ativo = FALSE WHERE id = ?';
        await executeQuery(sql, [id]);
    }

    // Verificar disponibilidade em estoque
    async verificarEstoque(quantidade) {
        return this.estoque >= quantidade;
    }

    // Reduzir estoque
    async reduzirEstoque(quantidade) {
        if (!this.verificarEstoque(quantidade)) {
            throw new Error('Estoque insuficiente');
        }
        
        const sql = 'UPDATE produtos SET estoque = estoque - ? WHERE id = ?';
        await executeQuery(sql, [quantidade, this.id]);
        this.estoque -= quantidade;
    }
}

module.exports = Produto;
```

### 🔒 Melhores Práticas de Segurança
```javascript
// Prepared Statements (sempre usar)
// ❌ ERRADO - Vulnerável a SQL Injection
const sql = `SELECT * FROM usuarios WHERE email = '${email}'`;

// ✅ CORRETO - Usando prepared statements
const sql = 'SELECT * FROM usuarios WHERE email = ?';
const results = await executeQuery(sql, [email]);

// Validação e sanitização
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function sanitizarString(str) {
    return str.trim().replace(/[<>]/g, '');
}

// Pool de conexões para performance
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'usuario',
    password: 'senha',
    database: 'banco'
});
```

## Front-end acessando o nosso back-end

### 🔗 Conectando Front-end ao Back-end
Agora vamos integrar todas as camadas em um exemplo completo de uma aplicação funcional. Vamos criar um sistema de e-commerce simples que demonstra a comunicação entre todas as camadas.

### 🎨 Front-end Completo com Integração
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce - Loja Online</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
        }
        
        .header {
            background-color: #2c3e50;
            color: white;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }
        
        .login-section, .produtos-section {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            margin-bottom: 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .form-group {
            margin-bottom: 1rem;
        }
        
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
        }
        
        input, button {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }
        
        button {
            background-color: #3498db;
            color: white;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #2980b9;
        }
        
        .produto-card {
            border: 1px solid #ddd;
            padding: 1rem;
            margin-bottom: 1rem;
            border-radius: 8px;
            background: white;
        }
        
        .hidden {
            display: none;
        }
        
        .loading {
            text-align: center;
            padding: 2rem;
        }
        
        .error {
            color: #e74c3c;
            background-color: #fdf2f2;
            padding: 1rem;
            border-radius: 4px;
            margin-bottom: 1rem;
        }
        
        .success {
            color: #27ae60;
            background-color: #f2fdf2;
            padding: 1rem;
            border-radius: 4px;
            margin-bottom: 1rem;
        }
        
        .produtos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
        }
        
        .carrinho {
            position: fixed;
            top: 80px;
            right: 20px;
            background: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            max-width: 300px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🛒 Minha Loja Online</h1>
        <div id="userInfo" class="hidden">
            <span id="userName"></span>
            <button onclick="logout()">Sair</button>
        </div>
    </div>

    <div class="container">
        <!-- Seção de Login -->
        <div id="loginSection" class="login-section">
            <h2>Login</h2>
            <div id="mensagem"></div>
            
            <form id="loginForm">
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Senha:</label>
                    <input type="password" id="password" required>
                </div>
                <button type="submit">Entrar</button>
            </form>
            
            <hr style="margin: 2rem 0;">
            
            <h3>Cadastro</h3>
            <form id="cadastroForm">
                <div class="form-group">
                    <label for="cadastroNome">Nome:</label>
                    <input type="text" id="cadastroNome" required>
                </div>
                <div class="form-group">
                    <label for="cadastroEmail">E-mail:</label>
                    <input type="email" id="cadastroEmail" required>
                </div>
                <div class="form-group">
                    <label for="cadastroSenha">Senha:</label>
                    <input type="password" id="cadastroSenha" required>
                </div>
                <button type="submit">Criar Conta</button>
            </form>
        </div>

        <!-- Seção de Produtos -->
        <div id="produtosSection" class="produtos-section hidden">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h2>Produtos Disponíveis</h2>
                <input type="text" id="buscarProduto" placeholder="Buscar produtos..." style="width: 300px;">
            </div>
            
            <div id="loadingProdutos" class="loading hidden">
                Carregando produtos...
            </div>
            
            <div id="produtosGrid" class="produtos-grid">
                <!-- Produtos serão carregados aqui -->
            </div>
        </div>

        <!-- Carrinho -->
        <div id="carrinho" class="carrinho hidden">
            <h3>🛒 Carrinho</h3>
            <div id="itensCarrinho">
                <!-- Itens do carrinho -->
            </div>
            <hr>
            <div id="totalCarrinho">Total: R$ 0,00</div>
            <button onclick="finalizarPedido()" style="margin-top: 1rem;">Finalizar Pedido</button>
        </div>
    </div>

    <script>
        // Configurações da API
        const API_BASE_URL = 'http://localhost:3000';
        
        // Estado da aplicação
        let usuarioLogado = null;
        let carrinho = [];
        let produtos = [];

        // Inicializar aplicação
        document.addEventListener('DOMContentLoaded', function() {
            verificarLogin();
            configurarEventListeners();
        });

        // Configurar event listeners
        function configurarEventListeners() {
            // Login
            document.getElementById('loginForm').addEventListener('submit', handleLogin);
            
            // Cadastro
            document.getElementById('cadastroForm').addEventListener('submit', handleCadastro);
            
            // Busca de produtos
            document.getElementById('buscarProduto').addEventListener('input', buscarProdutos);
        }

        // Verificar se usuário já está logado
        function verificarLogin() {
            const token = localStorage.getItem('authToken');
            if (token) {
                buscarPerfilUsuario();
            }
        }

        // Handle login
        async function handleLogin(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            try {
                mostrarMensagem('Fazendo login...', 'info');
                
                const response = await fetch(`${API_BASE_URL}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    localStorage.setItem('authToken', data.token);
                    usuarioLogado = data.usuario;
                    mostrarAreaLogada();
                    mostrarMensagem('Login realizado com sucesso!', 'success');
                    carregarProdutos();
                } else {
                    mostrarMensagem(data.message, 'error');
                }
                
            } catch (error) {
                mostrarMensagem('Erro de conexão. Tente novamente.', 'error');
                console.error('Erro no login:', error);
            }
        }

        // Handle cadastro
        async function handleCadastro(e) {
            e.preventDefault();
            
            const nome = document.getElementById('cadastroNome').value;
            const email = document.getElementById('cadastroEmail').value;
            const password = document.getElementById('cadastroSenha').value;
            
            try {
                mostrarMensagem('Criando conta...', 'info');
                
                const response = await fetch(`${API_BASE_URL}/user/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ nome, email, password })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    mostrarMensagem('Conta criada com sucesso! Faça login.', 'success');
                    document.getElementById('cadastroForm').reset();
                } else {
                    mostrarMensagem(data.message, 'error');
                }
                
            } catch (error) {
                mostrarMensagem('Erro de conexão. Tente novamente.', 'error');
                console.error('Erro no cadastro:', error);
            }
        }

        // Buscar perfil do usuário logado
        async function buscarPerfilUsuario() {
            try {
                const token = localStorage.getItem('authToken');
                
                const response = await fetch(`${API_BASE_URL}/user/profile`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });
                
                if (response.ok) {
                    const data = await response.json();
                    usuarioLogado = data.usuario;
                    mostrarAreaLogada();
                    carregarProdutos();
                } else {
                    localStorage.removeItem('authToken');
                    mostrarAreaLogin();
                }
                
            } catch (error) {
                console.error('Erro ao buscar perfil:', error);
                localStorage.removeItem('authToken');
                mostrarAreaLogin();
            }
        }

        // Carregar produtos
        async function carregarProdutos() {
            try {
                document.getElementById('loadingProdutos').classList.remove('hidden');
                
                const token = localStorage.getItem('authToken');
                const response = await fetch(`${API_BASE_URL}/produtos`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });
                
                if (response.ok) {
                    const data = await response.json();
                    produtos = data.produtos;
                    renderizarProdutos(produtos);
                } else {
                    mostrarMensagem('Erro ao carregar produtos', 'error');
                }
                
            } catch (error) {
                mostrarMensagem('Erro de conexão ao carregar produtos', 'error');
                console.error('Erro ao carregar produtos:', error);
            } finally {
                document.getElementById('loadingProdutos').classList.add('hidden');
            }
        }

        // Renderizar produtos na tela
        function renderizarProdutos(produtosList) {
            const grid = document.getElementById('produtosGrid');
            grid.innerHTML = '';
            
            produtosList.forEach(produto => {
                const produtoCard = document.createElement('div');
                produtoCard.className = 'produto-card';
                produtoCard.innerHTML = `
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <p><strong>Categoria:</strong> ${produto.categoria}</p>
                    <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
                    <p><strong>Estoque:</strong> ${produto.estoque} unidades</p>
                    <button onclick="adicionarAoCarrinho(${produto.id})" 
                            ${produto.estoque === 0 ? 'disabled' : ''}>
                        ${produto.estoque === 0 ? 'Sem estoque' : 'Adicionar ao Carrinho'}
                    </button>
                `;
                grid.appendChild(produtoCard);
            });
        }

        // Buscar produtos
        function buscarProdutos() {
            const termo = document.getElementById('buscarProduto').value.toLowerCase();
            
            if (termo === '') {
                renderizarProdutos(produtos);
                return;
            }
            
            const produtosFiltrados = produtos.filter(produto => 
                produto.nome.toLowerCase().includes(termo) ||
                produto.descricao.toLowerCase().includes(termo) ||
                produto.categoria.toLowerCase().includes(termo)
            );
            
            renderizarProdutos(produtosFiltrados);
        }

        // Adicionar produto ao carrinho
        function adicionarAoCarrinho(produtoId) {
            const produto = produtos.find(p => p.id === produtoId);
            
            if (!produto || produto.estoque === 0) {
                mostrarMensagem('Produto indisponível', 'error');
                return;
            }
            
            const itemExistente = carrinho.find(item => item.produto.id === produtoId);
            
            if (itemExistente) {
                if (itemExistente.quantidade < produto.estoque) {
                    itemExistente.quantidade++;
                } else {
                    mostrarMensagem('Quantidade máxima em estoque atingida', 'error');
                    return;
                }
            } else {
                carrinho.push({
                    produto: produto,
                    quantidade: 1
                });
            }
            
            atualizarCarrinho();
            mostrarMensagem(`${produto.nome} adicionado ao carrinho!`, 'success');
        }

        // Atualizar visualização do carrinho
        function atualizarCarrinho() {
            const carrinhoDiv = document.getElementById('carrinho');
            const itensDiv = document.getElementById('itensCarrinho');
            const totalDiv = document.getElementById('totalCarrinho');
            
            if (carrinho.length === 0) {
                carrinhoDiv.classList.add('hidden');
                return;
            }
            
            carrinhoDiv.classList.remove('hidden');
            itensDiv.innerHTML = '';
            
            let total = 0;
            
            carrinho.forEach((item, index) => {
                const subtotal = item.produto.preco * item.quantidade;
                total += subtotal;
                
                const itemDiv = document.createElement('div');
                itemDiv.style.marginBottom = '1rem';
                itemDiv.innerHTML = `
                    <div><strong>${item.produto.nome}</strong></div>
                    <div>Qtd: ${item.quantidade} x R$ ${item.produto.preco.toFixed(2)}</div>
                    <div>Subtotal: R$ ${subtotal.toFixed(2)}</div>
                    <button onclick="removerDoCarrinho(${index})" 
                            style="background-color: #e74c3c; padding: 0.25rem 0.5rem; font-size: 0.8rem;">
                        Remover
                    </button>
                `;
                itensDiv.appendChild(itemDiv);
            });
            
            totalDiv.innerHTML = `Total: R$ ${total.toFixed(2)}`;
        }

        // Remover item do carrinho
        function removerDoCarrinho(index) {
            carrinho.splice(index, 1);
            atualizarCarrinho();
        }

        // Finalizar pedido
        async function finalizarPedido() {
            if (carrinho.length === 0) {
                mostrarMensagem('Carrinho vazio', 'error');
                return;
            }
            
            try {
                const token = localStorage.getItem('authToken');
                
                const itensPedido = carrinho.map(item => ({
                    produto_id: item.produto.id,
                    quantidade: item.quantidade,
                    preco_unitario: item.produto.preco
                }));
                
                const response = await fetch(`${API_BASE_URL}/pedidos`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ itens: itensPedido })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    mostrarMensagem('Pedido realizado com sucesso!', 'success');
                    carrinho = [];
                    atualizarCarrinho();
                    carregarProdutos(); // Recarregar para atualizar estoque
                } else {
                    mostrarMensagem(data.message, 'error');
                }
                
            } catch (error) {
                mostrarMensagem('Erro ao finalizar pedido', 'error');
                console.error('Erro no pedido:', error);
            }
        }

        // Logout
        function logout() {
            localStorage.removeItem('authToken');
            usuarioLogado = null;
            carrinho = [];
            mostrarAreaLogin();
            mostrarMensagem('Logout realizado com sucesso', 'success');
        }

        // Mostrar área logada
        function mostrarAreaLogada() {
            document.getElementById('loginSection').classList.add('hidden');
            document.getElementById('produtosSection').classList.remove('hidden');
            document.getElementById('userInfo').classList.remove('hidden');
            document.getElementById('userName').textContent = usuarioLogado.nome;
        }

        // Mostrar área de login
        function mostrarAreaLogin() {
            document.getElementById('loginSection').classList.remove('hidden');
            document.getElementById('produtosSection').classList.add('hidden');
            document.getElementById('carrinho').classList.add('hidden');
            document.getElementById('userInfo').classList.add('hidden');
        }

        // Mostrar mensagens
        function mostrarMensagem(mensagem, tipo) {
            const mensagemDiv = document.getElementById('mensagem');
            mensagemDiv.className = tipo;
            mensagemDiv.textContent = mensagem;
            mensagemDiv.style.display = 'block';
            
            setTimeout(() => {
                mensagemDiv.style.display = 'none';
            }, 5000);
        }
    </script>
</body>
</html>
```

### 🔄 Fluxo Completo de Comunicação

#### 1️⃣ Usuário interage com o Front-end
- Digita dados no formulário
- Clica em botões
- Front-end captura essas ações

#### 2️⃣ Front-end faz requisição HTTP para Back-end
```javascript
// Exemplo: Login do usuário
const response = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
});
```

#### 3️⃣ Back-end processa a requisição
```javascript
// Recebe os dados, valida e processa
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;
    
    // Busca usuário no banco de dados
    const usuario = await Usuario.buscarPorEmail(email);
    
    // Verifica senha
    const senhaValida = await usuario.verificarSenha(password);
    
    // Retorna resposta
    res.json({ success: true, token: jwt.sign(...) });
});
```

#### 4️⃣ Back-end consulta o Banco de Dados
```sql
-- Query executada pelo back-end
SELECT * FROM usuarios WHERE email = 'usuario@email.com';
```

#### 5️⃣ Banco retorna dados para Back-end
```javascript
// Resultado da query
{
    id: 1,
    nome: 'João Silva',
    email: 'joao@email.com',
    senha: '$2b$10$...',
    avatar: 'https://...'
}
```

#### 6️⃣ Back-end processa e retorna para Front-end
```javascript
// Resposta estruturada
{
    success: true,
    message: 'Login realizado com sucesso',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    usuario: {
        id: 1,
        nome: 'João Silva',
        email: 'joao@email.com',
        avatar: 'https://...'
    }
}
```

#### 7️⃣ Front-end atualiza a interface
```javascript
// Processa resposta e atualiza UI
if (data.success) {
    localStorage.setItem('authToken', data.token);
    mostrarAreaLogada();
    mostrarMensagem('Login realizado com sucesso!', 'success');
}
```

### 🔒 Segurança na Comunicação

#### Autenticação via JWT
```javascript
// Front-end envia token em todas as requisições
const response = await fetch('/api/produtos', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        'Content-Type': 'application/json',
    }
});

// Back-end verifica token
function verificarToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.usuarioId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}
```

### 📊 Exemplo Completo de CRUD - Pedidos
```javascript
// Back-end - Rota para criar pedido
app.post('/pedidos', verificarToken, async (req, res) => {
    try {
        const { itens } = req.body;
        const usuarioId = req.usuarioId;
        
        // Calcular total e verificar estoque
        let total = 0;
        for (const item of itens) {
            const produto = await Produto.buscarPorId(item.produto_id);
            
            if (!produto.verificarEstoque(item.quantidade)) {
                return res.status(400).json({
                    success: false,
                    message: `Estoque insuficiente para ${produto.nome}`
                });
            }
            
            total += produto.preco * item.quantidade;
        }
        
        // Criar pedido no banco
        const pedidoId = await executeQuery(
            'INSERT INTO pedidos (usuario_id, total) VALUES (?, ?)',
            [usuarioId, total]
        );
        
        // Criar itens do pedido
        for (const item of itens) {
            await executeQuery(
                'INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario) VALUES (?, ?, ?, ?)',
                [pedidoId.insertId, item.produto_id, item.quantidade, item.preco_unitario]
            );
            
            // Reduzir estoque
            const produto = await Produto.buscarPorId(item.produto_id);
            await produto.reduzirEstoque(item.quantidade);
        }
        
        res.json({
            success: true,
            message: 'Pedido criado com sucesso',
            pedido_id: pedidoId.insertId
        });
        
    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor'
        });
    }
});
```

### 🎯 Resumo do Fluxo Completo

1. **Front-end** → Interface do usuário (HTML/CSS/JavaScript)
2. **API REST** → Comunicação HTTP entre camadas
3. **Back-end** → Lógica de negócio (Node.js/Express)
4. **Banco de Dados** → Persistência (MySQL/PostgreSQL)
