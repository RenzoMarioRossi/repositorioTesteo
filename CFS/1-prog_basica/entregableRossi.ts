import * as readlineSync from 'readline-sync'
let num:number=readlineSync.questionInt("ingrese número ")
if (num==0) {
    console.log("su numero es 0");
}
else if (num%2 !=0){
    console.log("su número es impar");
}
else {
    console.log("su número es par");
}
