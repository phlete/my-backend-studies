// aula sobre revisão de objetos
// funciona com chave-valor (ex: nome = chave & 'Paulinho' = valor)
// Object.freeze() = vc vai travar uma chave para que não possa ser alterada
// delete = vai eliminar uma chave do objeto

//objeto literal
const pessoa = {
    nome: 'Paulinho',
    sobrenome: 'Henrique'
};
console.log(pessoa['nome']); // pode utilizar anotação de colchete. deve ficar entre parenteses a chave
console.log(pessoa.sobrenome);

// objeto construtor
const person = new Object();
person.nome = 'pedrinho';
person.sobrenome = 'eduardo'

console.log(person);
console.log(person.sobrenome);
console.log(person.nome);

// factory functions / constructor functions / classes (POO)
