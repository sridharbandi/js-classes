import { setWorldConstructor} from "@cucumber/cucumber"

//Context sharing
class Addition {
    constructor(){
        this.a = 0;
        this.b = 0;
        this.sum = 0;
    }

    setValues(x, y){
        this.a = x;
        this.b = y;
    }

    add(){
        this.sum =  this.a + this.b;
    }

    result(){
        return this.sum;
    }
    
}

setWorldConstructor(Addition)
