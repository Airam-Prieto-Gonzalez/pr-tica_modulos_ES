import { RationalNumber } from "./modi.js";
import { ComplexNumber, Arithmeticable } from "./complex.js";

/**
 * Clase que implementa el adaptador que opera entre racionales y complejos
 */
export class Adapter extends ComplexNumber {
        /**
         * Constructor de la clase
         * @param rational número racional
         */
        constructor (private rational: RationalNumber) {
                super(rational.num/rational.den, 0)
        }
}