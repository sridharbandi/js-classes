import chai from 'chai';
const { expect, assert } = chai;

describe('My details', ()=> {
    it('My name ', ()=> {
        //console.log('Sridhar')
        //expect('Sridhar').to.equal('Sri')

        let a = [1,2,3]
        let b = [1,2]

        //expect(a).to.include.members(b)
        //assert.equal(3, '3', 'Expected is not actual')
        assert.lengthOf(a, 3, 'array should have length of 3');
    })
})