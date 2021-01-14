import chai from 'chai';
const{ expect, assert} = chai;

describe('Assertions', () => {

    it('3 is greater than 4', ()=> {
        assert.isAbove(3, 4, '4 is always greater than  3');
    })

    it('Length of an array', () => {
        let arr = [8 , 9 , 11, 23]
        assert.lengthOf(arr, 4, `${arr} length is 4`);
    })

    it('Strict equal', () => {
       // expect(101).to.equal('101');
       assert.strictEqual(101, '101')
    })

    it('Array contains', () => {
        let arr = ['a', 'b', 'c']
        expect(arr).to.include('c')
    })

})