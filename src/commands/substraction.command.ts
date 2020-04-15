import { ICommand } from "../interfaces/i-command.interface";

export class SubstractionCommand implements ICommand {
    static COMMAND_NAME = 'substraction';
    public execute(a, b): void {
        console.log('Result SubstractionCommand: ', a-b);
    }
}