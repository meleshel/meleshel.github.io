/**
 *
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 *
 */
// Function to generate a filter for values in an array
export function inArray(arr) {
    return function (value) {
        return arr.includes(value);
    };
}
// Function to generate a filter for values between two numbers
export function inBetween(min, max) {
    return function (value) {
        return value >= min && value <= max;
    };
}
export function makeArmy() {
    let shooters = [];
    for (let idx = 0; idx < 10; idx++) {
        let shooter = function () {
            console.log(`I am shooter ${idx}`);
            return idx;
        };
        shooters.push(shooter);
    }
    return shooters;
}
