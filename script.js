// ----------- Assignment - 29 Oct --------------

// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)


// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

// let a = 10;
// let b = 3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);


// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

// let x = 5;
// x = x + 3;
// console.log(x+=3);
// console.log(x-=3);
// console.log(x/=3);
// console.log(x*=3);

// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.

// let count = 5;
// count++;
// count--;
// console.log(count);

// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

// 5 == "5";   --- true
// 5 === "5";  -- false

// e. Check if 10 is greater than 5, less than 20, and equal to 10.

// if(10>5 && 10<20 && 10 === 10){
//     console.log("hey");
// }

// f. Try logical AND and OR:
// true && false
// true || false
// !(true)

// g. Predict the result of:
// (5 > 3 && 10 > 8),  --- true
// (5 > 3 || 10 < 8)  --> true


// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).

// 5 & 1 ---> 1
// 5 | 1 ---> 5

// 2. Variable Hoisting in JavaScript

// a. Predict output of:
// console.log(a);  --> undefined
// var a = 10


// b. Predict output of:
// console.log(b);  --> b is not defined
// let b = 10



// c. Predict output of:
// test()
// function test() { console.log("hello") }   // ---> hello

// d. Try writing a function expression before initialization and call it:
// hello()
// var hello = function() { console.log("Hi") }
// Write what happened and why.

// --> hello is not a function

// e. Write one sentence:
// What gets hoisted?
// What does not get hoisted fully?

//--> Hoisted you can use the variable or print the var befor initialization and delcaration but it happened in only var not let and const

// 3. Conditional Operators (if, else, else-if, ternary, switch)
// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

// let age = Number(prompt("Give the input:"));
// console.log(age > 18 ? "adult" : "not adult");

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

// let marks = 95;
// if(marks >= 90) console.log("A grade");
// else if(marks >= 75) {
//     console.log("B grade");
// }
// else if (marks >= 50){
//     console.log("C grade");
// }
// else {
//     console.log("Fail");
// }

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

// let city = "Delhi";
// if(city === "Bhopal") {
//     console.log("MP");
// }
// else if (city === "Delhi"){
//     console.log("Capital");
// }
// else{
//     console.log("Unknown city");
// }

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

// let score = 45;
// score > 35 ? console.log("Pass") : console.log("Fail");

// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

// let temp = 40;
// temp > 30 ? console.log("Hot") : console.log("Pleasant");

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

// let day = 4;   // you can change this value (1 to 7)

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day");
// }

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

let age = 40;
let country = "India";
if (age>18 && country === "India") console.log("Eligible for voting");
else console.log("Not eligible");