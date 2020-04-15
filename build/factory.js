"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var motos = __importStar(require("./objects"));
var FactoryClass = /** @class */ (function () {
    function FactoryClass() {
        this.moto_agua = 'agua';
        this.moto_tierra = 'tierra';
    }
    FactoryClass.prototype.crearMoto = function (tipo) {
        switch (tipo) {
            case this.moto_agua: {
                return new motos.MotoAguaClass();
            }
            case this.moto_tierra: {
                return new motos.MotoTierraClass();
            }
            default: {
                return null;
            }
        }
    };
    return FactoryClass;
}());
exports.FactoryClass = FactoryClass;
