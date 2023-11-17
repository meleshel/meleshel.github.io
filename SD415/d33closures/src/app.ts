//write any code you want to test here and run with npm run app
// import {makeArmy } from './closures.js';

// const army = makeArmy();

//  army[0](); // the shooter number 0 shows 10
//   army[5](); // and number 5 also outputs 10...





// Write a function, makeCounter() that declares a local variable, count, and 
// another local variable, innerFunc, which is an inner function; innerFunc will 
// increment the count variable and return the incremented value. makeCounter
// should return innerFunc.
// Call it twice to make different counters, counter1 and counter2. 
// Do they keep independent counts?


function makeCounter():()=>number{
        let count=0;
        function innerFunc():number{
            count++;
            return count;
        }
        return innerFunc;
}

const counter1=makeCounter();
const counter2=makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());