// Tipo de dado String em JavaScript

// Uma string é um tipo de dado usado para representar textos, ou seja, uma sequência de caracteres.
// Strings podem ser declaradas usando aspas simples (' '), aspas duplas (" ") ou crases (` `) para template strings.

let nome = "João";
let sobrenome = 'Silva';
let saudacao = `Olá, ${nome} ${sobrenome}!`; // Template string (permite interpolação de variáveis)

console.log(nome); // Saída: João
console.log(sobrenome); // Saída: Silva
console.log(saudacao); // Saída: Olá, João Silva!

// Strings possuem vários métodos úteis, como:
console.log(nome.length); // Retorna o número de caracteres da string
console.log(nome.toUpperCase()); // Converte para maiúsculas
console.log(nome.toLowerCase()); // Converte para minúsculas
console.log(nome.charAt(0)); // Retorna o caractere na posição 0
console.log(nome.substring(1, 3)); // Retorna parte da string (do índice 1 ao 2)

// Dica: Use strings para armazenar nomes, mensagens, textos e qualquer informação textual.
