"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Command = __importStar(require("./commands"));
var CommandManager = /** @class */ (function () {
    function CommandManager() {
        this.COMMANDS = [];
        this.registerCommand({ name: Command.DivisionCommand.COMMAND_NAME, class: new Command.DivisionCommand() });
        this.registerCommand({ name: Command.SubstractionCommand.COMMAND_NAME, class: new Command.SubstractionCommand() });
        this.registerCommand({ name: Command.SumCommand.COMMAND_NAME, class: new Command.SumCommand() });
        this.registerCommand({ name: Command.ExitCommand.COMMAND_NAME, class: new Command.ExitCommand() });
    }
    CommandManager.prototype.getCommand = function (command) {
        var searchCommand = this.COMMANDS.filter(function (com) { return com.name === command; });
        if (searchCommand.length) {
            return searchCommand[0].class;
        }
        return new Command.ExitCommand();
    };
    CommandManager.prototype.registerCommand = function (register) {
        var search = this.COMMANDS.filter(function (data) { return data.name === register.name; });
        if (!search.length) {
            this.COMMANDS.push(register);
        }
    };
    return CommandManager;
}());
exports.CommandManager = CommandManager;
