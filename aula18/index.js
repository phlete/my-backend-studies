// # aula sobre funções

// "nome" seria igual um parâmetro (argumento para a variavel nome seria por exemplo 'Luiz'
function saudacao(nome) {
    console.log(`Bom dia ${nome}!`)
}
const variavel = saudacao('Luiz');
    console.log(variavel); // ela foi executada porem nao exibiu nenhum valor 

// # como fazer uma function exibir um valor ?

function saudacao1(nome) {
    return `Bom dia ${nome}!!`
}
const variavel1 = saudacao1('Bernardo');
    console.log(variavel1);
// a função nao vai mais exibir nada. Apenas a variavel vai receber um valor agora e nao dará mais undefined

function soma(x, y) {
    const resultado = x + y
    return resultado
}
// tudo que ta dentro do escopo da função sera protegido e nao consegue ser acessado por fora
//  console.log(resultado);
    console.log(soma(2, 2));

const raiz = function (n) {
    return n ** 0.5;
};
    console.log(raiz(9));

// a maneira mais moderna para fazer uma function seria a arrow function ("=>")

const raiz1 = n => n ** 0.5
    console.log(raiz1(16))

function retornaFuncao() {
    const nome = 'Paulo';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao());