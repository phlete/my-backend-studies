// for of - Estrutura de repetição

const nome = 'Luiz Otávio';

//O loop for...of itera sobre cada elemento da matriz e armazena o valor atual dentro de 'valor'
for (let valor of nome) {
    console.log(valor); // for...of nos dá diretamente o valor de cada elemento
}

// for clássico - Geralmente com iteráveis (array ou strings)
// for in - Retorna o índice ou chave (string, array ou objetos)
// for of - Retorna o valor em si(iteráveis, arrays ou strings)
