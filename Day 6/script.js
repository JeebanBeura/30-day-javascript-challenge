// Activity 1:
// Task 1:
const numberArr = [1, 2, 3, 4, 5];
console.log(numberArr);
// Task 2:
console.log("1st elemet is: ", numberArr[0]);
console.log("last elemet is: ", numberArr[4]);
// Activity 2:
// Task 3:
const nameArr = ["decoding", "life", "jeeban", "chinu", "rabi", "silan", "babul"];
console.log("Before  push element original nameArr is : ", nameArr);
nameArr.push("biswajit");
console.log("After push element nameArr is : ", nameArr);
// Task 4:
console.log("Before  pop element original nameArr is : ", nameArr);
nameArr.pop();
console.log("After pop element nameArr is : ", nameArr);
// Task 5:
console.log("Before shift element original nameArr is : ", nameArr);
nameArr.shift();
console.log("After shift element nameArr is : ", nameArr);
// Task 6:
console.log("Before  unShift element original nameArr is : ", nameArr);
nameArr.unshift("biswajit");
console.log("After unShift element nameArr is : ", nameArr);
// Activity 3:
// Task 7:
const capitalNameArr = nameArr.map((ele) => {
    return ele.toLocaleUpperCase();
});
console.log("use Map ",capitalNameArr);
// Task 8:
const filterName = nameArr.filter((ele) => {
    return ele.includes("b");
});
console.log("use filter ",filterName);

// Task 9:
let sum = numberArr.reduce((acc,curr) =>{
    return acc + curr;
},0)
console.log(sum);
// Activity 4:
// Task 10:
console.log("Use for loop");
for(let i = 0;i < nameArr.length ;i++){
    console.log(nameArr[i]);
}
// Task 11:
console.log("Use for each loop");
numberArr.forEach((ele) => {
    console.log(ele);
})
// Activity 5:
// Task 12:
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i = 0 ; i< matrix.length ; i++){
    for(let j = 0 ;j < matrix[i].length ; j++){
        console.log(matrix[i][j]);
    }
}

console.log("Access specific element :- ",matrix[2][2])
