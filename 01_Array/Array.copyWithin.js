let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.copyWithin(0, 6);
console.log(arr); // 7, 8, 3, 4, 5, 6, 7, 8

arr.copyWithin(1, 3, 5);
console.log(arr); // 7, 4, 5, 4, 5, 6, 7, 8