// Arrays em JavaScript

// Um array é uma estrutura que permite armazenar vários valores em uma única variável.
// Os arrays podem conter qualquer tipo de dado: números, strings, objetos, etc.

// Criando um array
let frutas = ["maçã", "banana", "laranja"];
console.log("Array de frutas:", frutas);

// Acessando elementos do array (os índices começam em 0)
console.log("Primeira fruta:", frutas[0]);
console.log("Segunda fruta:", frutas[1]);

// Modificando um elemento do array
frutas[2] = "uva";
console.log("Array modificado:", frutas);

// Adicionando elementos ao final do array com push
frutas.push("melancia");
console.log("Após push:", frutas);

// Removendo o último elemento com pop
let ultimaFruta = frutas.pop();
console.log("Após pop:", frutas);
console.log("Fruta removida:", ultimaFruta);

// Descobrindo o tamanho do array
console.log("Quantidade de frutas:", frutas.length);

// Percorrendo um array com for
for(let i = 0; i < frutas.length; i++) {
    console.log(`Fruta na posição ${i}:`, frutas[i]);
}

// Também é possível usar for...of
for(let fruta of frutas) {
    console.log("Fruta (for...of):", fruta);
}

// Arrays podem conter diferentes tipos de dados
let misto = [10, "texto", true, {nome: "João"}];
console.log("Array misto:", misto);

// Resumo:
// - Arrays armazenam múltiplos valores em uma única variável.
// - Os elementos são acessados por índices numéricos.
// - Possuem vários métodos úteis como push, pop, shift, unshift, etc.
