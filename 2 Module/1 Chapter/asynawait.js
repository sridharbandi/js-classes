video = (text) => {
    let promisefun = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(text)
            resolve('Failed')
        }, Math.floor(Math.random() * 3000))
    })
    return promisefun;
}

/*
async function videomode(){
    await video('Start')
    await video('Playing')
    await video('Stop')
    await video('Rewind')
} */

videomode = async () => {

    await video('Start')
    console.log('Hello')
    await video('Playing')
    await video('Stop')
    await video('Rewind')
}

videomode()