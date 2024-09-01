function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

let minhaString = "Kaio"; // Altere a string aqui
console.log(inverterString(minhaString)); // Saída: olpmexe

