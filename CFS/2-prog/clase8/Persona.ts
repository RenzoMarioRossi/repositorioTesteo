export class Persona{
    protected nombre:string
    protected dni:number
    constructor(pNombre:string , pDni:number) {
        this.nombre=pNombre;
        this.setDni(pDni);
    }

    public setDni(dni:number):void{
        if (dni>0)
            this.dni=dni
    }

    public getNombre():string{
        return
    }


}