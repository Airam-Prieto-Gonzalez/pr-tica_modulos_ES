import { describe, expect, test } from "vitest";
import { RationalNumber } from "../src/modi.js";
import { Adapter } from "../src/Adapter.js"
import { ComplexNumber } from "../src/complex.js";

describe("modi", () => {
        test("Suma1", () => {
                let r = new RationalNumber(2,1)
                let i = new ComplexNumber(5, 2)
                let a = new Adapter(r)
                let result = i.Add(a)

                expect(result).toEqual({"i_num": 2,"r_num": 5.5})
        })
        test("Resta1", () => {
                let r = new RationalNumber(2,1)
                let i = new ComplexNumber(5, 2)
                let a = new Adapter(r)
                let result = i.Substract(a)

                expect(result).toEqual({"i_num": 2,"r_num": 4.5})
        })
        test("Mult1", () => {
                let r = new RationalNumber(2,1)
                let i = new ComplexNumber(5, 2)
                let a = new Adapter(r)
                let result = i.Multiply(a)

                expect(result).toEqual({"i_num": 1,"r_num": 2.5}) 
        })
        test("Div1", () => {
                let r = new RationalNumber(2,1)
                let i = new ComplexNumber(1, 2)
                let a = new Adapter(r)
                let result = i.Divide(a)

                expect(result).toEqual({"i_num": 4,"r_num": 2})
        })
        test("Suma2", () => {
                let r = new RationalNumber(5,1)
                let i = new ComplexNumber(5, 3)
                let a = new Adapter(r)
                let result = i.Add(a)

                expect(result).toEqual({"i_num": 3,"r_num": 5.2})
        })
        test("Resta2", () => {
                let r = new RationalNumber(8,1)
                let i = new ComplexNumber(8, 2)
                let a = new Adapter(r)
                let result = i.Substract(a)

                expect(result).toEqual({"i_num": 2,"r_num": 7.875})
        })
        test("Mult2", () => {
                let r = new RationalNumber(-2,1)
                let i = new ComplexNumber(5, -1)
                let a = new Adapter(r)
                let result = i.Multiply(a)

                expect(result).toEqual({"i_num": 0.5,"r_num": -2.5}) 
        })
        test("Div2", () => {
                let r = new RationalNumber(-2,1)
                let i = new ComplexNumber(1, -12)
                let a = new Adapter(r)
                let result = i.Divide(a)

                expect(result).toEqual({"i_num": 24,"r_num": -2})
        })

})