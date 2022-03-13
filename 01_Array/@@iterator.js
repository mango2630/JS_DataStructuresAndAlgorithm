let arr = [1, 2, 3, 4, 5, 6];

let iterator = arr[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

let entry = arr.entries();
for(let i = 0; i < arr.length; i ++){
    console.log(entry.next().value);
}

let keyValue = arr.keys();
for(let i = 0; i < arr.length; i ++){
    console.log(keyValue.next().value);
}
