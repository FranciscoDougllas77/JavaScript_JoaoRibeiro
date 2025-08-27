// Exemplo de Conversão Implícita e Explícita em JavaScript

// Conversão Implícita (automática):
// O JavaScript converte tipos de dados automaticamente em algumas operações.

// Exemplo 1: Soma entre string e número
let resultadoImplicito1 = "10" + 5; // O número 5 é convertido para string e ocorre concatenação
console.log('"10" + 5 =', resultadoImplicito1); // Saída: "105"

// Exemplo 2: Subtração entre string e número
let resultadoImplicito2 = "20" - 4; // A string "20" é convertida para número e ocorre subtração
console.log('"20" - 4 =', resultadoImplicito2); // Saída: 16

// Exemplo 3: Comparação com == (conversão implícita)
console.log('"5" == 5:', "5" == 5); // true, pois "5" é convertido para número

// Conversão Explícita (manual):
// O programador força a conversão de um tipo para outro usando funções.

// Exemplo 1: Converter string para número
let texto = "123";
let numero = Number(texto); // Converte string para número
console.log('Number("123") =', numero); // Saída: 123

// Exemplo 2: Converter número para string
let valorNumerico = 456;
let valorString = String(valorNumerico); // Converte número para string
console.log('String(456) =', valorString); // Saída: "456"

// Exemplo 3: Converter valores para booleano
console.log('Boolean(0) =', Boolean(0)); // false (0 é considerado falso)
console.log('Boolean("Olá") =', Boolean("Olá")); // true (string não vazia é verdadeira)
console.log('Boolean("") =', Boolean("")); // false (string vazia é falsa)

// Resumo:
// - Conversão implícita: o JavaScript faz automaticamente em certas operações (ex: soma, subtração, comparação).
// - Conversão explícita: usamos funções como Number(), String() e Boolean() para converter manualmente.
