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