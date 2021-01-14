
/*for (let counter = 1; counter <= 10;  counter++){
    console.log(counter, 'I love JavaScript'); 
}
console.log(' Outside for loop ');*/

//Write a program to print numbers from 1 to 100

/*for ( let count = 1; count < 101; count++){
    console.log(count);
}*/

//Write a program to print even numbers from 1 to 100
/*for ( let count = 0; count <= 100; count += 2){
    console.log(count);
}*/
//ALternate way
for ( let count = 1; count <= 100; count++){
    if(count % 2 === 0){
        console.log(count, 'Is a even number');
    }else {
        console.log(count, 'Is a odd number');
    }
}