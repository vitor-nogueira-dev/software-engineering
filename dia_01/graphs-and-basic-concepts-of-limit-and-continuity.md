# Gráficos e Conceitos Básicos de Limite e Continuidade

## Introdução aos Gráficos de Funções

### Conceito de Função
- **Definição**: Uma função é uma relação entre um conjunto de entradas (domínio) e um conjunto de saídas (contradomínio), onde cada entrada está associada a uma única saída
- **Exemplo prático**: f(x) = x² 
  - Para x = 2: f(2) = 4
  - Para x = -2: f(-2) = 4
- **Visualização**: Os gráficos permitem identificar padrões, analisar propriedades e prever comportamentos das funções

### Importância dos Gráficos
- Ferramenta visual para compreender o comportamento das funções
- Identificação de características como crescimento, decrescimento, máximos e mínimos
- Aplicação prática em análise de dados (ex: crescimento de vagas em tecnologia)

## Conceitos Básicos de Limite

### Definição de Limite
O limite de uma função descreve o comportamento da função à medida que a variável independente se aproxima de um determinado valor:

```
lim x→a f(x) = L
```

### Tipos de Limites

#### 1. Limite de Função Constante
- **Exemplo**: lim x→3 (5) = 5
- O valor permanece constante independentemente do valor de x

#### 2. Limite de Função Linear
- **Exemplo**: lim x→2 (3x+2) = 8
- Substituição direta por ser contínua

#### 3. Limite de Função Racional
- **Exemplo**: f(x) = (x²-4)/(x-2)
- Requer simplificação quando resulta em forma indeterminada (0/0)
- Solução: (x²-4)/(x-2) = (x-2)(x+2)/(x-2) = x+2

#### 4. Limite de Função Exponencial
- **Exemplo**: lim x→∞ eˣ = ∞
- Demonstra crescimento exponencial

### Limites Unilaterais e Bilaterais
- **Limite lateral direito**: lim x→a⁺ f(x)
- **Limite lateral esquerdo**: lim x→a⁻ f(x)
- **Limite bilateral**: Existe quando os limites laterais são iguais

## Definição de Continuidade

### Condições para Continuidade
Uma função é contínua em um ponto C se:

1. **f(C) está definida**: A função tem valor bem definido em C
2. **O limite existe**: lim x→C f(x) existe
3. **Limite igual ao valor**: lim x→C f(x) = f(C)

### Exemplos de Funções Contínuas

#### 1. Função Constante
- **f(x) = 3**: Linha horizontal contínua em todos os pontos

#### 2. Função Linear
- **f(x) = 2x + 1**: Contínua em todo domínio real

#### 3. Função Polinomial
- **f(x) = x² - 4x + 3**: Sempre contínuas no domínio real

#### 4. Funções Racionais
- **f(x) = x/(x+1)**: Descontinuidade em x = -1 (denominador zero)

### Teste Visual da Continuidade
- Se ao traçar o gráfico não é necessário levantar o lápis, a função é contínua no intervalo

## Propriedades dos Gráficos e Limites

### Propriedades Operacionais dos Limites

#### 1. Propriedade Aditiva
```
lim x→a [f(x) + g(x)] = lim x→a f(x) + lim x→a g(x)
```

#### 2. Propriedade Multiplicativa (por constante)
```
lim x→a [k × f(x)] = k × lim x→a f(x)
```

#### 3. Propriedade de Exponenciação
```
lim x→a [f(x)]ⁿ = [lim x→a f(x)]ⁿ
```

### Aplicações Práticas
- **Tecnologia da Informação**: Otimização de algoritmos e monitoramento de redes
- **Medicina**: Monitoramento de sinais vitais
- **Biologia**: Estudo do fluxo genético
- **Ciência de Dados**: Análise de tendências e padrões

### Ferramentas Computacionais
- **Python**: Utilização das bibliotecas SciPy e Matplotlib
- **Google Colab**: Ambiente de desenvolvimento para visualização
- **Aplicação**: Cálculo automatizado de limites e plotagem de gráficos
