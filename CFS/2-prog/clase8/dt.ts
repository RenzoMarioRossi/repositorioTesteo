import { Persona } from "./Persona";
import { Jugador } from "./jugador";
export class Dt extends Persona{
    private arrJugadores:[];

    constructor(nombre:string, dni:number, arrJug:Jugador[]) {
        super(nombre, dni)
        this.arrJugadores=arrJug;
    }

    public cambiarCapitan(jugador:Jugador){
        for (let i = 0; i<this.arrJugadores.length;i++){ 
            this.arrJugadores[i].setEsCapitan(false);
        }
        jugador.setEsCapitan(true);
    }


}

