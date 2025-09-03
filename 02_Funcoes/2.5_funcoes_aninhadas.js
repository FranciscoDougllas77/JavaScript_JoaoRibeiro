/*
    Funções Aninhadas em JavaScript

    O que são funções aninhadas?
    ----------------------------------------
    Funções aninhadas são funções definidas dentro de outras funções. 
    Em JavaScript, é possível declarar uma função dentro do corpo de outra função, 
    permitindo que a função interna acesse variáveis e parâmetros da função externa.

    Vantagens das funções aninhadas:
    - Encapsulamento: Permite organizar melhor o código, mantendo funções auxiliares privadas ao escopo da função principal.
    - Acesso ao escopo externo: A função interna pode acessar variáveis e argumentos da função onde foi criada (closure).

    Exemplo prático:
*/

function saudacao(nome) {
    function mensagem() {
        return "Olá, " + nome + "!";
    }
    return mensagem();
}

console.log(saudacao("João")); // Saída: Olá, João!

/*
    No exemplo acima, a função 'mensagem' está aninhada dentro da função 'saudacao'.
    Ela tem acesso ao parâmetro 'nome' da função externa, demonstrando o conceito de closure.

    Resumindo:
    ----------------------------------------
    - Funções aninhadas ajudam a organizar o código e a proteger variáveis do escopo global.
    - São muito úteis quando precisamos de funções auxiliares que só fazem sentido dentro de um determinado contexto.
*/
