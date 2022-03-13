# 1. 数组

> - 存储一系列类型相同的值。
>
> - 但是，在`JavaScript`中可以不保存相同类型的值。

## 1.1 数组的创建和初始化

~~~ js
// 方式一
let arr = new Array();
let arr = new Array(7);
let arr = new Array('monday', 'tuesday');

// 方式二
let arr = [];
let arr = ['monday', 'tuesday']
~~~

---

## 1.2 添加元素

### 1.2.1 在数组末尾添加元素

1. 去长度`arr.length`添加

   ~~~ js
   let arr = [1, 2, 3, 4, 5];
   arr[arr.length] = 6;
   ~~~

2. `push()`

   ~~~ js
   let arr = [1, 2, 3, 4, 5];
   arr.push(7);
   ~~~

---

### 1.2.2 在数组开头插入元素

1. 循环添加：

   ~~~ js
   let arr = [1, 2, 3, 4, 5];
   arr[arr.length] = 6;
   arr.push(7);
   
   // 头插：在原型上加入该方法
   Array.prototype.insertFirstPosition = function(value){
       for(let i = this.length; i > 0; i --){
           this[i] = this[i - 1];
       }
       this[0] = value;
   }
   
   arr.insertFirstPosition(0)
   console.log(arr);
   ~~~

2. `unshift()`方法

   ~~~ js
   let arr = [1, 2, 3, 4, 5];
   arr.unshift(-1);
   console.log(arr);
   ~~~

---

## 1.3 删除元素

### 1.3.1 尾删

`pop()`方法

~~~ js
let arr = [1, 2, 3, 4, 5];
arr[arr.length] = 6;
arr.push(7);
arr.pop();
console.log(arr);
~~~

### 1.3.2 头删

1. 自定义方法——循环删除

   - 注意BUG:

     ~~~ JS
     for(let i = 0; i < arr.length; i ++){
         arr[i] = arr[i + 1];
         // NOTICE: arr[arr.length - 1] = arr[arr.length] = undefined
     }
     for(let i = 0; i < arr.length - 1; i ++){
         arr[i] = arr[i + 1];
         // NOTICE: arr[arr.length - 1] 值还在
     }
     ~~~

   - 正确办法：

     ~~~ js
     // 重新返回一个新数组
     Array.prototype.removeUndefined = function(arr){
         let newArr = [];
         for(let i = 0; i < arr.length; i ++){
             if(arr[i] != undefined){
                 newArr.push(arr[i])
             }
         }
         return newArr;
     }
     // 删除元素！
     Array.prototype.deleteFirstPostion = function(){
         for(let i = 0; i < this.length; i ++){
             this[i] = this[i + 1];
         }
         return this.removeUndefined(this)
     }
     ~~~

   ~~~ js
   // 完整示例
   let arr = [1, 2, 3, 4, 5];
   // insert
   arr[arr.length] = 6;
   arr.push(7);
   
   // 重新返回一个新数组
   Array.prototype.removeUndefined = function(arr){
       let newArr = [];
       for(let i = 0; i < arr.length; i ++){
           if(arr[i] != undefined){
               newArr.push(arr[i])
           }
       }
       return newArr;
   }
   Array.prototype.deleteFirstPostion = function(){
       for(let i = 0; i < this.length; i ++){
           this[i] = this[i + 1];
       }
       return this.removeUndefined(this)
   }
   // delete
   arr = arr.deleteFirstPostion()
   ~~~

2. `shift()`

   ~~~ js
   arr.shift()
   ~~~

---

## 1.4 在任意位置删除或插入元素

### 1.4.1 `splice(index, number, value)`

 ~~~ js
 // 从 index = 0开始，删除两个元素
 arr.splice(0, 2);
 
 // 从 index = 2开始，删除0个元素，插入3个元素
 arr.splice(2, 0, 1, 2, 3);
 ~~~

### 1.4.2 delete

长度没有改变，值改为`undefined`。

~~~ js
// arr[3] = undefined!!!
delete arr[3]
~~~

~~~ js
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
delete arr[0];
console.log(arr.length);
~~~

---

## 1.5 JavaScript 的数组方法

### 1.5.1 数组合并

~~~ js
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
let arrNew = arr.concat(arr1, arr2);
~~~

### 1.5.2 迭代器函数

1. `every()`

   ~~~ js
   // 判断 arr 中的元素是不是都为偶数。
   let arr = [1, 2, 3, 4, 5, 6, 7];
   
   let value = arr.every(x => {
       return x % 2 == 0
   })
   console.log(value);
   ~~~

