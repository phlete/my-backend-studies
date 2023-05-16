// aula sobre reduce -> reduzindo arrays
// caso não mande o acumulador, sera o primeiro indice do array

// some todos os numeros (reduce)
// retorne um array com os pares (filter)
// retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);
