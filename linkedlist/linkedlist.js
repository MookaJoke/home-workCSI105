// -----class node -----
class Node{
    constructor(elem){
        this.element = elem;
        this.next = null ;
    }
}

// ----- class linked List -----
class LinkedList{
    constructor(){
        this.firstNode = null;
        this.lastNode = null;
        this.lenght = 0;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.firstNode){
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else{
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        this.lenght++;
        return this;
    }
    unshift(value){
        const newNode = new Node(value);
        if(!this.firstNode){
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else{
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        this.lenght++
        return this;
           
    }
    get(index){
        if(index < 0 || index >= this.lenght){
            return undefined;
        }
        let curentNode =this.firstNode;
        for(let i = 0;i < index;i++){
            curentNode = curentNode.next;
        }   
        return curentNode;
    }
    insert(index,value){
        if(index < 0 || index > this.lenght){
            return false
        }
        if (index === 0){
            return this.unshift(value)
        }
        if(index === this.lenght){
            return this.push(value)
        }
        const newNode = new Node(value)
        let beforeNode = this.get(index-1)
        newNode.next = beforeNode.next
        beforeNode.next = newNode;
        this.lenght++
        return this
    }
    pop(){
        if(this.lenght === 0){
            return undefined
        }
        let curentNode = this.firstNode
        let beforeNode = this.firstNode
        while(curentNode.next != null){
        beforeNode = curentNode
        curentNode = curentNode.next
        }
        this.lastNode = beforeNode
        this.lastNode.next = null
        this.lenght--
        if(this.lenght === 0){
            this.firstNode = null
            this.lastNode = null
        }
        return curentNode
    }
    shift(){
        if(this.lenght === 0){
            return undefined
        }
        let curentNode = this.firstNode
        this.firstNode = this.firstNode.next
        curentNode = null
        this.lenght--
        if(this.lenght === 0){
            this.lastNode = null
        }
        return curentNode
    }
    remove(index){
        if(index <0 || index >= this.lenght){
        return undefined
        }
        if(index === 0){
            return this.shift()
        }
        if(index === this.lenght-1){
            return this.pop()
        }
        let curentNode = this.get(index)
        let beforeNode = this.get(index-1)
        beforeNode.next = curentNode.next
        curentNode.next = null
        // beforeNode.next = null
        this.lenght--
        return curentNode
    }
    set(index,value){
        let temp = this.get(index)
        if(temp){
            temp.element = value
            return true
        }
        return false
    }

}

// -----main-----
let d = document.getElementById("data")
let num = document.getElementById("number")
let re = document.getElementById("result")
let mylist = new LinkedList();
// -----test function pop-----
// mylist.push("a")
// mylist.push("b")
// mylist.push("c")
// mylist.push("d")
// console.log(mylist)
// let data = mylist.pop()
// console.log("Data delete = :",data.element)
// console.log(mylist)
// ----
mylist.push("a")
mylist.push("b")
mylist.push("c")
mylist.push("d")
// console.log(mylist)
// mylist.set(2,"g")
// let data = mylist.remove(2)
// console.log("Data delete = :",data.element)
// console.log(mylist)

function pushData(){
    mylist.push(d.value);
    console.log(mylist)
    // displayData()
    d.value = ""
}
function popData(){
    mylist.pop(d.value)
    console.log(mylist)
    d.value = ""
}
function shiftData(){
    mylist.shift(d.value)
    console.log(mylist)
    d.value = ""
}
function setData(){
    mylist.set(num.value,d.value)
    console.log(mylist)
    d.value = ""
}
function unshiftData(){
    mylist.unshift(d.value)
    console.log(mylist)
    // displayData()
    d.value = ""
}
function removeData(){
    let temp = mylist.remove(num.value)
    re.innerHTML = "Data delete =  " + temp.element
    // displayData()
    console.log(mylist)
    num.value = ""
}
function getData(){
    let temp = mylist.get(num.value)
    if(temp != undefined){
        re.innerHTML = "Data at Node : " + num.value + " Data is = "+ temp.element
        // console.log(temp.element)
    }
    else{
        re.innerHTML = "Index out of bounds"
        }
    // displayData()
    num.value = ""
}
function insertData(){
    mylist.insert(num.value,d.value)
    console.log(mylist)
    // displayData()
    d.value = ""
    num.value = ""
}
function displayData(){
    re.innerHTML = ""
    for(let i = 0;i < mylist.lenght;i++){
        let data = mylist.get(i)
        re.innerHTML = re.innerHTML + data.element+ " ";
        if (i != mylist.lenght -1){
            re.innerHTML = re.innerHTML + "==>";
        }
    }
}
// let mylist = new LinkedList();
// console.log(mylist);
// mylist.push("a");
// console.log(mylist);
// mylist.push("b");
// console.log(mylist);
// mylist.push("c");
// console.log(mylist);
// mylist.unshift("d")
// console.log(mylist)


// console.log("-----get------")
// let temp = mylist.get(0)
// if(temp != undefined){
//     console.log(temp.element)
// }
// else{
//     console.log("Index out of bounds")
// }
// console.log("-----insert------")
// mylist.insert(2,"g")
// console.log(mylist)



// const newNode = new Node('a');
// console.log(newNode);