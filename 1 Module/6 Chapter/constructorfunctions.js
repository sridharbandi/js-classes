function Person(personName, personAge){ // Pascal case
    this.name = personName
    this.age = personAge
}

let person1 = new Person('John', 31)
let person2 = new Person('Goerge', 29)
let person3 = new Person('Doe', 35)

/*console.log(person1)
console.log(person2)
console.log(person3)*/

person1.gender = 'Male';

person2.greet = function(){
    console.log('Hello ', this.name)
}

console.log(person1)
console.log(person2)
console.log(person3)
person2.greet()

