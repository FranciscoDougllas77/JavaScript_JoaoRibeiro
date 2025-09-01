// Operadores Lógicos com Condicionais em JavaScript

// Os operadores lógicos são usados para combinar ou inverter expressões booleanas (verdadeiro ou falso).
// Os principais operadores lógicos em JavaScript são:
// && (E lógico), || (OU lógico), ! (NÃO lógico)

// Exemplo 1: Operador && (E lógico)
// Retorna true se ambas as condições forem verdadeiras
let idade = 25;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir.");
} else {
    console.log("Não pode dirigir.");
}

// Exemplo 2: Operador || (OU lógico)
// Retorna true se pelo menos uma das condições for verdadeira
let estaChovendo = false;
let temGuardaChuva = true;

if (estaChovendo || temGuardaChuva) {
    console.log("Pode sair sem se molhar.");
} else {
    console.log("Vai se molhar se sair.");
}

// Exemplo 3: Operador ! (NÃO lógico)
// Inverte o valor lógico da expressão
let estaLogado = false;

if (!estaLogado) {
    console.log("Usuário não está logado.");
} else {
    console.log("Usuário está logado.");
}

// Exemplo 4: Combinando operadores lógicos
let nota = 7;
let frequencia = 80;

if ((nota >= 6 && frequencia >= 75) || temCarteira) {
    console.log("Aprovado ou tem carteira especial.");
} else {
    console.log("Reprovado.");
}

// Resumindo:
// - &&: verdadeiro se todas as condições forem verdadeiras
// - ||: verdadeiro se pelo menos uma condição for verdadeira
// - !: inverte o valor lógico (true vira false, e vice-versa)
