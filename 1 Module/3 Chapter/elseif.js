//Simple program to verify given number is a positive number or not
let number = 0;

if (number > 0) {
    console.log(number + ' is a positive number');
}
else if (number === 0){
    console.log(number + ' is a zero');
}
else {
    console.log(number + ' is a negative number');
}

console.log('statement after if else - else if'); 

//NESTED IF ELSE.
//SImple program to print the day is a weekday (Mon, Tue, Wed, Thu) and Friday (Fri) and Weekend (Sat or Sun)

let day = 'Mon';

if (day === 'Mon') {
    console.log(day + ' is a weekday');
} else if (day === 'Tue') {
    console.log(day + ' is a weekday');
} else if (day === 'Wed') {
    console.log(day + ' is a weekday');
} else if (day === 'Thu') {
    console.log(day + ' is a weekday');
} else if (day === 'Fri') {
    console.log(day + ' is a Friday - Thank God');
} else if (day === 'Sat') {
    console.log(day + ' is a Weekend');
} else if (day === 'Sun') {
    console.log(day + ' is a Weekend');
} else {
    console.log(day, 'is not a valid day')
} 

//SImplified else if

let day = 'Mon';

if (day === 'Mon' || day === 'Tue' || day === 'Wed' || day === 'Thu') {
    console.log(day + ' is a weekday');
} else if (day === 'Fri') {
    console.log(day + ' is a Friday - Thank God');
} else if (day === 'Sat' || day === 'Sun') {
    console.log(day + ' is a Weekend');
} else {
    console.log(day, 'is not a valid day')
}