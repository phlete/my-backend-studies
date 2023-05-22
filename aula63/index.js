// aula sobre manipulação de prototypes (aula 94)

// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('camiseta', 50);
// p1.desconto(90);
// p1.aumento(100);
// console.log(p1);

const p2 = {
    nome: 'caneca',
    preco: 75
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(15);
console.log(p2)

const p3 = Object.create(Object.prototype)
