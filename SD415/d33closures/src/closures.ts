

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */


/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */





/**
 * @returns {Function} closure that returns it's number
 */



  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...


  // Filter through function
// • Army of functions
// For makeArmy replace the inner function with this code (it slightly simplifies the Mocha test):
//  let shooter = function() { 
//  console.log("I am shooter ", idx); 
//  return idx;
//  };



//**** */

type FilterFunction<T> = (value: T) => boolean;

// Function to generate a filter for values in an array
export function inArray<T>(arr: T[]): FilterFunction<T> {
  return function (value: T): boolean {
    return arr.includes(value);
  };
}

// Function to generate a filter for values between two numbers
export function inBetween(min: number, max: number): FilterFunction<number> {
  return function (value: number): boolean {
    return value >= min && value <= max;
  };
}



//**** */


  type Shooter = () => number;

  
  export function makeArmy(): Shooter[] {
    let shooters: Shooter[] = [];
    for (let idx = 0; idx < 10; idx++) {
      let shooter: Shooter = function () {
        console.log(`I am shooter ${idx}`);
        return idx;
      };
      shooters.push(shooter);
    }
    return shooters;
  }
  