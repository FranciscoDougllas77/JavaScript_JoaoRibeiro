// Tipo Boolean em JavaScript

// O tipo Boolean representa um valor lógico e só pode ser true (verdadeiro) ou false (falso).
// É muito utilizado em comparações, condições e estruturas de controle (if, while, etc).

let estaChovendo = true;   // verdadeiro
let temSol = false;        // falso

console.log("Está chovendo?", estaChovendo); // Saída: true
console.log("Tem sol?", temSol);             // Saída: false

// Booleans geralmente são resultado de expressões lógicas:
let idade = 18;
let maiorDeIdade = idade >= 18; // true, pois 18 é maior ou igual a 18

console.log("É maior de idade?", maiorDeIdade); // Saída: true

// Também podem ser usados para controlar o fluxo do programa:
if (maiorDeIdade) {
    console.log("Pode entrar na festa!");
} else {
    console.log("Não pode entrar na festa.");
}

// Dica: Use booleanos para representar condições, estados e resultados de comparações.
