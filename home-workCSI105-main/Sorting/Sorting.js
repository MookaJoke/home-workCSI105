class Sort{
    bubbleSort(arr){
        let temp;
        let size = arr.length
        for(let i = 0;i<size-1;i++){
            for(let j=0;j<(size-i)-1;j++){
                if(arr[j]>arr[j+1]){
                    temp= arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }
    }

    insertionSort(arr){
        let key,j
        for(let i = 1;i<arr.length;i++){
            key = arr[i]
            j=i-1
            while(j>=0 && key < arr[j]){
                arr[j+1] = arr [j]
                j = j-1
            }
            arr[j+1] = key
        }
    }

    shellSort(arr){
        let gap = Math.floor(arr.length/2)
        let temp,j
        while(gap>0){
            for(let i=gap;i<arr.length;i++){
                temp = arr[i]
                j = i
                while(j>=gap && arr[j-gap] > temp){
                    arr[j] =arr[j-gap]
                    j = j-gap
                }
                arr[j] = temp
            }
            gap = Math.floor(gap/2)
        }
    }
    display(arr){
        let str = ""
        for(let i=0;i<arr.length;i++){
            str = str+arr[i]+" "
        }
        return str
    }
}

// -----main-----
let mysort = new Sort();
let selectedSort = ""
let data = []
let re = document.getElementById("result")
let bbsB = document.getElementById("bubbleB")
let bbsA = document.getElementById("bubbleA")
let insB = document.getElementById("insertB")
let insA = document.getElementById("insertA")
let shB = document.getElementById("shellB")
let shA = document.getElementById("shellA")
let d = document.getElementById("data1")

// ----- function-----
function randomData(){
    if (data.length === 0) {
        console.log("เวลาในการทำงานก่อนสุ่มข้อมูล")
        console.time()
        console.timeEnd()
        console.log("เวลาในการทำงานของการสุ่มข้อมูล")
        console.time()
        let numP = parseInt(d.value);
        let mysort = new Sort();
        // let startTime = performance.now();
        for(let i = 0; i < numP; i++){
            data.push(Math.floor(Math.random()*100));
        }
        
        // เตรียมข้อมูลสำหรับแสดงผล
        let results = {};
        
        // แสดงผลข้อมูลก่อนการเรียงลำดับ
        // let endTime = performance.now();
        // let executionTime = endTime - startTime;
        results.before = "ชุดข้อมูล : " + mysort.display(data) +"<br>"//+ "<br>"+"Execution Time: " + executionTime + " milliseconds<br>"
        // console.log("เวลาในการทำงานของ (Input):", executionTime, "ms");
        console.timeEnd()
        re.innerHTML = results.before;
        
    }
}
function displaybubbleSort(){
    console.log("เวลาในการทำงานก่อน Bubble Sort")
    console.time(data)
    randomData(); // เรียกใช้ฟังก์ชันเพื่อให้ข้อมูลถูกสร้าง (ถ้าไม่มีอยู่แล้ว)
    console.timeEnd(data)
    // let startTime = performance.now();
    
    let results = {};

    // เรียกใช้เมธอด bubbleSort เพื่อเรียงลำดับ
    let tempData = data.slice(); // สำเนาข้อมูลเพื่อป้องกันการเปลี่ยนแปลงข้อมูลเริ่มต้น
    bbsB.innerHTML =  "ก่อน Bubble Sort : "+ tempData +"<br>"
    console.time(data)
    mysort.bubbleSort(tempData);
    // let endTime = performance.now();
    // let executionTime = endTime - startTime;
    results.bubble = "หลัง Bubble Sort: " + mysort.display(tempData) +"<br>"
    console.log("เวลาในการทำงานของ Bubble Sort:")
    console.timeEnd(data)
    // แสดงผลลัพธ์ของการเรียงลำดับ
    bbsA.innerHTML = results.bubble 
}
function displayinsertionSort(){
    console.log("เวลาในการทำงานก่อน Insertion Sort")
    console.time(data)
    randomData(); // เรียกใช้ฟังก์ชันเพื่อให้ข้อมูลถูกสร้าง (ถ้าไม่มีอยู่แล้ว)
    console.timeEnd(data)
    // let startTime = performance.now();
    
    let results = {};

    // เรียกใช้เมธอด bubbleSort เพื่อเรียงลำดับ
    let tempData = data.slice(); // สำเนาข้อมูลเพื่อป้องกันการเปลี่ยนแปลงข้อมูลเริ่มต้น
    insB.innerHTML =  "ก่อน Insertion Sort : "+ tempData +"<br>"
    console.time(data)
    mysort.insertionSort(tempData);
    // let endTime = performance.now();
    // let executionTime = endTime - startTime;
    results.insertion = "หลัง Insertion Sort: " + mysort.display(tempData) +"<br>"
    console.log("เวลาในการทำงานของ Insertion Sort:")
    console.timeEnd(data)
    // แสดงผลลัพธ์ของการเรียงลำดับ
    insA.innerHTML = results.insertion
}
function displayshellSort(){
    console.log("เวลาในการทำงานก่อน Shell Sort")
    console.time(data)
    randomData(); // เรียกใช้ฟังก์ชันเพื่อให้ข้อมูลถูกสร้าง (ถ้าไม่มีอยู่แล้ว)
    console.timeEnd(data)
    // let startTime = performance.now();
    
    let results = {};

    // เรียกใช้เมธอด bubbleSort เพื่อเรียงลำดับ
    let tempData = data.slice(); // สำเนาข้อมูลเพื่อป้องกันการเปลี่ยนแปลงข้อมูลเริ่มต้น
    shB.innerHTML =  "ก่อน Shell Sort : "+ tempData +"<br>"
    console.time(data)
    mysort.shellSort(tempData);
    // let endTime = performance.now();
    // let executionTime = endTime - startTime;
    results.shell = "หลัง Shell Sort: " + mysort.display(tempData) +"<br>"
    console.log("เวลาในการทำงานของ Shell Sort:")
    console.timeEnd(data)
    // แสดงผลลัพธ์ของการเรียงลำดับ
    shA.innerHTML = results.shell
}

//-----main-----
// // let data = [9,5,7,4,1,3]
// let data = []
// for(let i=0;i<10;i++){
//     data.push(Math.floor(Math.random()*100))
// }

// console.log("Before : ",mysort.display(data))
// mysort.bubbleSort(data)
// console.log("After : ",mysort.display(data))

// let data1 = [9,5,7,4,1,3]

// console.log("Before : ",mysort.display(data1))
// mysort.insertionSort(data1)
// console.log("After : ",mysort.display(data1))


// let data2 = [9,5,7,4,1,3]

// console.log("Before : ",mysort.display(data2))
// mysort.shellSort(data2)
// console.log("After : ",mysort.display(data2))

