//15th Ques
let vowels = 'aeiou';

function vowelCount(str){
    let result = 0;
    for(let i = 0; i < str.length; i++){
       if(vowels.includes(str[i])) {
           result += 1;
       }
    } 

    return result;
}

console.log(vowelCount('quick brown fox'))
console.log(vowelCount('jumps over the lazy dog'))

//16th Ques
function repeat(str, count){
    let result = '';
    for( let i = 0; i < count; i++){
        result += str;
    }
    console.log( result);
}

repeat('t', 6);
repeat('a', 9);

//17th Ques
function charCount(str, letter){
    let count = 0;
    for( let i = 0; i < str.length; i++){
        if(str.charAt(i) == letter){
            count++;
        }
    }
    return count;
}

console.log(charCount('quick brown fox', 'o'));
//18th Ques
let output = ''
for(let i = 1; i < 8 ; i++ ){
    output += i
    if(output == '123'){
        continue;
    }
    console.log(output);
}


