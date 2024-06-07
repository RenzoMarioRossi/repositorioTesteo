let arrayNumber:number[]= [3,4,7,8,9,5,6,2,7];
//array ejemplo

//1.Encuentra el promedio de una lista de números.

/*
let sumador:number =0; 

function calculaPromedios(){
    let i:number;    
    for (i = 0 ; i < arrayNumber.length ; i ++){
        sumador += arrayNumber[i];
    }
    console.log("el promedio es ", (sumador/arrayNumber.length));
}

calculaPromedios();

*/

//2. Encuentra el número más grande en una lista.

/*
let i, numeroMasAlto : number = 0

for (i=0;i<arrayNumber.length;i++){
    if (numeroMasAlto<arrayNumber[i]){
        numeroMasAlto=arrayNumber[i];
    }
}

console.log("el número más alto es ", numeroMasAlto);

*/



//3.Encuentra el número más pequeño en una lista.

/*
let i, numeroMasBajo : number;
numeroMasBajo=arrayNumber[0];
for (i=0;i<arrayNumber.length;i++){
    if (numeroMasBajo>arrayNumber[i]){
        numeroMasBajo=arrayNumber[i];
    }
}
console.log("el número más ba
jo es ", numeroMasBajo);

*/

// 4.Calcula la suma de dos arreglos elemento por elemento.

/*

let array2:number[]= [77, 1, 6, 2, 9, 7, 66, 8, 3];
let resultadoArray:number[] = new Array(Array.length); 
let i : number
for (i =0; i<arrayNumber.length;i++){
    resultadoArray[i]=(arrayNumber[i] + array2[i]);
}
console.log("el resultado de la suma es: ", resultadoArray);

*/
//5. Encuentra el número de elementos pares en una lista.

/*

let i : number, contador;
contador=0
for (i=0;i<arrayNumber.length;i++){
    if (arrayNumber[i]%2==0){
        contador+=1
    }
}
console.log("el arreglo posee una cantidad de ", contador, " numeros pares");

*/


//6.Encuentra el número de veces que aparece un elemento en una lista.

/*

import *as rls from "readline-sync";
let elementoBuscado : number=rls.questionInt("ingrese el número a buscar en la lista: ");
let i : number;
for (i=0;i<arrayNumber.length;i++){
    if (arrayNumber[i]==elementoBuscado){
        console.log("el número ", elementoBuscado, "aparece en el arreglo en la posición ", (i+1));
    }
}

*/

 // 7.Calcula el producto de todos los elementos en una lista.

/*

let i : number
let resultadoAcumulado : number = 1
for (i=0; i < arrayNumber.length; i ++){
    resultadoAcumulado=resultadoAcumulado*arrayNumber[i];
}
console.log("el producto de los elementos de la lista es: ", resultadoAcumulado);


*/

// 8.Encuentra el número más grande entre 2 números.






 //9.Ordena una lista de números de forma ascendente.

