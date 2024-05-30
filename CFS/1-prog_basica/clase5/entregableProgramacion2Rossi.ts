/*
salida: potencia de un numero
entrada: base y exponente
solo exponentes >=0
elevar a la 0 da 1
separar logica de calcular potencia usando metodos
*/

import *as rls from 'readline-sync'

// definiciones //

let resultado : number;
let baseOperacional : number;
let veces : number;

// funciones //

function calculoPotencia (base : number, exponente : number){
    if (exponente<0)
        while (exponente<0) {
            exponente = rls.questionFloat("Exponente inválido, ingrese un exponente mayor o igual que 0: ");
            calculoPotencia(base, exponente);
        } 
        else if (exponente==0) {
            resultado=1;
            console.log("el resultado es ", resultado);
        }
        else {
        baseOperacional = 1;
        for (veces=1 ; veces<=exponente; veces++) {
            baseOperacional = baseOperacional * base;         
        }
        console.log("El resultado es ", baseOperacional);
        }
        
    }

// entradas //

let base :number = rls.questionFloat("ingrese base numérica: ");
let exponente : number = rls.questionFloat("ingrese exponente: ");
calculoPotencia(base, exponente);

