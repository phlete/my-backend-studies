// aula sobre prototypes
// prototype === __proto__

/* 
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
Protótipo é um termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referencia interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para cria-lo. quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no primeiro objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/


// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + '' + this.sobrenome
}
// Pessoa.prototype === pessoa1.__proto__
// aonde o motor JS vai procurar os membros ? (da esquerda pra direita)
// pessoa1 -> pessoa1.prototype -> object.prototype

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + '' + this.sobrenome;
};

// Instância 
const pessoa1 = new Pessoa('paulinho', 'H.'); // <- Pessoa = função construtora 
const pessoa2  = new Pessoa('robson', 'C.') // <- Pessoa = função construtora 

console.dir(pessoa1);
console.dir(pessoa2);