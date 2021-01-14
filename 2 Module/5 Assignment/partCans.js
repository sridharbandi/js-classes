/*function printDate() {
    let date = new Date();
    console.log(date.toLocaleTimeString())
    setTimeout(printDate, 1000)
}

printDate() */

//17th Ques
/*
class Superhero{
    constructor(firstName, lastName){
        this.fname = firstName;
        this.lname = lastName;
    }

    getFullName(){
        return this.fname+' '+this.lname;
    }
}

let superhero = new Superhero('John', 'Doe')
console.log(superhero.getFullName())*/

//18th Ques
function double(x) {
    return new Promise( resolve => {
        setTimeout(()=>{
            resolve(x*2)
        }, 2000)
    })
}

async function asyncDouble() {
    let res1 = await double(2);
    let res2 = await double(3);
    let res3 = await double(4);
    let res4 = await double(5);
    console.log(res1 + res2 + res3 + res4)
}

asyncDouble()
