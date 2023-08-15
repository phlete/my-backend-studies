// aula sobre getters e setters em (OOP)
const _velocidade = Symbol('velocidade'); +
// um Symbol (propriedade privada) nunca é igual ao outro, n importa quantas vezes forem chamada a função

class Carro {
    constructor(nome, velocidade) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    
    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return; 
        this[_velocidade]++;
    }
    
    freiar() {
        if(this[_velocidade] <= 100) return; 
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar()
}

console.log(c1);