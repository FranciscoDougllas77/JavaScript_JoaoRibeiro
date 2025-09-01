// Estrutura de repetição while em JavaScript

// O laço while é utilizado para repetir um bloco de código enquanto uma condição for verdadeira.
// Sua sintaxe básica é:
// while (condição) {
//     // bloco de código a ser executado enquanto a condição for verdadeira
// }

// Exemplo 1: Contando de 0 até 4
let contador = 0;
while (contador < 5) {
    console.log("Valor de contador:", contador);
    contador++;
}
// Saída:
// Valor de contador: 0
// Valor de contador: 1
// Valor de contador: 2
// Valor de contador: 3
// Valor de contador: 4

// Explicação:
// - A condição (contador < 5) é verificada antes de cada repetição.
// - Se for verdadeira, o bloco é executado.
// - Se for falsa, o laço termina.

// Exemplo 2: Loop infinito (CUIDADO!)
// while (true) {
//     // Este bloco será executado para sempre, pois a condição nunca será falsa
// }

// O while é ideal quando não sabemos exatamente quantas vezes o bloco deve ser repetido, apenas que deve continuar enquanto a condição for verdadeira.

// Dica: Sempre lembre de atualizar as variáveis envolvidas na condição dentro do bloco, para evitar loops infinitos.
