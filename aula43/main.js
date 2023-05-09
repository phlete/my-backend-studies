// aula sobre escopo léxico

const nome = 'paulinho';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
    //nada que eu declarar aqui vai mexer no contexto léxico da falaNome
}
usaFalaNome();

/*
a função falaNome ainda continua lembrando aonde foi declarada, então não importa se eu tentar trocar o valor da const 'nome' para 'Otávio'. pois quando ela foi declarada ela chamava 'Paulinho'
*/
