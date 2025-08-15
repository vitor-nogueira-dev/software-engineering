# Cálculo de Limites e Continuidade

## Cálculo de Limites por Substituição Direta

### Conceito
A substituição direta é uma técnica fundamental para calcular limites quando a função é contínua no ponto de interesse. Consiste em substituir diretamente o valor da variável na função.

### Exemplos Práticos

#### 1. Função Linear
- **Função**: f(x) = 3x - 2
- **Limite**: lim x→4 (3x - 2) = 3(4) - 2 = 10
- **Aplicação**: Substituição direta em funções contínuas

#### 2. Função Polinomial
- **Função**: f(x) = x² + 2x + 1
- **Limite**: lim x→-1 (x² + 2x + 1) = (-1)² + 2(-1) + 1 = 0
- **Característica**: Polinômios são sempre contínuos no domínio real

#### 3. Função Racional com Simplificação
- **Função**: f(x) = (x² - 9)/(x - 3)
- **Problema**: Forma indeterminada 0/0 em x = 3
- **Solução**: Fatoração e simplificação
  - f(x) = (x-3)(x+3)/(x-3) = x + 3
  - lim x→3 f(x) = 3 + 3 = 6

#### 4. Função Exponencial
- **Função**: f(x) = eˣ
- **Limite**: lim x→0 eˣ = e⁰ = 1
- **Propriedade**: Funções exponenciais são contínuas

## Estratégias para o Cálculo de Limites Indeterminados

### Formas Indeterminadas Principais

#### 1. Tipo 0/0
- **Estratégia**: Fatoração e simplificação
- **Exemplo**: lim x→1 (x² - 1)/(x - 1)
  - Fatoração: (x-1)(x+1)/(x-1) = x + 1
  - Resultado: lim x→1 (x + 1) = 2

#### 2. Tipo ∞/∞
- **Estratégia**: Divisão pelo maior termo
- **Exemplo**: lim x→∞ (x² + 1)/x
  - Divisão: x(x + 1/x)/x = x + 1/x
  - Resultado: ∞ (limite infinito)

#### 3. Tipo 0 × ∞
- **Estratégia**: Transformação algébrica
- **Exemplo**: lim x→0 x · (1/x)
  - Simplificação: x/x = 1
  - Resultado: 1

### Aplicações em Modelagem
- **Áreas de aplicação**: TI, Biologia, Medicina, Machine Learning
- **Benefícios**: Redução de custos e riscos em experimentos reais
- **Ferramentas**: Python com SciPy para cálculo automatizado

## Continuidade de Funções de Uma Variável

### Condições para Continuidade
Uma função f(x) é contínua em um ponto c se:

1. **f(c) está definida**: A função tem valor bem definido em c
2. **O limite existe**: lim x→c f(x) existe
3. **Limite igual ao valor**: lim x→c f(x) = f(c)

### Exemplos de Análise de Continuidade

#### 1. Função Polinomial
- **Função**: f(x) = 2x + 3
- **Ponto**: x = 1
- **Verificação**:
  - f(1) = 2(1) + 3 = 5 ✓
  - lim x→1 (2x + 3) = 5 ✓
  - Limite = Valor da função ✓
- **Conclusão**: Contínua em x = 1

#### 2. Função Racional
- **Função**: g(x) = 1/x
- **Ponto**: x = 0
- **Verificação**:
  - g(0) = 1/0 → não definida ✗
- **Conclusão**: Descontinuidade em x = 0

#### 3. Função por Partes
- **Análise**: Verificação de limites laterais
- **Condição**: lim x→c⁻ f(x) = lim x→c⁺ f(x) = f(c)

### Implementação Computacional
```python
import numpy as np
from scipy import limit

# Definindo funções
f_x = lambda x: np.sin(x)
g_x = lambda x: np.exp(x)
h_x = lambda x: 1/(x + 1)

# Cálculo de limites
limite_f = limit(f_x, 0)
limite_g = limit(g_x, 0)
limite_h = limit(h_x, 0)

# Verificação de continuidade
continuo_f = (limite_f == f_x(0))
continuo_g = (limite_g == g_x(0))
continuo_h = (limite_h == h_x(0))
```

## Continuidade de Funções de Duas Variáveis

### Conceito Expandido
- **Notação**: f(x, y) para funções de duas variáveis
- **Ponto de análise**: Par ordenado (x₀, y₀)
- **Aplicação real**: Temperatura dependente de latitude e longitude

### Exemplos Práticos

#### 1. Função Contínua Simples
- **Função**: f(x, y) = x² + y
- **Ponto**: (2, 3)
- **Cálculo**: f(2, 3) = 2² + 3 = 4 + 3 = 7
- **Limite**: lim (x,y)→(2,3) f(x, y) = 7
- **Conclusão**: Contínua no ponto

#### 2. Função com Descontinuidade
- **Função**: f(x, y) = xy/(x + y) para x ≠ -y
- **Problema**: Denominador zero quando x = -y
- **Análise**: Descontinuidade na linha x = -y

#### 3. Função Complexa
- **Função**: f(x, y) = xy/(x² + y²) para (x, y) ≠ (0, 0)
- **Ponto crítico**: (0, 0)
- **Problema**: Forma indeterminada 0/0
- **Conclusão**: Descontinuidade na origem

### Ferramentas de Análise
- **SciPy**: Cálculo de limites multivariáveis
- **Visualização**: Gráficos 3D para compreensão visual
- **Aplicação**: Fundamental para integrais múltiplas

### Importância na Modelagem
- **Fenômenos multivariáveis**: Sistemas complexos dependentes de múltiplas variáveis
- **Integrais múltiplas**: Base para cálculos em volumes e superfícies
- **Simulações**: Modelagem de sistemas reais com múltiplas dependências