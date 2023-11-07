
// /**11/3/2023
// SD415 Object Oriented and Functional Programming in JavaScript
// Assignment
// W1D5 Function Expressions
// Use the Mocha test file, d15fnExps/test/fnExpsTests.ts, to test your implementations of the following 
// functions. The test file is contained in the starter code for today’s assignment. Try using JSdoc to 
// document the parameters and returns for each function.
// 1. Write a function, double, that takes a number and returns 2 times the number.
// 2. Write a function times100 that takes a number and returns 100 times the number.
// 3. Write a function, myMap, that takes an array and a function and returns a new array that has 
// the function applied to each element of the input array. Use your myMap function with your 
// double and times100 functions.
// 4. (Not covered on exam 1) Demonstrate your myMap function with an anonymous function that 
// triples the input value. Write this as an anonymous function expression. Then write it using an 
// arrow expression. Write these functions in the mocha tests where it says /* YOUR CODE HERE 
//  */

// //Number 1:

// function double(num:number):number{
//   return 2*num;

// }
// console.log("double of 4 is",double(4));

// //Number 2: 
// function times100(num:number):number{
//     return 100*num;
// }
// console.log(" 100 times 100 is:",times100(100));

//Number 3:

// const map=(num:number[])=>number[];

// const mappedValue=map([1, 2, 3, 4]);


function myMap(arr: number[], fun: (num: number) => number): number[] {
  const result: number[] = [];

  for (const item of arr) {
  
    result.push(fun(item));
  }

  return result;
}

// Example function to double a number
function double(num: number): number {
  return num * 2;
}

// Example function to multiply a number by 100
function times100(num: number): number {
  return num * 100;
}

const originalArray = [1, 2, 3, 4];
const doubledArray = myMap(originalArray, double);
const times100Array = myMap(originalArray, times100);

console.log("Original Array:", originalArray);
console.log("Doubled Array:", doubledArray);
console.log("Times 100 Array:", times100Array);



gggggggggg

//anonymous function

// let x,y=0;
const add = (x:number, y:number) => x + y;
const result = add(3, 4);
console.log(result); // result will be 7


//using anonymous function for question 4

function myMaps<T, U>(arr: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
 
function doubles(value: number): number {
  return value * 2;
}
 
function times1000(value: number): number {
  return value * 100;
}
 

const inputArray: number[] = [1, 2, 3, 4, 5];
 

const doubledArrays = myMaps(inputArray, doubles);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]
 

const times1000Array = myMaps(inputArray, times1000);
console.log(times100Array); // Output: [100, 200, 300, 400, 500]



//anonymous function which triples the initial value

function mymap<T, U>(arr: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}


const inputarray: number[] = [1, 2, 3, 4, 5];


const tripledArray = mymap(inputArray, (value) => value * 3);
console.log(tripledArray); 



// function myMap(inputArray:number[], func(num:number)=>number):number[] {
//   const resultArray = [];
//   for (const element of inputArray) {
//     resultArray.push(func(element));
//   }
//   return resultArray;
// }


// function double(number) {
//   return number * 2;
// }

// function times100(number) {
//   return number * 100;
// }

// const myArray = [1, 2, 3, 4, 5];

// const doubledArray = myMap(myArray, double);
// console.log("Doubled Array:", doubledArray);

// const times100Array = myMap(myArray, times100);
// console.log("Times 100 Array:", times100Array);


    //funtions as first class objects

    // function sayHi(): void {
    //   console.log( "Hello" );
    //  }
    //  console.log(sayHi());//outputs Hello to the console and undefined, because it has no return type.
    //  const myHi = sayHi;
    //  console.log( sayHi ); 

    //  // shows the function code

    //  function higherOrder()
    //   { 
    //     return sayHi;
    //    }


        // let sayHi = function() 
        // {
        //   console.log("Hi");
        // };
        // sayHi();

        // Output?


          // function A()
          // {
          //   console.log("A is called");
          //   console.log("Before B is called");
          //   B();
          //   console.log("After B is called")
          //   }

          //   function B()
          //   {
          //   console.log("B is called");
          //   console.log("Before C is called");
          //   C();
          //   console.log("After C is called");
          //   }

          //   function C()
          //   {
          //   console.log("C is called");
          //   }
          //   A();
          //   console.log("After A is called");



          //   let str = "123.33";

          //   let num = Number(str); // becomes a number 123.33
          //   num = parseFloat(str); // becomes a number 123.33
          //   // num = parseInt(str);
          //   console.log(num);


          //               let x = 5;
          //   console.log(x);
          //   if(x==5){
          //   let y = 2*x;
          //   console.log(y);
          //   console.log(x); // x is accessible here.
          //   }
          //   console.log(x);
          //   // console.log(y); //can not access y, because it is declared inside if block



          //   let message = "hello";
          //       message = "123456";
          //       console.log("  value os message now is: "+ message);

          //       let names = null;
          //           let age;
          //           console.log(names,age);


          //           function oddEven(num: number): string {

          //             if(num%2==0) return "Even";
          //             else return "Odd" 
          //           }
          //           console.log("determine if it is odd/even:" +oddEven(5) );

          //             // function oddEven(num: number): void {
          //             // console.log(num % 2 === 0 ? "even" : "odd"); }


          //             function hello(id:number, name:string): void { 
          //               console.log("values of name and Id is:");
          //               }


          //               let matrix = [
          //                 [1, 2, 3],
          //                 [4, 5, 6],
          //                 [7, 8, 9]];
          //                 console.log("matrix :"+ matrix);
          //                 for (let i = 0; i < matrix.length; i++) {
          //                 for (let j = 0; j < matrix[i].length; j++) {
          //                 console.log("matrix of i and j:"+ matrix[i][j]);
          //                 }
          //                 }
                        
          //                 //quiz question:
          //                 function sayHi(name: string) {
          //                   console.log("Hi ", name);
          //                   return "Bye " + name;
          //                 }
                          
          //                 const sayHiReturn = sayHi("John");
          //                 console.log(sayHiReturn);


          //                 if ("false") console.log(0);  else  console.log(1);

          //                 if (false) console.log(0);  else  console.log(1);

          //                 if (true) console.log(0);  else  console.log(1);


          //                 function myFun(): void {

          //                   console.log("Oh happy day!")
                          
          //                 }
                          
          //                 const returnVal = myFun();
          //                 console.log("show the log of myFun",myFun());
                          
          //                 //What will the value of returnVal be?




          //objects
let quizAnswers=[];
let student1={
studentId:101,
quizAnswers:[1,1,2,4]
};
let student2={
  studentId:102,
  quizAnswers:[2,1,2,2]
};
let student3={
  studentId:103,
  quizAnswers:[3,1,3,4]
};

quizAnswers.push(student1,student2,student3);
console.log(quizAnswers);

function computeStudentScore(student1: number[], quizAnswers: number[]): number {
  let score = 0;

  for (let i = 0; i < student1.length; i++) {
    if (student1[i] === quizAnswers[i]) {
      score++;
    }
  }

  return score;
}

let students1 = [3, 1, 2, 4];
let quizanswers = [3, 1, 2, 4];

console.log(computeStudentScore(students1 , quizanswers)); 
                       

const person = {
   name: 'John',
  age: 30
 };

for (const key in person) {
  console.log(key, person[key]);
}


const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}


//call back functions







