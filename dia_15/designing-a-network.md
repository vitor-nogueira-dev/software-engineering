# Projetando uma Rede

## Dispositivos

### Pequenas Redes - Topologia
- **Características**: Uma única conexão WAN via DSL, cabo modem ou Ethernet
- **Gestão**: Mesmo redes pequenas requerem habilidades similares às necessárias para gerenciar redes maiores
- **Estrutura**: Hardware deixou de ser prioridade; software estruturado é fundamental

### Escolha de Dispositivos

#### **Custo**
Fatores que influenciam o custo:
- Capacidade e recursos disponíveis
- Quantidade e tipos de portas
- Capacidade de comutação do backplane
- Recursos de gerenciamento de rede
- Tecnologias de segurança
- Redundância de dispositivos e conexões

#### **Tipos de Portas e Interfaces**
- **Computadores modernos**: NICs de 1 Gbit/s
- **Servidores**: Portas de 10 Gbit/s
- **Estratégia**: Escolher dispositivos com velocidades maiores para evolução futura

#### **Expansão**
- **Configuração fixa**: Quantidade específica de portas, não expansível
- **Configuração modular**: Slots de expansão para adicionar módulos conforme demanda
- **Switches**: Portas adicionais para uplinks de alta velocidade
- **Roteadores**: Conectam diferentes tipos de redes

#### **Sistema Operacional e Serviços**
Recursos necessários:
- Layer 3 Switching
- NAT (Network Address Translation)
- DHCP (Dynamic Host Configuration Protocol)
- Segurança
- QoS (Quality of Service)
- VoIP (Voice over IP)

### Endereçamento
**Dispositivos que necessitam endereços únicos:**
- Dispositivos do usuário final (com fio, sem fio, acesso remoto)
- Servidores e periféricos (impressoras, câmeras de segurança)
- Dispositivos intermediários (switches, pontos de acesso)

**Benefício**: Esquema de endereçamento IP planejado facilita identificação e troubleshooting

### Redundância
- **Objetivo**: Eliminar pontos únicos de falha
- **Implementação**: Equipamentos duplicados e links duplicados
- **Importância**: Garante alta disponibilidade e confiabilidade

### Gerenciamento de Tráfego
- **Meta**: Aumentar produtividade e minimizar tempo de inatividade
- **QoS**: Classificação de tráfego por prioridade
- **Priorização**: Tráfego em tempo real (voz/vídeo) recebe tratamento apropriado

---

## Protocolos e Aplicações

### Aplicações
**Duas categorias principais:**

1. **Aplicações de rede**
   - Implementam protocolos da camada de aplicação
   - Comunicação direta com camadas inferiores
   - Exemplos: clientes de e-mail, navegadores web

2. **Serviços de camada de aplicação**
   - Programas que necessitam serviços para usar recursos de rede
   - Exemplos: transferência de arquivos, spool de impressão
   - Tratamento adequado para diferentes tipos de dados (texto, imagem, vídeo)

### Protocolos de Acesso Remoto
- **Telnet**: Solução tradicional (menos segura)
- **SSH (Secure Shell)**: Alternativa segura ao Telnet
- **Suporte**: Dispositivos de rede e servidores oferecem SSH para acesso remoto

---

## Escalabilidade

### Planejamento de Crescimento
O projeto deve considerar expansão futura através de:

#### **Aspectos a Considerar:**
- **Aplicações e serviços**: Atuais e previstos
- **Documentação**: Topologia física e lógica
- **Inventário**: Lista de dispositivos da rede
- **Orçamento**: Planejamento de TI alinhado ao negócio
- **Análise de tráfego**: Monitoramento de protocolos, aplicações e serviços

### Análise de Tráfego
#### **Ferramentas:**
- **Zabbix**: Monitoramento open source
- **Wireshark**: Análise de protocolos

#### **Boas Práticas:**
- Capturar tráfego em horários de pico
- Executar captura em diferentes segmentos
- Avaliar origem, destino e tipo de tráfego
- Considerar realocação de servidores para otimização

---

## Conectividade

### Ferramentas de Teste

#### **Ping**
- **Função**: Testa conectividade da camada 3
- **Protocolo**: ICMP (Echo Request/Reply)
- **Informações**: Estatísticas de tempo de ida e volta
- **Uso**: Verificação rápida de conectividade

#### **Traceroute**
- **Função**: Localiza problemas da camada 3
- **Resultado**: Lista de saltos no roteamento
- **Benefício**: Identifica onde está localizado o problema
- **Limitação**: Timeouts podem indicar roteadores não responsivos

#### **Baseline (Linha de Base)**
- **Propósito**: Monitoramento eficaz de desempenho
- **Método**: Medição ao longo do tempo em cargas variadas
- **Dados**: Mensagens de erro e tempos de resposta
- **Indicador**: Aumento nos tempos pode indicar problemas de latência

---

## Troubleshooting

### Abordagem Sistemática
- **Análise**: Determinar extensão do problema (um dispositivo vs. toda a rede)
- **Estratégia**: Procurar causa antes de implementar solução
- **Escopo**: Avaliar quantos dispositivos são afetados

### Processo de Solução
**Etapas típicas do troubleshooting:**

1. **Identificação do Problema**
   - Definir sintomas
   - Coletar informações

2. **Análise**
   - Determinar escopo
   - Isolar variáveis

3. **Implementação**
   - Aplicar correções
   - Testar soluções

4. **Documentação**
   - Registrar problema e solução
   - Atualizar baseline

### Considerações Importantes
- Problemas podem ser simples ou complexos
- Frequentemente resultam de combinação de fatores (hardware, software, conectividade)
- Abordagem sistemática é essencial para eficiência

