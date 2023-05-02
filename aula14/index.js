// #aprofundamento sobre numbers

let num1 = 1; // number
let num2 = 2.5; // number

    console.log(num1.toString() + num2); 
// .toString serve transformar um number em uma string temporariamente sem alterar valor primitivo permanentemente
// caso queira deixar permanentemente é somente fazer a mesma operação fora do console.log
// ex: "num1 = num1.toString();"
    console.log(typeof num1);

let num3 = 10.54542457; // number
let num4 = 20; // number
    console.log(num3.toFixed(2)); // .toFixed serve para arredondar o valor do number 
//dentro do .toFixed vc coloca quantas casas decimais vc deseja
    console.log(Number.isInteger(num4)); // Number.isInteger serve para verificar se o numero é inteiro ou não
// o resultado sera um valor primitivo booleano (true or false)

let temp = num4 * 'olá';
    console.log(Number.isNaN(temp)); // Number.isNaN serve para descobrir se o valor da variável é ou não é um numero
// true para caso não seja um numero
// false para caso seja um numero mesmo

// IEEE 754-2008
// o JS tem alguns erros quando falamos de números quebrados aonde ele pode dar uma micro diferença do valor esperado
let num5 = 0.7; // number
let num6 = 0.1; // number
    console.log(num5 + num6);// como evitar esse erro ? (era para dar 0.8)

num5 = ((num5 * 100) + (num6 * 100)) / 100;
    console.log(num5); // essa é a primeira maneira de se fazer porem com funções daria menos trabalho

num5 = Number(num5.toFixed(2));
console.log(num5.toFixed(2)); //.toFixed usado aqui caso queira aparecer mais casas decimais no output (Saida)
console.log(Number.isInteger(num5));







