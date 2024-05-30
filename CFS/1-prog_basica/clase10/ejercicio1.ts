import * as rls from "readline-sync";

/*
sacar promedio de edades
las edades van de 3 a 7 años
hay que cargar las edades al azar
como salida ahy que mostrar todas las edades (en un arreglo) y el promedio
*/

let dimArreglo : number = rls.questionInt("ingrese cantidad de jugadores: ");
let edadesNinios : number[] = new Array(dimArreglo);

function cargarJugadores(edadesNinios : number[], dimArreglo : number) {
    for (let i = 0; i < edadesNinios.length; i++) {
        edadesNinios[i] = Aleatorio(3, 7);
        
    } 
}

function Aleatorio(menorValor: number, mayorValor: number): number {
    let numeroVuelta : number = 0;
    numeroVuelta = Math.floor(Math.random() * (mayorValor - menorValor+1) +menorValor) ;
    return numeroVuelta
}

/*
 nuevoArreglo[i] = valorMin + (Math.floor(Math.random() * (valorMax - valorMin)));
 */

 function mostrarJugadores(edadesNinios : number[], dimArreglo : number) {
    let jugadores : string="";
    for (let i = 0; i < edadesNinios.length; i++) {
        jugadores+= (edadesNinios[i]+ " - ");
    } 
    console.log("los jugadores son: ", jugadores);
}

function promedio(edadesNinios: number[], dimArreglo:number): number {
    let suma: number = 0;
    let i : number = 0;
    let prom : number = 0;
    for (i; i<dimArreglo; i++){
        suma = suma + edadesNinios[i];
    }
    prom = suma / dimArreglo;
    return prom
}

cargarJugadores(edadesNinios, dimArreglo);
mostrarJugadores(edadesNinios, dimArreglo);
console.log("el promedio de edades es de: ", promedio(edadesNinios, dimArreglo));
