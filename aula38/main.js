// Aula sobre try, catch, throw e finally (um pouco mais avançado)

try {
    // é executada quando não ha erros
    console.log('abri um arquivo');
    console.log('manipulei o arquivo e gerou erro');
    console.log('fechei o arquivo');    
} catch (e) {
    // é executada quando ha erros
    console.log('tratando o erro');
} finally {
    //código sera executado sempre
    console.log('FINALLY: eu sempre sou executado');
}

console.log('############');

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando instancia de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch(e) {
    // tratar erro
} finally {
    console.log('tenha um bom dia');
}