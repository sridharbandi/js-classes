/*let arr1 = ['a', 'b', 'c'];
let arr2 = arr1;

console.log(arr1)
console.log(arr2)

arr1.push('d');

console.log(arr1)
console.log(arr2) */

//With Spread Operator
/*let arr3 = ['a', 'b', 'c'];
let arr4 = [...arr3]

console.log(arr3)
console.log(arr4)

arr3.push('d');

console.log(arr3)
console.log(arr4)*/

//Copy Array
let arr1 = ['a', 'b', 'c'];
let arr2 = [...arr1, 'd', 'e', 'f'];
console.log(arr2)

let arr3 = [1,2,3,4,5]
let arr4 = [6,7,8,9,10]
let arr5 = [11,12,13,14,15]
let arr6 = [...arr3, ...arr4, ...arr5];
console.log(arr6)

//Spread the chars
let str = 'Quick Brown Fox';
let strArr = [...str]
console.log(strArr)




