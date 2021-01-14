/*
function Person(personName, personAge){ // Pascal case
    this.name = personName
    this.age = personAge
    this.greet = function(){
        console.log(`Hello ${this.name}`)
    }
}

let person1 = new Person('John', 31)
let person2 = new Person('Goerge', 29)
console.log(person1)
console.log(person2) */


// Classes
/*
class Person {
    constructor(personName, personAge) {
        this.name = personName
        this.age = personAge
    }

    greet = () => console.log(`Hello ${this.name}`)

}

let personJohn = new Person('John', 31)
let personGeorge = new Person('George', 29)
console.log(personJohn.name)
console.log(personGeorge.age)
personGeorge.greet()

//Adding new property
personJohn.email = 'abc@abc.com'
console.log(personJohn) */

//Getter and Setter
class Person {
    constructor(personName, personAge) {
        this.name = personName
        this.age = personAge
    }

    greet = () => console.log(`Hello ${this.name}`)

    get perName() {
        return this.name;
    }

    get perAge() {
        return this.age;
    }

    set perName(newName) {
        if (typeof newName !== 'string' || !isNaN(newName)) {
            throw new Error(`${newName} is not string`)
        }
        this.name = newName
    }

    set perAge(newAge) {
        if (typeof newAge !== 'number') {
            throw new Error(`${newAge} is not number`)
        }
        this.age = newAge
    }

}

let personJohn = new Person('John', 31)
console.log(personJohn)
console.log(personJohn.name)
console.log(personJohn.perName)
console.log(personJohn.perAge)
personJohn.perName = '12'
personJohn.perAge = 33
console.log(personJohn)




