 const prompt = require("prompt-sync")();

// //  1. Write a program to compute sales commission based on following rules:
// //  If the salesman is salaried then
// // These is no commission for sales below $300
// // 1% for sales from $300 and up to but less than $500
// // 2% for sales $500 or above
// // If the salesman is not salaried then
// // 2% for sales from $300 and up to but less than $500
// // 3% for sales $500 or above

// // let sales = parseFloat(prompt("Please enter the sales amount:"));
// // console.log("Sales: " + sales);

// // let salesMan = prompt("Please enter the status of the salesman:");
// // console.log("Salesman: " + salesMan);

// // let salesCommission = 0;

// // if (salesMan === "salaried") {
// //   if (sales < 300) {
// //     salesCommission = 0;
// //   } else if (sales >= 300 && sales < 500) {
// //     salesCommission = 0.01 * sales;
// //   } else {
// //     salesCommission = 0.02 * sales;
// //   }
// // } else {
// //   if (sales >= 300 && sales < 500) {
// //     salesCommission = 0.02 * sales;
// //   } else {
// //     salesCommission = 0.03 * sales;
// //   }
// // }

// //   console.log("Sales Commission: $" + salesCommission);

// //  // 2. Write a loop that continually prompts for age until you enter age older than 18
// //   // Write both while and do while versions

// //   let age = prompt("Please enter your age:");

// //  while (age <= 18) {
// //   age = prompt("Please enter your age:");
// //  }
// //  console.log(age);

// // // do while loop
// // do {
// //   age = prompt("Please enter your age:");
// //   console.log(age);
// // } while (age <= 18);

// // // // // 3. Make a defining table and program to print out the balance of a savings account that
// // // // // compounds interest monthly. Prompt the user for the
// // // // // • initial amount
// // // // // • annual interest rate
// // // // // • number of years to compound
// // // // // Do not use the mathematical formula for compound interest. Use a loop that calculates the
// // // // // interest for each month and compounds that over the iteration—i.e., add it to the current
// // // // // balance. Ask the professor or TA if this is not clear.

// // let initialAmount = parseFloat(prompt("enter amount"));
// // let annualInterestRate = parseFloat(prompt("enter annual interest"));
// // let yearsToCompound = parseInt(prompt("enter number of years"));

// // let currentBalance = initialAmount;
// // let monthlyInterestRate = annualInterestRate / 12;
// // let months = yearsToCompound * 12;

// // for (let month = 1; month <= months; month++) {
// //   let monthlyInterest = currentBalance * monthlyInterestRate;
// //   currentBalance += monthlyInterest;
// // }

// // // console.log(currentBalance);
// // //   `
// // // // //4. Write code to print the number patterns on the console

// // // 12345
// // // 12345
// // // 12345
// // // 12345
// // // 12345

// // for (let i = 1; i < 6; i++) {
// //   let str = "";
// //   for (let i = 1; i < 6; i++) {
// //     str += i;
// //   }
// //   console.log(str);
// // }

// // // 1
// // // 22
// // // 333
// // // 4444
// // // 55555

// // let str = "";
// // for (let i = 1; i <= 5; i++) {
// //   for (let j = 1; j <= i; j++) {
// //     str = str + i;
// //   }
// //   console.log(str);
// //   str = "";
// // }

// // //55555
// // // 4444
// // // 333
// // // 22
// // // 1

// // let str2 = "";
// // for (let i = 1; i <= 0; i++) {
// //   for (let j = 5; j <= i; j++) {
// //     str2 = str2 + i;
// //   }
// //   console.log(str2);
// //   str2 = "";
// // }

// // // 5. Cost of House Down Payment
// // //  Make a defining table and then write a program that calculates down payment for a home loan based
// // //  on following rules. Your program should prompt for the cost and write the down payment amount to
// // //  the console.
// // //  Cost of House Down Payment
// // //  $0 to less than 50K 5% of the cost
// // //  $50K to less than 100K $1000 + 10% of (cost - $50K)
// // //  $100K to less than 200K $2000 + 15% of (cost - $100K)
// // //  $200K and above $5000 + 10% of (cost - $200K)

// // const cost = parseFloat(prompt("Enter the cost of the house:"));

// // let downPayment;

