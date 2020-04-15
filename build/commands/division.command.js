"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DivisionCommand = /** @class */ (function () {
    function DivisionCommand() {
    }
    DivisionCommand.prototype.execute = function (a, b, c) {
        console.log('Result DivisionCommand: ', a / b / c);
    };
    DivisionCommand.COMMAND_NAME = 'division';
    return DivisionCommand;
}());
exports.DivisionCommand = DivisionCommand;
