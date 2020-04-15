import { ICommand } from "../interfaces/i-command.interface";

export class SumCommand implements ICommand {
    static COMMAND_NAME = 'sum';
    public execute(a, b, c, d): void {
        console.log('Result SumCommand: ', a+b+c+d);
    }
}