// // if (cost < 50000) {
// //   downPayment = cost * 0.05;
// // } else if (cost < 100000) {
// //   downPayment = 1000 + 0.1 * (cost - 50000);
// // } else if (cost < 200000) {
// //   downPayment = 2000 + 0.15 * (cost - 100000);
// // } else {
// //   downPayment = 5000 + 0.1 * (cost - 200000);
// // }

// // console.log("The down payment amount is: $" + downPayment);

// // //  6. Write a JavaScript program to prompt for an integer and compute the sum of all the digits. Use the

// // let userInput = prompt("Enter an integer:");

// // let number = parseInt(userInput);

// // let sumOfDigits = 0;

// // let remainder = 0;
// // while (number > 0) {
// //   remainder = number % 10;
// //   sumOfDigits += remainder;
// //   number = Math.floor(number / 10);
// // }

// // console.log("The sum of the digits is: " + sumOfDigits);


// // if ("false") console.log(0);  else  console.log(1);




// // function oddEven(num){
// //   if (!num) return;
// //   if(num%2==0) return "Even";
// //   else return "Odd"
// //   }
// //   console.log(oddEven("hello"));

// // // function myFun(): void {

// // //   console.log("Oh happy day!")

// // // }

// // // const returnVal = myFun()


// // // Write a function named testPrime that returns true when the argument to the 
// // // function is a prime number, otherwise returns false.
// // function testPrime(num){
// //   for(let i=2;i<num;i++){
// //     if(num%i===0){
// //       return false;
// //     }
// //   }
// //   return true;
// // }
// // console.log("true",testPrime(7));

// // //new
// // let ages = 10;

// // console.log(ages);

// // function output() {

// //   let ages = 20;

// //   console.log(ages);

// // }

// // output();

// // console.log("age is" + ages);


// //exam practice: 


// //question 1: 

// // let brown= 10;
// // function someFun(blue) {
// //  let green= 108;
// //  if (blue >= brown) {
// //  blue = Math.sqrt(blue)
// //  }
// //  brown= green + blue;
// //  console.log(blue + " " + green + " " + brown);
// //  return blue;
// // }
// // console.log(brown); 
// // console.log(someFun(36)); 
// // console.log(brown); 
// // console.log(green);


// //question 2:

//       // let myObj = {
//       //   user1: {
//       // fname : ‘john’,
//       // lname : ‘doe’ 
//       //   },
//       //   user2: {
//       // fname : ‘john’,
//       // lname : ‘doe’ 
//       //   },
//       //   equals: function() {
//       //   return this.user1 === this.user2;
//       //   }
//       // }
//       // console.log(myObj.equals()); 


//     //corrected code
//       let myObj = {
//         user1: {
//           fname: 'john',
//           lname: 'doe'
//         },
//         user2: {
//           fname: 'john',
//           lname: 'doe'
//         },
//         equals: function() {
//           return (
//             this.user1.fname === this.user2.fname &&
//             this.user1.lname === this.user2.lname
//           );
//         }
//       };
      
//       console.log(myObj.equals());

      
//       //question 3:

//     // let anotherObject = {color: 'green'};
//     // let color='red';
//     // let myObject={
//     // anotherObject :{color: 'blue'}, 
//     // printColor:function(){ 
//     // console.log(this.anotherObject.color); 
//     // }
//     // }
//     // myObject.printColor(); 

//     //corrected code

//       // let anotherObject = { color: 'green' };
//       // let color = 'red';

//       // let myObject = {
//       //   anotherObject: { color: 'blue' },
//       //   printColor: function () {
//       //     console.log(this.anotherObject.color);
//       //   }
//       // };

//       // myObject.printColor();


//       //question 4: 
//      /* Write a JavaScript function "checkExam" that returns the grade number. The 
//       function receives two arguments, two arrays:
//       - The first input array contains the correct answers to an exam
//       - The second input array is "answers" array and contains student's answers.
//       - Return the grade number for the array of answers, giving +4 for each correct 
//       answer,-1 for each incorrect answer
//       -If the score < 0, return 0.
//       Example:
//       checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) →6 
//       checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) →7 
//       checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) →16
//       checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) →0*/

//       function checkExam(array1, array2){
//             let gradeNumber=0;
//             for(let i=0;i<array1.length;i++){
//               if(array1[i]===array2[i]){
                
//                 gradeNumber+=4;
//               }
//               else{
//                 gradeNumber-=1;
//               }
              
//             }
//             return gradeNumber;
//       }

