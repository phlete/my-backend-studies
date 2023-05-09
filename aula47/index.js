// aula sobre funções fabricas (factory functions)
// constructor function (melhor utilizado dependendo da situação)
// Essas funções são chamadas de factory functions porque "fabricam" (criam) novos objetos.

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            console.log(valor);
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,
        // Getter (vai fazer a função fingir ser um atributo do objeto)
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('paulinho', 'henrique', 1.80, 98);
p1.nomeCompleto = 'robson oliveira figueiredo';
console.log(p1.nomeCompleto);
console.log(p1.fala('falando sobre typescript ser melhor que JS'));
console.log(p1.imc);


// conceito 'THIS'  pode ser usado em diferentes contextos em JavaScript:
// 1. Dentro de um método de objeto

const pessoa = {
    nome: "Robson",
    idade: 89,
    saudacao: function () {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

pessoa.saudacao(); // Olá, meu nome é João e eu tenho 30 anos.

// 2. Dentro de uma factory function (exemplo 2)

function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        saudacao: function () {
            return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
        }
    };
}

const pessoa1 = criarPessoa("João", 30);
const pessoa2 = criarPessoa("Maria", 25);

console.log(pessoa1.saudacao()); // Olá, meu nome é João e eu tenho 30 anos.
console.log(pessoa2.saudacao()); // Olá, meu nome é Maria e eu tenho 25 anos.


// 3. Dentro de uma função normal
function exemplo() {
    console.log(this);
}

exemplo(); // window (no navegador) ou global (no Node.js)




