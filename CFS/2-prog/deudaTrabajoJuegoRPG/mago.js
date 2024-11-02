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
exports.Mago = void 0;
var personaje_1 = require("./personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, nivel, puntosGolpe, puntosAtaque, baculo) {
        var _this = _super.call(this, nombre, nivel, puntosGolpe, puntosAtaque) || this;
        _this.baculo = baculo;
        return _this;
    }
    Mago.prototype.setBaculo = function (baculo) {
        this.baculo = baculo;
    };
    Mago.prototype.getBaculo = function () {
        return this.baculo;
    };
    Mago.prototype.atacar = function () {
        this.puntosAtaque += this.baculo;
        console.log("".concat(this.nombre, " lanza una bola de fuego de ").concat(this.puntosAtaque, "!"));
        this.puntosAtaque -= this.baculo;
    };
    Mago.prototype.defender = function (ataqueRecibido) {
        var danioReducido = ataqueRecibido - (this.nivel * 0.2);
        this.puntosGolpe -= Math.max(0, danioReducido);
        console.log("".concat(this.nombre, " recibe un ataque. Su vida es de ").concat(this.puntosGolpe));
    };
    Mago.prototype.subirNivel = function () {
        this.nivel += 1;
        this.puntosGolpe += 10;
        this.puntosAtaque += 40;
        console.log("".concat(this.nombre, " ha subido de nivel!"));
        console.log(this.obtenerInformacion());
    };
    ;
    return Mago;
}(personaje_1.Personaje));
exports.Mago = Mago;
