// Exercícios com variáveis

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

varA = varB // B
varB = varC // C
varC = varA // B

console.log(varA, varB, varC);
/* esse jeito não daria certo pois o valor do A se perderia e não conseguiríamos achar o valor dele nunca
uma maneira de evitar isso seria criar uma variável fixa para proteger o valor do "varA"
*/

/*
const varATemp= varA
varA = varB // B
varB = varC // C
varC = varATemp // A

adicionando uma constante fixa qualquer uma das variáveis que fossem perder seu valor 
agora terão eles mantidos sem ocorrer qualquer erro (essa maneira é mais antiga)
*/

/*
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]

essa maneira trara o mesmo resultado do que a de cima porem com uma maior facilidade e uma utilização mais atual no mercado
*/


