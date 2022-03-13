class Queue{
    constructor(){
        this.count  = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(value){
        this.items[this.count] = value;
        this.count ++;
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const res = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount ++;
        return res;
    }

    isEmpty(){
        return this.count - this.lowestCount === 0;
    }

    size(){
        return this.count - this.lowestCount;
    }
}

function hotPotato(elementList, count){
    const queue = new Queue()
    const resList = [];

    for(let i = 0; i < elementList.length; i ++){
        queue.enqueue(elementList[i]);
    }

    while(queue.size() > 1){
        for(let i = 0; i < count; i ++){
            queue.enqueue(queue.dequeue());
        }
        resList.push(queue.dequeue())
    }

    return {
        resList,
        winner: queue.dequeue()
    }
}

const ele = ['a', 'b', 'c', 'd', 'e'];
const res = hotPotato(ele, 7);
console.log(res);