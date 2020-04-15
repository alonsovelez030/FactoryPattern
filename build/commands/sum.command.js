"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SumCommand = /** @class */ (function () {
    function SumCommand() {
    }
    SumCommand.prototype.execute = function (a, b, c, d) {
        console.log('Result SumCommand: ', a + b + c + d);
    };
    SumCommand.COMMAND_NAME = 'sum';
    return SumCommand;
}());
exports.SumCommand = SumCommand;
