// aula sobre revisão de Arrays

//                 0         1        2
const nomes = ['eduardo', 'maria', 'joana'];
// const nomes = new Array('eduardo', 'maria', 'joana'); funciona normalmente igual acima 
nomes[2] ='joao';
delete nomes[2];
console.log(nomes);

console.log('###################')

const nomes1 = ['paulinho', 'duda', 'robson'];
//const novo = nomes1; foi passado por referencia então o que mudar em novo vai mudar em nomes1 e vice versa

//para evitar isso, podemos utilizar spread operator (...)
const novo = [...nomes1];
const removido = nomes1.shift(); //remove o primeiro índice
console.log(nomes1, removido);

console.log('######################')

novo.pop(); //remove o ultimo
console.log(nomes1);
console.log(nomes1.length)

console.log('##################')

//                 0          1         2
const names = ['RODOLFO', 'CLEITIN', 'PIRAMA'];
names.push('joão'); // no final do array ele adiciona
names.unshift('pedrin') // adiciona no começo
console.log(names);
