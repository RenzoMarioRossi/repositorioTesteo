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
exports.Elfo = void 0;
var personaje_1 = require("./personaje");
var Elfo = /** @class */ (function (_super) {
    __extends(Elfo, _super);
    function Elfo(nombre, nivel, puntosGolpe, puntosAtaque, arco) {
        var _this = _super.call(this, nombre, nivel, puntosGolpe, puntosAtaque) || this;
        _this.arco = arco;
        return _this;
    }
    Elfo.prototype.setArco = function (arco) {
        this.arco = arco;
    };
    Elfo.prototype.getArco = function () {
        return this.arco;
    };
    Elfo.prototype.atacar = function () {
        this.puntosAtaque += this.arco;
        console.log("".concat(this.nombre, " realiza un golpe de arco de ").concat(this.puntosAtaque, "!"));
        this.puntosAtaque -= this.arco;
    };
    Elfo.prototype.defender = function (ataqueRecibido) {
        this.puntosGolpe -= (ataqueRecibido - (this.nivel * (0.3)));
        console.log("".concat(this.nombre, " recibe un ataque. Su vida es de ").concat(this.puntosGolpe));
    };
    ;
    Elfo.prototype.subirNivel = function () {
        this.nivel += 1;
        this.puntosGolpe += 25;
        this.puntosAtaque += 25;
        console.log("".concat(this.nombre, " ha subido de nivel!"));
        console.log(this.obtenerInformacion());
    };
    ;
    return Elfo;
}(personaje_1.Personaje));
exports.Elfo = Elfo;
