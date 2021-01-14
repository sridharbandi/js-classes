//10th Ques
function isOddNum(num) {
    /*if(num % 2 == 0){
        return false;
    } else{
        return true;
    }*/
    return num % 2 == 0 ? false : true
}

console.log(isOddNum(5))

//11th Ques
let random = function () {
    return Math.floor(Math.random() * 1000) + 1
}

console.log(random())

//12th Ques
function sumOfElement(numArra) {
    let result = 0;
    for (let i = 0; i < numArra.length; i++) {
        result += numArra[i];
    }
    return result;
}

console.log(sumOfElement([897, 125, 347, 1256, 12172, 44353]))

//For Each
function sumWithForEach(numArra) {
    let result = 0;
    numArra.forEach(function (n) {
        result += n;
    })
    return result;
}

console.log(sumWithForEach([897, 125, 347, 1256, 12172, 44353]))

//For of
function sumWithForOf(numArra) {
    let result = 0;
    for (n of numArra) {
        result += n;
    }
    return result;

}

console.log(sumWithForOf([897, 125, 347, 1256, 12172, 44353]))

//13 Ques
let word = 'ABCD';
let reversedWord =  word.split('').reverse().join('')
console.log(reversedWord)

//FOr loop
let finalWord = '';
for (let i = word.length-1; i >= 0; i--){
    finalWord += word[i];
}
console.log(finalWord)

//14th Ques
let a = 5;
function print(){
    let b = 4;
}
print();
console.log(a)
console.log(b)
