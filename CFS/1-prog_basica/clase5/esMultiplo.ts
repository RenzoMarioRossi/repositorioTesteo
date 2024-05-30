/*
- saber si el primer numero de entrada es multiplo del segudo
- salida booleana (verdadero o falso)
*/

import *as rls from 'readline-sync';
let num1 : number = rls.questionFloat("ingrese un número: ");
let num2 : number = rls.questionFloat("ingrese un nuevo número para saber si el anterior es múltiplo del anterior: ");
let modulo : boolean
if (num1%num2 != 0){
    modulo=true
    console.log(num1, " no es múltiplo de ", num2);
}
else console.log(num1, " si es múltiplo de ", num2);
