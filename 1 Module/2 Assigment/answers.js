//Part B

//1st Ques

let a = 20;
let b = 10;

console.log('Addition', a + b);
console.log('Subtraction', a - b);
console.log('Multiplication', a * b);
console.log('Division', a / b);
console.log('Modulus', a % b);

//2nd Ques

console.log('+++++++++ 2nd Question +++++++++')
let num = -10;

(num > 0) ? console.log(num, 'is a positive number') : console.log(num, 'is a negative number');

//4th Ques

console.log('+++++++++ 4th Question +++++++++')

if (2) {
    console.log('I love JavaScript');
}


//5th Ques
console.log('+++++++++ 4th Question +++++++++')

var counter = 0;
while (counter < 3) {
    console.log('The counter is at', counter);
    counter++;
}

for (var counter = 0; counter < 3; counter++) {
    console.log('The counter is at', counter);
}

//6th Ques
var result = 0;
for (var i = 0; i <= 5; i++) {
    result += i;
    //result = result + i;
}
console.log(result);

//8th Ques

let k = 1; // can be 0 
let sum = 0;
while (k <= 100) {
    // sum += k;
    sum = sum + k;
    k++;
    //console.log(sum);
}
console.log(sum);

//Part C 
//1st Ques

for (let y = 0; y <= 100; y += 2) {
    console.log(y)
}


//2nd Ques
for (let z = 1; z <= 100; z++) {
    if (z % 5 === 0) {
        console.log('Number is divisible by 5', z)
    }
    // z%5 === 0 ? console.log('Number is divisible by 5', z): console.log('Number is not divisible by 5', z)
}

//4th Ques
let num1 = '';
for (let count = 0; count < 7; count++) {
    num1 += '1'
    console.log(num1)
}

//5th Ques

let totl = 0;
for (let j = 1; j < 20; j += 2) {
    totl += j;
}

//7th Ques
let mul = 6
for (let t = 1; t <= 10; t++) {
    console.log(mul, 'X', t, '=', mul * t)
}

