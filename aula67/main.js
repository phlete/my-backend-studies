// aula sobre classes (OOP)
// muito parecida com a função construtora ( em quesito de sintaxe)

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

const p1 = new Pessoa('paulinho', 'robson');
console.log(p1);