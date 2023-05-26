let nome = 'Paulo Henrique'; // string
    console.log(nome,' nasceu em 2001.');
    console.log('em 2021', nome, 'conheceu Maria');
    console.log(nome, 'começou a namorar com ela em 2022');
    console.log('maria eduarda esta fazendo um ano 1 ano de namoro com', nome, 'em 2023.');
    console.log('o futuro filho de', nome, 'sera robson');

/* a utilização de uma variavel facilita muito a sintaxe do codigo e 
possibilita alterações com apenas a modificão dos parametros ou objetos dentro da função
*/

// nao podemos criar variaveis com palavras reservadas
// variaveis precisam ter nomes significativos

let nomeCliente = 'joão';
    console.log(nomeCliente);

// nao pode comecar o nome de uma variavel com um numero
// ex: let 1nomeCliente = "pedrinho" (dara erro de sintaxe e causara problemas em todo codigo)

// nao pode conter espacos ou traco 
// ex: let nome-Cliente = "paulo henrique de lima" ou let nome Cliente = "lorem"
// em ambos os casos o codigo dara erro devido a sintaxe do nome das variaveis

// para evitarmos esse tipo de erro utilizamos o camelCase

let nomeCompletoDoCliente = "paulo henrique de lima lopes figueiredo";
    console.log(nomeCompletoDoCliente);

// o javaScript é case-sensitive. o que significa que letras maiusculas e minusculas alteram o nome do codigo
// um exemplo disso e como essas duas variaveis se comportam diferente de uma pra outra com apenas uma letra maiuscula

let nomeAbreviado = "paulo hllf";
let nomeabreviado = "paulo henrique llf";
    console.log(nomeAbreviado, nomeabreviado);

// nao podemos redeclarar variaveis com let

let nomeCompleto = "maria eduarda";
nomeCompleto = "duda nenem";
console.log(nomeCompleto);

// NAO UTILIZE VAR, UTILIZE LET.