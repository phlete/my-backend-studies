// # Aula sobre objeto date

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date ( mais sobre "Date()" )
// ela é uma função construtora
// uma função construtora sempre começara com "new" e a primeira letra maiúscula 
// tem que ter pelo menos 2 parâmetros, caso não tenha ele vai considerar o parâmetro como milésimos de segundo

// const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix
//                    year month day hour min sec
const data = new Date(2023,  3,  15, 20,  33, 55) // todo valor omitido terá "00"como default
const data1 = new Date('2023-03-15 20:51:45'); // jeito mais comum de se ver um Date (formato de string)
console.log('dia', data1.getDate());
console.log('mes', data1.getMonth() + 1); // (mes começa do zero) sempre que quiser o mes atual precisa adicionar o "+1"
console.log('ano', data1.getFullYear());
console.log('hora', data1.getHours());
console.log('min', data1.getMinutes());
console.log('sec', data1.getSeconds());
console.log('ms', data1.getMilliseconds());
console.log('dia semana', data1.getDay()); // 0 -> Domingo / 6 -> sábado
console.log(data1.toString());
console.log(Date.now()); // milésimos de segundo corridos do marco zero até agora