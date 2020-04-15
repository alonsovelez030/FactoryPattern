"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SubstractionCommand = /** @class */ (function () {
    function SubstractionCommand() {
    }
    SubstractionCommand.prototype.execute = function (a, b) {
        console.log('Result SubstractionCommand: ', a - b);
    };
    SubstractionCommand.COMMAND_NAME = 'substraction';
    return SubstractionCommand;
}());
exports.SubstractionCommand = SubstractionCommand;
