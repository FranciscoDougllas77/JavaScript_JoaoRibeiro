// Condicionais em JavaScript

// Em JavaScript, condicionais são usadas para tomar decisões no código, executando diferentes blocos de código dependendo de certas condições.

// Estrutura básica do if, else if e else:
let idade = 18;

if (idade < 18) {
    console.log("Você é menor de idade.");
} else if (idade === 18) {
    console.log("Você tem exatamente 18 anos.");
} else {
    console.log("Você é maior de idade.");
}

// Exemplo com operador ternário (forma reduzida do if/else):
let resultado = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(resultado);

// Exemplo com switch (usado para múltiplas condições):
let dia = 3;
let nomeDia;

switch (dia) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    case 5:
        nomeDia = "Quinta-feira";
        break;
    case 6:
        nomeDia = "Sexta-feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido";
}
console.log("Hoje é: " + nomeDia);

// Resumindo:
// - if/else: para decisões simples ou múltiplas condições.
// - operador ternário: para decisões rápidas e simples.
// - switch: para várias opções baseadas em um mesmo valor.
