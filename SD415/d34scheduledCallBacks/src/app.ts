

//You can write and run the timer code here via npm run app 


// . Write code to illustrate the use of the rest operator 
// a. In a destructuring assignment
// b. In a function call


//use of rest in a destructuring assignment

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);  
console.log(second); 
console.log(rest);  

//use of rest in a function call

function printArguments(first:number, second:number, ...rest:[]):void{
    console.log(first); 
    console.log(second); 
    console.log(rest);  


}
printArguments(1, 2);