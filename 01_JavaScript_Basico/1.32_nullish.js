// Operador de Coalescência Nula (Nullish Coalescing Operator) em JavaScript

// O operador ??, chamado de Nullish Coalescing Operator, foi introduzido no ECMAScript 2020.
// Ele retorna o valor do lado direito apenas se o valor do lado esquerdo for null ou undefined.
// É muito útil para definir valores padrão apenas quando a variável é realmente "nula" ou "indefinida".

// Sintaxe:
// let resultado = valor1 ?? valor2;

// Exemplo 1: Usando o operador ??
let nome;
let nomePadrao = "Usuário";
let nomeFinal = nome ?? nomePadrao;
console.log(nomeFinal); // Saída: "Usuário"

// Exemplo 2: Diferença entre ?? e ||
let idade = 0;
let idadePadrao = 18;

console.log(idade || idadePadrao); // Saída: 18 (pois 0 é considerado "falsy" no operador ||)
console.log(idade ?? idadePadrao); // Saída: 0 (pois 0 não é null nem undefined)

// Resumindo:
// - O operador ?? só considera null e undefined como valores "nulos".
// - Outros valores "falsy" como 0, '', false NÃO acionam o valor padrão.
// - Use ?? quando quiser garantir um valor padrão apenas para null ou undefined.
 
// Exemplos adicionais:
console.log(null ?? "valor padrão");      // Saída: "valor padrão"
console.log(undefined ?? "valor padrão"); // Saída: "valor padrão"
console.log(false ?? "valor padrão");     // Saída: false
console.log(0 ?? "valor padrão");         // Saída: 0
console.log("" ?? "valor padrão");        // Saída: ""
