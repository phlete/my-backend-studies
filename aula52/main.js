// aula sobre método slice (em array)
//               -5      -4        -3         -2        -1
//                0       1         2          3         4 
const nomes = ['maria', 'joao', 'eduardo', 'gabriel', 'julia'];


// nomes.splice(indice, delete, elementos para adicionar)
// pop
//começa no quarto elemento e removeu apenas um elemento
const removidos = nomes.splice(4, 1); // ele retorna um array e não o elemento
const removidos1 = nomes.splice(2, Number.MAX_VALUE); // vai retirar o ultimo elemento do array (mais pratico para grandes arrays)
console.log(nomes, removidos, removidos1);
