// aula sobre filter - filtrando um array
// filter, map, reduce - as funções mais IMPORTANTES em arrays para JS 

// filter = vai filtrar o array -> sempre vai retornar um array, com a mesma quantidade de elementos ou menos.

// map = vai modificar o array 

// reduce = vai reduzir o array em um único valor


// retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a 
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 23 },
    { nome: 'eduardo', idade: 55 },
    { nome: 'leticia', idade: 19 },
    { nome: 'rosana', idade: 32 },
    { nome: 'wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
const pessoasVelhas = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasComNomeGrande);
console.log(pessoasVelhas);
console.log(nomeTerminaComA);