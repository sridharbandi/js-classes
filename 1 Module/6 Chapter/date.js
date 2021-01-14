

//Default format = YYYY-MM-DD
//Date  Params
let pastDate = new Date('1980-10-02')
console.log(pastDate)

//SKip Day
let pastDateNoDay = new Date('1980-10')
console.log(pastDateNoDay)

//SKip Day & Month
let pastDateNoDayNoMonth = new Date('1980')
console.log(pastDateNoDayNoMonth)

//Short format = MM/DD/YYYY
let shortDate = new Date('10/02/1980')
console.log(shortDate)

//new Date(y, m, d, h, m, s, ms)
let newDate = new Date(2020, 1, 26, 9, 30, 35, 766)
console.log(newDate)

let date = new Date();
console.log(date)

console.log(date.getFullYear()) //Get year
console.log(date.getMonth()) //Get month [ 0 - 11]
console.log(date.getDate()) //Get to get date
console.log(date.getDay()) // Get day [sunday = 0, monday = 1.... sat =6]

console.log(date.getHours()) // Get hours
console.log(date.getMinutes()) //Get minutes
console.log(date.getTime()) //Get time in milliseconds