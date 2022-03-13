let arr = [1, 2, 3, 4, 5, 6, 7];

let value = arr.every(x => {
    return x % 2 == 0
})
console.log(value);