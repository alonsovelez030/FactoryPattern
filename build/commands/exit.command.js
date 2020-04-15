"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExitCommand = /** @class */ (function () {
    function ExitCommand() {
    }
    ExitCommand.prototype.execute = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log('The command not exists: ', params);
    };
    ExitCommand.COMMAND_NAME = 'exit';
    return ExitCommand;
}());
exports.ExitCommand = ExitCommand;
