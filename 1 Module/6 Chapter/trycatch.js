//consol.log('Hello');
//console.log('Hello  Two');

//Try catch - Syntax Error
/*try {
    consol.log('Hello');
}
catch (error) {
    console.log(`Error message is ${error}`)
}
console.log('Hello  Two');*/

//Try catch - Runtime Error
/*try {
    console.log(1-a);
}
catch (error) {
    console.log(`Error message is ${error}`)
}

console.log('Next statements')*/

try{
    console.log(1-a);
    console.log('Next  below  the error')
}
catch(err){
    console.log(`Error message is ${err}`)
}
finally{
    console.log('Finally Block')
}
console.log('Next statements')

