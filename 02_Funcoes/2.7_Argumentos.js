/*
    O objeto 'arguments' em JavaScript

    O que é o 'arguments'?
    ----------------------------------------
    'arguments' é um objeto disponível dentro de todas as funções tradicionais (não funciona em arrow functions).
    Ele contém todos os argumentos passados para a função, mesmo que não estejam declarados nos parâmetros.

    Características:
    - É parecido com um array, mas não é um array de verdade (não possui todos os métodos de array).
    - Permite acessar todos os valores passados para a função, independente da quantidade de parâmetros definidos.
    - Útil para funções que aceitam número variável de argumentos.

    Exemplo básico:
*/

function somaTodos() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somaTodos(1, 2, 3)); // Saída: 6
console.log(somaTodos(5, 10, 15, 20)); // Saída: 50

/*
    Acessando argumentos individuais:
*/

function mostraArgumentos() {
    for (let i = 0; i < arguments.length; i++) {
        console.log("Argumento " + i + ": " + arguments[i]);
    }
}

mostraArgumentos("João", 25, true);

/*
    Observações importantes:
    ----------------------------------------
    - 'arguments' só está disponível em funções tradicionais (function nome() {}).
    - Em arrow functions, use o operador rest (...args) para capturar argumentos.
    - A partir do ES6, prefira usar o rest (...args), pois é mais moderno e realmente cria um array.

    Exemplo com rest:
*/

const somaRest = (...numeros) => {
    return numeros.reduce((total, n) => total + n, 0);
};

console.log(somaRest(2, 4, 6)); // Saída: 12

/*
    Resumindo:
    ----------------------------------------
    - 'arguments' permite acessar todos os argumentos passados para uma função tradicional.
    - Para código moderno, prefira o uso do rest (...args).
*/