2. `some()`

   ~~~ js
   // 判断 arr 中的元素是否含有偶数。
   let arr = [1, 2, 3, 4, 5, 6, 7];
   
   let value = arr.some(x => {
       return x % 2 == 0
   })
   console.log(value);
   ~~~

3. `forEach()`

   ~~~ js
   let arr = [1, 2, 3, 4, 5, 6, 7];
   
   arr.forEach(x => {
       if(x % 2 == 0){
           x ++;
       }
       console.log(x);
   });
   ~~~

4. `map()`

   ~~~ js
   let arr = [1, 2, 3, 4, 5, 6, 7];
   
   let value = arr.map(x => {
       return x % 2 == 0;
   })
   
   console.log(value); // false, true,false, true,false, true,false
   ~~~

5. `filter()`

   ~~~ js
   let arr = [1, 2, 3, 4, 5, 6, 7];
   
   let value = arr.filter(x => {
       return x % 2 == 0;
   })
   
   console.log(value);  // 2, 4, 6
   ~~~

6. `reduce(preValue, currentValue[, index, array])` 返回一个被叠加到累加器的值。

   ~~~ js
   let arr = [1, 2, 3, 4, 5, 6, 7];
   
   let value = arr.reduce((preValue, currentValue, index, array) => {
       return preValue + currentValue
   })
   
   console.log(value);
   ~~~

----

## 1.6 ES6 和 数组的新功能

### 1.6.1 `for...of...`

~~~ js
let arr = [1, 2, 3, 4, 5, 6, 7];
for (const value of arr) {
    console.log(value);
}
~~~

### 1.6.2 `@@iterator`对象

~~~ js
let arr = [1, 2, 3, 4, 5, 6];

