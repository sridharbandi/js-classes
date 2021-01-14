video = (text) => {
    let promisefun = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(text)
            resolve('Success')
        }, Math.floor(Math.random() * 3000))
    })
    return promisefun;
}
/*
video('Start')
    .then(() => video('Playing'))
    .then(() => video('Stop'))
    .then(() => video('Rewind')) */


video('Start')
    .then((text) => video('Playing'))
    .then((text) => video('Stop'))
    .then((text) => video('Rewind'))

