// Operador Ternário em JavaScript

// O operador ternário é uma forma reduzida de escrever uma estrutura condicional if/else simples.
// Sua sintaxe é: condição ? valor_se_verdadeiro : valor_se_falso;

// Exemplo 1: Verificar se uma pessoa é maior de idade
let idade = 17;
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(status); // Saída: Menor de idade

// Exemplo 2: Verificar se um número é par ou ímpar
let numero = 10;
let resultado = (numero % 2 === 0) ? "Par" : "Ímpar";
console.log("O número é: " + resultado); // Saída: O número é: Par

// Exemplo 3: Usando o ternário para atribuição condicional
let usuarioLogado = false;
let mensagem = usuarioLogado ? "Bem-vindo de volta!" : "Por favor, faça login.";
console.log(mensagem); // Saída: Por favor, faça login.

// Exemplo 4: Ternário dentro de uma função
function verificarAprovacao(nota) {
    return (nota >= 6) ? "Aprovado" : "Reprovado";
}
console.log(verificarAprovacao(7)); // Saída: Aprovado
console.log(verificarAprovacao(5)); // Saída: Reprovado

// Dica: O operador ternário é ideal para decisões rápidas e simples, mas evite usá-lo em condições muito complexas para manter o código legível.
