// Objetos em JavaScript

// Um objeto é uma coleção de propriedades, onde cada propriedade é composta por uma chave (nome) e um valor.
// Objetos permitem agrupar dados e funcionalidades relacionadas em uma única estrutura.

// Criando um objeto literal
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome);
    }
};

console.log("Nome:", pessoa.nome); // Acessando propriedade com ponto
console.log("Idade:", pessoa["idade"]); // Acessando propriedade com colchetes

pessoa.saudacao(); // Chamando um método do objeto

// Adicionando uma nova propriedade
pessoa.sobrenome = "Silva";
console.log("Sobrenome:", pessoa.sobrenome);

// Modificando uma propriedade existente
pessoa.idade = 31;
console.log("Nova idade:", pessoa.idade);

// Removendo uma propriedade
delete pessoa.profissao;
console.log("Profissão após remoção:", pessoa.profissao); // undefined

// Objetos também podem ser criados usando a palavra-chave new Object()
let carro = new Object();
carro.marca = "Toyota";
carro.modelo = "Corolla";
carro.ano = 2020;

console.log("Carro:", carro);

// Resumo:
// - Objetos armazenam pares chave-valor.
// - Permitem agrupar dados e funções relacionadas.
// - Propriedades podem ser acessadas, modificadas, adicionadas ou removidas dinamicamente.
