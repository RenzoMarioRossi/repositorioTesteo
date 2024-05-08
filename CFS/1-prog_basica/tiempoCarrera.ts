import*as readlineSync from'readline-sync';
let vuelta1:number=readlineSync.questionFloat("Ingrese tiempo de la 1er vuelta en segundos ");
let vuelta2:number=readlineSync.questionFloat("Ingrese tiempo de la 2da vuelta en segundos ");
let vuelta3:number=readlineSync.questionFloat("Ingrese tiempo de la 3er vuelta en segundos ");
let vuelta4:number=readlineSync.questionFloat("Ingrese tiempo de la 4ta vuelta en segundos ");
let tot:number=vuelta1+vuelta2+vuelta3+vuelta4;
let prom:number=tot/4;
console.log("El tiempo total es de: " + tot + " segundos.");
console.log("El tiempo promedio de vuelta es de: " + prom + " segundos.");