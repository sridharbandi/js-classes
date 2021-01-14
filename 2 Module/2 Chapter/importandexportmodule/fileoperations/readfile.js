import {readFile} from 'fs'

readFile('newfile.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

