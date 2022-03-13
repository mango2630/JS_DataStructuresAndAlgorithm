let arr = [1, 2, 3, 4, 5, 6, 7];

let value = arr.reduce((preValue, currentValue, index, array) => {
    return preValue + currentValue
})

console.log(value);