class Stack {
    constructor(){
        this.items = [];
    }
    
    // 插入元素
    push(value){
        this.items.push(value);
    }
    
    // 删除栈顶元素
    pop(){
        let val = this.items[this.items.length - 1];
        this.items.pop()
        return val;
    }

    // 查看栈顶元素
    peek(){
        return this.items[this.items.length - 1];
    }

    // 清空栈
    clear(){
        this.items = [];
    }

    // 判空
    isEmpty(){
        return this.items.length === 0;
    }

    // 栈的大小
    size(){
        return this.items.length;
    }
}


const s = new Stack();
s.push(1);
console.log(s);
console.log(s.pop());
console.log(s);