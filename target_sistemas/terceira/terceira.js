const fs = require('fs');

// Leitura dos dados de faturamento do arquivo JSON
const faturamentoMensal = JSON.parse(fs.readFileSync('terceira/faturamentoMensal.json', 'utf-8'));

function calcularFaturamento(faturamentoMensal) {
    let menorValor = Number.MAX_VALUE;
    let maiorValor = Number.MIN_VALUE;
    let soma = 0;
    let diasComFaturamento = 0;

    faturamentoMensal.forEach(dia => {
        const valor = dia.valor;
        if (valor > 0) { // Ignora dias sem faturamento
            if (valor < menorValor) menorValor = valor;
            if (valor > maiorValor) maiorValor = valor;
            soma += valor;
            diasComFaturamento++;
        }
    });

    const mediaMensal = soma / diasComFaturamento;
    const diasAcimaDaMedia = faturamentoMensal.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoMensal);
console.log(`Menor valor: ${resultado.menorValor.toFixed(2)}`);
console.log(`Maior valor: ${resultado.maiorValor.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
