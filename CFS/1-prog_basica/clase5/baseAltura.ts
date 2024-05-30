/*
import *as rls from 'readline-sync'

let base, altura : number;

//definiciones//

let iter : number = 1;
let resultado : number

//entradas//
let veces : number = rls.questionInt("cuantas veces desea calcular? ");

//funcion//
base = 1;
altura = 2;

for (iter=1; iter >= veces; iter++);
function iterador (base:number, altura:number) : number {
return (base*altura)/2;
resultado = (base*altura)/2;
}
console.log("el resultado es", resultado);
*/

function calcularAreaTriangulo (base : number, altura : number) {
    return (base*altura)/2
};

let iter : number
for (iter = 1 ; iter <= 100; iter++){
    console.log("el area es = ", calcularAreaTriangulo (iter, iter*2));
}
