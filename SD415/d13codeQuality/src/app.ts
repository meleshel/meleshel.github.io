
// function add(a: number, b: number): number { 
//     return a + b;
//    }
//    const sum1: number = add(10,15);
//    const sum2: number = add(9, 5 ) ;
//    console.log("sum1 is: ", sum1, " sum2 is: ", sum2);

   
//    function printHello(): void {
//     console.log('Hello!');
//   }
//   printHello();


//   //1. . Write a function, computeSalesCommission that takes a Boolean argument for salaried and 
// // number argument for salesAmount. It should return the sales commission based on following 
// // rules. First make a defining table for the function.
// // • If the salesman is salaried then
// // • These is no commission for sales below $300
// // • 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// // • 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the 
// // first 500)
// // • If the salesman is not salaried then
// // • no commission for sales below $300
// // • 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// // • 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the 
// // first 500)


// function computeSalesCommission(salaried: boolean, salesAmount: number): number {
//   if (salesAmount < 300) {
//     return 0;
//   } else if (salaried) {
//     if (salesAmount <= 500) {
//       return salesAmount * 0.01;
//     } else {
//       return 500 * 0.01 + (salesAmount - 500) * 0.02;
//     }
//   } else {
//     if (salesAmount <= 500) {
//       return salesAmount * 0.02;
//     } else {
//       return 500 * 0.02 + (salesAmount - 500) * 0.03;
//     }
//   }
// }


// console.log("expect 0: ", computeSalesCommission(true, 200));
// console.log("expect 0: ", computeSalesCommission(false, 200));
// console.log("expect 3: ", computeSalesCommission(true, 300));
// console.log("expect 6: ", computeSalesCommission(false, 300));
// console.log("expect 65: ", computeSalesCommission(true, 3500));
// console.log("expect 100: ", computeSalesCommission(false, 3500));


//   // 2. 2. Make a defining table and function that will return the balance of a savings account that 
// // compounds interest monthly. Parameters for the function will be:
// // • initial amount 
// // • annual interest rate
// // • number of years to compound
// // Do not look up mathematical formulas for how to compute compound interest. Use a for loop that will 
// // add the appropriate interest each month.

// function compoundInterest(initialAmount: number, annualInterestRate: number, yearsToCompound: number): number {
//   let currentBalance = initialAmount;
//   let monthlyInterestRate = annualInterestRate / 12;
//   let months = yearsToCompound * 12;

//   for (let month = 1; month <= months; month++) {
//     let monthlyInterest = currentBalance * monthlyInterestRate;
//     currentBalance += monthlyInterest;
//   }

//   return currentBalance;
// }

// console.log("expect 110.47", compoundInterest(100, 10, 1));
// console.log("expect 16470.09", compoundInterest(10000, 5, 10));


//   //3.Make a defining table and then write a function that calculates down payment for a home loan based on 
// // following rules. Your function should have a parameter for the cost and return the down payment 
// // amount.


// function calcDownpayment(cost:number):number{
//   let downPayment=0;
//   if(cost>=0&&cost<50000){
//   downPayment=0.05*cost;
//   }
//   else if(cost>=50000&&cost<100000){
//     downPayment=2500+0.1*(cost-50000);
//   }
//   else if(cost<200000&&cost>=100000){
//     downPayment=7500+0.15*(cost-100000);
//   }
//   else{
//     downPayment=20000+0.10*(cost-200000);
//   }
//   return downPayment;

// }

// console.log("expect 2000: ", calcDownpayment(40000));
// console.log("expect 2500: ", calcDownpayment(50000));
// console.log("expect 7500: ", calcDownpayment(100000));
// console.log("expect 25000: ", calcDownpayment(250000));


// // 4. Write functions sumDigits and multDigits that take an integer parameter and return the sum or 
// // product of the digits in the number. Use the / and % operators to find the digits.

//   function sumDigits(numbers:number):number{
//     let sum=0;
//     let remainder=0;
//     while(numbers>0){
//        remainder=numbers%10;
//        sum=sum+remainder;
//        numbers=Math.floor(numbers/10);
//     }
//   return sum;
//   } 
//   console.log("sum of the digis is: "+ sumDigits(1234));
//   console.log("sum of the digis is: "+sumDigits(102));
//   console.log("sum of the digis is: "+sumDigits(8));


//   //function for multiplication
//   function multiDigits(numbers:number):number{
//     let product=1;
//     let remainder=0;
//     while(numbers>0){
//        remainder=numbers%10;
//        product=product*remainder;
//        numbers=Math.floor(numbers/10);
//     }
//   return product;

//   }
//   console.log("product of the digits is: "+ multiDigits(1234));
//   console.log("product of the digis is: "+multiDigits(102));
//   console.log("product of the digits is: "+multiDigits(8));



//   //5. Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit 
// // and returns the temperature in Celsius.
// function convertFahrenheit(tempF:number):number{
// return 5*(tempF-32)/9;
// }
// console.log("expect 0: ", convertFahrenheit (32));
// console.log("expect -17.7778: ", convertFahrenheit (0));
// console.log("expect 100: ", convertFahrenheit (212));
// console.log("expect 37.7778: ", convertFahrenheit (100));

// //6. Write a function that takes x and y co-ordinates of two points as inputs and returns the distance 
// // between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2

// function calcDistance(x1:number, y1:number,x2:number,y2:number): number{
//   const result= Math.sqrt((x2-x1)**2+(y2-y1)**2); 
// return result;
// }
// console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));

//demo code- for debugging 
// function compoundInterests(deposit: number, rate: number, years: number) {
//   const monthlyRate = rate / 12 / 100;
//   const numPayments = years * 12; 
//   let balance = deposit;
//   for (let i = 1; i <= numPayments; i--) {
//   balance = balance + balance * monthlyRate;
//  // debugger;
//   }
//   return balance;
//  }
//  console.log("expect 110.47", compoundInterests(100, 10, 1));
//  console.log("expect 16470.09", compoundInterests(10000, 5, 10));

