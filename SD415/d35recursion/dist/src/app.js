//recursive function to find factorial of a  using for loop
function factorial(num) {
    let total = 0;
    for (let i = num; i > 0; i - 1) {
        total = total + i;
    }
    return total;
}
console.log("expect 120:", factorial(5));
// Calculate factorial using recursive function
function fact(num) {
    //base case
    if (num === 1) {
        return 1;
    }
    else {
        return num * fact(num - 1);
    }
}
console.log("expect 120:", fact(5));
/**• Write a recursive function to count the instances of a letter in a string. Use
recursion rather than split and filter.
• Base case?
• Reductive recursive call?
countInstances("All that is great and good.", "t") → 3 */
function countInstances(string, letter) {
    if (string === "") {
        return 0;
    }
    else if (string[0] === letter) {
        return 1 + countInstances(string.substring(1), letter);
    }
    else {
        return countInstances(string.substring(1), letter);
    }
}
console.log(countInstances("I love javascript.", "v"));
/**Section: Recursion and stack
•                Sum all numbers till the given one
        • Calculate factorial
        • Fibonacci numbers (the dynamic programming solution is optional) */
// Sum all numbers till the given one using for loop
function sum(x) {
    let total = 0;
    for (let i = 1; i <= x; i++) {
        total += i;
    }
    return total;
}
console.log("Expect :10:", sum(4));
//recursive function for fibonacci
function fib(n) {
    if (n == 1 || n == 0) {
        return n;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log("Expect 2:", fib(3));
const company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
        department.forEach(person => console.log(person.names));
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    }
    else { // case (2)
        let sum = 0;
        for (const subdep of Object.values(department)) {
            const subDepartment = subdep;
            sum += sumSalaries(subDepartment); // recursively call for subdepartments, sum the results
        }
        return sum;
    }
}
console.log(sumSalaries(company)); // 6700
export {};
