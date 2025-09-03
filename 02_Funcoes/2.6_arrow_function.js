/*
    Arrow Function (Função de Seta) em JavaScript

    O que é uma Arrow Function?
    ----------------------------------------
    Arrow function é uma forma mais curta e moderna de declarar funções em JavaScript, introduzida no ES6 (ECMAScript 2015).
    Sua principal característica é a sintaxe simplificada e o comportamento especial do 'this', que é herdado do contexto onde a função foi criada.

    Vantagens:
    - Sintaxe mais enxuta, ideal para funções pequenas e callbacks.
    - Não cria seu próprio 'this', facilitando o uso em métodos e funções aninhadas.
    - Código mais limpo e legível.

    Sintaxe Básica:
    ----------------------------------------
*/

// Função tradicional
function saudacaoTradicional(nome) {
    return "Olá, " + nome + "!";
}

// Arrow function equivalente
const saudacaoArrow = (nome) => {
    return "Olá, " + nome + "!";
};

// Quando há apenas um parâmetro, os parênteses são opcionais
const saudacaoArrowSimples = nome => "Olá, " + nome + "!";

// Para funções de uma linha, o 'return' é implícito
const soma = (a, b) => a + b;

// Exemplos práticos (sem documentação):

const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(numero => numero * 2);
console.log(dobrados);

const nomes = ["Ana", "Bruno", "Carlos"];
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);

function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}
// Para testar, descomente a linha abaixo:
// const p = new Pessoa();

/*
    Resumindo:
    ----------------------------------------
    - Arrow functions são ideais para funções curtas e callbacks.
    - Não possuem seu próprio 'this', 'arguments' ou 'prototype'.
    - Não podem ser usadas como construtoras (não usar com 'new').
    - Tornam o código mais limpo e fácil de entender.
*/
