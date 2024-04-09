// console.log("hello")
let foods = ["ไข่ต้ม","ไข่ดาว","ข้าวผัด","เนื้อทอด","ไก่ย่าง"]
console.log("---Data of foods---")
console.log(foods[0])
console.log(foods[1])
console.log(foods[2])
console.log(foods[3])
console.log(foods[4])
let num = [88,99,34,79]
console.log("---Data of num old---")
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
let items = []
console.log("---Data of items---")
console.log(items[0])
num[1] = 20
console.log("---Data of num new---")
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])

console.log("---length of array---")
console.log(foods.length)
console.log(num.length)
console.log(items.length)

console.log("---for loop---")
for(let i = 0;i<foods.length;i++){
    console.log(i,foods[i])
}
for(let i = 0;i<num.length;i++){
    console.log(i,num[i])
}

console.log("---for of---")
for(let data of foods){
    console.log(data)
}
for(let sc of num){
    console.log(sc)
}

console.log("---for in---")
for(let i in foods){
    console.log(i,foods[i])
}
for(let i in num){
    console.log(i,num[i])
}

console.log("---push---")
foods.push("ต้มจืด")
for(let i in foods){
    console.log(i,foods[i])
}

console.log("---pop---")
let remove = foods.pop()
console.log("remove = ",remove)
for(let i in foods){
    console.log(i,foods[i])
}

console.log("---unshift---")
foods.unshift("ยำปลาดุก")
for(let i in foods){
    console.log(i,foods[i])
}

console.log("---shift---")
remove = foods.shift()
console.log("remove = ",remove)
for(let i in foods){
    console.log(i,foods[i])
}
