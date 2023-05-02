// # Aula sobre if, else if e else (Part.1)

// "if" pode ser usado sozinho 
// sempre que utilizo a palavra "else", precisa de um "if" antes
// eu posso ter quantos "else ifs" eu quiser na checagem
// so pode ter um "else" na checagem
// podemos usar condições sem "else if", utilizando apenas "if" e "else"

const hora = 13;

if (hora >= 0 && hora <= 11) {
    console.log('bom dia mano!');
} else if (hora >= 12 && hora <= 17 ) {
    console.log('boa tarde mano!');
} else if (hora >= 18 && hora <= 23 ) {
    console.log('boa noite mano!');
} else {
    console.log('ola rato!')
}






