// Estrutura de repetição for em JavaScript

// O laço for é utilizado para repetir um bloco de código um número determinado de vezes.
// Sua sintaxe básica é:
// for (inicialização; condição; incremento) {
//     // bloco de código a ser executado em cada repetição
// }

// Exemplo 1: Contando de 0 até 4
for (let i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
}
// Saída:
// Valor de i: 0
// Valor de i: 1
// Valor de i: 2
// Valor de i: 3
// Valor de i: 4

// Explicação dos componentes do for:
// - inicialização: executada apenas uma vez, no início (ex: let i = 0)
// - condição: verificada antes de cada repetição; se for verdadeira, o bloco é executado (ex: i < 5)
// - incremento: executado ao final de cada repetição (ex: i++)

// Exemplo 2: Contando de 10 até 1 (decrescente)
for (let j = 10; j > 0; j--) {
    console.log(j);
}
// Saída: 10, 9, 8, ..., 1

// O for é ideal quando sabemos exatamente quantas vezes queremos repetir um bloco de código.
// Para repetições indeterminadas, normalmente usamos while ou do...while.
