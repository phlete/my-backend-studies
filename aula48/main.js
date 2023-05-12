// aula sobre funções construtoras (constructor function)

// função construtora -> cria objetos 
// função fabrica -> fabrica objetos

function Pessoa(nome, sobrenome) {
    // atributos ou metodos privados
    const ID = 5156498;
    const metodoInterno = function(x = 2, y = 4) {
        const soma = x + y;
        console.log(soma);
    };
    metodoInterno();

    // atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': sou um método');
    };
}
const p1 = new Pessoa('paulinho', 'henriquinho');
p1.metodo();

