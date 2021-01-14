/*let arr = [1,2,3,4,5,6,7,8,9,10]

let newArr = [];
for( n of arr){
    if(n%2 == 0){
        newArr.push(n)
    }
}

console.log(newArr)*/

//Creata a function to return true if the given is even, or else false

let arr = [1,2,3,4,5,6,7,8,9,10]

let newArr = arr.filter(p => p%2 == 0)
console.log(newArr)


//Filter all the numbers  that are greater than 200 in an array = [422,123,4534,343,11,12,35,685,1414]

let b = [422,123,4534,343,11,12,35,685,1414]
let a200 = b.filter(i => i>200)
console.log(a200)



