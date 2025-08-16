# Limite de Funções de Duas Variáveis

## Definição de Limite para Funções de Duas Variáveis

### 🔍 Conceito Central
O limite de `f(x, y)` quando `(x, y)` se aproxima de um ponto `(a, b)` é o valor que a função tende a assumir quando nos aproximamos de `(a, b)` de **diferentes direções** no plano.

### 📐 Formalização Matemática
```
lim(x,y)→(a,b) f(x, y) = L
```

**Definição formal**: Para todo `ε > 0`, existe `δ > 0` tal que:
- Se `(x, y)` estiver dentro de um disco de raio `δ` centrado em `(a, b)`
- Então `f(x, y)` estará dentro de um intervalo de raio `ε` centrado em `L`

### 💡 Exemplos Práticos

**Exemplo 1 - Função Simples**
```
f(x, y) = x² + y
Limite quando (x, y) → (1, 2)
```
- Substituição direta: `f(1, 2) = 1² + 2 = 3`
- **Resultado**: `lim(x,y)→(1,2) f(x, y) = 3`

**Exemplo 2 - Caso de Indeterminação**
```
g(x, y) = xy/(x² + y²)
Limite quando (x, y) → (0, 0)
```
- Denominador se anula quando `x = 0` e `y = 0`
- **Resultado**: O limite **não existe** (indeterminação)

---

## Cálculo de Limites Usando a Definição

### 🎯 Motivação
- Entender o comportamento da função próximo a pontos específicos
- Aplicação em **otimização de processos**
- **Análise de risco** e desenvolvimento de algoritmos
- Modelagem de fenômenos em física e marketing

### 🔧 Método de Aplicação

#### Passos para Calcular Limites:
1. **Identificar** o ponto de aproximação `(a, b)`
2. **Definir** a distância `δ` (região circular ao redor do ponto)
3. **Estabelecer** a distância `ε` (proximidade ao limite L)
4. **Verificar** a condição de limite

### 📊 Exemplos Detalhados

**Exemplo 1 - Função Linear**
```
f(x, y) = 2x + y
Limite quando (x, y) → (3, 4)
```
- **Substituição direta**: `f(3, 4) = 2(3) + 4 = 10`
- **Verificação formal**: Para qualquer `ε > 0`, existe `δ > 0` que satisfaz a condição

**Exemplo 2 - Função Quadrática**
```
g(x, y) = x² + y²
Limite quando (x, y) → (1, 2)
```
- **Substituição direta**: `g(1, 2) = 1² + 2² = 5`
- **Resultado**: `lim(x,y)→(1,2) g(x, y) = 5`

---

## Limites Laterais e Existência de Limites

### ⚡ Conceito Fundamental
Para que um limite **exista**, ele deve ter o **mesmo valor** quando nos aproximamos do ponto por **diferentes direções**.

### 🧭 Tipos de Limites Laterais
- **Limite Lateral Esquerdo**: Aproximação vinda de uma direção específica
- **Limite Lateral Direito**: Aproximação vinda da direção oposta

### ✅ Condição de Existência
> **Regra**: O limite existe apenas se todos os limites laterais forem **iguais**

### 🚨 Exemplo de Limite Inexistente
```
f(x, y) = xy/(x² + y²)
Analisando quando (x, y) → (0, 0)
```

**Direção y = 0**:
- `f(x, 0) = 0/x² = 0`
- Limite = 0

**Direção x = y**:
- `f(x, x) = x²/(2x²) = 1/2`
- Limite = 1/2

**Conclusão**: Como `0 ≠ 1/2`, o limite **não existe**.

### 💡 Dicas Práticas
- ✅ **Testar múltiplas direções** de aproximação
- ✅ **Usar gráficos** para visualizar comportamento
- ✅ **Verificar funções racionais** com cuidado especial

---

## Propriedades dos Limites

### 🛠️ Ferramentas para Simplificação
As propriedades permitem quebrar funções complexas em partes menores e mais simples.

### 📋 Principais Propriedades

Considerando `lim(x,y)→(a,b) f(x, y) = L₁` e `lim(x,y)→(a,b) g(x, y) = L₂`:

#### 1️⃣ **Propriedade da Soma**
```
lim(x,y)→(a,b) [f(x, y) + g(x, y)] = L₁ + L₂
```

#### 2️⃣ **Propriedade do Produto**
```
lim(x,y)→(a,b) [f(x, y) × g(x, y)] = L₁ × L₂
```

#### 3️⃣ **Propriedade do Quociente**
```
lim(x,y)→(a,b) [f(x, y) / g(x, y)] = L₁ / L₂
```
⚠️ **Condição**: `L₂ ≠ 0`

#### 4️⃣ **Propriedade da Composição**
```
lim(x,y)→(a,b) h(f(x, y)) = h(L₁)
```
Desde que `h` seja contínua em `L₁`

### 🧮 Exemplo Prático Completo
```
f(x, y) = x², g(x, y) = y³
Calcular: lim(x,y)→(2,3) [f(x, y) + g(x, y)]
```

**Aplicando a propriedade da soma**:
- `lim(x,y)→(2,3) x² = 4`
- `lim(x,y)→(2,3) y³ = 27`
- **Resultado**: `4 + 27 = 31`
