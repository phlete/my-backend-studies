// # Aula sobre objetos (básico)

const pessoa1 = {
    nome: 'paulo',
    sobrenome: 'henrique',
    idade: 22
}

console.log(pessoa1.nome);

// essa é a maneira literal de criar um objeto
// caso o objeto seja usado mais do que uma vez, mais fácil criar uma function

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa2 = criaPessoa('paulo', 'henrique', 22);
console.log(pessoa2);

// pode ser abreviado e tera o mesmo resultado
function criaPessoaAbreviado(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa3 = criaPessoaAbreviado('maria', 'eduarda', 23);
console.log(pessoa3);

// this = ele atribui qualquer atributo do objeto para dentro de um método do objeto

const pessoa4 = {
    name: 'pedro',
    sobre: 'figueiredo',
    age: 22,

    falaOi() {
    console.log(`${this.name} ${this.sobre} esta chamando vc de boiola`)
    } 
}

pessoa4.falaOi();
