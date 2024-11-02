"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, nivel, puntosGolpe, puntosAtaque) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosGolpe = puntosGolpe;
        this.puntosAtaque = puntosAtaque;
    }
    Personaje.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personaje.prototype.setPuntosGolpe = function (puntosGolpe) {
        this.puntosGolpe = puntosGolpe;
    };
    Personaje.prototype.setPuntosAtaque = function (puntosAtaque) {
        this.puntosAtaque = puntosAtaque;
    };
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.getPuntosGolpe = function () {
        return this.puntosGolpe;
    };
    Personaje.prototype.getPuntosAtaque = function () {
        return this.puntosAtaque;
    };
    Personaje.prototype.obtenerInformacion = function () {
        return "".concat(this.nombre, " - Nivel: ").concat(this.nivel, ", Puntos de Golpe: ").concat(this.puntosGolpe);
    };
    return Personaje;
}());
exports.Personaje = Personaje;
