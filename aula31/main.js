// // # Aula sobre atribuição via desestruturação (Objetos)

const pessoa = {
    nome: 'paulo',
    sobrenome: 'henrique',
    idade: 22,
    endereco: {
        rua: 'avenida roraima',
        numero: 151
    }
};

// atribuição via desestruturação
const { nome = '', sobrenome: trocado, endereco: { rua, numero }, endereco } = pessoa; // estou pedindo pra extrair essa chave ('nome') do objeto dela ('pessoa')
console.log(nome); // cria uma variável também (nome)
// voce pode colocar valores vazio ou default caso a chave não exista
// voce pode mudar também o valor de uma variável dentro das chaves (escrevendo o nome dela e apos o ':' voce poem o novo nome)
console.log(nome, trocado);
console.log(rua, numero, endereco); //consigo extrair os objetos que eu quero e tbm exibir o objeto completo caso precise
