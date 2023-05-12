// aula sobre funções recursivas

function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

/*
    São funções que que se chamam dentro dela mesma e so precisa tomar cuidado com o máximo de laços que ela faz pois pode dar erro
*/