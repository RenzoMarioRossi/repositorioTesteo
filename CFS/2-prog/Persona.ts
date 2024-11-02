class Persona{
    //propiedades
    private altura: number;
    private  peso: number;
    private nombre: string;
    private sexo: string;
    private dni: number;
    //es mayor

    //constructor
constructor(nombre:string, dni:number){
    this.nombre=nombre;
    this.dni=dni;
}

    //metodos

    public getAltura(): number{
        return this.altura;
    }
    public getPeso(): number{
        return this.peso;
    }
    public getNombre(): string{
        return this.nombre;
    }

    //set metodo
    public setNombre(parNombre:string):void{
        this.nombre=parNombre;
    }


    public caminar(): string{
        return "caminando";
    }
    public hablar(): string{
        return "bla bla bla";
    }
    public dormir(): string{
        return "zzzzzz"
    }
}

const persona1= new Persona("juan", 37032252);

console.log(persona1.getNombre())