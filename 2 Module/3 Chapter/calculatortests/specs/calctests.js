import calc from '../src/calculator.js'
import chai from 'chai';
const { expect, assert } = chai;


describe(`Calculator tests`, () => {

    let numbers = [1, 2]

    /*for (let number in numbers) {
        it(`Addition test ${number}`, (number) => {
            const result = calc.addition(number, 4);
            assert.equal(result, result)
        })
    }*/

     it('Substraction test', () => {
         const result = calc.substraction(5, 4);
         assert.equal(result, 1, '5 minus 4 should be eqaul to 1')
     })
     it('Multiplication test', () => {
         const result = calc.multiplication(5, 4);
         assert.equal(result, 21, '5 * 4 should be eqaul to 20')
     })
     it('Division test', () => {
         const result = calc.division(5, 4);
         expect(result).to.equal(1.25);
         //assert.equal(result, 1.25, '5 / 4 should be eqaul to 1.25')
     })

})