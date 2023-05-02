// # Aula sobre diferenças entre var e let/const

const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// var só tem escopo de função

let nome = 'Paulo'; // criando
var nome2 = 'Paulo';

if (verdadeira) {
    let nome = 'Henrique'; // criando
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'outra coisa';
        console.log(nome, nome2);
    }
}

// voce pode acessar as variáveis e funções vizinhas (closures) fora do seu escopo para dentro dele, porem
// as declarações feitas dentro do escopo da função não pode ser acessado fora dela.
let noelzinho = 'Paulinho';
function falaNome () {
    console.log(noelzinho);
} 
falaNome();








