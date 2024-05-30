import *as rls from 'readline-sync';
/*

let palabra : string = rls.question("ingrese la palabra a invertir: ");
let cantidadDeLetras : number = palabra.length;
let arregloLetras : string[] = palabra.split("");

function invertirVector(v : string[],  cantidad : number) {
    let indiceIzq : number = 0;
    let indiceDer : number = cantidad-1
    let aux : string;

    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}
console.log(invertirVector(arregloLetras, cantidadDeLetras));

/*invertirVector(arregloLetras, cantidadDeLetras);
console.log("Mostrando vector");
mostrarVector(arregloLetras, cantidadDeLetras);

function mostrarVectorInvertido(v: string[], cantidad : number) {
    for 
}*/

function cargaVector(v: number[], cantidad: number) {
    let indice : number;
    for (indice=0; indice < cantidad; indice++){
        v[indice] = rls.questionInt("ingrese valor en " + indice + ": ");

    }
}

let cantidad : number = rls.questionInt("ingrese longitud del arreglo: ");

let arreglo2 : number[] = new Array(cantidad);
let arreglo1 : number[] = new Array(cantidad);

console.log("cargar vector 1: ");
cargaVector(arreglo1, cantidad);
console.log("cargar vector 2: ");
cargaVector(arreglo2, cantidad);

function multiplicarVector(v1:number[], v2:number[], cantidad: number): number {
    let acum : number= 0;

    for(let indice : number =0 ; indice<cantidad; indice++){
        acum = acum + (v1[indice] * v2[indice]);
    }
    return acum;
}

console.log(multiplicarVector(arreglo1, arreglo2, 2));