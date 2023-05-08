// for in - Estrutura de repetição

const frutas = ['Pera', 'Maça', 'Uva'];

//ele lê os indices(vetor) ou chaves do objeto
for (let indice in frutas) {
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'paulo',
    sobrenome:'henrique',
    idade: 22
};

// duas formas de chamar uma chave dentro do objeto quando vc sabe qual quer
console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

//utilizando os colchetes vc esta chamando o objeto dentro dessa chave

const usuario = {
    name: 'pablo',
    lastName: 'figueiredo',
    age: 25,
    city: {
        address: 'Roraima',
        number: 123
    }
};

for (let data in usuario) {
    console.log(data, usuario[data])
}