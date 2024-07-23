// guarda los siguientes arrays

const precios:number[]= [525, 3500, 400, 1999];
const productos:string[]= ["Leche", "Galletitas", "Harina", "Queso"];

//en un archivo precios.txt y productos.txt
// luego recupera la informacion en forma de array nuevamente y mostrala por consola

import * as fs from 'fs';


let contenidoPrecios : string = " ";

for(let i: number =0 ; i< precios.length; i++){
    contenidoPrecios= contenidoPrecios+= `${precios[i]} `
}

let precioString: string = contenidoPrecios.toString();

fs.writeFileSync('./precios.txt', precioString);


let contenidoProductos: string="";
for(let i: number =0 ; i< productos.length; i++){
    contenidoProductos= contenidoProductos+= `${productos[i]} `
}
fs.writeFileSync('./productos.txt', contenidoProductos);


const datosPrecios: string= fs.readFileSync('./precios.txt', 'utf-8');
const preciosSinEspacios: string = datosPrecios.trim();
const preciosArray: string[] = preciosSinEspacios.split(" "); 
console.log(preciosArray);

const datosProductos: string= fs.readFileSync('./productos.txt', 'utf-8');
const productosSinEspacios: string = datosProductos.trim();
const productosArray: string[] = productosSinEspacios.split(" "); 
console.log(productosArray);



