import { describe, expect, test } from "vitest";
import { RationalNumber } from "../src/modi.js"

describe("modi", () => {
        test("Suma", () => {
                let num_a = new RationalNumber(5,2)
                let num_b = new RationalNumber(2,1)
                let result = num_a.Add(num_b)

                expect(result).toEqual({"den": 9,"num": 10})
        })
        test("Resta", () => {
                let num_a = new RationalNumber(5,2)
                let num_b = new RationalNumber(2,1)
                let result = num_a.Substract(num_b)

                expect(result).toEqual({"den": -1,"num": 10})
        })
        test("Mult", () => {
                let num_a = new RationalNumber(5,2)
                let num_b = new RationalNumber(2,-3)
                let result = num_a.Multiply(num_b)

                expect(result).toEqual({"den": -6,"num": 10}) 
        })
        test("Div", () => {
                let num_a = new RationalNumber(3,2)
                let num_b = new RationalNumber(1,-2)
                let result = num_a.Divide(num_b)

                expect(result).toEqual({"den": 2,"num": -6})
        })

})