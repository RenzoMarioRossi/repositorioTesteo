import { Personaje } from "./personaje";

export class Caballero extends Personaje{
    protected armadura:number;

constructor(nombre:string, nivel:number, puntosGolpe:number, puntosAtaque:number,armadura:number ){
    super(nombre, nivel, puntosGolpe, puntosAtaque);
    this.armadura = armadura;
}

setArmadura(armadura:number){
    this.armadura = armadura;
}
getArmadura(){
    return this.armadura;
}

atacar() {
    console.log(`${this.nombre} realiza un golpe de espada! de ${this.puntosAtaque} `);
}

defender(ataqueRecibido: number) {
    const danioReducido = ataqueRecibido - (this.armadura + this.nivel * 0.6);
    this.puntosGolpe -= Math.max(0, danioReducido);
    console.log(`${this.nombre} recibe un ataque. Su vida es de ${this.puntosGolpe}`);
}


subirNivel(){
    this.nivel += 1;
    this.puntosGolpe += 20;
    this.puntosAtaque += 30;
    console.log(`${this.nombre} ha subido de nivel!`)
    console.log(this.obtenerInformacion());
};
}