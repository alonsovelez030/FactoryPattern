import { Factory } from "./interfaces/factory.interface";
import { Moto } from "./interfaces/moto.interface";
import * as motos from './objects';

export class FactoryClass implements Factory {
    private moto_agua: string = 'agua';
    private moto_tierra: string = 'tierra';

    public crearMoto(tipo: string): Moto | null {
        switch(tipo){
            case this.moto_agua: {
                return new motos.MotoAguaClass();
            }
            case this.moto_tierra: {
                return new motos.MotoTierraClass();
            }
            default:{
                return null;
            }
        }
    }
}