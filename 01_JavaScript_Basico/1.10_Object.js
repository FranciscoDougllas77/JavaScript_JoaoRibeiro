// Exemplo 1: Criando um objeto simples
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
};
console.log("Objeto pessoa:", pessoa);

// Podemos acessar as propriedades do objeto usando ponto (.) ou colchetes []
console.log("Nome:", pessoa.nome); // Usando ponto
console.log("Idade:", pessoa["idade"]); // Usando colchetes

// Exemplo 2: Adicionando e alterando propriedades
pessoa.sobrenome = "Ribeiro"; // Adicionando nova propriedade
pessoa.idade = 31; // Alterando valor existente
console.log("Pessoa atualizada:", pessoa);

// Exemplo 3: Objeto com métodos (funções dentro do objeto)
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    ligar: function() {
        console.log("O carro está ligado!");
    }
};
console.log("Objeto carro:", carro);
carro.ligar(); // Chamando o método do objeto

// Exemplo 4: Objetos aninhados (um objeto dentro de outro)
let aluno = {
    nome: "Maria",
    curso: {
        nome: "Engenharia",
        duracao: 5
    }
};
console.log("Nome do aluno:", aluno.nome);
console.log("Curso do aluno:", aluno.curso.nome);
console.log("Duração do curso:", aluno.curso.duracao, "anos");

// Objetos são muito usados em JavaScript para organizar e agrupar dados relacionados.
