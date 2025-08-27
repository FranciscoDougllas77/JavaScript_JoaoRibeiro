// Concatenação de Strings em JavaScript

// Concatenar significa juntar duas ou mais strings (textos) em uma só.

// Forma mais tradicional: usando o operador +
let nome = "João";
let sobrenome = "Ribeiro";
let nomeCompleto = nome + " " + sobrenome;
console.log("Nome completo (com +):", nomeCompleto);

// Também é possível concatenar strings e outros tipos de dados
let idade = 30;
let frase = "Meu nome é " + nome + " e tenho " + idade + " anos.";
console.log(frase);

// A partir do ES6, podemos usar Template Strings (Template Literals) com crase (`)
// Isso permite interpolar variáveis de forma mais fácil e legível
let fraseTemplate = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`;
console.log("Usando template string:", fraseTemplate);

// Também é possível usar o método concat()
let saudacao = "Olá, ".concat(nome, "!");
console.log("Usando concat():", saudacao);

// Resumo:
// - O operador + é o mais comum para concatenar strings.
// - Template strings (com crase e ${}) facilitam a inclusão de variáveis e expressões.
// - O método concat() também pode ser usado, mas é menos comum.
