import * as rls from "readline-sync";


let arregloA : number [] = new Array(6);
arregloA= [1, 2, 3, 4, 5, 6];
let arregloB : number [] = [7, 8, 9, 10, 11, 12];
let arregloSuma : number [] = new Array(6);

//console.log(arregloA.length);//

let suma : number = 0;

suma = arregloA[0] + arregloB[0];
//console.log("La suma es: ", suma);//

for (let i = 0; i < arregloA.length; i ++) {
    arregloSuma[i] = arregloA[i] + arregloB[i];
    console.log(arregloSuma[i]);
}

/*for (let i = 0; i < arregloSuma.length; i++){
    console.log(arregloSuma[i]);
}
*/
