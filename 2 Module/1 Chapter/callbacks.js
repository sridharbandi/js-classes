/*print = (xyz, callback) => {
    setTimeout(() => {
        console.log(xyz)
        callback()
    }, Math.floor(Math.random() * 3000))
}

print('Hello', () => {
    console.log('Sridhar')
})*/

//2nd Example
video = (text, callback) => {
    setTimeout(() => {
        console.log(text)
        callback()
    }, Math.floor(Math.random() * 3000))
}

video('Start', () => {//First start
    video('Playing', () => {//Second start
        video('Stop', () => { // Thrid start
            video('Rewind', () => { // Fourth start
                console.log('Done')
            })//Fourth end
        })// Third end
    })//Second end 
})//First end





//video('Playing')
//video('Stop')



