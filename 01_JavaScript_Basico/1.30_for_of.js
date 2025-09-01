// Estrutura de repetição for...of em JavaScript

// O laço for...of é utilizado para percorrer os valores de objetos iteráveis, como arrays, strings, mapas, conjuntos, entre outros.
// Ele é ideal para acessar diretamente os valores de cada elemento, sem se preocupar com índices ou chaves.

// Sintaxe básica:
/*
for (let valor of iteravel) {
    // bloco de código a ser executado para cada valor
}
*/

// Exemplo 1: Percorrendo os valores de um array
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
    console.log(fruta);
}
// Saída:
// maçã
// banana
// laranja

// Exemplo 2: Percorrendo os caracteres de uma string
let palavra = "Olá";
for (let letra of palavra) {
    console.log(letra);
}
// Saída:
// O
// l
// á

// Resumindo:
// - Use for...of para percorrer valores de arrays, strings e outros objetos iteráveis.
// - Diferente do for...in, que percorre as chaves (índices ou propriedades), o for...of percorre os valores.
// - Não é recomendado para objetos comuns (não iteráveis), pois eles não implementam o protocolo de iteração.

// Dica: Para percorrer objetos comuns, utilize o for...in ou métodos como Object.keys(), Object.values() ou Object.entries() junto com o for...of.
