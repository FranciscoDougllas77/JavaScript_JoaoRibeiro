// Strict Mode em JavaScript

// O "Strict Mode" (modo estrito) é um recurso do JavaScript que ajuda a escrever um código mais seguro e com menos erros.
// Ele faz com que o JavaScript seja executado em um modo mais restrito, impedindo certas ações consideradas "más práticas" e lançando mais erros.

// Para ativar o Strict Mode em todo o arquivo, basta adicionar a seguinte linha no início do seu código:
"use strict";

// Também é possível ativar o Strict Mode apenas dentro de uma função:
function exemploStrict() {
    "use strict";
    // Código aqui será executado em modo estrito
}

// Principais benefícios do Strict Mode:
// - Impede o uso de variáveis não declaradas
// - Proíbe a exclusão de variáveis, funções e argumentos
// - Torna erros silenciosos em erros explícitos
// - Proíbe duplicidade de nomes de parâmetros em funções
// - Restringe o uso do 'this' em funções (em modo estrito, 'this' é undefined em funções normais)

// Exemplo de erro capturado pelo Strict Mode:
"use strict";
nome = "João"; // Erro! Variável não declarada

// Dica: Sempre que possível, utilize o Strict Mode para evitar bugs difíceis de encontrar e melhorar a qualidade do seu código.
