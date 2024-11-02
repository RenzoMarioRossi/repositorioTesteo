interface Auto {
    acelerar() : void
    getVelocidadActual() : number;
}


class AutoDeCarrera implements Auto {
    private velocidadActual: number;

    constructor (){
        this.velocidadActual = 0;
    }

    public acelerar(): void {
        this.velocidadActual=this.velocidadActual+50;
    }

    public getVelocidadActual(): number {
        return this.velocidadActual;
    }
}


class AutoFamiliar implements Auto {
    private velocidadActual:number=0

    public acelerar(): void {
        this.velocidadActual=this.velocidadActual+20;

        public getVelocidadActual(): number {
            return this.velocidadActual;
        }
        
    }
}