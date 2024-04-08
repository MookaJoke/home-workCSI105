class Queue{
    constructor(){
        this.mylist = [];
    }
    isEmpty(){
        return this.mylist.length == 0;
    }
    enQueue(value){
        this.mylist.push(value)
    }
    deQueue(){
        if(this.isEmpty()){
            return ""
        }
        else{
        return this.mylist.shift()
        }
    }
    getSize(){
        return this.mylist.length
    }
    display(){
        for(let i = 0;i<this.mylist.length;i++){
        console.log(this.mylist[i])
        }
    }
}
//----main----
let myQueue = new Queue()
console.log(myQueue)
console.log(myQueue.isEmpty())
myQueue.enQueue("a")
myQueue.enQueue("b")
myQueue.enQueue("c")
myQueue.display()
console.log(myQueue.isEmpty())
let data = myQueue.deQueue()
console.log("data to deQueue = ",data)
myQueue.display()
console.log("number of data in myQueue : ",myQueue.getSize())
