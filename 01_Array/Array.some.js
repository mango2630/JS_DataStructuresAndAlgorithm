// 判断 arr 中的元素是否含有偶数。
let arr = [1, 2, 3, 4, 5, 6, 7];

let value = arr.some(x => {
    return x % 2 == 0
})
console.log(value);