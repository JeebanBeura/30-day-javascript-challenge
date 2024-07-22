// Activity 1:
// Task 1:
let nameIs = 'Jeeban';
let age = 19;
let str = `I am ${nameIs},I am ${age} years old`;
console.log(str);
// Task 2:
let multi_line_string = `Hello! WelCome,
to JavaScript World!
The Web Site,
will be Create JavaScript `;
console.log(multi_line_string);
// Activity 2:
// Task 3:
const arr = ["CPP", 90, "JAVA", 80];
const [subject, mark] = arr;
console.log(subject);
console.log(mark);
// Task 4:
const obj = {
    obj1: {
        name: 'jeeban',
        age: 19
    },
    obj2: {
        name: 'chinu',
        age: 20
    }
};
const { obj1, obj2 } = obj;
console.log(obj1);
console.log(obj2);
// Activity 3:
// Task 5:
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 0];
const num = [...num1, ...num2];
console.log(num);
// Task 6:
function sumOfEle(...num) {
    // console.log(num);
    sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}
console.log(sumOfEle(1, 2, 3, 4, 5));
// Activity 4:
// Task 7:
function multiply(num1, num2 = 1) {
    return num1 * num2;
}
console.log(multiply(100, 5));
console.log(multiply(5));
// Activity 5:
// Task 8:
const subjectName = 'JavaScript';
const information = 'ifo'
const object = {
    fullNmae : 'jeeban',
    [subjectName] :'Core subject',
    [information](){
        console.log(`Name is ${this.fullNmae}`);
    }
}

console.log(object);
object.ifo();
//Task 9:
const property = 'firstName';
const object2 = {
    [property]:'jeeabn',
}
console.log(object2);