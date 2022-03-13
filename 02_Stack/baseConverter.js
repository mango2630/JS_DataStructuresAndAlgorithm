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


/*  
    params: decValue, base(几进制)
*/
function baseConver(decValue, base){
    const restStack = new Stack(); // 放余数
    const digitis = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let number = decValue;
    let rem = 0; 
    let baseString = ''

    if(!(base >= 2 && base <= 36)){
        return '';
    }

    while(number > 0){
        rem = Math.floor(number % base);
        number = Math.floor(number / base);
        restStack.push(rem);
    }

    // output
    while(!restStack.isEmpty()){
        baseString += digitis[restStack.pop()];
    }

    return baseString;
}

console.log(baseConver(100345, 35));
console.log(baseConver(16, 4));