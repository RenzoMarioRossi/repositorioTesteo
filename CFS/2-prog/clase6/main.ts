import { Libro } from "./libro";
import { GestorLibro } from "./gestorLibros";


let MartinFierro:Libro=new Libro("Martin Fierro", "Jose Hernandez", 1970)

let gestorLibro1:GestorLibro=new GestorLibro("Gestoria Olavarria")


gestorLibro1.agregarLibro("Martin Fierro", "Jose Hernandez", 1970)