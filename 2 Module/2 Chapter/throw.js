//throw 5

//throw 5/0

/*
try {
    throw 5/0
} catch (error) {
   console.log(error) 
} */

//Custom error message
//throw new Error('I am fialed for so an so reason');

//Program to verify student is passed/failed

passfail = (marks) => {
    if(marks < 35){
        throw new Error(`Student failed and his marks are ${marks}`)
    }else{
        console.log(`Student is passed with marks ${marks}`)
    }
}

passfail(45);
passfail(25);
