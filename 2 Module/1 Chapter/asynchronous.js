/*console.log('First')
console.log('Second')
setTimeout(() => {
    console.log('Third')
}, 2000)
console.log('Four')
console.log('Five') */


video = (text) => {
    let time = Math.floor(Math.random()*3000);
    setTimeout(() => {
        console.log(text, time)
    }, time)
}

video('Start')
video('Playing')
video('Stop')

//1.  Callbacks
//2.  Promises (resolve  & reject)
//3.  Async awaits - extension of promises
