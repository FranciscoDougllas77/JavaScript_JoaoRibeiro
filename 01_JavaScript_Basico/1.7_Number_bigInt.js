// Tipo Number em JavaScript

// O tipo Number é usado para representar números, sejam inteiros ou decimais.
let idade = 30; // número inteiro
let altura = 1.75; // número decimal

console.log("Idade:", idade);
console.log("Altura:", altura);

// Você pode fazer operações matemáticas com Number:
let soma = idade + 10;
let multiplicacao = idade * 2;
let divisao = altura / 2;

console.log("Soma:", soma);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);

// Atenção: o tipo Number tem limites para representar números muito grandes.

// Tipo BigInt em JavaScript

// O tipo BigInt foi criado para representar números inteiros muito grandes, além do limite do Number.
// Para criar um BigInt, basta adicionar um 'n' ao final do número, ou usar a função BigInt().

let numeroGrande = 9007199254740991; // Maior número inteiro seguro do tipo Number
console.log("Maior inteiro seguro (Number):", numeroGrande);

let numeroMuitoGrande = 9007199254740991000000000000000n; // BigInt
console.log("Número muito grande (BigInt):", numeroMuitoGrande);

let outroBigInt = BigInt("123456789012345678901234567890");
console.log("Outro BigInt:", outroBigInt);

// Operações com BigInt só podem ser feitas entre BigInts:
let somaBigInt = numeroMuitoGrande + 10n;
console.log("Soma com BigInt:", somaBigInt);

// Não é possível misturar Number e BigInt diretamente:
// let erro = numeroGrande + numeroMuitoGrande; // Isso gera erro!

// Dica: Use Number para a maioria dos cálculos do dia a dia.
// Use BigInt apenas quando precisar trabalhar com números inteiros muito grandes.
