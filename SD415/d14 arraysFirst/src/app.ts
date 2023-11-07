/**1.• Write code to create an array named scores and fill it with 5 test scores 10, 
20, 30, 40 and 50.
• 2.Now write a function named findAverage, that takes an array as an 
argument and return average of the array values.
•3. Call findAverage function passing array you created in step1 and save the 
return result in a variable, average.
• 4.Print the average, it should be 30 for this example. 
• 5.Create a second array with values from 1 to 9 and find the average of the 
array values.
• 6.Should compute correct average for an array of any size. */

import { log } from "util";

let letters=['a','b','c','d','e'];
for(const letter of letters){
  console.log(letter);
}


//n.o 1
let scores=[];
scores[0]=10;
scores[1]=20;
scores[2]=30;
scores[3]=40;
scores[4]=50;

//n.o 2
function findAverage(scoresArray:number[]):number{
  let total =0;
  for(let i=0;i<scoresArray.length;i++){
    total=total+scoresArray[i];
  }
  return total/scoresArray.length;
}
console.log("average is" , findAverage(scores));
//n.o 3

let array19=[1,2,3,4,5,6,7,8,9];

console.log("Average of the array2 " , (array19));


//using multidimensional arrays

/**• Write a function that accepts a two-dimensional array of numbers and returns the sum of all 
the elements in the array.
• How many loops do you need?
• Inner loop?
• Try with indices and also for..of
const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
function sumMatrix(arr: number[][]) {
//implement this
}
console.log("expect 45: ", sumMatrix(matrix)); */

const matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

function sumMatrix(arr:number[][]):number{
  let total=0;
for(const row of arr){
  for(const num of row){
    total+=num;
  }
}
return total;
}
console.log(sumMatrix(matrix));


//arrays:using push() and pop() methods

let fruits = ["Apple", "Orange", "Pear"];

console.log(fruits);
fruits.push("lemon");//pushes to the last element
console.log(fruits);
fruits.pop();//removes the last element
console.log(fruits);

//using shift and unshift

fruits.shift();//removes an element from the beginning
console.log(fruits);

fruits.unshift("Apple");
console.log(fruits);


//using for loops
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
 console.log("the elements of the array are:", arr[i]);
}

//using for of loop

let manyFruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of manyFruits) {
  console.log("the list of many fruits is:",fruit);
}

  //Assignment questions
  /** 2.Define a function maxOfThree() that takes three numbers as arguments and returns the 
largest of them. For this and all following exercises be sure to include the required 
argument types and function return types. */

  function maxOfThree(num1:number,num2:number,num3:number):number{
      if(num1>num2){
        return num1;
      }
      if(num2>num3){
        return num2;
      }
      else{
        return num3;
      }

  }
  console.log("the maximum of the three numbers is:", maxOfThree(3,4,5));

  /** 3. Define a function sum() and a function multiply() that sums and multiplies (respectively) 
all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and 
multiply([1,2,3,4]) should return 24.  */


  function sum(numbers:number[]):number{
        let sum=0;
        for(let i=0;i<numbers.length;i++){
          sum+=numbers[i];
        }
        return sum;
  } 
  console.log("the sum of numbers is:",sum([1,2,3,4]));
  function multiply(numbers:number[]):number{
        let product=1;
        for(let i=0;i<numbers.length;i++){
          product*=numbers[i];
        }
        return product;
  }
  console.log("the product of the numbers is:",multiply([1,2,3,4]));

    /**4.Write a function findLongestWord() that takes an array of words and returns the length of 
the longest one */
    function findLongestWord(words:string[]):number{
     
        for(let i=0;i<words.length;i++){
          if(words[i].length>words[0].length){
            return words[i].length;
          }
          }
          return  words[0].length;
        }
        console.log("the largest word is:", findLongestWord(["one", "three","four"]));
                
            /**Arrays have a reverse method that changes the array by inverting the order in which its elements 
        appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, 
        reverseArray, takes an array as argument and produces a new array that has the same elements in 
        the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it 
        modifies the array given as argument by reversing its elements. This is a method that is very space 
        efficient. It does not create a new array or copy of the array. It returns the original array. Neither may 
        use the standard reverse method.
        console.log(reverseArray(["A", "B", "C"])); 
        // → ["C", "B", "A"]; 
        let arrayValue = [1, 2, 3, 4, 5]; 
        reverseArrayInPlace(arrayValue); 
        console.log(arrayValue); 
        // → [5, 4, 3, 2, 1] */

        function reverseArray(arr:string[]):string[]{
            let newArr=[];
            for(let i=arr.length-1;i>=0;i--){
              newArr.push(arr[i]);
        }
        return newArr;
      }
          console.log("the reversed array is:", reverseArray(["A","B","C"]));


          /*The second, reverseArrayInPlace, does what the reverse method does: it 
        modifies the array given as argument by reversing its elements. This is a method that is very space 
        efficient. It does not create a new array or copy of the array. It returns the original array. Neither may 
        use the standard reverse method. 
         let arrayValue = [1, 2, 3, 4, 5]; 
        reverseArrayInPlace(arrayValue); 
        console.log(arrayValue); 
        // → [5, 4, 3, 2, 1]*/

        function reverseArrayInPlace(numbers:number[]):number[]{
        
                for(let i=numbers.length-1;i>=0;i--){
                  numbers.push(numbers[i]);
                }
                return numbers;
        }
                const arrayValue=[1,2,3,4,5];
               console.log("The reverse of the array values is:",reverseArrayInPlace(arrayValue));

                  /** Write a function, scoreExams, that takes an array of arrays of student answers and an array of 
                  the correct answers. It should compare each student’s answers against the correct answers and 
                  return an array holding the scores of each student. The score for each student is a count of the 
                  number of correct answers (i.e., matches with the key of correct answers). For example
                  const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
                  const correctAnswers = [3, 1, 2,4];
                  scoreExams(studentAnswers, correctAnswers)); --> [3,2,3] */

                  function scoreExams(studentAnswers:number[][],correctAnswers:number[]):number[]{
                    const scores:number[]=[];
                      for(let i=0;i<studentAnswers.length;i++){
                        let score=0;
                       for(let j=0;j<studentAnswers[i].length;j++){
                            if(studentAnswers[i][j]===correctAnswers[j])
                            score++;
                       }
                       scores.push(score);
                      }
                   
                    return scores;
                      }
                      const studentAnswers=[[1,1,2,4],[2,1,2,2,]];
                      const correctAnswers=[3,1,2,4];
                    
                      console.log("score of the exams is:",scoreExams(studentAnswers,correctAnswers));


                      /**. Write a function that takes two integers as inputs and returns a 2-dimensional array containing 
                        sequential numbers across each row as follows:
                        console.log("expect [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] : ", generateArray(3,3));
                        console.log("expect [ [1, 2, 3], [4, 5, 6]]: ", generateArray(2,3));
                        console.log("expect [ [1], [2]]: ", generateArray(2, 1)); */

                        function generateArray(input1: number, input2: number): number[][] {
                          let newArray: number[][] = [];
                          let counter = 1;
                        
                          for (let i = 0; i < input1; i++) {
                            let input1 = [];
                            for (let j = 0; j < input2; j++) {
                              input1.push(counter++);
                            }
                            newArray.push(input1);
                          }
                        
                          return newArray;
                        }
                        
                        console.log(generateArray(3, 3));
                        console.log(generateArray(2, 3));
                        console.log(generateArray(2, 1));


                        //2019 exam questions: 

                        /**Write a function named sortThis that takes three input parameters and returns an array 
                          that has them sorted in ascending order.
                          e.g. calling sortThis(5, 2, 3) should return [2, 3, 5]
                        */


                      //  function sortThis(input1:number,input2:number,input3:number):number[]{
                      //   const result=[];
                      //   if(input1<input2&&input1<input3){
                      //       result[0]=input1;
                      //       if(input2<input3){
                      //           result[1]=input2;
                      //         result[2]=input3;
                      //       }
                      //       else{
                      //         result[1]=input3;
                      //         result[2]=input2;
                      //       }

                    
                      
                      //     return result;
                      //  }
                      //  console.log("the new array in ascending order is:",sortThis(5,2,3));

                      function sortThis(input1: number, input2: number, input3: number): number[] {
                        const result: number[] = [];
                     
                        if (input1 < input2 && input1 < input3) {
                            result[0] = input1;
                            if (input2 < input3) {
                                result[1] = input2;
                                result[2] = input3;
                            } else {
                                result[1] = input3;
                                result[2] = input2;
                            }
                        } else{
                            result[0] = input2;
                            if (input1 < input3) {
                                result[1] = input1;
                                result[2] = input3;
                            } else {
                                result[1] = input3;
                                result[2] = input1;
                            }
                        }
                     
                        return result;
                    }
                     
                    console.log("The new array in ascending order is:", sortThis(5, 2, 3));

                      // Write a function named somethingOdd that takes an array of numbers as input and 
                      // returns the product of all the array values at the odd indices.

                      function somethingOdd(arr:number[]):number{
                             let product=1;
                             for(let i=1;i<arr.length;i=i+2){
                              // if(i%2==0){
                                product=product*arr[i];
                              
                                console.log(arr[i]);
            
                             }
                             return product;
                      }
                      console.log("product of something odd is:", somethingOdd([1,2,3,4,5,6,7,8]));
                      
                        //write a mocha unit test with 2 “it” calls for the following function.
                      // function mult(x, y, z) {return x * y * z);

                    //   describe("multiply function",function() {
                    //     it("multiply 2*3*5",function()
                    //     assert.equal(mult(2,3,5),30));
                    //   )};

                    //     it("multiply 5*6*2",function()
                    //     assert.equal(mult(5,6,2),60));
                    //   })
                    // });


                    function showElement(arr: string[]): number {
                      for (let i = 0; i < arr.length; i++) {
                        console.log(arr[i]);
                      }
                      return arr.length;
                    }
                    
                    cons newarray= ["l", "m", "n"];
                    console.log("The elements are:",showElement(newArray));


                   
                //using for each loop

                    const newArr = ["l", "m", "n"];
                function showElements(arr: string[]): number {
                  let count = 0;
                  for (const element of arr) {
                    console.log(element);
                    count++;
                  }
                  return count;
                }
                
                const newArray = ["l", "m", "n"];
                
                console.log("Number of elements:", showElements(newArray));
                
                

                 



                    
                
                    

                       


                        




