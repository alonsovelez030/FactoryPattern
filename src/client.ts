import { FactoryClass } from './factory';

const nuevaFactoria = new FactoryClass();
const Moto = nuevaFactoria.crearMoto('tierra');

console.log(`Haz creado una moto de ${Moto?.getRuedas()} ruedas`)