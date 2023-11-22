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
function makeCounter() {
    let count = 0;
    function innerFunc() {
        count++;
        return count;
    }
    return innerFunc;
}
const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
function makeCounter2() {
    let count = 0;
    return function (num) {
        count += num;
        count += 1;
        let countWarn = "";
        if (num > 1) {
            countWarn = "Warning:  increment was by value greater than 1: " + count;
        }
        return countWarn;
    };
}
const myCount = makeCounter2();
export {};
// //The following objects record the season statistics for players on a basketball team.
// const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
// const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
// const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
// const teamStats = [player1, player2, player3];
// //Write a function, findHighScores, that finds the high score in the season for each player as follows:
// console.log("expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: " , 
// findHighScores(teamStats));
// // Be sure to use meaningful variable names and write JSdoc comments 
// // for findHighScores and any helper functions. 
// // You can write this in VS Code and then paste your solution into Sakai.
// type HighScore ={
//     jersey:number,
//     high:number
// }
// type Stat ={
//     game: number,
//     points: number
// }
// type Players ={
//     jersey:number,
//     stats:Stat[],
// }
// function findHighScores(teamStats:Players[]):HighScore[]{
//     const seasonHighScore:HighScore = team
//     for (const player of teamStats){
//         let highPoint = 0;
//         for(const stast of player.stats){
//             if (stast.points > highPoint){
//                 highPoint = stast.points;
//             }
//         }
//         let playerHighScore:HighScore = {jersey:player.jersey, high:highPoint};
//         seasonHighScore.push(playerHighScore);
//     }
//     return seasonHighScore;
// }
