// # Aula sobre arrays 

// ele aceita mais que um tipo de dado de uma vez

//            012345678910
const nome = 'Luiz Otávio' // as strings sao indexadas dessa forma

// os arrays sao indexados de uma forma diferente
//                 0       1        2
const alunos = ['Luiz', 'Maria', 'João']; // para um código mais limpo, tentar sempre deixar apenas um tipo de dado por array
    console.log(alunos);
    alunos[0] = 'Eduardo'; // voce pode alterar algum elemento no array
    alunos[3] = 'Luíza'; // voce pode adicionar um elemento no array 
    console.log(alunos);
    console.log(alunos.length); // caso queira saber o tamanho do array
alunos.push('Rodolfo'); //.push é para caso queira adicionar um elemento ao final do array
alunos.unshift('Roberto'); //.unshift é para caso queira adicionar um elemento ao inicio do array
    console.log(alunos);
alunos.pop(); // .pop serve para remover o ultimo do array
alunos.shift(); // .shift serve para remover do começo do array
delete alunos[1];  // caso queira remover um elemento mas nao o seu índice 
    console.log(alunos[1]); 
    console.log(alunos instanceof Array); // caso queira saber se a variável e um array ou nao 

