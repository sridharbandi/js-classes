//Let is a block scope
function funLet(){
    let a = 'A'
    {
        let a = 'B'
        console.log(a)
    }
    console.log(a)

}
funLet()

//Var is a function scope
function funVar(){
    var a = 'A'
    {
        var a = 'B'
        console.log(a)
    }
    console.log(a)
}

funVar()