// # Aula avaliação de curto-circuito (short-circuit)

/*
&& -> false && true -> false "O valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
*false (literal)
0
'' "" ``
null / undefined
NaN
*/

console.log('paulo henrique' && 0 && 'eduarda');
console.log('###########')
console.log('pablo escobar' && true && 'maria' && 25);
// ele sempre vair parar e retornar o valor falso quando algo não for true 
// caso tudo seja true ele retornara o ultimo valor da expressão
// tirando todos os FALSY, literalmente todos os valores no JS são considerados verdadeiros

console.log(0 || null || 'panamericano' || false || true);

const corUsuario = null; 
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // é uma string e não um FALSY
const d = false;
const e = NaN;

console.log(a || b || c || d || e);




















