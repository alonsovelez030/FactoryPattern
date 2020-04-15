export interface ICommand {
    execute(...properties: any);
}

export interface CommandRegister {
    name: string;
    class: ICommand
}