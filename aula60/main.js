// aula sobre Getter e Setters
// defineProperty -> Getter e Setters

// constructor function
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Bad Value');
                return;
            }

            estoquePrivado = valor;
        }  
    });
}

const p1 = new Produto('camiseta', 20, 3);
console.log(p1.estoque);

// factory function
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace("coisa"),
            nome = valor
        }
    }
}