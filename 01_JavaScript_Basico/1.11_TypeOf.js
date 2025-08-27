// Exemplo de utilização do typeof em JavaScript

// typeof é um operador que retorna uma string indicando o tipo do operando.

// Exemplos com diferentes tipos de dados:
let numero = 42;
let texto = "Olá, mundo!";
let booleano = true;
let objeto = { nome: "João" };
let array = [1, 2, 3];
let funcao = function() {};
let nulo = null;
let indefinido;

console.log("Tipo de numero:", typeof numero);           // "number"
console.log("Tipo de texto:", typeof texto);             // "string"
console.log("Tipo de booleano:", typeof booleano);       // "boolean"
console.log("Tipo de objeto:", typeof objeto);           // "object"
console.log("Tipo de array:", typeof array);             // "object" (arrays são objetos em JS)
console.log("Tipo de funcao:", typeof funcao);           // "function"
console.log("Tipo de nulo:", typeof nulo);               // "object" (isso é uma peculiaridade do JS)
console.log("Tipo de indefinido:", typeof indefinido);   // "undefined"

// Resumo:
// - typeof é útil para verificar o tipo de uma variável em tempo de execução.
// - Atenção: typeof null retorna "object" por uma questão histórica do JavaScript.
