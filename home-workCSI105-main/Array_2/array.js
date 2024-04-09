let n = document.getElementById("num")
let r = document.getElementById("result")
let a = document.getElementById("aws")
let od = document.getElementById("odd")
let ev = document.getElementById("even")

let items = []
function addData(){
    items.push(parseFloat(n.value))//แก้เป็น unshift
    r.innerHTML = ""
    for(let i in items){
        r.innerHTML = r.innerHTML+i+" : "+items[i]+"<br>"
    }
    n.value = ""
}
function multiplyEvenNumbers(){
    let sum = 1
    for(let data of items){
        if(data%2 ===0){
        sum = sum*data
        }
        // sum = sum+data
    }
    ev.innerHTML = "ผลคูณเลขคู่ = "+sum+"<br>"
}
function multiplyOddNumbers(){
    let sum = 1
    for(let data of items){
        if(data%2 !==0){
        sum = sum*data
        }
        // sum = sum+data
    }
    od.innerHTML = "ผลคูณเลขคี่ = "+sum+"<br>"
}
function computeData() {
    let sum = 0;
    for (let data of items) {
      sum = sum + data;
    }
    a.innerHTML = "ผลรวม = " + sum+"<br>"
  }
