import { ICommand } from "../interfaces/i-command.interface";

export class ExitCommand implements ICommand {
    static COMMAND_NAME = 'exit';
    public execute(...params): void {
        console.log('The command not exists: ', params);
    }
}