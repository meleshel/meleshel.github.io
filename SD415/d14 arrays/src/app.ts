/**1.• Write code to create an array named scores and fill it with 5 test scores 10, 
20, 30, 40 and 50.
• 2.Now write a function named findAverage, that takes an array as an 
argument and return average of the array values.
•3. Call findAverage function passing array you created in step1 and save the 
return result in a variable, average.
• 4.Print the average, it should be 30 for this example. 
• 5.Create a second array with values from 1 to 9 and find the average of the 
array values.
• 6.Should compute correct average for an array of any size. */

let letters=['a','b','c','d','e'];
for(const letter of letters){
  console.log(letter);
}


//n.o 1
let scores=[];
scores[0]=10;
scores[1]=20;
scores[2]=30;
scores[3]=40;
scores[4]=50;

//n.o 2
function findAverage(scoresArray:number[]):number{
  let total =0;
  for(let i=0;i<scoresArray.length;i++){
    total=total+scoresArray[i];
  }
  return total/scoresArray.length;
}
console.log("average is" , findAverage(scores));
//n.o 3




let array19=[1,2,3,4,5,6,7,8,9];

console.log("Average of the array2 " , (array19));







