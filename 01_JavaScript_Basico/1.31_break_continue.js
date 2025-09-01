// Instruções break e continue em JavaScript

// O comando 'break' é utilizado para interromper completamente a execução de um laço (for, while, do...while) ou de um switch.
// Já o comando 'continue' faz com que a iteração atual do laço seja interrompida e o fluxo vá para a próxima repetição.

// Exemplo 1: Utilizando 'break' para sair de um laço quando encontrar um valor específico
console.log("Exemplo de break:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Encontrei o 5, saindo do laço.");
        break; // Sai do laço quando i for igual a 5
    }
    console.log("Valor de i:", i);
}
// Saída:
// Valor de i: 1
// Valor de i: 2
// Valor de i: 3
// Valor de i: 4
// Encontrei o 5, saindo do laço.

// Exemplo 2: Utilizando 'continue' para pular uma iteração específica
console.log("\nExemplo de continue:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Pulando o 3");
        continue; // Pula o restante do bloco quando i for igual a 3
    }
    console.log("Valor de i:", i);
}
// Saída:
// Valor de i: 1
// Valor de i: 2
// Pulando o 3
// Valor de i: 4
// Valor de i: 5

// Resumindo:
// - 'break' encerra totalmente o laço mais próximo.
// - 'continue' interrompe a iteração atual e passa para a próxima repetição do laço.
