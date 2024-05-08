/* usuario y clave predeterminadas, 3 intentos
*/
import*as readlineSync from 'readline-sync';
let clave:string="A";
let contador:number;
const claveReal:string="Eureka";

for(contador=3; contador>0; contador--){
    clave=readlineSync.question("ingrese su clave: ", {hideEchoBack: true , mask:"#"});
    if (clave!=claveReal) {
        console.log("su clave es incorrecta. ");
        
    }
    else{
        console.log("clave correcta. ");
        contador=0;
    }
}

if(clave==claveReal){
    console.log("accediendo.....");
}
else{
    console.log("limite de intentos superado");
}