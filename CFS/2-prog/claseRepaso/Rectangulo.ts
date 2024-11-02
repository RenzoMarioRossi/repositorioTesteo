export class Rectangulo{
    private base:number;
    private altura:number;
    private nombre:string;
    public constructor(base:number, altura:number, nombre:string){
        this.base=base;
        this.altura=altura;
        this.nombre=nombre;
    }

    public getArea():number{
        return this.base*this.altura;
    }

    public getPerimetro():number{
        return 2*(this.base+this.altura)
    }

}