//       console.log( checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
//       console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));


//       //question 5: 
//       /*Write a function ‘thisProgramIsTheBest’ which takes 3 parameters. First two 
//       parameters are objects that have property ‘age and the last one is a function, “cbFun”. If 
//       the age properties are equal, then return “Same Age!”, otherwise call the cbFun function 
//       with the input parameters as arguments, and then return “Different Ages”.*/

//       function thisProgramIsTheBest(obj1,obj2,cbFun){
          
//           const Object1={
//               age:10,
//           };
//           const object2={
//             age:20,
//           }

//                 if(Object1.age===Object2.age){
//                     return "Same Age!";
//                 }
//                 else{
//                   cbFun(Object1,Object2);
//                   return "different Ages";
//                 }
               
//           }
//           function functionCallBack(obj1,obj2){
//             console.log(obj1.age+obj2.age);
                  
//           }

//           // console.log(thisProgramIsTheBest(obj1,obj2));



//           /* Question 6:write a function, positive, that filter will use to return an array containing only 
//             positive numbers. For example, in the code below returnVal should be [10, 20, 30]. 
//             Also, fill in the blank for what the second log will show as the value of the array: 
//             let array = [-10, 10, 20, -20, -10, 30]
//             let returnVal= array.filter(positive);
//             console.log(returnVal); 
//             console.log(array); */

//             function positive(arr1){
//               let result=[];
//               for(let i=0;i<arr1.length;i++){
//                 if(arr1[i]>0){
//                   result.push(arr1[i]);
//                 }
//               }
//               return result;
//             }
//             let array=[-10, 10, 20, -20, -10, 30];
//             console.log(positive(array));

//             /**Question 7:. Write a second function, negative, that filter can use to return an array of only 
//               negative numbers 
//               let returnVal2= array.filter(negative); //[-10, -20, -10]  */

//               function negative(arr1){
//                 let output=[];
//                 for(let i=0;i<arr1.length;i++){
//                   if(arr1[i]<0){
//                     output.push(arr1[i]);
//                   }
//                 }
//                 return output;
//               }
//               let array1=[-10, 10, 20, -20, -10, 30];
//               console.log(negative(array1));

//                 type Person ={
//                   name:string,
//                   points:number[]
//                 }

//               /**const player1 = 
//                     {name: "Bob", points: [1, 2, 1]};
//                   const player2 = {name: "Andre", points: [2, 0, 1]};
//                   const player3 = {name: "Max", points: [1, 1, 1]};

//                   const players = [player1, player2, player3];

//                   console.log("expect 10: ", sumPoints(players)); */

//             //this is for javascript

//                   // function sumPoints(players){
//                   //       let sum=0;
//                   //       for(let player of players){
//                   //         for(let point of player.points){
//                   //            sum+=point;
//                   //         }
                           
//                   //       }
//                   //       return sum;
//                   // }


//                   //in typescript:

//                 //   type Person ={
//                 //     name:string,
//                 //     points:number[]
//                 //   }
  
//                 // const player1 = 
//                 //       {name: "Bob", points: [1, 2, 1]};
//                 //     const player2 = {name: "Andre", points: [2, 0, 1]};
//                 //     const player3 = {name: "Max", points: [1, 1, 1]};
  
//                 //     const players = [player1, player2, player3];
  
//                 //     console.log("expect 10: ", sumPoints(players));
  
              
//                 //     function sumPoints(players:Person[]):number{
//                 //           let sum=0;
//                 //           for(let player of players){
//                 //             for(let point of player.points){
//                 //                sum+=point;
//                 //             }
                             
//                 //           }
//                 //           return sum;
//                 //     }
//                 //     console.log(sumPoints(players));




// //                   /**/* write a function findProps to return an array of all the properties in any given object */
// // console.log("expect [a, b, c]: ", findProps({a: 1, b: 2, c: 3})); */



// //in javascript
//     //   type Property={
//     //     name:string,
//     //     age:number,
//     //   }
                
//     // function findProps(obj:Property):string[]{
//     //   const result=[];
//     //             for(let key in  obj){
//     //               result.push(key);
//     //             }
//     //             return result;
//     //     }


//     //in typescript


//   //   type Property={
//   //     a:number,
//   //     b:number,
//   //     c:number,
//   //   }
              
