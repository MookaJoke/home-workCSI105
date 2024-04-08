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
function calculatePostfix(expression) {
    const stack = [];
    
    // แยก expression ด้วยช่องว่างและสร้าง array ของ tokens
    const tokens = expression.split(' ');
    
    // วน loop ผ่านทุก token ใน expression
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        
        // ตรวจสอบว่า token เป็นตัวเลขหรือไม่
        if (!isNaN(token)) {
            stack.push(parseFloat(token)); // นำตัวเลขไปใส่ใน Stack
        } else {
            // ดึงตัวเลขจาก Stack สำหรับการดำเนินการ
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            
            // ดำเนินการตาม token และนำผลลัพธ์กลับไปใส่ใน Stack
            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
                case '**':
                    stack.push(Math.pow(operand1, operand2));
                    break;
                default:
                    throw new Error('Invalid token: ' + token);
            }
        }
    }
    
    // ผลลัพธ์อยู่ที่ด้านบนของ stack
    return stack.pop();
}

// ตัวอย่างการใช้งาน
function displaycalculatePostfix(){
    re.innerHTML = "ผลลัพธ์ : " + calculatePostfix(e.value)
}
// const expression = "1 2 + 3 * 3 / 5 2 ** + 7 /";
// console.log("ผลลัพธ์:", calculatePostfix(expression)); // ควรแสดงค่า 4


