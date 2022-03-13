/* 
    每个从Symbol()返回的symbol值都是唯一的。
    一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。
*/
console.log(Symbol()); // Symbol()

const sy = Symbol();
console.log(sy); // Symbol()
console.log(sy === Symbol()); // false


const sy1 = Symbol(12);
console.log(sy1); // Symbol(12)
