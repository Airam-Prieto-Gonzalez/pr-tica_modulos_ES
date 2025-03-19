import { Arithmeticable } from './complex.js'

/** Clase que implementa operaciones entre racionales */
export class RationalNumber implements Arithmeticable<RationalNumber> {
        public readonly den: number = 0
        public readonly num: number = 0
        /**
         * Construcotor de la clase
         * @param 
         */
        constructor(d: number, n: number) {
                this.den = d
                this.num = n
        }

        /**
         * Operación de suma
         * @param operand operando con el que se va a operar
         * @returns Resultado
         */
        Add (operand: RationalNumber): RationalNumber | undefined {
                let result =new RationalNumber(this.num*operand.den + operand.num*this.den, this.den*operand.den)
                return result
        }

        /**
         * Operación de resta
         * @param operand operando con el que se va a operar
         * @returns Resultado
         */
        Substract (operand: RationalNumber): RationalNumber | undefined {
                let result =new RationalNumber(this.num*operand.den - operand.num*this.den, this.den*operand.den)
                return result
        }

        /**
         * Operación de multiplicación
         * @param operand operando con el que se va a operar
         * @returns Resultado
         */
        Multiply (operand: RationalNumber): RationalNumber | undefined {
                let result =new RationalNumber(this.num*operand.num, this.den*operand.den)
                return result
        }

        /**
         * Operación de división
         * @param operand operando con el que se va a operar
         * @returns Resultado
         */
        Divide (operand: RationalNumber): RationalNumber | undefined {
                let result =new RationalNumber(this.num*operand.den, this.den*operand.num)
                return result
        }
}