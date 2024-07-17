// Activity 1:
// Task 1:
let number = 8;
if (number > 0) {
    console.log(`The Given Number ${number} is +ve`);
}
else if (number < 0) {
    console.log(`The Given Number ${number} is -ve`);
}
else {
    console.log(`The Given Number ${number} is Zero`);
}

//Task 2:
let age = 19;
if (age >= 18) {
    console.log("Voteable");
} else {
    console.log("NotVoteable");
}
// Activity 2:
// Task 3:
let a = 500;
let b = 110;
let c = 15;
if (a > b) {
    if (a > c) {
        console.log(`a : ${a} is largest Number`);
    }
    else {
        console.log(`c: ${c} is largest Number`);
    }
} else if (b > a) {
    if (b > c) {
        console.log(`b : ${b} is largest Number`);
    }
    else {
        console.log(`c : ${c} is largest Number`);
    }
}
else {
    if (c > b) {
        console.log(`c : ${c} is largest Number`);
    }
    else {
        console.log(`b : ${b} is largest Number`);
    }
}

// Activity 3:
// Task 4:
let key = 7;
switch (key) {
    case 1:
        console.log("MonDay");
        break;
    case 2:
        console.log("TuseDay");
        break;
    case 3:
        console.log("WednesDay");
        break;
    case 4:
        console.log("ThursDay");
        break;
    case 5:
        console.log("FriDay");
        break;
    case 6:
        console.log("SaturDay");
        break;
    case 7:
        console.log("SunDay");
        break;
    default:
        console.log("No valid Day")
        break;
}
//Task 5:
let mark = 80;
switch (true) {
    case mark <= 100 && mark >= 90:
        console.log("Grade is A");
        break;
    case mark <= 89 && mark >= 80:
        console.log("Grade is B");
        break;
    case mark <= 79 && mark >= 70:
        console.log("Grade is C");
        break;
    case mark <= 69 && mark >= 60:
        console.log("Grade is D");
        break;
    case mark <= 59 && mark >= 33:
        console.log("Grade is F");
        break;
    default:
        console.log("No valid mark");
        break;
}

// Activity 4:
// Task 6:
let num = 90;
console.log((num % 2 == 0) ? "Number is even " : "Number is odd");

// Activity 5:
// Task 7:
let year = 2000
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap year"); // Leap year
        } else {
            console.log("Not Leap year");  // Not a leap year
        }
    } else {
        console.log("Leap year");  // Leap year
    }
} else {
    console.log("Not Leap year"); // Not a leap year
}