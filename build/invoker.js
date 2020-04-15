"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manager_1 = require("./manager");
function Sumar() {
    var newCommand = new manager_1.CommandManager();
    newCommand.getCommand('sum').execute(10, 20, 30, 40);
}
function Restar() {
    var newCommand = new manager_1.CommandManager();
    newCommand.getCommand('substraction').execute(10, 20);
}
function Dividir() {
    var newCommand = new manager_1.CommandManager();
    newCommand.getCommand('division').execute(10, 20, 30);
}
Sumar();
Restar();
Dividir();
