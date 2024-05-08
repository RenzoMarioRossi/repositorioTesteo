import * as readlineSync from 'readline-sync';
let num1:number=readlineSync.questionInt("ingrese el primer número ");
console.log("el primer número es: " + num1);
let num2:number=readlineSync.questionInt("ingrese el segundo número ");
console.log("el segundo número es: "+num2);
let resultado:number=num1+num2;
console.log("el resultado de la suma es: "+resultado)
