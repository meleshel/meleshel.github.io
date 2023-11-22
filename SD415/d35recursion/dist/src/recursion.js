export { sumTo, factorial, fibonacci,
//  outputList, 
//  outputListLoop,
//   reverseList, 
//   reverseListLoop,
//    TreeNode, 
//    sumTreeValues
 };
function sumTo(n) {
    if (n == 1)
        return 1;
    return n + sumTo(n - 1);
}
function factorial(n) {
    if (n == 1 || n == 0) {
        return n;
    }
    else {
        return n * factorial(n - 1);
    }
}
function fibonacci(n) {
    if (n == 1 || n == 0) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
// type TreeNode = {
//     value: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
// }
