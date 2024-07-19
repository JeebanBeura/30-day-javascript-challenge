// Activity 1:
// Task 1:
function evenOdd(num) {
    if (num % 2 == 0) {
        console.log(`${num} number is EVEN `);
    }
    else {
        console.log(`${num} number is ODD `);
    }
}
evenOdd(5);
evenOdd(6);
// Task 2:
function squareOfNum(num) {
    return num * num;
}
console.log(squareOfNum(5));
// Activity 2: 
// Task 3:
let MaxOfToNUm = function (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} & ${num2} The maximum number is ${num1}`);
    }
    else {
        console.log(`${num1} & ${num2} The minimum number is ${num2}`);
    }
}

MaxOfToNUm(10, 7);
// Task 4:
let concatToStr = function (str1, str2) {
    return str1.concat(str2);
}
console.log(concatToStr('Decoding', 'Life'));
// Activity 3: 
// Task 5:
let sumOfToNum = (num1, num2) => {
    return num1 + num2;
}
console.log(`sum of two number is ${sumOfToNum(5, 9)}`);
// Task 6:
let specificCharacter = (string, ch) => {
    return string.includes(ch);
}
console.log(specificCharacter('life', 'o'));
// Activity 4: 
// Task 7:
function productNum(num1, num2 = 6) {
    return num1 * num2;
}
console.log(productNum(6, 8));
console.log(productNum(7));
// Task 8:
function greetingMessage(name, age = 19) {
    return `Hello ! I am ${name}, Wel Come to JavaScript World!, i am ${age} years old `
}
console.log(greetingMessage('jeeban'));
// Activity 5: 
// Task 9:
let hello = () => {
    console.log("Hello!");
}
function higherOrder(hello,n) {
    for(let i = 0 ;i < n;i++){
        hello();
    }
}
higherOrder(hello,5);
// Task 10:
function func(fun1,fun2,num){
    return fun2(fun1(num))
}
function fun1(num){
    return num + num;
}

function fun2(num){
    return num +num;
}
console.log(func(fun1,fun2,2));