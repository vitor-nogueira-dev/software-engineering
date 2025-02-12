# Noção de Limite de uma Função

## Introdução
O estudo de limites é fundamental no cálculo e desenvolve habilidades essenciais de raciocínio lógico e pensamento crítico. Este conceito nos permite resolver problemas matemáticos que seriam impossíveis de calcular diretamente, como indeterminações matemáticas (0/0 ou 0⁰).

## Definição e Importância
Um limite representa o valor que uma função se aproxima quando a variável independente se aproxima de um determinado valor. É especialmente útil para:
- Resolver indeterminações matemáticas
- Analisar comportamentos de funções
- Compreender tendências em diversos fenômenos

### Exemplo Prático
Imagine um forno industrial que precisa atingir 300°C:
- A temperatura vai se aproximando gradualmente do objetivo
- Independente da velocidade de aquecimento, o limite será 300°C
- O limite analisa o comportamento a longo prazo

## Unicidade do Limite
Se o limite de uma função existe, ele é único. Isso significa que:
- Se lim f(x) = A e lim f(x) = B quando x tende a c, então A = B
- Não podem existir dois valores diferentes para o mesmo limite

## Propriedades dos Limites

1. **Propriedade da Soma**
   - lim[f(x) + g(x)] = lim f(x) + lim g(x)

2. **Propriedade da Diferença**
   - lim[f(x) - g(x)] = lim f(x) - lim g(x)

3. **Propriedade da Multiplicação por Constante**
   - lim[c.f(x)] = c.lim f(x)

4. **Propriedade do Produto**
   - lim[f(x).g(x)] = lim f(x).lim g(x)

5. **Propriedade do Quociente**
   - lim[f(x)/g(x)] = lim f(x)/lim g(x), desde que lim g(x) ≠ 0

## Limites Laterais
Existem dois tipos de limites laterais:

1. **Limite pela Direita**
   - Quando x se aproxima do valor por valores maiores
   - Notação: lim x→c⁺ f(x)

2. **Limite pela Esquerda**
   - Quando x se aproxima do valor por valores menores
   - Notação: lim x→c⁻ f(x)

O limite existe apenas quando os limites laterais são iguais:
- lim x→c f(x) = L se e somente se:
  - lim x→c⁺ f(x) = L e
  - lim x→c⁻ f(x) = L

## Exemplo Prático de Aplicação
Um exemplo clássico é o cálculo da área de uma placa metálica:
- Se o lado x se aproxima de 3cm
- A área (x²) se aproximará de 9cm²
- Notação: lim x→3 x² = 9