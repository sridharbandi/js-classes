//things to note
//describe block & it block

describe('Sample test set', () => {

    before('Before all tests', ()=>{
        console.log('This is before hook')
    })

    beforeEach('Before each test', ()=>{
        console.log('Before each test')
    })

    it('This is first test', () => {
        console.log('This is first test')
    });

    it('This is second test', () => {
        console.log('This is second test')
    });

    afterEach('After each test', ()=> {
        console.log('After each test')
    })

    after('After all the tests', () => {
        console.log('This is After hook')
    })
})

// Hooks
//before - Before first test executes
//beforeeach - Before each test
//after - After last test executes
//aftereach - After each  test