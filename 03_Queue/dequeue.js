class Dequeue{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addFront(value){
        if(this.isEmpty()){
            this.addBack(value)
        }else if(this.lowestCount > 0){
            this.items[this.lowestCount - 1] = value;
            this.lowestCount --;
        }else{
            for(let i = this.count; i > 0; i --){
                this.items[i] = this.items[i - 1];
            }
            this.count ++;
            this.items[0] = value;
            this.lowestCount = 0;
        }
    }

    addBack(value){
        this.items[this.count] = value;
        this.count ++;
    }

    removeFront(){
        if(this.isEmpty()){
            return undefined;
        }
        const res = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount ++;
        return res;
    }
    removeEnd(){
        if(this.isEmpty()){
            return undefined;
        }
        const res = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count --;
        return res;
    }
    peekFront(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    peekEnd(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1];
    }
    isEmpty(){
        return this.count - this.lowestCount === 0;
    }

    size(){
        return this.count - this.lowestCount;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.count; i ++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}


const qu = new Dequeue();
qu.addBack(1);
qu.addBack(2);
qu.addBack(3);
qu.addFront(0);
qu.addFront(-1);

qu.removeFront();
qu.removeEnd()

console.log(qu.toString());
console.log(qu.size());