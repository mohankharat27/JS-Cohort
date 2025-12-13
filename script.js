// =========================== CLASSWORK ==================

//1. Print numbers from 1 to 10 

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

//2. Print only even numbers from 1 to 20 

// for(let i=1; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//3. Print numbers from 10 to 1

// for(let i=10; i>=1; i--){
//     console.log(i);
// }

//4. Print the word "Yes" 5 times

// for(let i=1; i<=5; i++){
//     console.log("Yes");
// }

//5. Print whether numbers from 1 to 10 are even or odd For each number check: even -> "Even", else -> "Odd"

// for(let i=1; i<=10; i++){
//     if(i%2===0){
//         console.log(i+(" -> 'Even'"));
//     } else console.log(i + " ->'Odd'");
// }

//6. Ask user for number and say if it's positive or negative

// let number = Number(prompt("Enter the number"));
// if(number > 0){
//     console.log("Number is positive");
// } else if(number < 0){
//     console.log("Number is Negative")
// } else console.log("Zero is neither positive nor negative");

// =================== HOMEWORK =============================
// Level 1 – Pure Beginner Practice

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = Number(prompt("Enter your age"));
// if(age >= 18) {
//     console.log("Eligible");
// } else {
//     console.log("Not eligible");
// }

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for(let i=1; i<=10; i++){
//     console.log(i*5);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let count = 0;
// for(let i=1; i<=15; i++){
//     if(i > 8){
//         count++;
//     }
// }
// console.log(count);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let userInput = 4444;
// let password = Number(prompt("Enter password"));
// if(userInput === password){
//     console.log("Accessible");
// } else{
//     console.log("Wrong Password");
// }


// Level 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let attempts = 0;
// let khulgaya = false;
// let pass = "Mohan";

// let password = prompt("Enter your password");
// attempts++;

// if(password === pass) khulgaya = true;

// while(password !== pass){
//     if (attempts === 3){
//         console.error("Account locked!");
//         break;
//     }
//     password = prompt("Enter your password");
//     if(password === pass) khulgaya = true;
//     attempts++;
// }
// if(khulgaya === true) console.log("Account opened!");

// === OR ===

// let attempt = 0;
// let sahiPassword = "mohan";
// let userPassword = prompt("Apna password batao");
// attempt++;

// while(attempt < 3 && userPassword !== sahiPassword){
//     userPassword = prompt("Apna password batao");
//     attempt++;
// }

// if(attempt === 3 && userPassword !== sahiPassword){
//     console.error("Account Locked");
// }
// else{
//     console.log("Done");
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let count = 0; 
// let word = prompt("Word bolo");

// while(word !== "stop"){
//     if(word === "yes") count++;
//     word =  prompt("Word bolo"); 
// }
// console.log(`Total yes count is: ${count}`);


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for(let i=1; i<=50; i++){
//     if(i % 7 === 0){
//         console.log(i);
//     }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum = 0;
// for(let i=1; i<=30; i++){
//     if(i % 2 !== 0){
//         sum += i;
//     }
// }
// console.log(`Sum is: ${sum}`);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let input = Number(prompt("Enter number"));

// while(input % 2 !== 0){
//     if(input % 2 === 0) break;
//     input = Number(prompt("Enter Number"));
// }

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start = Number(prompt("Enter start number"));
// let end = Number(prompt("Enter end number"));

// for(let i=start; i<=end; i++){
//     console.log(i);
// }


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let count = 0;
// for(let i=1; i<=20; i++){
//     if(count === 3) break;
//     if(i % 2 !== 0){
//         console.log(i);
//         count++;
//     }
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let count = 0;

// for (let i = 1; i <= 5; i++) {
//     let num = Number(prompt("Enter number"));

//     if (num > 0) {
//         count++;
//     }
// }
// console.log(`${count} positive numbers entered`);


// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 1000;

for (let i = 1; i <= 3; i++) {
    let amount = Number(prompt("Enter withdrawal amount"));

    if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawal successful! Remaining balance: ₹${balance}`);
    } else {
        console.log("Insufficient balance");
    }
}
