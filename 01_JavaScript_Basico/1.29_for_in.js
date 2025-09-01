// Estrutura de repetição for...in em JavaScript

// O laço for...in é utilizado para percorrer todas as propriedades enumeráveis de um objeto.
// Ele é ideal para acessar as chaves (nomes das propriedades) de um objeto.

// Sintaxe básica:
/*
for (let chave in objeto) {
    // bloco de código a ser executado para cada propriedade
}
*/

// Exemplo 1: Percorrendo as propriedades de um objeto
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
};

for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
}
// Saída:
// nome: João
// idade: 30
// profissao: Desenvolvedor

// Exemplo 2: Usando for...in em arrays (não recomendado)
// O for...in pode ser usado em arrays, mas não é a melhor prática, pois ele percorre os índices como strings e pode incluir propriedades herdadas.
// Prefira o for tradicional ou o for...of para arrays.

let cores = ["vermelho", "azul", "verde"];
for (let indice in cores) {
    console.log(indice + ": " + cores[indice]);
}
// Saída:
// 0: vermelho
// 1: azul
// 2: verde

// Resumindo:
// - Use for...in para percorrer propriedades de objetos.
// - Evite usar for...in para arrays.
// - Para percorrer valores de arrays, utilize for...of.

// Dica: Se precisar apenas dos valores das propriedades de um objeto, use pessoa[propriedade] dentro do laço.
