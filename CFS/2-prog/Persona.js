var Persona = /** @class */ (function () {
    //es mayor
    //constructor
    function Persona(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }
    //metodos
    Persona.prototype.getAltura = function () {
        return this.altura;
    };
    Persona.prototype.getPeso = function () {
        return this.peso;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    //set metodo
    Persona.prototype.setNombre = function (parNombre) {
        this.nombre = parNombre;
    };
    Persona.prototype.caminar = function () {
        return "caminando";
    };
    Persona.prototype.hablar = function () {
        return "bla bla bla";
    };
    Persona.prototype.dormir = function () {
        return "zzzzzz";
    };
    return Persona;
}());
var persona1 = new Persona("juan", 37032252);
console.log(persona1.getNombre());
