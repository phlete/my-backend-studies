// aula sobre setInterval e setTimeout

function mostraHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}

function funcaDoInterval() {
    console.log(mostraHora());
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000); //vai configurar um intervalo de tempo para uma função seja executada em determinado momento

setTimeout(function() {
    clearTimeout(timer);
}, 3000)