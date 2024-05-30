let texto : string = "Tengo que hacer muchos ejercicios";

console.log(texto.indexOf("hacer"));
console.log(texto.indexOf("hacer", 20));

let texto2 : string = "Tengo que hacer, hacer y hacer muchos ejercicios";

console.log(texto2.lastIndexOf("hacer"));

console.log(texto2.substring(10, 15));
console.log(texto2.substr(10, 21));

let prueba : string = "1234567890";

console.log(prueba.substr(2, 3));

console.log(texto2.toLowerCase());

console.log(texto2.toUpperCase());

console.log(parseInt(prueba));

let numeroNumber : number = 1234567890;

console.log(numeroNumber.toString());


/*
el split 
para convertir un array a strings
*/

// opcion a//

let arrayDeNumeros : string[] = prueba.split(" ");
console.log(arrayDeNumeros);
console.log(texto.split(" "));

