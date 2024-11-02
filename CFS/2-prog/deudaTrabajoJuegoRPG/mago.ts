import { Personaje } from "./personaje";

export class Mago extends Personaje{
    protected baculo: number;

    constructor(nombre:string, nivel:number, puntosGolpe:number, puntosAtaque:number, baculo: number){
        super(nombre, nivel, puntosGolpe, puntosAtaque);
        this.baculo = baculo;
    }
    
    setBaculo(baculo: number){
        this.baculo = baculo;
    }
    getBaculo(){
        return this.baculo;
    }

    atacar() {
        this.puntosAtaque += this.baculo;
        console.log(`${this.nombre} lanza una bola de fuego de ${this.puntosAtaque}!`);
        this.puntosAtaque -= this.baculo;

    }
    
    defender(ataqueRecibido: number) {
        const danioReducido = ataqueRecibido - (this.nivel * 0.2);
        this.puntosGolpe -= Math.max(0, danioReducido);
        console.log(`${this.nombre} recibe un ataque. Su vida es de ${this.puntosGolpe}`);
    }
    
    
    subirNivel(){
        this.nivel += 1;
        this.puntosGolpe += 10;
        this.puntosAtaque += 40;
        console.log(`${this.nombre} ha subido de nivel!`)
        console.log(this.obtenerInformacion());
    };
    }