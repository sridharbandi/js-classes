let fruits = ['Apple', 'Orange', 'Mango', 'Banana']
//console.log(fruits[2])
//Iterating  arrays
//Traditional For
/*for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}*/

//Inbuilt method
/*let iterate = function (fruit){
    console.log(`Value is ${fruit}`)
}

fruits.forEach(iterate)

fruits.forEach(function (value){
    console.log(`Value is ${value}`)
})*/

//Iterate an array [1,2,3,4,5,6]

//for to iterate arrays (for of)
for(a of fruits){
    console.log(a)
}
