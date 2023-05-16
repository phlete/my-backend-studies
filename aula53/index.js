// aula sobre concatenar arrays 
// evitar utilizar "+" pois pode dar a concatenação

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2); //forma correta de concatenar um array (pode adicionar mais coisas após uma virgula)
// const a3 = a1 + a2; ele faria os arrays se tornarem strings e iria concatenar eles de forma errada
console.log(a3);


// podemos utilizar também spread operator

console.log('####################');

const b1 = [1, 2, 3];
const b2 = [4, 5, 6];
const b3 = [...b1, ...b2, ...[7, 8, 9]]; //para poder puxar os valores tem que utilizar spread se não vai chamar apenas o array
console.log(b3);