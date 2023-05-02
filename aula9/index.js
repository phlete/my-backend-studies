// # Operadores aritmeticos, de atribuicao e incremento

/* Operadores Aritmeticos: 

# + Adição / Concatenação (união de 2 valores)
# - 
# / 
# *
# ** Potenciação (ex: 2 elevado a 10 ( console.log(num1 ** num2) ))
# % Resto da divisao (seria o restante de uma divisao mas se o restante da divisao for "0" ele sera sempre "0") 
*/

/* # A precedencia dos operadores aritmeticos (qual sera executado primeiro) é:
# ()
# **
# * / %
# + -
*/

// operações de incremento usamos o "++" caso queira somar +1 tuda ver que der um output daquela função
// ex: 
        let contador = 1;
            contador++;
            console.log(contador);

// não podemos utilizar esse tipo de operador (++ ou --) numa const pois ela não consegue ser mutavel
// ele (++ ou --) pode ser usado pré-fixado ou pos-fixado
// ex pré fixado:
        let contador1 = 1;
            ++contador1;
            console.log(contador1);
// a diferença entre os dois é que um sera executado antes da variavel e o outro sera depois 
        let teste1 = 3;
            console.log(teste1++);
            console.log(teste1);
/* o que acontece aqui é que o incremento não foi adicionado no output do primeiro console.log pois a ação terminou no output 
da variavel "test1". Enquanto no segundo console.log o incremento que foi realizado no primeiro vai ser adicionado na soma e saira "4" */

// porem caso seja feito a incrementação do ++ ou -- anterior ao valor no console.log ele vai ser executado junto com a variavel, 
//sem necessidade de um segundo console.log para aparecer o novo resultado
        let teste2 = 5;
            console.log(--teste2);
    
// caso a gente queira um atalho para incrementação acima de apenas +1 ou -1 no valor da variavel vamos usar os operadores de atribuição
//ex:
    let contador3 = 0;
    contador3 += 2; 
    contador3 += 2;
    contador3 += 2;
    console.log(contador3);

/* que seriam os:
# +=
# -=
# *=
# **=
# /=
*/

// NaN - not a number
// ex:
    const num1 = 10;
    const num2 = 'Paulo';
        console.log(num1 * num2);

// para evitar a concatenação, temos 3 possibilidades (caso a string seja um numero e não tenha letras)
// parseInt = vai converter numeros quebrados ou inteiros dentro de uma STRING para numeros inteiros porem convertendo pra NUMBER
// ex:
    const vibe1 = 10;
    const vibe2 = parseInt('5');
        console.log(vibe1 + vibe2);
        console.log(typeof vibe2);

// parseFloat = vai converter numeros quebrados de string em numbers porem sem arredondamento igual no parseInt
// ex:
    const flor1 = 12;
    const flor2 = parseFloat('8.5');
        console.log(flor1 + flor2);
        console.log(typeof flor2);

// number = ele converte numeros inteiros e quebrados de uma string para number
// ex:
    const rosa1 = 14;
    const rosa2 = Number('6.89');
        console.log(rosa1 + rosa2);
        console.log(typeof rosa2);















