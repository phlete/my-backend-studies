// # aula sobre Mais sobre strings

let umaString = "Um \"Texto\"";
    console.log(umaString);
// caso tenha necessidade de utilizar aspas duplas fora e dentro da string,
// utilizar "\ \" vai parar com a ocorrência de erros. 
//Caso queira utilizar para "apagar" uma palavra da string, utilizar apenas uma barra (\)
//Caso queira utilizar para aparecer uma barra na string, utilizar duas barras antes da palavra que deseja (\\)

//                01234567
let umaString1 = "Um Texto";
    console.log(umaString1[4]);
    console.log(umaString1[8]);
// caso pegue um numero fora do range de letras da string, ele vai dar undefined (positivo ou negativo)

//                01234567
let umaString2 = "Um Texto";
    console.log(umaString2.charAt(6));
// .charAt serve para voce procurar um elemento dentro da string
// caso o numero estiver fora do range da string, ele nao vai dar erro porem nao aparecera nada (valor vazio)

//                01234567
let umaString3 = "Um Texto";
    console.log(umaString3.concat(' em um lindo dia.'));
    console.log(umaString3 + ' em um lindo dia.');
    console.log(`${umaString3} em um lindo dia.`);
// .concat serve para concatenação de uma string (adicionar um novo valor)
// ele pode ser feito de outras maneiras mais simples que sao mais fáceis para o programador
// a ultima forma e mais atual e mais clean de se utilizar

//                01234567
let umaString4 = "Um Texto";
    console.log(umaString4.indexOf('Texto'));
    console.log(umaString4.indexOf('texto')); // quando nao existe o valor no range ele retornara -1
    console.log(umaString4.indexOf('o', 3));
// .indexOf serve para descobrir qual o índice de algum elemento da string
// caso vc queira achar um índice a partir de um ponto de partida diferente e so colocar o índice que vc quer e de onde começar 

//                01234567
let umaString5 = "Um Texto";
    console.log(umaString5.lastIndexOf('Texto'));
// lastIndexOf começa de trás pra frente e tem o mesmo proposito do indexOf  


// # expressões regulares
//                01234567
let umaString6 = "Um Texto";
    console.log(umaString6.match(/[a-z]/g));

//                01234567
let umaString7 = "Um Texto normal";
    console.log(umaString7.search(/[a-z]/)); 
// parecido com o indexOf porem aceita expressões regulares

//                01234567
let umaString8 = "Um Texto";
    console.log(umaString8.replace('Um', 'Outro')); 
    console.log(umaString8.replace(/Um/, 'Outro')); 
// .replace serve para substituir algum índice da string 
// caso queira utilizar expressões regulares, somente utilizar o segundo método

let umaString9 = "O rato roeu a roupa do rei de roma.";
    console.log(umaString9.replace(/r/, '#')); 
    console.log(umaString9.replace(/r/g, '#')); 
// caso queira que seja trocado em todos os elementos em comum, deve utilizar a flag "g"

let umaString10 = "O rato roeu a roupa do rei de roma.";
    console.log(umaString10.length); 
// .length caso queira saber o tamanho da sua string

let umaString11 = "O rato roeu a roupa do rei de roma.";
    console.log(umaString11.slice(3, 6)); 
    console.log(umaString11.slice(-3)); // pensar que esta pegando o tamanho real da string menos "x" que vc deseja 
    console.log(umaString11.slice(-5, -1)); // serve também pra mais que um (seria igual por .length - 1)
// .slice serve para cortar o pedaço da string que voce deseja 
// opera também valores negativos (a string sera contada de trás pea frente)

let umaString12 = "O rato roeu a roupa do rei de roma.";
    console.log(umaString12.split(' '))
// .split serve para separação dos elementos da string em um índice de um array

let umaString13 = "O rato roeu a roupa do rei de roma.";
    console.log(umaString13.toUpperCase()) // seria uma função o .toUpperCase 
// .toUpperCase serve para deixar toda sua string maiúscula



let umaString14 = "O rato roeu a roupa do rei de roma.";
    console.log(umaString14.toLowerCase()) // seria uma função o .toLowerCase
// .toLowerCase serve para deixar toda sua string minuscula
