// Estrutura de repetição do...while em JavaScript

// O laço do...while é utilizado para repetir um bloco de código enquanto uma condição for verdadeira,
// porém, diferente do while tradicional, o bloco é executado pelo menos uma vez, pois a condição é verificada após a execução.

// Sintaxe básica:
/*
do {
    // bloco de código a ser executado
} while (condição);
*/

// Exemplo 1: Contando de 0 até 4
let contador = 0;
do {
    console.log("Valor de contador:", contador);
    contador++;
} while (contador < 5);
// Saída:
// Valor de contador: 0
// Valor de contador: 1
// Valor de contador: 2
// Valor de contador: 3
// Valor de contador: 4

// Exemplo 2: Executando pelo menos uma vez, mesmo que a condição seja falsa
let numero = 10;
do {
    console.log("Este bloco será executado pelo menos uma vez. Número:", numero);
    numero++;
} while (numero < 5);
// Saída:
// Este bloco será executado pelo menos uma vez. Número: 10

// Resumindo:
// - O do...while garante que o bloco de código seja executado ao menos uma vez.
// - A condição é verificada após a execução do bloco.
// - Útil quando precisamos que o código rode pelo menos uma vez, independentemente da condição inicial.
