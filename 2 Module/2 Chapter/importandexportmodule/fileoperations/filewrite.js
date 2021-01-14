import {writeFile, readFile} from 'fs';

let content = 'Am teaching the AXONE students on file operations';

writeFile('file.txt', content, (err) => {
    if(err){
        console.log(err)
    }

    console.log('File is saved successfully')
});

readFile('file.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

