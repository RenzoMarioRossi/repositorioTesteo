import*as readlineSync from'readline-sync';
let precUnit:number=readlineSync.questionFloat("Ingrese el precio unitario del producto ");
let cant:number=readlineSync.questionInt("Ingrese cantidad del mismo ");
const desc:number=0.1;
let subTot:number=precUnit*cant;
console.log("El subtotal es de: " + subTot)
console.log(". Su descuento es de: " + desc*subTot);
console.log(". El total a pagar es de: " + (subTot-(desc*subTot)));
