# Método de Integração por Partes

## Princípio do Método de Integração por Partes

### 🎯 **Conceito Central**
O método de integração por partes é uma técnica que transforma integrais complicadas em formas mais fáceis de calcular, baseado na regra do produto da diferenciação.

### 📐 **Fórmula Básica**
```
∫ u dv = uv − ∫ v du
```

**Onde:**
- `u` e `dv` são partes da função original
- `du` é a derivada de `u`
- `v` é a integral de `dv`

### 💡 **Exemplos Fundamentais**

#### Exemplo 1: ∫ xe^x dx
**Escolha:**
- u = x (derivada simples)
- dv = e^x dx (integral direta)

**Resolução:**
- du = dx
- v = e^x

**Resultado:** xe^x - e^x + C

#### Exemplo 2: ∫ x sen(x) dx
**Escolha:**
- u = x
- dv = sen(x) dx

**Resolução:**
- du = dx
- v = -cos(x)

**Resultado:** -x cos(x) + sen(x) + C

---

## Aplicação do Método em Integrais Definidas

### 📊 **Fórmula para Integrais Definidas**
```
∫[a→b] u dv = [uv][a→b] - ∫[a→b] v du
```

### 🔢 **Exemplo Prático**
**Calcular:** ∫[0→π] x sen(x) dx

**Passos:**
1. u = x, dv = sen(x) dx
2. du = dx, v = -cos(x)
3. Aplicar fórmula: [-x cos(x)][0→π] + ∫[0→π] cos(x) dx
4. **Resultado:** π

---

## Estratégias para Escolha de u e dv

### 🧠 **Mnemônico LIATE**
Ordem de prioridade para escolher `u`:

1. **L**ogarítmicas (ln x, log x)
2. **I**nversas (arcsen x, arctan x)
3. **A**lgébricas (x^n, polinômios)
4. **T**rigonométricas (sen x, cos x, tan x)
5. **E**xponenciais (e^x, a^x)

### 📋 **Critérios de Escolha**

#### ✅ **Para u (derivar):**
- Funções cuja derivada seja mais simples
- Polinômios (reduzem potência)
- Funções logarítmicas

#### ✅ **Para dv (integrar):**
- Funções com integral conhecida e simples
- Funções trigonométricas
- Funções exponenciais

### 🎨 **Estratégias por Tipo de Função**

| Tipo de Integral | Escolha Recomendada     |
| ---------------- | ----------------------- |
| x^n · e^x        | u = x^n, dv = e^x dx    |
| x^n · sen(x)     | u = x^n, dv = sen(x) dx |
| x^n · cos(x)     | u = x^n, dv = cos(x) dx |
| x · ln(x)        | u = ln(x), dv = x dx    |

---

## Exemplos Práticos de Integração por Partes

### 📚 **Exemplo 1: ∫ x cos(x) dx**
```
u = x        →  du = dx
dv = cos(x)dx →  v = sen(x)

∫ x cos(x) dx = x sen(x) - ∫ sen(x) dx
              = x sen(x) + cos(x) + C
```

### 📚 **Exemplo 2: ∫ x²e^x dx**
```
Primeira aplicação:
u = x²       →  du = 2x dx
dv = e^x dx  →  v = e^x

∫ x²e^x dx = x²e^x - ∫ 2xe^x dx

Segunda aplicação para ∫ 2xe^x dx:
u = 2x       →  du = 2 dx
dv = e^x dx  →  v = e^x

∫ 2xe^x dx = 2xe^x - ∫ 2e^x dx = 2xe^x - 2e^x

Resultado final: e^x(x² - 2x + 2) + C
```

### 📚 **Exemplo 3: ∫ x ln(x) dx**
```
Aplicando LIATE:
u = ln(x)    →  du = 1/x dx
dv = x dx    →  v = x²/2

∫ x ln(x) dx = (x²/2)ln(x) - ∫ (x²/2)(1/x) dx
             = (x²/2)ln(x) - ∫ x/2 dx
             = (x²/2)ln(x) - x²/4 + C
```

---

## 🎯 **Pontos-Chave para Memorizar**

1. **Fórmula base:** ∫ u dv = uv - ∫ v du
2. **LIATE:** Ordem de prioridade para escolher u
3. **Estratégia:** Derivar a função mais complexa, integrar a mais simples
4. **Prática:** Alguns problemas requerem aplicação múltipla do método
5. **Verificação:** Sempre derivar o resultado para confirmar
