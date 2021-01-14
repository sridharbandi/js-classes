//10th Ques
let first = [1, 2, 3, 4, 5]
let second = ['a', 'b', 'c', 'd']
let third = [true, false]

let final = [...first, ...second, ...third]
console.log(final)

let z = first.concat(second, third)
console.log(z)

//11th Ques
let nums = [2, 6, -9, 7, -2, 0, 1, -3, 5]
let negativeNums = nums.filter(n => n < 0)
console.log(negativeNums)

//12th Ques
let source = ['9#30', '2#30', '6#30', '4#30' ]
let target = source.map(ele => ele.replace('#', ':'))
console.log(target)

//13th Ques
let data = [
    {name: 'daniel', age: 45},
    {name: 'john', age: 34},
    {name: 'robert', age: 39},
    {name: 'jen', age: undefined},
    {name: 'rob', age: undefined},
]

let validAgeData = data.filter(item => item.age != undefined );
console.log(validAgeData)

//14th  Ques
let date = new Date('1999-03-25');
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getDate())

//15th Ques
let person = {
    name: 'John',
    age: 20,
    email: 'abc@abc.com'
}

function Person(){
    this.name = 'John'
    this.age = 10
    this.email = 'abc@abc.com'
}

let per = new Person();
console.log(per)

//16th Ques
add = (a, b) => a+b;
sub = (a, b) => a-b;
mul = (a, b) => a*b;
div = (a, b) => a/b;

console.log(add(5, 4))
console.log(sub(5, 4))
console.log(mul(5, 4))
console.log(div(5, 4))

//17th Ques
const myFunction = () => 'axone'
console.log(myFunction)

//18th  Ques
try {
    consol.log('Hello')
} catch (error) {
    console.log('Found an error')
    console.log(`Error message ${error}`)
    
}






