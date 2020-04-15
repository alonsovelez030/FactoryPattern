import { CommandManager } from './manager';

function Sumar(){
    const newCommand = new CommandManager();
    newCommand.getCommand('sum').execute(10,20,30,40);
}

function Restar(){
    const newCommand = new CommandManager();
    newCommand.getCommand('substraction').execute(10,20);
}

function Dividir(){
    const newCommand = new CommandManager();
    newCommand.getCommand('division').execute(10,20,30);
}

Sumar();
Restar();
Dividir();