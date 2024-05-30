import *as readlineSync from'readline-sync';

// variables //

let num1 : number = readlineSync.questionInt("ingrese un número: ");
let num2 : number = readlineSync.questionInt("ingrese otro número: ");
let opcionMenu : number =readlineSync.questionInt("ingrese 1 mara sumar, 2 para restar y cualquier otro para salir: ");
let resultFuncion : number=0;
resultFuncion=calcularResultado(num1, num2, opcionMenu);

// funciones //

function calcularResultado (num1:number, num2:number, opcionMenu:number) : number {
    let result:number=0;
    if (opcionMenu==1) {
        result = num1 + num2; 
    } else if (opcionMenu == 2) {
        result = num1 - num2;
    }
    else{
        console.log ("saliendo. ");
    }
return result;
}

function dibujarGuiones(cantidad:number) {
    let i:number;
    let linea: string = "-";
    for (i = 0; i <= cantidad; i++) {
        linea = linea + "-";
    }
    console.log(linea);
}


resultFuncion = calcularResultado(num1, num2, opcionMenu)
dibujarGuiones(40);
console.log("El resultado de la operación es ", resultFuncion);
dibujarGuiones(40);
