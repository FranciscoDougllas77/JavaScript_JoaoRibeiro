// Funções em JavaScript

// O que é uma função?
// Uma função é um bloco de código reutilizável que executa uma tarefa específica.
// Você pode definir uma função uma vez e utilizá-la quantas vezes quiser no seu código.

// Como declarar uma função?
// Sintaxe básica:
function nomeDaFuncao() {
    // código a ser executado
}

// Exemplo simples:
function dizerOla() {
    console.log("Olá, mundo!");
}

// Para executar (chamar) a função:
dizerOla(); // Saída: Olá, mundo!

// Funções com parâmetros
// Você pode passar valores (parâmetros) para a função:
function somar(a, b) {
    return a + b;
}

let resultado = somar(2, 3);
console.log(resultado); // Saída: 5

// Função com valor de retorno
// A palavra-chave 'return' faz a função devolver um valor para quem a chamou.

// Função anônima
// É uma função sem nome, geralmente atribuída a uma variável:
let multiplicar = function(x, y) {
    return x * y;
};

console.log(multiplicar(4, 5)); // Saída: 20

// Arrow Function (função de seta)
// Sintaxe mais curta para funções anônimas:
let dividir = (a, b) => {
    return a / b;
};

console.log(dividir(10, 2)); // Saída: 5

// Resumindo:
// - Funções ajudam a organizar e reutilizar código.
// - Podem receber parâmetros e retornar valores.
// - Existem várias formas de declarar funções em JavaScript.
