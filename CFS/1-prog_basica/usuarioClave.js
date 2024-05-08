"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* usuario y clave predeterminadas, 3 intentos
*/
var readlineSync = require("readline-sync");
var clave = "A";
var contador;
var claveReal = "Eureka";
for (contador = 3; contador > 0; contador--) {
    clave = readlineSync.question("ingrese su clave: ", { hideEchoBack: true, mask: "Puto" });
    if (clave != claveReal) {
        console.log("su clave es incorrecta. ");
    }
    else {
        console.log("clave correcta. ");
        contador = 0;
    }
}
if (clave == claveReal) {
    console.log("accediendo.....");
}
else {
    console.log("limite de intentos superado");
}
