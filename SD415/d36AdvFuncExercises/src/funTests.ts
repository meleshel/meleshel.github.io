
// /**
//  * 
//  * @param {*} arr 
//  * @param {*} func 
//  * @returns 
//  */

// export function myMap(arr:number[], func:(num:number)=>number):number[] {
//     //IMPLEMENTATION NEEDED
//     const newArray:number[]=[];
//     for(const num of arr){
//         newArray.push(func(num));

//     }
//     return newArray;
// }

// /**
//  * 
//  * @param {*} arr 
//  * @param {*} func 
//  * @returns 
//  */

//     function square(num:number):number{
//         return num*num;

//     }
//     export function myFilter(arr:number[], func:(num:number)=>number):number[] {
//     //IMPLEMENTATION NEEDED
//     const newArray:number[]=[];
//     for(const num of arr){
//         if(func(num)){
//             newArray.push(num);
//         }
//     }
//     return newArray;
//     }

// /**
//  * 
//  * @param {*} arr 
//  * @param {*} func 
//  * @param {*} initialValue 
//  * @returns 
//  */

// function mutiply(NUm1:number, num2:number):number{
//     return NUm1*num2;

// }

// export function myReduce(arr:number[], func:(accumulator:number,num:number)=>number, initialValue:number):number {
//     //IMPLEMENTATION NEEDED
//         for(const num of arr){
//             initialValue=func(initialValue,num);
//         }
//     return initialValue ;
//     }


//     //A function for recursively printing even numbers

//     function evenRecurse(number: number): void {
//         if (number >= 0) {
//             if (number % 2 === 0) {
//                 console.log(number);
//             }
//             evenRecurse(number - 2);
//         }
//     }
    
//     // Test the function
//     evenRecurse(7);

// Write your own version of map. Write a function, myMap that takes 2 arguments, an array and 
// a function to apply to the array. It should return a new array of the same size with the function 
// applied to each element of the input array. It should not change the input array.
// function myMap(func:Function, num:number[]):number[]{

//                 return func(num);
        
//             }

//         function cube(num:number[]):number[]{
//             return num.map(number=>number*number*number);

//         }
//         const result=myMap(cube,[1,2,3,]);
//         console.log("The result is:",result); 
        



// function double(num:number):number{
//     return(num*2);
// }
 
// function cube(num:number):number{
//     return (num*num*num);
// }
 
// function myMap(arr:number[], func:(num:number)=>number):number[]{
//     return(arr.map(num=>func(num)));
// }
 
// console.log(myMap([1,2,3],double));
// console.log(myMap([1,2,3],cube));


// Write your own version of filter. Write a function, myFilter that takes 2 arguments, an array and 
// a function to apply to the array. It should return a new array with the function applied to each 
// element of the input array. It should not change the input array. It should work like Array.filter. 
// I.e., the input function returns true or false for each element in the original array, and the true 
// elements are included in the returned array.


// function myFilter(func: (num: number) => boolean, nums:number[]):number[]
// {
//     return nums.filter(func);

// }
// function includes(nums:number[], num:number):boolean{
//     return nums.includes(num);

// }



// write your own version of reduce, myReduce.

// function myReduce(num:number[]):number{

//     let total=1;

//     return num.reduce((total,num)=>total*num,1);
// }
// console.log("Expect 10:",myReduce([1,2,3,4]));


/**
 *
 * @param {Array} arr
 * @param {Function} func
 * @returns {Array} returns a new element after the application of the function
 */
type MapFunc<T, U> = (currentValue: T, Index?: number, array?: T[]) => U;
export function myMap<T, U>(arr: T[], func: MapFunc<T, U>): U[] {
  const newArr: U[] = [];
  for (const currentValue of arr) {
    newArr.push(func(currentValue, arr.indexOf(currentValue), arr));
  }
  return newArr;
}

/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
type FilterFunc<T> = (currentValue: T, Index?: number, array?: T[]) => boolean;

export function myFilter<T>(
  arr: T[],
  func:FilterFunc<T>
): T[]{
  let filteredEl:T[] = [];
  for (const currentValue of arr) {
    if (func(currentValue, arr.indexOf(currentValue), arr)) {
      filteredEl.push(currentValue);
    }
  }
  return filteredEl;
}


/**
 *
 * @param {*} arr
 * @param {*} func
 * @param {*} initialValue
 * @returns
 */
type ReduceCallback<T, U> = (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U;
export function myReduce<T, U>(arr: T[], func: ReduceCallback<T, U>, initialValue: U): U {
    let accumulator: U = initialValue;

    for (const currentValue of arr) {
        accumulator = func(accumulator, currentValue, arr.indexOf(currentValue), arr);
    }

    return accumulator;
}


//making a map method for array of numbers

// function myMapNum(arr:number[], callback:(current:number,index?: number,arr?:number[])=>number):number[]{
//   let newMap:number[]=[];
//   for(const ele of arr){
//     newMap.push(callback(ele))
//   }
//   return newMap;
// }