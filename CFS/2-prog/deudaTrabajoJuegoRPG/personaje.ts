
export abstract class Personaje {

    protected nombre:string;
    protected nivel:number;
    protected puntosGolpe:number;
    protected puntosAtaque:number;

    constructor(nombre:string, nivel:number, puntosGolpe:number, puntosAtaque:number){
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosGolpe = puntosGolpe;
        this.puntosAtaque = puntosAtaque;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }
    setNivel(nivel:number){
        this.nivel = nivel;
    }
    setPuntosGolpe(puntosGolpe:number){
        this.puntosGolpe = puntosGolpe;
    }
    setPuntosAtaque(puntosAtaque:number){
        this.puntosAtaque = puntosAtaque;
    }

    getNombre(){
        return this.nombre;
    }
    getNivel(){
        return this.nivel;
    }
    getPuntosGolpe(){
        return this.puntosGolpe;
    }
    getPuntosAtaque(){
        return this.puntosAtaque;
    }

    abstract atacar(): void;
    abstract defender(ataqueRecibido: number): void;
    abstract subirNivel(): void;


    obtenerInformacion():string{
        return `${this.nombre} - Nivel: ${this.nivel}, Puntos de Golpe: ${this.puntosGolpe}`;
    }

}