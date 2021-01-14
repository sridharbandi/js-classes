import {appendFile} from 'fs';

let content = '\nAm teaching the AXONE students on file operations';

appendFile('newfile.txt', content, (err) => {
    if(err){
        console.log(err)
    }

    console.log('Appeneded successfully')
});