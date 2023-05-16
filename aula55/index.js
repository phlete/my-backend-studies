// aula sobre map -> mapeando o array
// map SEMPRE vai ter o tamanho do array original
// tomar CUIDADO pois pode estar alterando o objeto original (por referencia)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobros = numeros.map(valor => valor * 2);
console.log(numerosDobros);


// para cada elemento:
// retorne apenas uma string com o nome da pessoa 
// remova apenas a chave 'nome' do objeto
// adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 23 },
    { nome: 'eduardo', idade: 55 },
    { nome: 'leticia', idade: 19 },
    { nome: 'rosana', idade: 32 },
    { nome: 'wallace', idade: 47 },
];
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);


