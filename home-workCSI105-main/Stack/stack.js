class Stack{
    constructor(){
        this.myList = [];
    }
    isEmpty(){
        // return this.myList.length == 0;----can go this way----
        if(this.myList.length == 0){
            return true;
        }
        else{
            return false;
        }
    }
    push(value){
        this.myList.push(value);
    }
    pop(){
        if(this.isEmpty()){
            return " ";
        }
        else{
            return this.myList.pop();
        }
    }

    peek(){
        return this.myList[this.myList.length-1];
    }

    stackDisplay(){
        for(let i = this.myList.length-1; i >=0;i--){
            console.log(this.myList[i]);
        }
    }
}


// ----- main -----
let e = document.getElementById("exe")
let re = document.getElementById("result")
function displayInfixToPostfix(){
    let result = infixToPostfix(e.value)
    re.innerHTML = "result : "+result
}

// let result = infixToPostfix("((A+B)*C/D+E^F)/G")
// console.log("result = ",result)
function infixToPostfix(str){
    let output = ""
    let myStack = new Stack()
    for(let i = 0;i<str.length;i++){
        ch = str.charAt(i)
        // console.log(ch)
        if(ch == "("){
            myStack.push(ch)
            myStack.stackDisplay()
        }
        else if(checkOperator(ch)){
            while(!myStack.isEmpty() && checkPriority(ch) <= checkPriority(myStack.peek())){
                output = output+myStack.pop()        
            }
            myStack.push(ch)
            myStack.stackDisplay()
        }
        else if(ch==")"){
            while(!myStack.isEmpty() && myStack.peek() != "("){
                output = output+myStack.pop()
            }
            myStack.pop()
            myStack.stackDisplay()
        }
        else{
            output = output+ch
            console.log("output = ",output)
        }
    }
    while(!myStack.isEmpty()){
        output = output+myStack.pop()
    }
    return output
}

function checkOperator(c){
    if(c=="+" || c=="-" || c=="*" || c=="/" || c=="^"){
        return true
    }    
    else{
        return false
    }
}

function checkPriority(c){
    if(c=="+" || c=="-"){
        return 1
    }
    else if(c=="*" || c=="/"){
        return 2
    }
    else if(c=="^"){
        return 3
    }
    else{
        return 0
    }
}


// -----Test-----
// let myStack = new Stack();
// console.log(myStack);
// myStack.push("a")
// myStack.push("b")
// myStack.push("c")
// console.log(myStack.isEmpty())
// myStack.stackDisplay()
// let data = myStack.pop()
// console.log("data delete =",data)
// myStack.stackDisplay()
// console.log("Top of stack =",myStack.peek())
function PostfixToInfix(str) {
    let myStack = new Stack()
    let ch, operand1, operand2
    let stepByStep = ""
    for(let i = 0;i< str.length;i++){
        ch = str.charAt(i)
        if( !checkOperator(ch)){
            myStack.push(ch)
            // stepByStep += "Push: " +ch+"<br>"
        }
        else{
            operand1 = myStack.pop()
            operand2 = myStack.pop()
            let temp = '('+ operand2 + ch +operand1 + ')'
            myStack.push(temp)
            // stepByStep += "Pop" + operand1 + "," + operand2 +"<br>"
            // stepByStep += "Push" + temp + "<br>"
        }
    }
    let finalResult = myStack.pop()
    // stepByStep += "Final result" + finalResult
    return finalResult + "<br><br>"+stepByStep
}

// ตัวอย่างการใช้งาน
function displayPostfixToInfix(){
    let result = PostfixToInfix(e.value)
    re.innerHTML = "ผลลัพธ์ : " + result
}
// const expression = "1 2 + 3 * 3 / 5 2 ** + 7 /";
// console.log("ผลลัพธ์:", calculatePostfix(expression)); // ควรแสดงค่า 4


