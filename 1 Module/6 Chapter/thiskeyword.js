let person1 = {
    name: 'John',
    age: 20,
    email: 'abc@abc.com',
    greet: function () {
        console.log('Hello ', this.name)
    }
}

person1.greet();

let person2 = {
    name: 'George',
    age: 32,
    email: 'abc@george.com',
    greet: function () {
        console.log('Hello ', this.name)
    }
}

person2.greet();

let car = {
    name: 'Honda City',
    make: 'Honda',
    color: 'Black',
    brand: function (){
        console.log(this.color, this.make);
    }
}

car.brand()