// # Aula sobre if, else if e else (Part.2)

// apos uma condição ser verdadeira, todos os "else if" posteriores verdadeiros ou falsos
// serão descartados pois a engine do JS vai sair da checagem assim que achar uma condição verdadeira

const num = 4;

if (num >= 0 && num <= 5) {
    console.log('o numero esta entre 0 e 5!')
} else {
    console.log('o numero NÃO esta entre 0 e 5!')
}

console.log('o numero NÃO esta entre 0 e 5!')

/*
Algo que acontece quando voce utiliza o console.log fora da condição ele vai continuar aparecendo
mesmo que aquela condição deixe de ser verdade 
*/


