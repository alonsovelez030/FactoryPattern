"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("./factory");
var nuevaFactoria = new factory_1.FactoryClass();
var Moto = nuevaFactoria.crearMoto('tierra');
console.log("Haz creado una moto de " + (Moto === null || Moto === void 0 ? void 0 : Moto.getRuedas()) + " ruedas");
