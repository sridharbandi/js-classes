//10th Ques
/*
try {
    throw new Error('This is an error')
} catch (err) {
    console.log(err.message)
    console.log(err)
}*/


//11th Ques
/*
const promise = new Promise((res, rej) => {
    rej(new Error('Some error occured'))
});

promise.catch((err) => console.log(err.message)); */

//12th Ques
/*
function greet(name, callback) {
    console.log(name)
    callback()
}

function callMe() {
    console.log('I am a callback function')
}
greet('Axone', callMe) */

//13Th Ques
/*
let promise = new Promise((res, rej) => {
    setTimeout(function () {
       rej('Promise rejected') 
    }, 4000)
})

async function asyncFun() {
    try {
        let result = await promise
    } catch (error) {
        console.log(error)
    }
    //console.log(result)
    console.log('hello')
}

asyncFun();*/

//14th Ques
/*
class Person{
    constructor(personName, personAge){
        this.name = personName;
        this.age = personAge;
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }
}

let per1 = new Person('Sridhar', 30);
per1.greet() */

//15th Ques
function double(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}

double(2).then(output => console.log(output))


