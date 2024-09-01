const faturamento = {
    SP: 77836.43,
    RJ: 86678.66,
    MG: 95229.88,
    ES: 45165.48,
    Outros: 14849.53
};

const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

Object.entries(faturamento).forEach(([estado, valor]) => {
    const percentual = ((valor / total) * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
});
