let arr = [1, 2, 3, 4, 5];
arr[arr.length] = 6;
arr.push(7);

// 头插
Array.prototype.insertFirstPosition = function(value){
    for(let i = this.length; i > 0; i --){
        this[i] = this[i - 1];
    }
    this[0] = value;
}

// 头删除


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


arr.insertFirstPosition(0);
arr.unshift(-1);

arr = arr.deleteFirstPostion();

// 从 index = 0开始，删除两个元素
arr.splice(0, 2);

// 从 index = 2开始，删除0个元素，插入3个元素
arr.splice(2, 0, 1, 2, 3);

console.log(arr);
console.log(arr.length);
delete arr[0];
console.log(arr.length);

for (const value of arr) {
    console.log(value);
}