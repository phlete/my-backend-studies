// # Aula sobre atribuição via desestruturação (Arrays)

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

//               0  1  2  3  4  5  6  7  8  -- são os indices
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros; // ele vai pegar o primeiro e o segundo índice e atribuindo seu valor nas duas variáveis
console.log(primeiroNumero, segundoNumero);
console.log(resto); // rest operator = resto, vai pegar o restante do array e alocar na variável que colocar apos os 3 pontos

const numeros1 = [ [100, 200, 300], [400, 500, 600], [700, 800, 900] ];
const [lista1, lista2, lista3] = numeros1;
console.log(lista2[2]);