let n1 = document.getElementById("num")
let re = document.getElementById("result")

function displaySum(){
    let n = parseInt(n1.value)
    re.innerHTML = "result = " +Sum(n)
}

function Sum(n){
    if(n==0){
        return 0
    }
    else{
        return n+Sum(n-1)
    }
}
function displayFac(){
    let n = parseInt(n1.value)
    re.innerHTML = "result = " +Fac(n)
}
function Fac(n){
    if(n===0||n===1){
        return 1
    }
    else{
        return n * Fac(n-1)
    }
}
function displayFibonacci(){
    let n = parseInt(n1.value)
    re.innerHTML = "result = " +fibo(n)
    console.log(n)
}
function fibo(n){
    if(n==1){
        return 0
    }
    else if (n==2){
        return 1    
    }
    else if (n>2){
        return fibo(n-2) + fibo(n-1)
    }
}