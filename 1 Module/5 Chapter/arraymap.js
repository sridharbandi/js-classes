let arr = [1, 2, 3, 4, 5]

/*let  newArr = []
for(n of arr){
    newArr.push(n*2)
}
console.log(newArr)*/

let newArra = arr.map(n => n * 3);

console.log(newArra)


let perArra = [
    {firstname: 'Sridhar', lastname: 'Bandi'},
    {firstname: 'John', lastname: 'Doe' },
    {firstname: 'James', lastname: 'George' }
]


let newPersonArr  = perArra.map(p => `${p.firstname} ${p.lastname}`)
console.log(newPersonArr)

//let perArra = [ 'Sridhar Bandi', 'John Doe', 'James George']

//console.log(perArra)
/*let newPArr = [];
for (p of perArra){
    newPArr.push(`${p.firstname} ${p.lastname}`)
}

console.log(newPArr)*/

let perArray = [
    {firstname: 'Sridhar', lastname: 'Bandi', age: 30},
    {firstname: 'John', lastname: 'Doe', age: 29 },
    {firstname: 'James', lastname: 'George', age: 41 }
]

let ageArr = perArray.map(per => per.age);
console.log(ageArr)








