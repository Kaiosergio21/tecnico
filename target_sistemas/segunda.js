function isFibonacci(num) {
    let a = 0, b = 1, nextTerm;

    if (num === 0 || num === 1) return true;

    nextTerm = a + b;
    while (nextTerm <= num) {
        if (nextTerm === num) return true;
        a = b;
        b = nextTerm;
        nextTerm = a + b;
    }

    return false;
}

let numero = 21; 
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
