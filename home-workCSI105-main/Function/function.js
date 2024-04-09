let n = document.getElementById("name1")
let re = document.getElementById("result")
let b = document.getElementById("base")
let h = document.getElementById("height")
function displayData(){
    // hello()
    helloName(n.value)
}
function compute(){
    let base,height
    base = parseFloat(b.value)
    height = parseFloat(h.value)
    re.innerHTML = "areaOftriagle " + areaOftriagle11(base,height)
    //let area = areaOftriagle()
    //re.innerHTML = "area of triangle  = "+area

}
function areaOftriagle11(base,height){
    return 0.5 * base * height
}
function areaOftriagle(){
    let base,height
    base = parseFloat(b.value)
    height = parseFloat(h.value)
    return 0.5*base*height
    // let base = 5,height = 7
    // let area = 0.5 * base * height
    // return area
}
function helloName(givename){
    re.innerHTML="Hello "+givename
}
function hello(){
    // console.log("Hello Aomsin")
    re.innerHTML="Hello Aomsin"
}
