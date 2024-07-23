/*
import * as fs from 'fs';

let contenido: string = "nuevo contenido";

fs.readFileSync('./test.txt' , contenido);
*/


import * as fs from 'fs';

// si no funciona, usar: import * as fs from 'node:fs';
// si tampoco funciona, karen usó este: import fs from 'node:fs';


let contenido: string = "nuevo contenido";


// Escribe el contenido en el archivo

//fs.writeFileSync('./test.txt', contenido);


// Lee el contenido del archivo
const leer: string = fs.readFileSync('./test.txt', 'utf8');

//console.log(leer);


// para guardar numeros se utiliza el toString

//let contenidoNumero: number = 98165;

//let contenidoString: string = contenidoNumero.toString();

//fs.writeFileSync('./test.txt', contenidoString);


// PARA GUARDAR UN ARRAY, LO RECORREMOS CON UN FOR GUARDANDO EN UNA VARIABLE

const nombres: string[]= ["juan", "amalia", "pipo"];
let contenidoDelArray : string = " ";

for(let i: number =0 ; i< nombres.length; i++){
    contenidoDelArray= contenidoDelArray+= `${nombres[i]} ` // TEMPLATE STRING ---> nombres[i] + " "
}

fs.writeFileSync('./test.txt', contenidoDelArray );


//PARA VOLVERLO A CONVERTIR EN ARRAY LEYENDO HACEMOS:

const datos: string= fs.readFileSync('./test.txt', 'utf-8');
const datos2: string = datos.trim(); // le saca los espacios de atras y adelante al string
const arregloNuevo: string[] = datos2.split(" ") //divide los datos que esten separados por un " " en el array
console.log(arregloNuevo);





console.log(leer);