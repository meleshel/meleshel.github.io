

// console.log("in app.ts", "sum of [1,2,3] is: ", sum([1,2,3]));
// /**
//  * 
//  * @param {number} aa is a number
//  * @param {number} b is a number 
//  * @param {number} c is a number
//  * @returns {number} largest of a, b, c
//  */
// export function maxOfThree(aa: number, b: number, c: number): number{ 
//     return 0;  //IMPLEMENT THIS -- DO NOT USE MATH.MAX
// }

// /**
//  * 
//  * @param {Array} arr of numbers
//  * @returns {number} sum of arr numbers
//  */
// export function sum(arr: number[]): number{
// //IMPLEMENT THIS 
//     return 0;
// }


// /**
//  * 
//  * @param {Array} arr of numbers
//  * @returns {number} sum of arr numbers
//  */
// export function multiply(arr: number[]): number{
// //IMPLEMENT THIS 

//     return 0;

// }
// /* findLongestWord */
// /**
//  * takes an array of words and returns the length of the longest one
//  * @param {*} arr of words 
//  * @returns {number} length of longest word
//  */
// export function findLongestWord(arr: string[]): number{
// //IMPLEMENT THIS 

//     return 0;
// }

// /* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
// describe("generate array", function () {
//     const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
//     const expected23 = [ [1, 2, 3], [4, 5, 6]];
//     const expected21 = [ [1], [2]];
//      assert.deepEqual(generateArray(3,3), expected33); */

// /**
//  * 
//  * @param {*} rows num rows
//  * @param {*} cols num cols
//  * @returns {Array} 2d array with entries i + j
//  */
// export function generateArray(rows: number, cols: number): number[][]{
// //IMPLEMENT THIS 

// return [[0]];
// }



/******************************************* */

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