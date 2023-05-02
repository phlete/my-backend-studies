// console.log(paulo henrique);  vai dar erro pois todo valor literal que é texto, tera que colocar aspas simples ou duplas. pois, isso representa uma string. 

console.log(`paulo henrique`); // o codigo rodara normalmente pois a string (texto) esta envolto de crases.

console.log("paulo henrique"); // o codigo rodara normalmente pois a string (texto) esta envolto de aspas duplas.

console.log('paulo henrique'); // o codigo rodara normalmente pois a string (texto) esta envolto de aspas.


// Como colocar parentes dentro de uma string do console.log sem dar erro ?

console.log("paulo 'henrique'"); // caso eu queira colocar aspas simples. e se quiser o contrario so inverter a ordem.
console.log('paulo "henrique"'); // mesma coisa que de cima so que invertido.
console.log(`'paulo' "henrique"`); // a crase funciona de maneira diferente das aspas, devido que ela consegue suportar ambos sem dar erro de sintaxe.


// console.log tambem aceita numeros (number)

console.log(12); // aceita numeros inteiros.
console.log(12.85); // aceita numeros reais.
console.log(14, 12.58, "paulo henrique"); // nao ocorre quebra de linha e serao exibidos de forma corrida.