// Variáveis e Constantes em JavaScript

// Variáveis são usadas para armazenar valores que podem mudar durante a execução do programa.
// Podemos declarar variáveis usando 'let' ou 'var' (evite 'var' em código moderno).
let idade = 25; // variável que pode ser alterada depois
idade = 26; // valor alterado

// Constantes são usadas para armazenar valores que NÃO devem mudar.
// Declaramos constantes usando 'const'.
const PI = 3.14159; // valor fixo, não pode ser reatribuído
// PI = 3.14; // Isto causaria um erro!

// Exemplos:
let nome = "Maria";
const anoNascimento = 1990;

console.log("Nome:", nome);
console.log("Ano de nascimento:", anoNascimento);

// Dica: Use 'const' sempre que possível. Use 'let' apenas quando precisar alterar o valor depois.
