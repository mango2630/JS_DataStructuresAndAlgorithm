const _items = Symbol('stackItems');

class Stack{
    constructor(){
        // 访问形式！
        this[_items] = [];
    }

    push(value){
        this[_items].push(value);
    }
}

console.log(_items); // Symbol(stackItems)
console.log(typeof _items); // Symbol

const s = new Stack()
s.push(12);
s.push(223);
console.log(s); // Stack { [Symbol(stackItems)]: [ 12, 223 ] }

let sy = Object.getOwnPropertySymbols(s);
console.log(sy); // [ Symbol(stackItems) ]
console.log(sy[0]); // [ Symbol(stackItems) ]
s[sy[0]].push(88); // Symbol(stackItems)
console.log(s); // Stack { [Symbol(stackItems)]: [ 12, 223, 88 ] }