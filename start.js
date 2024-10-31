class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque;
            
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default: 
                ataque = "desconhecido";   
        } 
            
            console.log(`O ${this.tipo} atacou usando ${ataque}.`)   
    } 
}

const heroiMago = new Heroi("Eduardo", 28, "Ninja" )

const heroiMonge = new Heroi("Rafael", 25, "Monge")

heroiMago.atacar()
heroiMonge.atacar()

