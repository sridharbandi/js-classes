//19th Ques
/*
let studentRecords = [
    {name: 'John', id: 123, marks: 98},
    {name: 'Baba', id: 101, marks: 23},
    {name: 'Yaga', id: 200, marks: 45},
    {name: 'Wick', id: 115, marks: 75}
]
/*
//Tradition for loop
let names = []
for(let i = 0; i < studentRecords.length; i++){
    names.push(studentRecords[i].name.toUpperCase())
}
console.log(names)

//For of
let namesForof = []
for ( item of studentRecords){
    namesForof.push(item.name.toUpperCase())
}
console.log(namesForof)

//Foreach
let namesForeach = []
studentRecords.forEach(ele => namesForeach.push(ele.name.toUpperCase()))

console.log(namesForeach)

let studentnames = studentRecords.map(student => student.name.toUpperCase())
console.log(studentnames)*/

//20th Ques
/*let studentRecords = [
    {name: 'John', id: 123, marks: 98},
    {name: 'Baba', id: 101, marks: 23},
    {name: 'Yaga', id: 200, marks: 45},
    {name: 'Wick', id: 115, marks: 75}
]

//Traditional For loop
let students = []
for(let i = 0; i < studentRecords.length; i++){
    if(studentRecords[i].marks > 40 && studentRecords[i].id > 110){
        students.push(studentRecords[i])
    }
}
console.log(students)

//For of
let studentsForof = []
for( student of studentRecords){
    if(student.marks > 40 && student.id > 110){
        studentsForof.push(student);
    }
}

console.log(studentsForof)

//For each
let studentsForEach = []
studentRecords.forEach(ele => {
    if(ele.marks> 40 && ele.id > 110 ){
        studentsForEach.push(ele)
    }
})

console.log( studentsForEach)

//Filter method
let studentsFilter = studentRecords.filter(student => student.marks > 40 && student.id > 110);
console.log(studentsFilter) */

//21st Ques
let studentRecords = [
    {name: 'John', id: 123, marks: 98},
    {name: 'Baba', id: 101, marks: 23},
    {name: 'Yaga', id: 200, marks: 45},
    {name: 'Wick', id: 115, marks: 75}
]

let student50names = studentRecords.filter(student =>  student.marks>50).map(student => student.name)
console.log(student50names)

