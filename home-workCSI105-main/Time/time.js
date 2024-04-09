let data = []
console.time()
for(let i = 0;i<50000;i++){
    data.push(Math.floor(Math.random()*100))
}
console.timeEnd()


function sumation1(n){
    let total = 0
    for(let i = 1;i<=n;i++){
        total = total+i
    }
    return total
}

function sumation2(n){
    return (n*(n+1))/2
}

function sumation3(n){
    if(n==1){
        return n
    }
    else{
        return n+sumation3(n-1)
    }
}

let s1,s2,s3
console.log("-----sumation1-----")
console.time()
s1 = sumation1(5000)
console.timeEnd()
console.log("s1 = ",s1)

console.log("-----sumation2-----")
console.time()
s2 = sumation2(5000)
console.timeEnd()
console.log("s2 = ",s2)

console.log("-----sumation3-----")
console.time()
s3 = sumation3(5000)
console.timeEnd()
console.log("s3 = ",s3)

// -----การบ้าน-----
// ให้เอางานของ sort มาทำต่อโดยการ sort ถ้า 3 วิธีโดยต้องแสดงข้อมูลก่อนแล้ว sort จากนั้นวัดเวลาทั้ง 3 วิธี *ข้อมูลต้องเหมือนกันทุกอย่าง*