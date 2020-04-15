import { ICommand } from "../interfaces/i-command.interface";

export class DivisionCommand implements ICommand {
    static COMMAND_NAME = 'division';
    public execute(a, b, c): void {
        console.log('Result DivisionCommand: ', a/b/c);
    }
}