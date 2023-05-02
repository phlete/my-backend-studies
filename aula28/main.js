// # Aula sobre a estrutura condicional "Switch/Case"

const data = new Date('1987-04-26 00:00:00');
let diaSemana = data.getDay();
diaSemana = 2;
let diaSemanaTexto;

switch (diaSemana) {
case 0:
    diaSemanaTexto = 'domingo';
    break;
case 1:
    diaSemanaTexto = 'segunda-feira';
    break;    
case 2:
    diaSemanaTexto = 'terça-feira';
    break;    
case 3:
    diaSemanaTexto = 'quarta-feira';
    break;    
case 4:
    diaSemanaTexto = 'quinta-feira';
    break;    
case 5:
    diaSemanaTexto = 'sexta-feira';
    break;    
case 6:
    diaSemanaTexto = 'sábado';
    break;
default:
    diaSemanaTexto = '';
}

// ao invés de break, pode se utilizar "return" também
console.log(diaSemana, diaSemanaTexto);




