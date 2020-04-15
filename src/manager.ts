
import { ICommand, CommandRegister } from './interfaces/i-command.interface';
import * as Command from './commands';


export class CommandManager {
    public COMMANDS: Array<CommandRegister> = [];

    constructor() {
        this.registerCommand({name: Command.DivisionCommand.COMMAND_NAME, class: new Command.DivisionCommand()});
        this.registerCommand({name: Command.SubstractionCommand.COMMAND_NAME, class: new Command.SubstractionCommand()});
        this.registerCommand({name: Command.SumCommand.COMMAND_NAME, class: new Command.SumCommand()});
        this.registerCommand({name: Command.ExitCommand.COMMAND_NAME, class: new Command.ExitCommand()});
    }

    public getCommand(command: string): ICommand{
        const searchCommand = this.COMMANDS.filter((com: CommandRegister) => com.name === command);
        if(searchCommand.length){
            return searchCommand[0].class;
        }
        return new Command.ExitCommand();
    }

    public registerCommand(register: CommandRegister): void{
        const search = this.COMMANDS.filter((data: CommandRegister) => data.name === register.name);
        if(!search.length){
            this.COMMANDS.push(register);
        }
    }
}