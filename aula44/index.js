// aula sobre closures (fechamento)
// esta muito relacionado ao escopo léxico de uma função
// closure é a habilidade da função em acessar seu escopo léxico

//global
function retornaFuncao(nome) {
    return function () {
        return nome;
    }; // tem acesso a 3 escopos (da mãe (retornaFuncao), do próprio(anonymous function) e o global)
}

const funcao = retornaFuncao('paulinho'); //o closure dela sera 'paulinho' (isso nunca mais vai mudar)
const funcao2 = retornaFuncao('joaozinho'); //o closure dela sera 'joaozinho' (isso nunca mais vai mudar)
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());