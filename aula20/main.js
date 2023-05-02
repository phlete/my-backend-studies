// # Aula sobre valores primitivos e valores por referencia 

/* 
primitivos (imutáveis) -> string, number, boolean, undefined, null, bigint, symbol = valor copiado

referencia (mutável) -> array, object, function = valores passado por referencia 
*/
// Exemplos Imutáveis
//          01234
let nome = 'Paulo';
nome[0] = 'R';
console.log(nome[0], nome);
// o valor do índice 0 da string 'Paulo' não pode ser mudada pois é um valor primitivo

let a1 = 'A';
let b1 = a1; // copiado
console.log(a1, b1);

a1 = 'mudei meu dado'
console.log(a1, b1)

console.log('--------------------'); 
// Exemplos mutáveis

let a = [1, 2, 3];
let b = [...a]; //agora b tem seu valor copiado de a ( se tornando independente)
let c = b; // esses 3 pontos (...) se chama spread 
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

console.log(c)







