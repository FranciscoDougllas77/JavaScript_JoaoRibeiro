// Estrutura switch em JavaScript

// O switch é utilizado para simplificar decisões com múltiplas opções baseadas no valor de uma variável ou expressão.
// Ele compara o valor fornecido com os valores de cada case e executa o bloco correspondente.

// Sintaxe básica:
/*
switch (expressao) {
    case valor1:
        // código a ser executado se expressao === valor1
        break;
    case valor2:
        // código a ser executado se expressao === valor2
        break;
    // ... outros cases ...
    default:
        // código a ser executado se nenhum case for correspondente
}
*/

// Exemplo 1: Dias da semana
let diaSemana = 4;
let nomeDia;

switch (diaSemana) {
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
console.log("Hoje é: " + nomeDia); // Saída: Hoje é: Quarta-feira

// Exemplo 2: Classificação de notas
let nota = "B";
let mensagem;

switch (nota) {
    case "A":
        mensagem = "Excelente!";
        break;
    case "B":
        mensagem = "Muito bom!";
        break;
    case "C":
        mensagem = "Bom!";
        break;
    case "D":
        mensagem = "Precisa melhorar.";
        break;
    case "F":
        mensagem = "Reprovado.";
        break;
    default:
        mensagem = "Nota inválida.";
}
console.log(mensagem); // Saída: Muito bom!

// Exemplo 3: Agrupando cases
let cor = "vermelho";

switch (cor) {
    case "vermelho":
    case "azul":
    case "amarelo":
        console.log("Cor primária");
        break;
    case "verde":
    case "laranja":
    case "roxo":
        console.log("Cor secundária");
        break;
    default:
        console.log("Outra cor");
}
// Saída: Cor primária

// Dicas:
// - Sempre use break ao final de cada case para evitar que o código continue executando os próximos cases (comportamento chamado de "fall-through").
// - O default é opcional, mas recomendado para tratar valores inesperados.
