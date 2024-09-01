# Sistema de Faturamento,Sequência de Fibonacci e afims

Este repositório contém scripts em JavaScript para realizar cálculos e verificações, incluindo:

- Cálculo de faturamento diário de uma distribuidora
- Verificação de pertencimento à sequência de Fibonacci
- Soma dos primeiros N números inteiros
- Cálculo do percentual de representação por estado
- Inversão de caracteres de uma string
## Descrição

O projeto inclui soluções para os seguintes problemas:

1. **Cálculo de Faturamento Diário:**
   - Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, o programa calcula:
     - O menor valor de faturamento ocorrido em um dia do mês.
     - O maior valor de faturamento ocorrido em um dia do mês.
     - O número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

2. **Verificação de Sequência de Fibonacci:**
   - Dado um número, o programa verifica se ele pertence à sequência de Fibonacci.

3. **Cálculo da Soma dos N Primeiros Números:**
   - Dado um valor `INDICE`, o programa calcula a soma dos números inteiros de 1 até `INDICE`.

4. **Cálculo do Percentual de Representação por Estado:**
   - Dado o valor de faturamento mensal de uma distribuidora detalhado por estado, o programa calcula o percentual de representação de cada estado dentro do valor total mensal da distribuidora.

5. **Inversão de Caracteres de uma String:**
   - Dado um string, o programa inverte os caracteres sem usar funções prontas como `reverse`.

## Como Usar

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

2. Cálculo de Faturamento Diário
O script terceira.js realiza cálculos baseados em um arquivo JSON (faturamentoMensal.json) que deve conter os valores diários.

Para executar o script:

bash

node terceira.js

3. Verificação de Sequência de Fibonacci
O script fibonacci.js verifica se um número pertence à sequência de Fibonacci.

Para executar o script:

bash

node fibonacci.js
4. Cálculo da Soma dos N Primeiros Números
O script somaNumeros.js calcula a soma dos primeiros INDICE números inteiros.

Para executar o script:

bash

node somaNumeros.js

5. Cálculo do Percentual de Representação por Estado
O script percentualEstados.js calcula o percentual de representação de cada estado com base em dados fornecidos no código.

Para executar o script:

bash

node percentualEstados.js

6. Inversão de Caracteres de uma String
O script inverterString.js inverte os caracteres de uma string fornecida.

Para executar o script:

bash

node inverterString.js

├── terceira.js              # Script para cálculo de faturamento diário
├── fibonacci.js             # Script para verificação de Fibonacci
├── somaNumeros.js           # Script para soma dos primeiros N números
├── percentualEstados.js     # Script para cálculo percentual por estado
├── inverterString.js        # Script para inversão de string
├── faturamentoMensal.json   # Dados de faturamento em formato JSON
└── README.md                # Documentação do projeto

Tecnologias Utilizadas
JavaScript (Node.js): Linguagem de programação usada para desenvolver os scripts.
JSON: Formato de arquivo usado para armazenar os dados de faturamento.

Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
