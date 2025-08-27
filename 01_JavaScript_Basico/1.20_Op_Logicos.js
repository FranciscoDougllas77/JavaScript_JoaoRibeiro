// Operadores Lógicos em JavaScript

// Os operadores lógicos são usados para combinar expressões booleanas (verdadeiro ou falso).
// Eles são fundamentais para criar condições mais complexas em estruturas como if, while, etc.

// AND lógico (&&)
// Retorna true se ambas as expressões forem verdadeiras.
console.log("true && true:", true && true);   // true
console.log("true && false:", true && false); // false

// OR lógico (||)
// Retorna true se pelo menos uma das expressões for verdadeira.
console.log("true || false:", true || false); // true
console.log("false || false:", false || false); // false

// NOT lógico (!)
// Inverte o valor lógico da expressão.
console.log("!true:", !true);   // false
console.log("!false:", !false); // true

// Exemplos práticos:
let idade = 20;
let temCarteira = true;

// Verifica se a pessoa pode dirigir (idade maior ou igual a 18 E tem carteira)
let podeDirigir = idade >= 18 && temCarteira;
console.log("Pode dirigir?", podeDirigir); // true

// Verifica se a pessoa é menor de idade OU não tem carteira
let restricao = idade < 18 || !temCarteira;
console.log("Tem restrição para dirigir?", restricao); // false

// Resumo dos principais operadores lógicos:
// && : E lógico (AND)
// || : OU lógico (OR)
// !  : NÃO lógico (NOT)

// Esses operadores permitem criar condições compostas e tomar decisões mais elaboradas no código.
