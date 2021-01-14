let numOne = 10;
let numTwo = 8;

//Addition 
let sum = numOne + numTwo;
console.log('Addition is ', sum);

//Substraction
let sub = numOne - numTwo;
console.log('Substraction', sub);

//Multiplication
let mul = numOne * numTwo;
console.log('Multiplication', mul);

//Division
let div = numOne / numTwo;
console.log('Division', div);

//Modulus
let mod = numOne % numTwo;
console.log('Modulus', mod);

//Power of **
let pow = numOne ** numTwo; 
console.log('Power of ', pow)

//Increment
console.log(++numOne) // Pre-increment
console.log(numOne)

console.log(numTwo++) // Post-increment
console.log(numTwo)

//Example 2
console.log(' **************** ')

let numThree = 17;
console.log(numThree++);
console.log(numThree)
console.log(numThree++);
console.log(numThree)
console.log(numThree)
console.log(numThree)
console.log(numThree++)
console.log(numThree)

//Example 3
console.log(' ############# ')
//Pre - Increment
let numFour = 11;
numFour = numFour + 1;
console.log(numFour)

//Post-Increment
let numFive = 12;
let temp = numFive + 1;
console.log(numFive);
numFive = temp;
console.log(numFive);

//Decrement
console.log(' ------------- ')
let numSix = 15;
let numSeven = 19;
console.log(--numSix);// Pre-decrement
console.log(numSeven--); //Post-decrement
console.log(numSeven);