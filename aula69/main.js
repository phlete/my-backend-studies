// aula sobre herança com classes
// sempre tomar cuidado em criar uma hierarquia muito grande
// dificulta na correção de erros e torna frágil sua aplicação
// VOCE HERDA TUDO DOS SEUS PAIS POREM ELES N HERDAM NADA DE VC


class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    } 
    
    ligar() {
        if(this.ligado) {
            console.log(this.noe + ' já ligado');
            return;
        }
        
        this.ligado = true;
    }


    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
    }
}

const d1 =  new DispositivoEletronico('Smartphone');
d1.ligar();
d1.desligar();
console.log(d1);

// da pra fazer de outra forma 

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome); //classe pai! pra evitar rescrever a classe por inteiro
        this.cor = cor;
    }
}

const s1 = new Smartphone('Iphone', 'Preto');
console.log(s1);