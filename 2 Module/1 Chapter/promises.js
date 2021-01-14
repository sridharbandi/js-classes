let calc = new Promise((resolve, reject) => {
    let a = 10;
    let b = 12;
    if(a+b === 21){
        resolve('Success')
    }else{
        reject('Failed')
    }
});

//Then first and Catch next
calc.then((text) => console.log(`Resolved promise message ${text}`))
.catch((error) => console.log(`Rejected promise message ${error}`))


let calcu = new Promise((resolve, reject) => {
    let a = 1
    let b = 2
    if(a+b === 3){
        resolve()
    }else{
        reject()
    }
})
calcu.then(()=> console.log('Success'))
.catch(()=> console.log('Failure'))

