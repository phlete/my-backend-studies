// aula sobre objeto Map()

const pessoas = [
    { id: 3, nome: 'paulinho'},
    { id: 2, nome: 'criszinho'},
    { id: 1, nome: 'guhzinho'},
];

// const novasPessoas = {
//     for (let pessoa of pessoas) {
//         const { id } = pessoa;
//         novasPessoas[id] = { ...pessoa };
//     }
// }

const novasPessoas = new Map();
for ( const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map
// estudo mais profundo sobre Map