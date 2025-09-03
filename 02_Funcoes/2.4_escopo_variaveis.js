/*
    Escopo de Variáveis em JavaScript

    O que é escopo?
    ----------------------------------------
    Escopo é o contexto onde uma variável está disponível para ser utilizada no código.
    Em JavaScript, existem principalmente três tipos de escopo:

    1. Escopo Global:
        - Variáveis declaradas fora de qualquer função ou bloco pertencem ao escopo global.
        - Podem ser acessadas de qualquer parte do código.

    2. Escopo de Função (Local):
        - Variáveis declaradas dentro de uma função só existem e podem ser acessadas dentro dessa função.
        - Não são visíveis fora da função.

    3. Escopo de Bloco (ES6+):
        - Variáveis declaradas com 'let' ou 'const' dentro de blocos (como if, for, while, etc.) só existem dentro desse bloco.
        - Variáveis declaradas com 'var' não respeitam o escopo de bloco, apenas o de função.

    Exemplos:
*/

// Escopo Global
let globalVar = "Sou global!";

function minhaFuncao() {
    // Escopo de Função
    let localVar = "Sou local da função!";
    console.log(globalVar); // Acessa variável global
    console.log(localVar);  // Acessa variável local
}

minhaFuncao();
// console.log(localVar); // Erro! localVar não está definida aqui

if (true) {
    // Escopo de Bloco
    let blocoVar = "Sou do bloco!";
    var varBloco = "Sou var do bloco!";
    console.log(blocoVar); // Ok
    console.log(varBloco); // Ok
}
// console.log(blocoVar); // Erro! blocoVar não está definida aqui
console.log(varBloco); // Ok! var ignora escopo de bloco

/*
    Resumindo:
    ----------------------------------------
    - Use 'let' e 'const' para garantir escopo de bloco e evitar conflitos de variáveis.
    - Prefira variáveis locais sempre que possível para evitar efeitos colaterais no código.
    - Entender escopo é fundamental para evitar bugs e escrever códigos mais seguros e organizados.
*/
