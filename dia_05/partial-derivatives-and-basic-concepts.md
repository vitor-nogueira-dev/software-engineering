# Derivadas Parciais e Conceitos Básicos

## Definição de Derivada Parcial

### 🎯 Conceito Fundamental
As **derivadas parciais** permitem analisar como uma função de múltiplas variáveis se comporta quando variamos apenas uma variável, mantendo as outras constantes.

### 📐 Definição Matemática
Para uma função `f(x₁, x₂, ..., xₙ)`, a derivada parcial em relação à variável `xᵢ` é:

```
∂f/∂xᵢ = lim[h→0] [f(x₁,...,xᵢ+h,...,xₙ) - f(x₁,...,xᵢ,...,xₙ)] / h
```

### 💡 Exemplo Prático
**Função:** `f(x,y) = x² + y²`

- **Derivada parcial em relação a x:** `∂f/∂x = 2x`
- **Derivada parcial em relação a y:** `∂f/∂y = 2y`

### 🔄 Generalizando para Mais Variáveis
**Função:** `g(x,y,z) = x² + y² + z²`

- `∂g/∂x = 2x`
- `∂g/∂y = 2y` 
- `∂g/∂z = 2z`

---

## Cálculo das Derivadas Parciais de Funções Simples

### 🚀 Importância das Derivadas Parciais
- **Otimização:** Maximização de retornos, minimização de riscos
- **Machine Learning:** Minimização da função de erro
- **Engenharia:** Análise de sistemas complexos

### 📝 Exemplos Práticos

#### Exemplo 1: Função Quadrática
**Função:** `f(x,y) = x² - 3y`

- `∂f/∂x = 2x` (termo com y desaparece)
- `∂f/∂y = -3` (termo com x² desaparece)

#### Exemplo 2: Função Trigonométrica
**Função:** `g(x,y) = 4xy + cos(x)`

- `∂g/∂x = 4y - sin(x)`
- `∂g/∂y = 4x` (cos(x) é constante em relação a y)

#### Exemplo 3: Função Exponencial com Logaritmo
**Função:** `h(x,y) = eˣ ln(y)`

- `∂h/∂x = eˣ ln(y)`
- `∂h/∂y = eˣ/y`

### 💻 Implementação Prática
```python
# Exemplo usando Python e SciPy
import numpy as np
from scipy import misc

# Definir funções e calcular derivadas parciais
# Visualização gráfica para melhor compreensão
```
---

## Interpretação de Derivadas Parciais Graficamente

### 🎨 Visualização Tridimensional
As derivadas parciais representam a **inclinação** de uma superfície ao longo dos eixos x e y.

### 📊 Exemplos Visuais

#### Função Parabólica: `f(x,y) = x² + y²`
- **Superfície:** Paraboloide que se abre para cima
- **Derivadas:** `∂f/∂x = 2x`, `∂f/∂y = 2y`
- **Interpretação:** Inclinação linear em cada direção

#### Função Sela: `g(x,y) = xy`
- **Superfície:** Formato de sela
- **Derivadas:** `∂g/∂x = y`, `∂g/∂y = x`
- **Interpretação:** Inclinação varia conforme a outra variável

### 🗺️ Curvas de Nível
- **`f(x,y) = x² + y²`:** Círculos concêntricos (variação simétrica)
- **`g(x,y) = xy`:** Formato de sela (superfície complexa)

### 📈 Análise Gráfica
As curvas de nível permitem visualizar como a função muda em diferentes regiões do espaço, oferecendo uma visão clara da variação funcional.

---

## Derivadas Parciais de Funções Compostas

### ⛓️ Regra da Cadeia
Para funções compostas, aplicamos a **regra da cadeia** para calcular as derivadas parciais.

### 🔗 Estrutura Geral
**Função composta:** `f(g(x,y))`
**Regra:** `∂f/∂x = (∂f/∂u)(∂u/∂x)`

### 📚 Exemplos Detalhados

#### Exemplo 1: Função Potência Composta
**Função:** `f(x,y) = (x² + y²)²`

- **Função interna:** `u(x,y) = x² + y²`
- **Função externa:** `v(u) = u²`

**Cálculo:**
- `∂v/∂u = 2u`
- `∂u/∂x = 2x`
- **Resultado:** `∂f/∂x = 2u · 2x = 4x(x² + y²)`

#### Exemplo 2: Função Exponencial Composta
**Função:** `g(x,y) = e^(x²+y²)`

- **Função interna:** `u(x,y) = x² + y²`
- **Função externa:** `v(u) = eᵘ`

**Cálculo:**
- `∂v/∂u = eᵘ`
- `∂u/∂x = 2x`
- **Resultado:** `∂g/∂x = eᵘ · 2x = 2xe^(x²+y²)`

### 🎯 Aplicações Práticas
- **Sistemas complexos:** Modelagem de fenômenos multivariáveis
- **Solução de integrais:** Base para problemas mais avançados
- **Análise matemática:** Precisão e eficácia em cálculos