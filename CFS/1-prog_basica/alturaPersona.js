"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var alturaPersona = readlineSync.question("ingrese la altura ");
console.log("la persona mide " + alturaPersona + " metros");
