// Aula sobre try e catch (tratando e lançando erros)

// try {
//     console.log(naoExisto);
// }catch(err) {
//     console.log('naoExisto não existe.');
//     console.log(err); //evitar mostrar erros para o seu usuário pois pode vazar fragilidades na aplicação
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser numeros');
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    // console.log(error);
    console.log('alguma coisa mais amigável');
}

