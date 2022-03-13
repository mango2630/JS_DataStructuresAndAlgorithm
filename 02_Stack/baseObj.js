class Stack{
    constructor(){
        this.count = 0; // 数组长度
        this.items = {}; // key:value
    }

    push(value){
        // console.log(typeof this.count);
        this.items[this.count] = value;
        this.count ++;
    }

    pop(){
        if(this.count === 0){
            return undefined;
        }
        this.count --;
        const val = this.items[this.count];
        delete this.items[this.count];

        return val;
    }

    peek(){
        if(this.count === 0){
            return undefined;
        }
        return this.items[this.count - 1];
    }

    size(){
        return this.count;
    }

    clear(){
        this.items = {};
        this.count = 0;
    }

    isEmpty(){
        return this.count === 0;
    }

    // 数组有自己的toString方法，所以不用关心。
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[0]}`;
        console.log(objString);

        for(let i = 1; i < this.count; i ++){
            objString = `${objString},${this.items[i]}`
        }

        return objString;
    }
}

let s = new Stack()
s.push(12);
s.push(11);
console.log(s);
console.log(Object.getOwnPropertyNames(s)); // [ 'count', 'items' ]
console.log(Object.keys(s)); // [ 'count', 'items' ]
console.log(s.items);
