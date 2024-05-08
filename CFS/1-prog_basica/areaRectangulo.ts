import * as readlineSync from 'readline-sync';
let base:number=readlineSync.questionInt("Ingrese la medida de la base expresada en cm ");
let altura:number=readlineSync.questionInt("Ingrese la medida de la alturaexpresada en cm ");
let area:number=base*altura;
console.log("El área del rectangulo es de: " + area + " cm.");
