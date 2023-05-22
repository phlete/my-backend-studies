// aula sobre métodos úteis para objetos
/*
object.values (caso queria VER so os valores das chaves)
object.entries (caso queira retornar os objetos em forma de array)
object.assign (destiny, any)
object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// ja vimos
object.keys ( retorna as chaves)
object.freeze (congela o objeto)
object.defineProperties (define varias propriedades)
object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'produto', preco: 1.50 };
const caneca = Object.assign({}, produto, { material: 'vidro' }); 
//vai criar um objeto vazio como destino e vai utilizar o produto como referencia das chaves

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

caneca.nome = 'trocando chave';
caneca.preco = 2.50;
console.log(produto);
console.log(caneca);
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
