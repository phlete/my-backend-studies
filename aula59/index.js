// aula sobre Object.defineProperty() e Object.defineProperties()

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // se pode ser alterado ou não o valor
        configurable: true // configurável (se pode configurar a propriedade ou deletar)
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome, 
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco, 
            writable: true,
            configurable: true
        },
    })
}


const p1 = new Produto('camiseta', 20, 3);
console.log(Object.keys(p1)); // mostra as chaves do objeto