import { setWorldConstructor } from '@cucumber/cucumber'

class Increment {
    constructor() {
        this.a = 0
    }

    init(num) {
        this.a = num;
    }

    increment(num) {
        this.a += num
    }

    getNum(){
        return this.a;
    }
}

setWorldConstructor(Increment)