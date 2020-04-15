import { Moto } from "./moto.interface";

export interface Factory{
    crearMoto(tipo: string, ruedas: number): Moto | null;
}