// aula sobre as maneiras de declarar funções em JS
// se voce mandar uma function anonima dentro de uma variável, a variável vai se tornar o nome daquela função

falaOi();
// declaração de função (function hoisting)
function falaOi() {
    console.log('Oie');
} // somente escrevendo 'function' pode ocorrer hoisting

// first-class objects (objetos de primeira classe)
// function expression
const souUmDado = function () {
    console.log('sou um dado.');
};
souUmDado();

function executaFunca(funcao) {
    console.log('vou executar sua função abaixo:');
    funcao();
}
executaFunca(souUmDado);


// arrow function 
const funcaoArrow = () => {
    console.log('sou uma arrow function');
};
funcaoArrow();

// dentro de um objeto pode ter uma função
const obj = {
    falar: function() {
        console.log('estou falando...');
    },
    falando() {
        console.log('continuo falando normalmente...');
    }
};
obj.falar();
obj.falando();
