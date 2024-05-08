import*as readlineSync from'readline-sync';
let suma, promedio, nota, contador: number;
suma=0;
for(contador=0; contador<10; contador++) {
    nota = readlineSync.questionFloat("ingrese su nota: ");
    suma+= nota;
}
promedio=suma/10;
console.log("el promedio es: " + promedio);
