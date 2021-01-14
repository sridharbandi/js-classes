class ClassA {
    constructor(pername, perage){
        this.name = pername
        this.age = perage
        this.job = 'Manager'
    }

    getAge() {
        return this.age;
    }
}

class ClassB extends ClassA {
    
    constructor(personname, personage, personemail){
        super(personname, personage)
        this.email = personemail;
    }

    getAgefromParentClass(){
        return this.getAge()
    }

    getJob(){
        console.log(`Job role is ${this.job}`)
    }
}

let clsB = new ClassB('John', 30, 'abc@abc.com')
console.log(clsB)
//clsB.getJob()