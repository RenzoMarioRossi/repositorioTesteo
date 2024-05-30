//ingresado un numero determinar si es par o impar, si es cero informarlo
import *as rls from "readline-sync";
let numero : number = rls.questionInt ("ingrese un número: ") ;
if (numero==0) {
    console.log("el numero ingresado es cero.");
}
else if (numero%2==0){
    console.log("el numero ", numero, " es par. ");
}
    else{
    console.log("el numero", numero, " es impar. ");
    }