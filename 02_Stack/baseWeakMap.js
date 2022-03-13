const items = new WeakMap();

class Stack{
    constructor(){
        items.set(this, []); // key: value | (this: [])
    }

    push(value){
        const s = items.get(this);
        s.push(value);
    }

    pop(){
        const s = items.get(this); // typeof s == arr
        return s.pop();
    }
}