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


function decimalToBinary(value){
    const restStack = new Stack(); // 放余数
    console.log(restStack);
    let number = value;
    let rem = 0; 
    let binaryString = ''

    while(number > 0){
        rem = Math.floor(number % 2);
        number = Math.floor(number / 2);
        restStack.push(rem);
    }

    // output
    while(!restStack.isEmpty()){
        binaryString += restStack.pop()
    }

    return binaryString;
}

console.log(decimalToBinary(10));