//   // function findProps(obj:Property):string[]{
//   //   const result=[];
//   //             for(let key in  obj){
//   //               result.push(key);
//   //             }
//   //             return result;
//   //     }
//   //     console.log("expect [a, b, c]: ", findProps({a: 1, b: 2, c: 3}));

//         const bar=""+foo;
//         console.log(bar);


// console.log( 0.666667.toFixed(4) == (2 / 3).toFixed(4) ); // true?
// console.log( 0.6666666666666667 === 2 / 3 ); // true


// /*Use slice and trim to generate the following:
// Slice is cool!
// lice is cool!
// ice is cool!
// ce is cool!
// e is cool!
// is cool!
// is cool!
// s cool!
// cool!
// cool!
// ool
// !
// ol
// !
// l!!*/


//   // let str="Slice is cool!";
//   // let new="";
//   // for(let i=0;i<str.length;i++){
   
//   // }

//   //correct answer:

//   // for(let x = 0;x < slices.length;x++){
// //     console.log(slices.slice(x))
// // }

//   /*use forEach to log all the even elements of an array to the 
//   console 
//   [1,5,16,3, 108]*/



//   //this is in javascript
// //   function isEven(num){

// //   if(num%2===0){
// //     console.log(num);
// //   }

// // }

// //   [1,5,16,3, 108].forEach(isEven);


// //this is in typescript



//       // [1,5,16,3, 108].forEach(function(num:number):void{
//       //   if(num%2===0){
//       //     console.log("even numbers are:",num);
//       //   }

//       // });

//             /** use slice and splice to implement the replaceInterior function
//            const arr = [1, 2, 3, 4, 5];
//           const result = replaceInterior(arr, 999);
//           console.log("expect [1, 999, 5]: ", result);
//           const result2 = replaceInterior(arr, 1234);
//           console.log("expect [1, 1234, 5]: ", result2);
//           console.log("expect [1, 2, 3, 4, 5]: ", arr); */


//           function replaceInterior(arr,num){

//                   return arr.splice(1,arr.length-2,num);

//           }

//                         /** const numbers = [1, 5, 18, 2, 77, 108];
//               ➢ use filter, find, and findIndex to find
//               ➢ all the even numbers
//               ➢ the first even number
//               ➢ the index of the first even number
//               */
   


//               const numbers=[1,5,18,2,77,108];
//               console.log("expect [18,2,108]:", numbers.find(num=>num%2==0));

//               console.log("expect 18:" , numbers.filter(num=>num%2===0));
//               console.log("expect 18:" , numbers.findIndex(num=>num%2===0));


//               let baz = "" + 33 + 10;
//               console.log(baz === 43);


              //sorting numbers

              function compareNumeric(a, b){ 
                //need to modify this function
             if (a > b) return 1;
             if (a == b) return 0;
             if (a < b) return -1;
            }
            let arr = [ 1, 15, 2 ];
            arr.sort(compareNumeric);
            console.log(arr); 

            // reduce the array to the product of the numbers (“expect 120”)
            // ➢ reduce the array to the max of the numbers (“expect 5”)
        
          // let arr2 = [1, 2, 3, 4, 5];


        let arr2 = [1, 2, 3, 4, 5];
        let product = arr.reduce((accumulator, currentValue) => accumulator * currentValue);

        console.log("Product:", product); // Expect 120



        let arr3 = [1, 2, 3, 4, 5];
        let max = arr.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));

        console.log("Max:", max); // Expect 5


              
        let [firstName, lastName] = "Liya Kantor".split(' ');

        console.log(firstName); // Output: "Liya"
        console.log(lastName);  // Output: "Kantor"
        
        
     //quiz question:const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
// const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
// const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
// const teamStats = [player1, player2, player3];

