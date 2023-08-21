// aula sobre métodos de instancia e estáticos (OOP)
// Métodos estáticos não tem acesso aos dados da classe

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2
    }

    // método de instancia
    aumentarVolume() {
        this.volume -= 2
    }

    //método estático
    static trocaPilha() {
        console.log('ok, vou trocar.')
    }

}

// instancia nesse caso é o new e criar os dados para esse novo objeto
const controle1 = new ControleRemoto('LG')