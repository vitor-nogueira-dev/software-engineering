# Conversões e Sistemas Numéricos

## Binário

### Conceitos Fundamentais
- **Definição**: Sistema numérico base 2 (apenas dígitos 0 e 1)
- **Bits**: Unidades básicas de informação digital
- **Aplicação**: Linguagem interna das máquinas e dispositivos de rede

### Endereçamento IPv4
- **Formato interno**: Endereços em sequência binária de 1s e 0s
- **Formato para usuários**: Conversão para decimal pontilhado
- **Necessidade**: Administradores precisam entender ambos os formatos

### Notação Posicional Binária
- **Base 2**: Cada posição representa potência de 2
- **Exemplo**: 10101000₂ = 1×2⁷ + 0×2⁶ + 1×2⁵ + 0×2⁴ + 1×2³ + 0×2² + 0×2¹ + 0×2⁰ = 168₁₀

## Praticando Binário

### Conversões IP - Binário para Decimal
- **Exemplo**: `11000000.10101000.00001011.00001010` → `192.168.11.10`
- **Método**: Converter cada octeto binário para decimal

### Conversões IP - Decimal para Binário  
- **Exemplo**: `172.16.1.98` → `10101100.00010000.00000001.01100010`
- **Método**: Converter cada octeto decimal para binário de 8 bits

## Hexadecimal

### Conceitos Fundamentais
- **Definição**: Sistema numérico base 16 (0-9, A-F)
- **Aplicações em redes**:
  - Endereços MAC (físicos)
  - Endereços IPv6 (lógicos)

### Equivalência com Binário
- **Eficiência**: 1 dígito hexadecimal = 4 bits binários
- **Tabela de conversão**: 0000₂=0₁₆, 0001₂=1₁₆, ..., 1111₂=F₁₆

### Endereçamento IPv6
- **Estrutura**: 128 bits divididos em 8 hextetos
- **Formato**: `x:x:x:x:x:x:x:x` (cada x = 4 dígitos hexadecimais)
- **Vantagem**: Representação mais compacta que binário

### Notação Posicional Hexadecimal
- **Base 16**: Cada posição representa potência de 16
- **Exemplo**: 2A₁₆ = 2×16¹ + 10×16⁰ = 32 + 10 = 42₁₀

## Praticando Hexadecimal

### Conversão Hexadecimal para Decimal
- **Exemplo 1**: 2A₁₆ = 42₁₀
- **Exemplo 2**: 9F₁₆ = 9×16¹ + 15×16⁰ = 144 + 15 = 159₁₀

### Conversão Decimal para Hexadecimal
- **Exemplo**: 197₁₀ = C5₁₆
- **Método**: Divisão sucessiva por 16, coletando os restos

### Aplicações Práticas
- **Endereços MAC**: Identificação única de interfaces de rede
- **IPv6**: Endereçamento moderno com maior espaço de endereços
- **Debugging**: Análise de pacotes em formato hexadecimal

## Resumo dos Conceitos-Chave
- **Bit**: Menor unidade de informação (0 ou 1)
- **Octeto**: Grupo de 8 bits em endereços IPv4
- **Hexteto**: Grupo de 16 bits em endereços IPv6
- **Notação posicional**: Valor baseado na posição e base numérica
- **Conversão**: Transformação entre diferentes sistemas numéricos
