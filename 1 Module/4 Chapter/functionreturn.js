function something(){
   let mul = 6*7;
   console.log('Value of mul ',mul)
   return mul;
}

const valueFromSomething = something();
console.log(valueFromSomething + 8)

const sumOfTwoNumbers = add(valueFromSomething, 10);

function add( y , z){
    console.log(y + z);
    return y + z;
}

