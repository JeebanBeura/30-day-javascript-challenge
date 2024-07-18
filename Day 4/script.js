// Activity 1:
// Task 1:
for(let i = 1; i <= 10 ; i++){
    console.log(i);
}
// Task 2:
for(let i = 1; i <= 10 ; i++){
    console.log(`5 * ${i} = ${5  * i}`);
}
// Activity 2:
// Task 3:
let i = 1;
let sum = 0;
while(i <= 10){
    sum = sum + i;
    i++;
}
console.log(`Sum of number  1 to 10 is: ${sum}`);

// Task 4:
let j = 10;
while(j > 0){
    console.log(j);
    j--;
}
// Activity 3:
// Task 5:
let k = 1;
do{
    console.log(k);
    k++;
}while(k <= 5);

//Task 6:
let l = 5;
let fact = 1;
do{
    fact = fact * l;
    l--;
}while(l > 0);
console.log(`Factrial of 5 is : ${fact}`);
// Activity 4:
// Task 7:
for(let i = 0; i < 5;i++){
    let star = "*";
    for(let k = 0; k < i;k++){
        star = star + " *"
    }
    console.log(`${star}`);
}
// Activity 5:
// Task 8:
console.log("Use continue :- ")
for(let i = 1; i <= 10 ; i++){
  if(i == 5){
    continue;
  }
  console.log(i);
}
//Task 9:
console.log("Use break :- ")
for(let i = 1; i <= 10 ; i++){
    if(i == 7){
      break;
    }
    console.log(i);
  }