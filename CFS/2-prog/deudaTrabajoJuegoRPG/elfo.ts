import { Personaje } from "./personaje";

export class Elfo extends Personaje{
    protected arco:number;

    constructor(nombre:string, nivel:number, puntosGolpe:number, puntosAtaque:number, arco:number){
        super(nombre, nivel, puntosGolpe, puntosAtaque);
        this.arco = arco;
    }

    setArco(arco:number){
        this.arco = arco;
    }
    getArco(){
        return this.arco;
    }
    
    atacar() {
        this.puntosAtaque += this.arco;
        console.log(`${this.nombre} realiza un golpe de arco de ${this.puntosAtaque}!`);
        this.puntosAtaque -= this.arco;
    }
    
    defender(ataqueRecibido:number){
        this.puntosGolpe -= (ataqueRecibido - (this.nivel * (0.3))); 
        console.log(`${this.nombre} recibe un ataque. Su vida es de ${this.puntosGolpe}`);
    };
    
    subirNivel(){
        this.nivel += 1;
        this.puntosGolpe += 25;
        this.puntosAtaque += 25;
        console.log(`${this.nombre} ha subido de nivel!`)
        console.log(this.obtenerInformacion());
    };
    }