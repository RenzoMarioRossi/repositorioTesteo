/*
//Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese). 

let array15 : string[] = ["a", "s", "r", "f", "e", "t", "j", "f", "y", "i", "v", "d", "a", "w", "e"];

let arrayAEO : number[]=[0, 0, 0];
//Cuente la cantidad de A, E y O que hay en ese string y 
//almacene esas cantidades en otro arreglo de 3 elementos en el orden que usted desee.

function contarLetras (letraA:string, letraE:string, letraO:string){
    let i : number
    

    for (i=0;i<array15.length;i++){
        if (array15[i]==letraA){
            arrayAEO[0] += 1;
        }
        else if (array15[i] == letraE){
        arrayAEO[1] += 1;
        }
        else if (array15[i] == letraO) {
        arrayAEO[2] += 1;
        }
    }
}

//imprimir por consola

contarLetras("a", "e", "o")
console.log(arrayAEO)


function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0; 
    for ( i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return arreglo;
}


function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0;
    let i : number
    for ( i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
let arregloX : number[] = [2, 3, 4, 5];
console.log(sumarArreglo(arregloX))

Corregir los errores que encuentre:

function establecerColorPorNota(valor: number): string {
    if (valor >= 0 and valor <"siete") {
        return rojo;
    }
    else if ( valor >=7 and valor <= 10) {
        return verde;
    }
     return gris;
}




function establecerColorPorNota(valor: number): string {
    if (valor >= 0 && valor <7) {
        return "rojo";
    }
    else if ( valor >=7 && valor <= 10) {
        return "verde";
    }
    else {
        return "gris";
    }
}

console.log(establecerColorPorNota(0))
console.log(establecerColorPorNota(5))
console.log(establecerColorPorNota(10))
console.log(establecerColorPorNota(7))
console.log(establecerColorPorNota(113))
console.log(establecerColorPorNota(-8))
console.log(establecerColorPorNota(8))

Corregir los errores que encuentre: 
function obtenerPromedio(arr:number[]): string {    
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma % arr.length;
    console.log(promedio);
}
*/


function obtenerPromedio(arregloNotas:number[]):number {    
    let suma: number = 0
    for (let i : number =0; i<arregloNotas.length; i++){
            suma = suma + arregloNotas[i];
    }
    let promedio: number = suma / arregloNotas.length;
    return promedio;
}

console.log(obtenerPromedio([1,2,3,4]))
