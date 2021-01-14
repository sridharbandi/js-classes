import {appendFileSync} from 'fs';

/*
//First approach
let numberlist = '';
for(let i = 1; i <= 10; i++){
    numberlist+= i+`\n`
}
writeFile('num.txt', numberlist, (err) => {
    if(err)
        console.log(err)
    
    console.log('Done');
})
*/

//Second Approach

for(let i = 1; i <= 10; i++){
    appendFileSync('num.txt', `${i}\n`) 
}
