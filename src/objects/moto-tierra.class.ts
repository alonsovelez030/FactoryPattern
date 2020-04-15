import { Moto } from "../interfaces/moto.interface";

export class MotoTierraClass implements Moto {
    public ruedas: number = 2;

    public getRuedas(): number {
        return this.ruedas;
    }
}