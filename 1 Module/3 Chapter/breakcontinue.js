//Print number from 1 to 50 but condition is  < 100;
/* 
let count = 1;
while( count < 100) {
    console.log(count)
    if(count === 50){
        break;
    }
    count++;
}
console.log( ' After while ') */


let number = 0;

while( number <=5 ){
    number++;
    if(number == 4){
        continue;
    }
    console.log( number );
}
console.log( ' After while ')