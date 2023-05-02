// # Aula sobre objetos Math

let num1 = 9.4165465432;
let num2 = Math.floor(num1);
    console.log(num2)
// Math.floor serve para arredondamento para baixo 

let num3 = 7.4165465432;
let num4 = Math.ceil(num3);
    console.log(num4)
// Math.ceil serve para arredondamento para cima 

let num5 = 7.4165465432; // acima de 7.5 ele arredonda pra cima e 7.5 pra baixo ele arredonda para baixo
let num6 = Math.round(num5);
    console.log(num6)
// Math.round serve para arredondamento automatico.
// valores acima x.50 ele arredonda pra cima e x.49 pra baixo ele arredonda para baixo

console.log(Math.max(1,5,-50,65,500,1500,4,10))
// Math.max serve para descobrir o number mais alto dentro da sequencia de números

console.log(Math.min(1,5,-50,65,500,1500,4,10))
// Math.min serve para descobrir o menor number dentro da sequencia de números

console.log(Math.random());
// Math.random vai gerar um numero aleatório entre 0 e 1 não sendo incluído o numero 1

console.log(Math.pow(2, 10));
// Math.pow serve para potencialização (primeiro numero e o segundo numero é o quanto ele vai ser elevado)
// porém é muito mais fácil utilizar console.log(2 ** 10); que vai dar o mesmo resultado

let num7 = 9
console.log(num7 ** 0.5);

//CUIDADO CUIDADO CUIDADO CUIDADO CUIDADO CUIDADO
console.log(100 / 0);
// o JS é diferente de outras linguagens onde quando um numero dividido por 0, ele não vai dar erro 
// ele resultara em "infinity"
// além de ser considerado um valor "true"





