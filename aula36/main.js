// Aula sobre Break and Continue 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('pulei o numero 2')
        continue; // quando ele bater nessa condição ele vai pular para a proxima interação do laço
    }
    
    console.log(numero);
    
    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break; // break serve para parar o código no momento que ele achar a condição proposta saindo do laço
    }
}
