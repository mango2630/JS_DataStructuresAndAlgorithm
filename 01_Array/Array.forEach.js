let arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(x => {
    if(x % 2 == 0){
        x ++;
    }
    console.log(x);
});