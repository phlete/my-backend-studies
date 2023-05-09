// aula sobre parâmetros da função
//arguments sustenta todos os argumentos enviados

function funcao1(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao1(2, undefined, 20); // único jeito de pular o argumento 'b' seria colocando 'undefined', assim assumindo o seu valor padrão

// isso so ocorre com 'function'
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7)

/*
todos os argumentos ainda continuam dentro de arguments,
porem se quiser criar parâmetros pros argumentos ja existentes eu consigo também (A, B e C, por exemplo)
*/

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);