let iterator = arr[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
~~~

### 1.6.3 `entries()` `keys()` `values()`

~~~js
let arr = [1, 2, 3, 4, 5, 6];
let iterator = arr[Symbol.iterator]();
let entry = arr.entries();

for(let i = 0; i < arr.length; i ++){
    console.log(entry.next().value);
}
~~~

~~~ js
let keyValue = arr.keys();
for(let i = 0; i < arr.length; i ++){
    console.log(keyValue.next().value);
}
~~~

~~~ js
let keyValue = arr.values();
for(let i = 0; i < arr.length; i ++){
    console.log(keyValue.next().value);
}

~~~

### 1.6.4 `Array.from()`

~~~ js
// 复制数组
let arr = [1, 2, 3];
let newArr = Array.from(arr);
~~~

### 1.6.5 `Array.of()`

根据传入的参数创建一个新数组。

~~~ js
let arr = [1, 2, 3];
let newArr = Array.of(1, 2,  ...arr);
~~~

### 1.6.6 `Array.fill()`

用静态值填充数组。

~~~ js
// 会改变原数组
let arr = [1, 2, 3];
arr.fill(10);
console.log(arr);
~~~

~~~ js
// 创建一个数组并且值全为0
let ones = Array(5).fill(0);
console.log(ones);
~~~

~~~ js
let arr = [1, 2, 3, 4, 5, 6];
arr.fill(0, 3, 5);
console.log(arr); // [ 1, 2, 3, 0, 0, 6 ]
~~~

### 1.6.7 `Array.copyWithin()`

复制数组中的一系列元素到同一数组指定的起始位置。

~~~ js
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.copyWithin(0, 6);
console.log(arr); // 7, 8, 3, 4, 5, 6, 7, 8

arr.copyWithin(1, 3, 5);
console.log(arr); // 7, 4, 5, 4, 5, 6, 7, 8
~~~



### 1.6.8 排序元素 `sort()`

~~~ js
let arr = [1, 4, 2, 5, 11, 44, 121, 990];

function compare(a, b){
    if(a > b){
        return 1;
    }
    if(a < b){
        return -1;
    }
    if(a == b){
        return 0;
    }
}

arr.sort(compare);
console.log(arr);
~~~

~~~ js
// 简化
arr.sort((a, b) => a-b);
~~~

### 1.6.9 搜索

- `indexOf()` 返回与参数匹配的第一个元素得索引。
- `lastIndexOf()` 返回与参数匹配的最后一个元素得索引。
- `find()` 返回满足条件的第一个值；没有返回undefined。
- `findIndex()` 返回满足条件的第一个值得索引；没有返回-1。
- `includes()` 判断是否存在某元素，true | false。

### 1.6.10 输出数组为字符串

- `toString()`
- `join()`

~~~ js
let arr = [1, 2, 4, 5, 6, 43, 55];
console.log(arr.join(''));// 124564355
console.log(arr.join('-'));// 1-2-4-5-6-43-55
console.log(arr.toString()); //1,2,4,5,6,43,55
~~~

----



# 2. 栈

> 栈 是一个遵从 **后进先出** 原则的有序集合。

## 2.1 基于数组的 Stack

~~~ js
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
~~~

---

## 2.2 基于JS对象的 Stack

~~~ js
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
~~~

---

## 2.3 保护数据结构内部元素



~~~ js
let s = new Stack()
s.push(12);
s.push(11);
console.log(s);
console.log(Object.getOwnPropertyNames(s)); // [ 'count', 'items' ]
console.log(Object.keys(s)); // [ 'count', 'items' ]
console.log(s.items); // { '0': 12, '1': 11 }
~~~

表明 `count` `items` 属性是公开的，并没有得到保护。

---

### 2.3.1 下划线命名约定

~~~ js
class Stack{
    constructor(){
        this._count = 0;
        this._items = {}; 
    }
}
~~~

这种方式只是一种约定，不能保护数据。

### 2.3.2 用ES6的限定作用域 `Symbol` 实现

~~~ js
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
s[sy[0]].push(88); // Symbol(stackItems) !!! 可以访问到_items
console.log(s); // Stack { [Symbol(stackItems)]: [ 12, 223, 88 ] }
~~~

这种方法是一个假的私有属性。

因为`Object.getOwnPropertySymbols()`该方法可以取得类里面声明的所有 `Symbols`属性。

---

### 2.3.3 用ES6的`WeakMap`实现类

- `WeakMap` 可以存储键值对。
- 实现了真正的属性私有，但是代码可读性不强。

~~~ js
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
~~~

---

## 2.4 进制转换

### 2.4.1 十进制转二进制

~~~ js
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
~~~



### 2.4.2 进制转换算法

~~~ js
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
~~~

---

# 3. 队列

> **队列**是遵循**先进先出**原则的一组有序的项。



## 3.1 数据结构队列

~~~ js
class Queue{
    constructor(){
        this.count  = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(value){
        this.items[this.count] = value;
        this.count ++;
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const res = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount ++;
        return res;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    isEmpty(){
        return this.count - this.lowestCount === 0;
    }

    size(){
        return this.count - this.lowestCount;
    }

    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
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
~~~

---

## 3.2 双端队列

> - 双端队列是一种允许我们同时从前端和后端添加和移出元素的特殊队列。
> - 在计算机科学中，双端队列的一个常见应用是**存储一系列撤销操作**。

~~~ js
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
~~~

---

## 3.3 应用

### 3.3.1 循环队列——击鼓传花游戏

~~~ js
class Queue{
    constructor(){
        this.count  = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(value){
        this.items[this.count] = value;
        this.count ++;
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const res = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount ++;
        return res;
    }

    isEmpty(){
        return this.count - this.lowestCount === 0;
    }

    size(){
        return this.count - this.lowestCount;
    }
}

function hotPotato(elementList, count){
    const queue = new Queue()
    const resList = [];

    for(let i = 0; i < elementList.length; i ++){
        queue.enqueue(elementList[i]);
    }

    while(queue.size() > 1){
        for(let i = 0; i < count; i ++){
            queue.enqueue(queue.dequeue());
        }
        resList.push(queue.dequeue())
    }

    return {
        resList,
        winner: queue.dequeue()
    }
}

const ele = ['a', 'b', 'c', 'd', 'e'];
const res = hotPotato(ele, 7);
console.log(res);
~~~



### 3.3.2 回文检查器

~~~ js
class Dequeue{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
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
    isEmpty(){
        return this.count - this.lowestCount === 0;
    }

    size(){
        return this.count - this.lowestCount;
    }
}


function palindromeChecker(str){
    if(str === undefined || str === null || (str !== null && str.length === 0)){
        return false;
    }

    const qu = new Dequeue();
    const arr = str.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let first, last;

    for(let i = 0; i < arr.length; i ++){
        qu.addBack(arr[i]);
    }

    while(qu.size() > 1 && isEqual){
        first = qu.removeFront();
        last = qu.removeEnd();

        if(first != last){
            isEqual = false;
        }
    }

    return isEqual;
}

console.log(palindromeChecker('abam'));
~~~



---

## 3.4 JavaScript 任务队列

当我们在浏览器中打开新标签时，就会创建一个任务队列。

这是因为每个标签都是单线程处理所有的任务，称为**事件循环**。

