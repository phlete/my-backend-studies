// # Aula sobre operadores lógicos 

/*
operadores lógicos
&& -> AND -> E -> Todas expressões precisam ser verdadeiras pra retornar true
|| -> OR -> OU -> Caso uma das expressões forem true, ele retornara true (independente de quantos false tenha) (so da false se todas as expressões forem false)
! -> NOT -> Não -> ele inverte uma expressão (negação)
*/
const expressaoAnd = true && true && true && true;
console.log(expressaoAnd); 

const expressaOr = false || false || true || false;
console.log(expressaOr);

console.log(!true);






























