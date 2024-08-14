import {multiply} from "./multiply";


describe('multiply', () => {
    it('sollte eine multiplizierte positive Zahl sein', () => {
        //AAA - arrange, act, assert
        const expectedResult = 6;

        const actualResult = multiply(3, 2);

        expect(actualResult).toBe(expectedResult)
    });

    it('sollte eine multiplizierte negative Zahl sein', () => {
        const res = multiply(-3, -2);
        expect(res).toBe(6)
    });

    it('sollte eine multiplizierte negative und positive Zahl sein', () => {
        const res = multiply(3, -2);
        expect(res).toBe(-6)
    });


})
