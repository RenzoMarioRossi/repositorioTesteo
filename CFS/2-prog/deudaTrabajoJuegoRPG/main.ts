import { Personaje } from "./personaje";
import { Caballero } from "./caballero";
import { Elfo } from "./elfo";
import { Mago } from "./mago";


const vairoletto = new Caballero("Vairoletto", 1, 80, 20, 5);
const thakoles = new Elfo("Thakoles", 1, 60, 35, 10);
const azras = new Mago("Azras", 1, 40, 45, 20);

console.log(vairoletto.obtenerInformacion());
console.log(thakoles.obtenerInformacion());
console.log(azras.obtenerInformacion());

vairoletto.atacar();
vairoletto.defender(15);
vairoletto.subirNivel();

thakoles.atacar();
thakoles.defender(10);
thakoles.subirNivel();

azras.atacar();
azras.defender(7);
azras.subirNivel();