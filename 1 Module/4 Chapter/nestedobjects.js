let  person = {
    name: 'John',
    age: 20,
    email: 'abc@abc.com',
    car: {
        name: 'Honda City',
        make: 'Honda',
        color: 'Black',
        brand: {
            tyre: 'Good year',
            audio: 'Bosch'
        }
    },
    cat : {
        name: ' Kitty',
        color: 'White',
        age: 3
    }
}


console.log( person.car.brand.tyre)