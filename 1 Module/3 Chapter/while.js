/*let count = 1;

while (count <= 100) {
    console.log(count);
    count++;
}
console.log('After while loop')
*/
//Write a program to print even and odd numbers from 1 to 100

let count = 1;
while ( count <= 100 ){
    if(count % 2 == 0){
        console.log(count, 'is a even number')
    }else{
        console.log(count, 'is a odd number')
    }
    count++;
}