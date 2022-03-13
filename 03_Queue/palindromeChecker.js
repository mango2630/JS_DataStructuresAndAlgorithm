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