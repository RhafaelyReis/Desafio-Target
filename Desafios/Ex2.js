// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

let numeroBase = 987
let resultado
let a = 0
let b = 1

do {

resultado = a + b
a = b
b = resultado

} while (b <= numeroBase);

if (a == numeroBase) {
    console.log ("O número " + numeroBase + " pertence a sequência de Fibonacci")
} else {
    console.log ("O número " + numeroBase + " não pertence a sequência de Fibonacci")
}