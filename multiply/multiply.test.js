import {multiply} from "./multiply";


describe('multiply', () => {
    it('sollte eine multiplizierte positive Zahl sein', () => {
        //AAA - arrange, act, assert
        const expectedResult = 6;

        const actualResult = multiply(3, 2);

        expect(actualResult).toBe(expectedResult)

        expect ({a: 1}).toEqual({a: 1})

        expect([1,2,3]).toHaveLength(3)

        expect([1,2,3]).not.toContain(10)

        expect(undefined).toBeUndefined()

        expect(null).toBeNull()

        expect(null).toBeFalsy()

        expect(actualResult)

        expect(actualResult).toBeDefined()

        expect(actualResult).toBeTruthy()
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
