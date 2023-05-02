// "alert" não aparece no node então sera necessário a utilização do navegador
// todo "alert" retornara undefined no console
alert('com a nossa mensagem.');

// "confirm" não aparece no node também e ele serve para mostrar algo que o usuário alguma ação que necessite confirmar na tela 
// todo "confirm" retorna um valor booleano false ou true 
confirm('deseja realmente apagar seu rato ?');

// "prompt" não aparece no node também e ele serve para fazer o usuário escrever algo na caixa pop que aparecera na tela
prompt('escreva seu nome completo por favor.');

    let num1 = prompt('digite um numero');
    let num2 = prompt('digite outro numero');
    num1 = Number(num1)
    num2 = Number(num2)
        const resultadoFinal = num1 + num2;
    alert(`o resultado dessa soma foi de ${resultadoFinal}`);

