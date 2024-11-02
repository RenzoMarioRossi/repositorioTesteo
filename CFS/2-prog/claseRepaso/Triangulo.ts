export class Triangulo{
    private nombre:string;
    private base:number;
    private altura:number;
    public constructor(base:number, altura:number, nombre:string) {
        this.base=base;
        this.altura=altura;
        this.nombre=nombre;
    }
    public getArea():number{
        return(this.base*this.altura)/2
    }



}