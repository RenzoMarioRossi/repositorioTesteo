"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precio = readlineSync.question("ingrese el precio del producto:");
var descuento = 10; //descuento en %
var precioFinal;
precioFinal = (precio - (precio * descuento / 100));
console.log("El precio a pagar es de: $" + precioFinal);
