// aula sobre funções imediatas (IIFE)
// IIFE => Immediately invoked function expression
// muito utilizado para:
// 1. Isolamento de escopo 
// 2. Modularização de código
// 3. Proteção de variáveis globais

(function (idade, peso, altura) {

    const sobrenome = 'henrique';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('paulo'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(22, 98, 1.80);

// 1. Isolamento de escopo

(function () {
    let x = 10;
    console.log(x); // 10
})();
// console.log(x);  (x is not defined)


// 2. Modularização de código

let meuModulo = (function () {
    let x = 50;
    let y = 30;

    function soma() {
        return x + y;
    }

    return {
        soma: soma
    };
})();

console.log(meuModulo.soma()); // 30

// 3. Proteção de variáveis globais

(function () {
    let x = 10;

    function setX(newX) {
        x = newX;
    }

    function getX() {
        return x;
    }

    window.meuModulo = {
        setX: setX,
        getX: getX
    };
})();

console.log(window.meuModulo.getX()); // 10
window.meuModulo.setX(20);
console.log(window.meuModulo.getX()); // 20


