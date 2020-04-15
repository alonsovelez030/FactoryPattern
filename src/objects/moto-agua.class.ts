import { Moto } from "../interfaces/moto.interface";

export class MotoAguaClass implements Moto {
    public ruedas: number = 0;

    public getRuedas(): number {
        return this.ruedas;
    }
}