# Superfícies Cilíndricas e Cônicas

## 🔵 Superfícies Cilíndricas

### Definição e Características

Uma **superfície cilíndrica** é uma forma geométrica tridimensional gerada pelo movimento de uma reta (geratriz) paralela a um eixo fixo, mantendo distância constante desse eixo.

**Elementos principais:**
- **Geratriz**: linha reta que gera a superfície
- **Diretriz**: curva que orienta o movimento da geratriz
- **Base**: seção transversal do cilindro
- **Altura**: extensão vertical da figura
- **Raio**: distância constante entre geratriz e eixo

### Tipos de Cilindros

#### 1. Cilindro Circular
- **Equação**: `x² + y² = r²`
- **Características**: base circular com raio r constante
- **Aplicações**: tubulações, recipientes circulares

#### 2. Cilindro Elíptico
- **Equação**: `x²/a² + y²/b² = 1`
- **Características**: base elíptica com semieixos a e b
- **Aplicações**: estruturas com seções ovais

### Exemplo Prático
Para um cilindro circular com raio = 2 e altura = 5:
- Equação da base: `x² + y² = 4`
- Volume: `V = π × r² × h = π × 4 × 5 = 20π`

## 🔺 Superfícies Cônicas

### Definição e Características

Uma **superfície cônica** é formada pela rotação de uma linha reta em torno de um eixo, partindo de um ponto fixo (vértice) e criando uma figura que se afunila.

**Elementos principais:**
- **Vértice**: ponto fixo de convergência
- **Geratriz**: linha que forma a superfície
- **Base**: seção circular ou elíptica
- **Altura**: distância do vértice à base

### Tipos de Cônicas

#### 1. Cone Circular
- **Equação**: `z² = (r²/h²) × (x² + y²)`
- **Características**: base circular, simetria radial

#### 2. Cone Elíptico
- **Equação**: `x²/a² + y²/b² - z²/c² = 1`
- **Características**: base elíptica

### Seções Cônicas
Quando um plano intersecta um cone, pode formar:
- **Elipse**: plano oblíquo
- **Parábola**: plano paralelo à geratriz
- **Hipérbole**: plano que corta ambas as partes do cone

### Cálculos Importantes

Para um cone circular (r = 4 cm, h = 6 cm):

**Geratriz**: `s = √(r² + h²) = √(16 + 36) = √52 ≈ 7,2 cm`

**Área Lateral**: `A = π × r × s = π × 4 × 7,2 ≈ 91,64 cm²`

**Volume**: `V = (1/3) × π × r² × h = (1/3) × π × 16 × 6 ≈ 100,53 cm³`

## 📊 Equações em Coordenadas Cartesianas

### Cilindros
| Tipo     | Equação             | Parâmetros       |
| -------- | ------------------- | ---------------- |
| Circular | `x² + y² = r²`      | r = raio         |
| Elíptico | `x²/a² + y²/b² = 1` | a, b = semieixos |

### Cones
| Tipo     | Equação                     | Parâmetros                   |
| -------- | --------------------------- | ---------------------------- |
| Circular | `z² = (r²/h²)(x² + y²)`     | r = raio, h = altura         |
| Elíptico | `x²/a² + y²/b² - z²/c² = 1` | a, b = semieixos, c = altura |

## 💻 Implementação Computacional

### Exemplo em Python - Cilindro Circular
```python
import numpy as np
import matplotlib.pyplot as plt

# Parâmetros
r = 2  # raio
h = 5  # altura
theta = np.linspace(0, 2*np.pi, 100)
z = np.linspace(0, h, 100)

# Coordenadas
theta, z = np.meshgrid(theta, z)
x = r * np.cos(theta)
y = r * np.sin(theta)

# Visualização 3D
fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(111, projection='3d')
ax.plot_surface(x, y, z, alpha=0.8)
plt.show()
```

## 🎯 Aplicações Práticas

### Cilindros
- **Engenharia**: tubulações, reservatórios
- **Arquitetura**: colunas, pilares
- **Biologia**: estruturas vasculares

### Cones
- **Engenharia**: funis, antenas parabólicas
- **Arquitetura**: telhados cônicos
- **Física**: propagação de ondas

## 📝 Pontos-Chave para Memorização

1. **Cilindro**: geratriz paralela ao eixo, distância constante
2. **Cone**: geratriz converge para um vértice
3. **Equações básicas**: 
   - Cilindro circular: `x² + y² = r²`
   - Cone circular: `z² = (r²/h²)(x² + y²)`
4. **Volume do cone**: `V = (1/3)πr²h`
5. **Seções cônicas**: elipse, parábola, hipérbole