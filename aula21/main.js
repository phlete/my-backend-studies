// # Aula sobre operadores de comparação

/*
Operadores De Comparação
> maior 
>= maior ou igual
< menor 
<= menor ou igual
== igualdade (valor) -> não recomendada utilização
=== igualdade estrita (valor e tipo)
!= diferente (valor) -> não recomendada utilização
!== diferente estrito (valor e tipo)
*/

const num1 = 10;
const num2 = 10;
const comp = num1 == num2;
console.log(comp);

// o perigo de utilizar o operador de igualdade sem ser a estrita
// é que se fosse uma string ali ela continuaria sendo "true"

const num10 = 10; // number
const num20 = '10'; // string
const comp10 = num10 == num20;
console.log(comp10);

// com igualdade estrita esse tipo de erro não acontece
// fazendo uma correção de tipo automático
const num100 = 10;
const num200 = '10';
const comp100 = num100 === num200;
console.log(comp100);

console.log("###############")

// com o operador de comparação diferente e diferente estrito
// acontece a mesma coisa que com a igualdade

const number1 = 10;
const number2 = "100";
const comparacao = number1 !== number2;
console.log(comparacao);































