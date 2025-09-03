/*
    Funções Anônimas em JavaScript

    O que são?
    ----------------------------------------
    Funções anônimas são funções que não possuem um nome identificado. 
    Elas são geralmente atribuídas a variáveis, passadas como argumentos para outras funções 
    ou utilizadas em métodos de arrays, como forEach, map, filter, entre outros.

    Por que usar?
    ----------------------------------------
    - Permitem criar funções rápidas e reutilizáveis sem a necessidade de nomeá-las.
    - Facilitam a escrita de código mais conciso, especialmente em callbacks.
    - São muito utilizadas em programação funcional e manipulação de arrays.

    Exemplo de uso:
*/

// Atribuindo uma função anônima a uma variável
let saudacao = function(nome) {
    return `Olá, ${nome}!`;
};

console.log(saudacao("João")); // Saída: Olá, João!

// Utilizando função anônima como callback em um array
let numeros = [1, 2, 3, 4];
let dobrados = numeros.map(function(numero) {
    return numero * 2;
});
console.log(dobrados); // Saída: [2, 4, 6, 8]

/*
    Resumindo:
    ----------------------------------------
    - Funções anônimas são úteis para situações em que a função será usada pontualmente.
    - Tornam o código mais limpo e organizado, principalmente em operações com arrays e eventos.
*/
