//Naming conventions
//1. variables are case sensitive
let carname = 'Honda City';
let CarName = 'Hundai i20';
console.log(carname);
console.log(CarName);

//2. variables names should be descriptive
//Bad way
let p = 'Developer';
//Good
let profession = 'Developer';
//Bad
let a = 30;
//Good
let age = 30;
let l = 'Zurich'; //Bad way
let location = 'Zurich'; //Good way

//3. Camel case
let firstname = 'John'; //Bad 
let firstName = 'John'; //Good
let myfirstname = 'John'; //Bad
let myFirstName = 'John'; //Good 
let first_name = 'John'; //Bad
let FIRSTNAME = 'John'; //Bad
let FirstName = 'John'; //Bad
let Firstname = 'JOhn'; //Bad

//4. Variable name should be short and descriptive
let hellothisismyname = 'John'; //Bad
let name = 'John'; //Good

//5. No spaces between variables (illegal)
let first name = 'John'; // Illegal and JavaScript will throw error
console.log(first name);

//6. Variable name should not contains hyphens (illegal)
let first-name = 'John'; // Illegal and JavaScript will throw error
console.log(first-name);

//7. Variables name should not start with numbers (illegal)
let 1Name = 'John'; // Illegal and JavaScript will throw error
console.log(1Name);

let name1 = 'John'; //Bad
console.log(name1);

let name1nam = 'John'; //Bad
console.log(name1nam);