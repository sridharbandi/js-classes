/*let day = 'Fri';

switch (day) {
    case 'Mon':
        console.log(day, 'is a weekday');
        break;
    case 'Tue':
        console.log(day, 'is a weekday');
        break;
    case 'Wed':
        console.log(day, 'is a weekday');
        break;
    case 'Thu':
        console.log(day, 'is a weekday');
        break;
    case 'Fri':
        console.log(day, 'is a Friday - Thank God');
        break;
    case 'Sat':
        console.log(day, 'is a weekend');
        break;
    case 'Sun':
        console.log(day, 'is a weekend');
        break;
    default:
        console.log(day, 'is a not a valid day');
        break;
}*/

// Simplied Switch
let day = 'Fri';

switch (day) {
    case 'Mon': 
    case 'Tue':
    case 'Wed':
    case 'Thu': 
        console.log(day, 'is a weekday');
        break;
    case 'Fri':
        console.log(day, 'is a Friday - Thank God');
        break;
    case 'Sat':
    case 'Sun':
        console.log(day, 'is a weekend');
        break;
    default:
        console.log(day, 'is a not a valid day');
        break;
}
