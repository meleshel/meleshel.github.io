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



//   // function pow(m, n) {
//   //   let result = 1;
//   //   for (let i = 0; i < n; i++) {
//   //     result *= x;
//   //   }
//   //   return result;
//   // }
  
//   // const result = pow(2, 3);
//   // console.log("2^3:", result); // Output: 2^3: 8
  

//   // prints min of the values

//   // function min(a, b) {
//   //   return a < b ? a : b;
//   // }
  
//   // const result = min(5, 3);
//   // console.log("Minimum:", result); // Output: Minimum: 3
  


// //   1. . Write a function, computeSalesCommission that takes a Boolean argument for salaried and 
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

// // import {computeSalesCommission} from "./compute.js"


// console.log("expect 0: ", computeSalesCommission(true, 200));
// console.log("expect 0: ", computeSalesCommission(false, 200));
// console.log("expect 3: ", computeSalesCommission(true, 300));
// console.log("expect 6: ", computeSalesCommission(false, 300));
// console.log("expect 65: ", computeSalesCommission(true, 3500));
// console.log("expect 100: ", computeSalesCommission(false, 3500));


// //   2. 2. Make a defining table and function that will return the balance of a savings account that 
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


// //   //3.Make a defining table and then write a function that calculates down payment for a home loan based on 
// // // following rules. Your function should have a parameter for the cost and return the down payment 
// // // amount.


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


// // // 4. Write functions sumDigits and multDigits that take an integer parameter and return the sum or 
// // // product of the digits in the number. Use the / and % operators to find the digits.

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



// //   //5. Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit 
// // // and returns the temperature in Celsius.
// function convertFahrenheit(tempF:number):number{
// return 5*(tempF-32)/9;
// }
// console.log("expect 0: ", convertFahrenheit (32));
// console.log("expect -17.7778: ", convertFahrenheit (0));
// console.log("expect 100: ", convertFahrenheit (212));
// console.log("expect 37.7778: ", convertFahrenheit (100));

// // //6. Write a function that takes x and y co-ordinates of two points as inputs and returns the distance 
// // // between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2

// function calcDistance(x1:number, y1:number,x2:number,y2:number): number{
//   const result= Math.sqrt((x2-x1)**2+(y2-y1)**2); 
// return result;
// }
// console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));

// //demo code- for debugging 
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



//  //exam question:


//  function isPrime(num:number):boolean{
//   if(num<=1){
//     return false;
//   }
//   for(let i=2;i<num;i++){
//     if(num%2===0){
//           return false;
//     }
//   }
//   return true;
//  }

//  function primeFactors(num:number):any{
//         if(num<2){
//           return 0;
//         }
//         let result=[];
//         for(let i=2;i<num;i++){
//           if(num%i===0&&isPrime(i)){
//             result.push(i);
//           }
        
//         }
//         return result;
//  }
//     const number = 30;
//     const num=1;
//     const n=6936;
//     console.log(`Prime factors of ${number} are: ${primeFactors(number)}`);
//     console.log(primeFactors(1));
//     console.log(primeFactors(6936));

// //matching arrays indices

//   function matrixMatch(array1:number[][],arra2:number[][]):number[][]{
//     const result:number[][]=[];
//     for(let i=0;i<array1.length;i++){
//       const row=[];
//       for(let j=0;j<array1[i].length;j++){

//         if(array1[i][j]===arra2[i][j]){
//           row.push(1);
//         }
//         else{
//           row.push(0);
//         }
//       }
//       result.push(row);
//     }

//       return result;
//   } 

// const testArr1 = [ [1,2,3], [5,2,3], [9,2,3] ]
// const testArr2 = [ [1, 2, 10], [3, 2, 5], [9, 6, 7]]
//   console.log(matrixMatch(testArr1,testArr2));



//   //another way 

//   function matrixMatch2(arr1: number[][], arr2: number[][]): number[][] {
//     let newArr: number[][] = [];
//     if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
//       throw new Error("arr1 and arr2 must have the same dimensions");
//     }
//     for (let i = 0; i < arr1.length; i++) {
//       newArr[i] = [];
//       for (let j = 0; j < arr1[i].length; j++) {
//         newArr[i][j] = arr1[i][j] === arr2[i][j] ? 1 : 0;
//       }
//     }
//     return newArr;
//   }
//   const test = [ [1,2,3], [5,2,3], [9,2,3] ]
// const testArr3 = [ [1, 2, 10], [3, 2, 5], [9, 6, 7]]
//   console.log(matrixMatch2(testArr1,test));

// //another way to do factor prime

// function isPrimes(num:number) {
//   if (num < 2) {
//   return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//   if (num % i === 0) {
//   return false;
//   }
//   }
//   return true;
//   }
  
   
//   function primeFactors1(num:number) {
//   if (num < 2) {
//   return [];
//   }
//   const factors = [];
//   for (let i = 2; i <= num / 2; i++) {
//   if (num % i === 0 && isPrime(i)) {
//   factors.push(i);
//   }
//   }
//   return factors;
//   }

//   const numbers = 30;
//   const nums=1;
//   const n2=6936;
//   console.log(`Prime factors of ${number} are: ${primeFactors(number)}`);
//   console.log(primeFactors(1));
//   console.log(primeFactors(6936));

//   //compute charges

//   function computeCharges(charges:number[][]):number[][]{
//         const result:number[][]=[];
//         for(let i=0;i<charges.length;i++){
//           let rows:number[]=[];
//           let min=charges[i][0];
//           let max=charges[i][0];
//          let sum=0;
//          let avg=0;
//           for(let j=0;j<charges[i].length;j++){
//               sum+=charges[i][j];
//             if(charges[i][j]<min){
//             min=charges[i][j];
//           }

//             if(charges[i][j]>max){
//             max=charges[i][j];
//           }
            
//           }
//           avg=sum/charges[i].length;

//       rows.push(min,max,avg);
//       result.push(rows);
//         }
//           return result;
//   }
//   console.log(computeCharges([[1, 2, 3, 4, 5], [10, 20, 30, 60]]));

//   function calcDiffrence(array1: any, array2: any){
//     let result=0;
//     for(let i=0;i<array1.length;i++){
//       let difference = array1[i] - array2[i];
      

//       if(difference === 0){
//         difference = 1
//       }
      
//       result = result + difference;
      
//       }
//     return result;

//   }

//   console.log(calcDiffrence( [80,78,82], [50,48,52]))




//   //trial

//   function getSix(){
//     return 6;
//   }
//   const f1=getSix();
//   console.log(f1);
//   const f2=getSix;
//   console.log(f2);
//   const f3=f1;
//   console.log(f3);
//   const f4=f2();
//   console.log(f4);
//   // const f5=f1();

//   console.log(f2())


  // console.log("123"==123);



  // function foo(x){
  //   bar(x);
  // }
  // const y=foo();//has no return so, it is undefined

//quiz questions

//   const a = {};
// const b = {};
// console.log(a === b);

// const a = 5;
// const b = 5;
// console.log(a === b);


// const a = {name: "John", age: 10};
// const b = {name: "John", age: 10};
// console.log(a === b);

// const a = {name: "John", age: 10};
// const b = a;
// console.log(a === b);

// const a = {name: "John", age: 10};
// const b = a;
// b.name = "alex";
// b.age = 65;
// console.log(a === b);


// let baz = "" + 33 + 10;
// console.log(baz=== 43);


// const a = 5;
// a = 6;


// const a = {x: 5};
// a.x = 6;
// console.log(a.x);


// const a = {x : 5};
//  a = {x : 6};
// console.log(a);




      

  
    