 const prompt = require("prompt-sync")();

//  1. Write a program to compute sales commission based on following rules:
//  If the salesman is salaried then
// These is no commission for sales below $300
// 1% for sales from $300 and up to but less than $500
// 2% for sales $500 or above
// If the salesman is not salaried then
// 2% for sales from $300 and up to but less than $500
// 3% for sales $500 or above

let sales = parseFloat(prompt("Please enter the sales amount:"));
console.log("Sales: " + sales);

let salesMan = prompt("Please enter the status of the salesman:");
console.log("Salesman: " + salesMan);

let salesCommission = 0;

if (salesMan === "salaried") {
  if (sales < 300) {
    salesCommission = 0;
  } else if (sales >= 300 && sales < 500) {
    salesCommission = 0.01 * sales;
  } else {
    salesCommission = 0.02 * sales;
  }
} else {
  if (sales >= 300 && sales < 500) {
    salesCommission = 0.02 * sales;
  } else {
    salesCommission = 0.03 * sales;
  }
}

  console.log("Sales Commission: $" + salesCommission);

 // 2. Write a loop that continually prompts for age until you enter age older than 18
  // Write both while and do while versions

  let age = prompt("Please enter your age:");

 while (age <= 18) {
  age = prompt("Please enter your age:");
 }
 console.log(age);

// do while loop
do {
  age = prompt("Please enter your age:");
  console.log(age);
} while (age <= 18);

// // // 3. Make a defining table and program to print out the balance of a savings account that
// // // compounds interest monthly. Prompt the user for the
// // // • initial amount
// // // • annual interest rate
// // // • number of years to compound
// // // Do not use the mathematical formula for compound interest. Use a loop that calculates the
// // // interest for each month and compounds that over the iteration—i.e., add it to the current
// // // balance. Ask the professor or TA if this is not clear.

let initialAmount = parseFloat(prompt("enter amount"));
let annualInterestRate = parseFloat(prompt("enter annual interest"));
let yearsToCompound = parseInt(prompt("enter number of years"));

let currentBalance = initialAmount;
let monthlyInterestRate = annualInterestRate / 12;
let months = yearsToCompound * 12;

for (let month = 1; month <= months; month++) {
  let monthlyInterest = currentBalance * monthlyInterestRate;
  currentBalance += monthlyInterest;
}

// console.log(currentBalance);
//   `
// // //4. Write code to print the number patterns on the console

// 12345
// 12345
// 12345
// 12345
// 12345

for (let i = 1; i < 6; i++) {
  let str = "";
  for (let i = 1; i < 6; i++) {
    str += i;
  }
  console.log(str);
}

// 1
// 22
// 333
// 4444
// 55555

let str = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    str = str + i;
  }
  console.log(str);
  str = "";
}

//55555
// 4444
// 333
// 22
// 1

let str2 = "";
for (let i = 1; i <= 0; i++) {
  for (let j = 5; j <= i; j++) {
    str2 = str2 + i;
  }
  console.log(str2);
  str2 = "";
}

// 5. Cost of House Down Payment
//  Make a defining table and then write a program that calculates down payment for a home loan based
//  on following rules. Your program should prompt for the cost and write the down payment amount to
//  the console.
//  Cost of House Down Payment
//  $0 to less than 50K 5% of the cost
//  $50K to less than 100K $1000 + 10% of (cost - $50K)
//  $100K to less than 200K $2000 + 15% of (cost - $100K)
//  $200K and above $5000 + 10% of (cost - $200K)

const cost = parseFloat(prompt("Enter the cost of the house:"));

let downPayment;

if (cost < 50000) {
  downPayment = cost * 0.05;
} else if (cost < 100000) {
  downPayment = 1000 + 0.1 * (cost - 50000);
} else if (cost < 200000) {
  downPayment = 2000 + 0.15 * (cost - 100000);
} else {
  downPayment = 5000 + 0.1 * (cost - 200000);
}

console.log("The down payment amount is: $" + downPayment);

//  6. Write a JavaScript program to prompt for an integer and compute the sum of all the digits. Use the

let userInput = prompt("Enter an integer:");

let number = parseInt(userInput);

let sumOfDigits = 0;

let remainder = 0;
while (number > 0) {
  remainder = number % 10;
  sumOfDigits += remainder;
  number = Math.floor(number / 10);
}

console.log("The sum of the digits is: " + sumOfDigits);


if ("false") console.log(0);  else  console.log(1);




function oddEven(num){
  if (!num) return;
  if(num%2==0) return "Even";
  else return "Odd"
  }
  console.log(oddEven("hello"));

// function myFun(): void {

//   console.log("Oh happy day!")

// }

// const returnVal = myFun()


// Write a function named testPrime that returns true when the argument to the 
// function is a prime number, otherwise returns false.
function testPrime(num){
  for(let i=2;i<num;i++){
    if(num%i===0){
      return false;
    }
  }
  return true;
}
console.log("true",testPrime(7));