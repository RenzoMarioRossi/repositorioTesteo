import { Figura } from "./Figura";

export class Circulo extends Figura{
    private radio:number;
    constructor(radio:number, nombre:string){
        super(nombre)
        this.radio=radio;
        this.nombre=nombre
    }
    public getArea(){
        return Math.PI*this.radio*this.radio;
    }
    public getPerimetro(){
        return 2*Math.PI*this.radio
    }
    public getRadio():number{
        return this.radio;
    }
    public setRadio(radio:number):void{
        this.radio=radio
    }
    public setNombre(nombre:string){
        this.nombre=nombre;
    }
    public getNombre():string{
        return this.nombre
    }
}