//Write a function, findHighScores, that finds the high score in the season for each player as follows:
// console.log("expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: " , findHighScores(teamStats));

        type GameStats = {
          game: number;
          points: number;
        };
        
        type Player = {
          jersey: number;
          stats: GameStats[];
        };
        
        type HighScore = {
          jersey: number;
          high: number;
        };
        
        function findHighScores(teamStats: Player[]): HighScore[] {
          const highScores: HighScore[] = [];
        
          for (const player of teamStats) {
            const maxPoints = player.stats.reduce((max, game) => Math.max(max, game.points), 0);
        
            highScores.push({ jersey: player.jersey, high: maxPoints });
          }
        
          return highScores;
        }
        
        // Test
        const player1: Player = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
        const player2: Player = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
        const player3: Player = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
        const teamStats: Player[] = [player1, player2, player3];
        
        console.log("Expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: ", findHighScores(teamStats));
        



        let john = { name: "John", surname: "Smith", age: 10 };
        let pete = { name: "Pete", surname: "Hunt", age: 20 };
        
        let people = [ john, pete];
        
        // Use the map function to map the people array to the following:
        [{ fullName: "John Smith", age: 10 },
        { fullName: "Pete Hunt", age: 20 },]
        
        type Person={
            name:string,
            surname:string
            age:number
        }
        
        const mappedPeople=people.map(({name,surname,age})=>({
            fullName:`${name} ${surname}`,
            age:age
        }))


        //finding even recursive

        function evenRecursive(num: number): void {
          if (num >= 0) {
            if (num % 2 === 0) {
              console.log(num);
            }
            evenRecursive(num - 1);
          }
        }
        evenRecursive(13);

    //write a function, averagePoints, to get an array containing the average points across for each player . Then modify the function to return objects,

    // Try with a regular for..of loop and then using map and reduce.
    // const player1 = {name: "Bob", points: [1, 2, 1]};
    // const player2 = {name: "Andre", points: [2, 0, 1]};
    // const player3 = {name: "Max", points: [1, 1, 1]};
    // const players = [player1, player2, player3];
    // console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
    // //console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePointsLabeled (players));
    type Player = {
  name: string;
  points: number[];
};

function averagePoints(players: Player[]): number[] {
  const averages: number[] = [];

  for (const player of players) {
    let totalPoints = 0;

    for (const points of player.points) {
      totalPoints += points;
    }

    const average = totalPoints / player.points.length;
    averages.push(average);
  }

  return averages;
}

// Test
const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];

console.log("Expect [1.33, 1, 1]:", averagePoints(players));

      //using map and reduce

      type Player = {
        name: string;
        points: number[];
      };
      
      function averagePoints(players: Player[]): number[] {
        const averages: number[] = players.map((player) => {
          const totalPoints = player.points.reduce((acc, points) => acc + points, 0);
          return totalPoints / player.points.length;
        });
      
        return averages;
      }
      
      // Test
      const player1 = { name: "Bob", points: [1, 2, 1] };
      const player2 = { name: "Andre", points: [2, 0, 1] };
      const player3 = { name: "Max", points: [1, 1, 1] };
      const players = [player1, player2, player3];
      
      console.log("Expect [1.33, 1, 1]:", averagePoints(players));

      
      // Function to calculate average points and return labeled results using map and reduce
function averagePointsLabeled(players: Player[]): { [key: string]: number }[] {
  return players.map((player) => {
    const totalPoints = player.points.reduce((acc, points) => acc + points, 0);
    const average = totalPoints / player.points.length;
    return { [player.name]: average };
  });
}


type Player = {
  name: string;
  points: number[];
};

function averagePointsLabeled(players: Player[]): { [key: string]: number }[] {
  const averages: { [key: string]: number }[] = [];

  for (const player of players) {
    let totalPoints = 0;

    for (const points of player.points) {
      totalPoints += points;
    }

    const average = totalPoints / player.points.length;
    averages.push({ [player.name]: average });
  }

  return averages;
}

// Test
// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };
// const players = [player1, player2, player3];

// console.log("Expect [{Bob: 1.33, Andre: 1, Max: 1}]:", averagePointsLabeled(players));


// type Player = {
//   name: string;
//   points: number[];
// };

// function averagePointsLabeled(players: Player[]): { [key: string]: number }[] {
//   return players.map((player) => {
//     const totalPoints = player.points.reduce((acc, points) => acc + points, 0);
//     const average = totalPoints / player.points.length;
//     return { [player.name]: average };
//   });
// }

// // Test
// const player1 = { name: "Bob", points: [1, 2, 1] };
// const player2 = { name: "Andre", points: [2, 0, 1] };
// const player3 = { name: "Max", points: [1, 1, 1] };
// const players = [player1, player2, player3];

// console.log("Expect [{Bob: 1.33, Andre: 1, Max: 1}]:", averagePointsLabeled(players));


let lengths = ["Bilbo", "Gandalf", "Nazgul"]
let result= lengths.map((index, item) => `${index}: ${item.length}`);