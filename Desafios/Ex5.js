// 5) Escreva um programa que inverta os caracteres de um string.

let string = "exemplo";
let stringInvertida = [];

let tamanho = string.length - 1

for (let i = tamanho; i >= 0; i--) {
    stringInvertida = stringInvertida + string[i]
}

console.log (stringInvertida)