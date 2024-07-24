// IMPLEMENTE UN ALGORITMO DE ORDENAMIENTO CON EL METODO "BUBBLE SORT",
// PARA QUE ORDENE UN ARREGLO CON LONGITUD N EN ORDEN DESCENDENTE

// la funcion de carga al azar es la misma de la clase:

function generaAlAzar(numAzar: number): number {
    return Math.floor(Math.random() * numAzar);
}

function carga(arreglo: number[], cantidad: number, numAzar: number) {
    for (let i: number = 0; i < cantidad; i++) {
        arreglo[i] = generaAlAzar(numAzar);
    }
}

function escribirVector(arreglo: number[], cantidad: number) {
    let vector: string = "";
    for (let i: number = 0; i < cantidad; i++) {
        vector += `${arreglo[i]} `;
    }
    console.log(vector);
}

function cambiar(arr: number[], i: number, j: number) {
    let aux: number;
    aux = arr[i];
    arr[i] = arr[j];
    arr[j] = aux;
}

function comparacion(arreglo: number[], i: number, j: number): number {
    let comparador:number;
    if (arreglo[i] === arreglo[j]) {
        comparador=0;
    } else if (arreglo[i] < arreglo[j]) {
        comparador= -1;
    } else {
        comparador= 1;
    }
    return comparador
}

function burbujeo(arreglo: number[], cantidad: number) {
    for (let i: number = 0; i < cantidad - 1; i++) {
        for (let j: number = 0; j < cantidad - 1 - i; j++) {
            if (comparacion(arreglo, j, j + 1) < 0) {
                cambiar(arreglo, j, j + 1);
            }
        }
    }
}

let limite: number = 10;
let arreglo: number[] = new Array(limite);
carga(arreglo, limite, 100);
console.log("Arreglo original:");
escribirVector(arreglo, limite);
burbujeo(arreglo, limite);
console.log("Arreglo ordenado en orden descendente:");
escribirVector(arreglo, limite);