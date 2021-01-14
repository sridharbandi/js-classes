//Part A

//1st Ques
const str = 'quick brown fox jumps over the lazy dog';
console.log(str.length)

//2nd Ques
console.log(Math.max(10, 19, -11, 0, 21, 9))
console.log(Math.min(10, 19, -11, 0, 21, 9))

//3rd ques
let num = 15;
console.log(typeof num)
console.log(typeof num.toString())

//4th Ques
let longString = 'quick brown fox jumps over the lazy dog';
console.log(longString.substring(3, 17));
console.log(longString.substr(3, 17));

//5th Ques
printName = function(firstName, lastName){
    console.log(`Person's name is ${firstName} ${lastName}`)
}

printName('Sridhar', 'Bandi')

//6th Ques
let numArry = [2, 4, 5, 6, 7, 6, 4, 8];
//console.log(numArry.pop());
//console.log(numArry)
let index = numArry.length - 1;
console.log(numArry[index])
//numArry.reverse()
//console.log(numArry[0])

//7th Ques
let fruits = ['Apple', 'Orange', 'Mango'];
console.log(fruits.join('='));

//8th Ques
let person = {
    name: 'John',
    123: 'Doe',
    age: 20,
    email:'abc@abc.com',
    car: {
        make: 'Honda',
        color: 'White'
    },
    greet: function(){
        console.log('Hello John');
    }
}

//console.log(person.123)
console.log(person['123'])

console.log(person.car.color)

//9th Ques
console.log(typeof person)

