// aula sobre retorno de funções
// return = retorna um valor
// 'return' termina a função

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

console.log('##### Refatorando #####');

function criaMultiplicador(multiplicador) {
    //multiplicador (esta nesse closure/escopo)
    return function(n) {
        return n * multiplicador;
    }
}

const duplica1 = criaMultiplicador(2);
const triplica1 = criaMultiplicador(3);
const quadriplica1 = criaMultiplicador(4);

console.log(duplica1(2));
console.log(triplica1(4));
console.log(quadriplica1(10));