// For - clássico - Estrutura de repetição
// dividido em 3 partes (variável de controle (normalmente chamada de "i"), condição e incrementação)
// i = index
// caso queira aumentar mais do que 1 em 1 é so utilizar "+=" e o numero que vc quer que ele vá pulando
// pode utilizar números negativos também
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

console.log("################");

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar'; // operação ternaria
    console.log(i, par);
}

console.log('################');

// podemos tbm utilizar de arrays 
const frutas = ['maça', 'pera', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(i);
}

console.log('#######################');
// exercicios sobre for

