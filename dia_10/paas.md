# Platform as a Service (PaaS)

## Finalidade dos modelos de Platform as a Service (PaaS)

- Objetivo central: fornecer uma plataforma lógica completa para desenvolvimento, teste e implantação de aplicações sem a necessidade de gerenciamento da infraestrutura física.
- Público-alvo: desenvolvedores, equipes de TI e empresas que precisam acelerar o ciclo de vida de aplicações e reduzir gastos com hardware e licenças.
- Benefícios principais:
	- Redução de custos com infraestrutura e licenças.
	- Acesso a ferramentas de desenvolvimento (compiladores, depuradores, bibliotecas) e middleware prontos.
	- Atualizações e suporte contínuo pelo provedor.
	- Escalabilidade e integração com serviços de banco de dados e BI.

## Funcionamento de um PaaS

- Composição: inclui infraestrutura (servidores, armazenamento, rede), middleware, ferramentas de desenvolvimento, sistemas de gerenciamento de banco de dados e serviços auxiliares.
- Modelo de operação:
	- Recursos são fornecidos pelo provedor em uma base paga conforme o uso.
	- O ambiente cobre o ciclo completo do aplicativo: desenvolvimento, teste, implantação, gerenciamento e atualização.
- Vantagem operacional: desenvolvedores focam em código e lógica de negócio, não em provisionamento ou manutenção de servidores.
- Limitações: algumas plataformas impõem restrições quanto a linguagens, sistemas de banco de dados ou frameworks suportados — é importante verificar compatibilidade com requisitos do projeto.

## Principais características técnicas

- Escalabilidade em todas as etapas do desenvolvimento.
- Integração nativa com bases de dados e serviços web.
- Segurança integrada e políticas de acesso gerenciadas pelo provedor.
- Ferramentas de deployment e monitoramento integradas.

## Alocação dinâmica como vantagem nos serviços de PaaS

- Conceito: alocação dinâmica refere-se à capacidade do provedor de ajustar recursos (CPU, memória, I/O) em tempo real conforme a demanda.
- Benefícios:
	- Economia de custos: paga-se pelo uso efetivo.
	- Resiliência e melhor aproveitamento dos recursos do data center.
	- Suporte à variação rápida de carga (picos e quedas) sem intervenção manual do cliente.
- Desafios:
	- Estimar demandas futuras pode ser difícil; provedores tendem a usar históricos de uso e algoritmos de previsão.
	- Decisões de migração de máquinas virtuais e balanceamento precisam ser bem projetadas para evitar perda de desempenho.

## Exemplo de PaaS

- Google App Engine (GAE): plataforma de desenvolvimento da Google que permite criar e executar aplicações com suporte a várias linguagens; oferece planos gratuitos e escalonamento automático.
- Salesforce Platform / Heroku: ecossistemas PaaS que entregam ferramentas para desenvolvimento rápido, integração com serviços empresariais, suporte a várias linguagens e deploys ágeis.

## Recomendações práticas ao escolher um PaaS

1. Verifique as linguagens, frameworks e bancos de dados suportados.
2. Avalie custos e modelo de cobrança (on-demand, reserva, tiers).
3. Confirme requisitos de segurança e conformidade (ex.: GDPR, LGPD, certificações).
4. Teste o provisionamento e o processo de deploy com um protótipo antes de migrar cargas de produção.
5. Confirme se o provedor oferece suporte a alocação dinâmica e monitoramento detalhado.
