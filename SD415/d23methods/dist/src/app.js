// /**
//  * 
//  * @param {*} str 
//  */
// export function ucFirst(str:string) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
//   /**
//    * 
//    * @param {*} str 
//    */
//   export  function checkSpam(input: string): boolean  {
//       const spamKeywords: string[] = ['viagra', 'free', 'xxxxx'];  
//       const lowercasedInput: string = input.toLowerCase();
//       for (let i = 0; i < spamKeywords.length; i++) {
//           if (lowercasedInput.includes(spamKeywords[i])) {
//               return true;
//           }
//       }
//       return false;
//   }
// /**
//  * 
//  * @param {*} str 
//  * @param {*} maxlength 
//  */
// export   function truncate(str:string, maxlength:number):string {
//     if (str.length > maxlength) {
//       return str.slice(0, maxlength - 1) + "…";
//     } else {
//       return str;
//     }
//   }
// /**
//  * 
//  * @param {Array} arr of numbers
//  * @returns {number} the total of the maximal subarray
//  */
// export function getMaxSubSum(arr:number[]) {
//     let maxSum = 0;
//     let currentSum = 0;
//     for (let num of arr) {
//       currentSum = Math.max(0, currentSum + num);
//       maxSum = Math.max(maxSum, currentSum);
//     }
//     return maxSum;
//   }
// export function camelize(str:string) {
//     return str.replace(/[-_\s]([a-zA-Z])/g, (_, char) => char.toUpperCase());
//   }
// // export function extractCurrencyValue(){} 
// export function extractCurrencyValue(str:string){
//   return Number(str.replace(/[^0-9]/g, ''));
// }
// // function camelize(str) {
// //   return str
// //     .split('-') 
// //     .map(
// //       // capitalizes first letters of all array items except the first one
// //       // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
// //       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
// //     )
// //     .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// // }
/**
 *
 * @param {string} str
 * @returns {string}
 */
export function ucFirst(str) {
    if (str === "") {
        return str;
    }
    let upperCased = str[0].toUpperCase() + str.slice(1, str.length);
    return upperCased;
}
/**
 *
 * @param {string} str
 * @returns {boolean}
 */
export function checkSpam(str) {
    str = str.toLowerCase();
    console.log(str);
    if (str.includes("xxxxx") || str.includes("viagra")) {
        return true;
    }
    return false;
}
/**
 *
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
export function truncate(str, maxlength) {
    let truncated = "";
    if (str.length <= maxlength) {
        truncated = str;
    }
    else {
        truncated = str.slice(0, maxlength - 1) + "…";
    }
    console.log(truncated);
    return truncated;
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}
export function camelize(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-") {
            i++;
            if (str[i]) {
                result += str[i].toUpperCase();
            }
        }
        else {
            result += str[i];
        }
    }
    return result;
}
export function extractCurrencyValue(str) {
    const num = +str.slice(1);
    return num;
}
