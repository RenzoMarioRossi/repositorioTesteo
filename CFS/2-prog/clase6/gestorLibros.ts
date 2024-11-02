import { Libro } from "./libro"

export class GestorLibro{
    private nombre:string
    private listaLibros:Libro[]

constructor(nombre:string){
    this.nombre=nombre
    this.listaLibros=[]
}


    //getters
    public getNombre(): string{
        return this.nombre
    }

    public getListaLibros(): Libro[]{
        const copiaLibros:Libro[]=this.listaLibros.map(lib=>({...lib}) as Libro)
        return copiaLibros
    }

    //setters
    public setNombre(nombre:string): void{
        this.nombre=nombre
    }

    public setListaLibros(listaLibros:Libro[]): void {
        this.listaLibros=listaLibros
    }

    public eliminarLibro(libroAEliminar:Libro):void{
        if(libroAEliminar != undefined&&this.listaLibros.includes(libroAEliminar)){
            const posLibro:number= this.listaLibros.indexOf(libroAEliminar);
            this.listaLibros.slice(posLibro, 1); //slice borra a partir del 1er parametro, la cantidad de posiciones indicadas en el segundo parametro. en este caso es una sola
        }
    }
    
    public agregarLibro(nombre:string, autor:string, anio:number): void{
        let nuevoLibro:Libro= new Libro(nombre, autor, anio); 
        if(!this.listaLibros.some(lib=> lib.getNombre()==nombre && lib.getAutor()==autor && lib.getAnio()==anio)){  // el "!" al inicio del if significa una negacion
            this.listaLibros.push(nuevoLibro)
        }
    }


}