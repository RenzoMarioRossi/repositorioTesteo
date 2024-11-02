"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caballero = void 0;
var personaje_1 = require("./personaje");
var Caballero = /** @class */ (function (_super) {
    __extends(Caballero, _super);
    function Caballero(nombre, nivel, puntosGolpe, puntosAtaque, armadura) {
        var _this = _super.call(this, nombre, nivel, puntosGolpe, puntosAtaque) || this;
        _this.armadura = armadura;
        return _this;
    }
    Caballero.prototype.setArmadura = function (armadura) {
        this.armadura = armadura;
    };
    Caballero.prototype.getArmadura = function () {
        return this.armadura;
    };
    Caballero.prototype.atacar = function () {
        console.log("".concat(this.nombre, " realiza un golpe de espada! de ").concat(this.puntosAtaque, " "));
    };
    Caballero.prototype.defender = function (ataqueRecibido) {
        var danioReducido = ataqueRecibido - (this.armadura + this.nivel * 0.6);
        this.puntosGolpe -= Math.max(0, danioReducido);
        console.log("".concat(this.nombre, " recibe un ataque. Su vida es de ").concat(this.puntosGolpe));
    };
    Caballero.prototype.subirNivel = function () {
        this.nivel += 1;
        this.puntosGolpe += 20;
        this.puntosAtaque += 30;
        console.log("".concat(this.nombre, " ha subido de nivel!"));
        console.log(this.obtenerInformacion());
    };
    ;
    return Caballero;
}(personaje_1.Personaje));
exports.Caballero = Caballero;
