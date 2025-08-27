// Exemplo de Type Casting (Conversão de Tipos) em JavaScript

// Conversão implícita (automática) pelo JavaScript
let resultado1 = "5" + 3; // O número 3 é convertido para string e ocorre concatenação
console.log('"5" + 3 =', resultado1); // Saída: "53"

let resultado2 = "10" - 2; // A string "10" é convertida para número e ocorre subtração
console.log('"10" - 2 =', resultado2); // Saída: 8

// Conversão explícita (manual) usando funções
let numeroComoString = "123";
let convertidoParaNumero = Number(numeroComoString); // Converte string para número
console.log('Number("123") =', convertidoParaNumero); // Saída: 123

let numero = 456;
let convertidoParaString = String(numero); // Converte número para string
console.log('String(456) =', convertidoParaString); // Saída: "456"

// Conversão para booleano
let valor1 = 0;
let valor2 = "Olá";
console.log('Boolean(0) =', Boolean(valor1)); // Saída: false (0 é considerado falso)
console.log('Boolean("Olá") =', Boolean(valor2)); // Saída: true (string não vazia é verdadeira)

// Resumo:
// - Conversão implícita: o JavaScript converte tipos automaticamente em algumas operações.
// - Conversão explícita: usamos funções como Number(), String() e Boolean() para converter manualmente.
