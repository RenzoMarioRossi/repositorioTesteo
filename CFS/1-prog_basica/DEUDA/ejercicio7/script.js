"use strict";

function saludar() {
    console.log("hiciste click en el boton")
}

/* document.querySelector("#titulo"); */


console.log(document.getElementById("titulo"));
document.getElementById("titulo").innerText;
console.log("titulo")
let titulo="valor cambiado"
document.getElementById("titulo").innerText=titulo