// #aula sobre const

// nao podemos criar constantes com palavras reservadas 
// constantes precisam ter nomes significativos
// nao pode comecar o nome de uma constante com um numero
// nao pode conter espacos ou tracos
// utilizamos camelCase
// case-sensitive
// nao pode modificar o valor de uma constante
// NAO UTILIZE VAR, UTILIZE CONST.

// string = texto | number = numero

const primeiroNumero = 5; // const primeiroNumero = '5'; o resultado  sairia como string e seriam somados (510 | de forma incorreta)
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
    console.log(primeiroNumero);
    console.log(segundoNumero);
    console.log(resultadoTriplicado);
    console.log(typeof (primeiroNumero + segundoNumero));
