/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/

// creating copy of an array using spread spread operator
export function copyArray<T>(arr: T[]): T[] {
    // COMPLETE THIS

return [...arr];

}

//concatenating arrays into new array


// export function concatArray<T>(arr:T[]):T[]{
//         return arr.concat();
// }

// // C. Concatenate an array and a new array element

// export function concatenateArray<T>(arr:T[]):T[]{
//     let array:T[]=[];
//     for(let i=0;i<arr.length;i++){
//             array.push(arr[i]);
//     }
//    return array;
// }

//d)	Use an array as arguments

export function concat<T>(arr:T[],arr2:T[]):T[]{
    return arr.concat(arr2);
}

//e)	Use Math.min and Math.max

export function findMin(...numbers:number[]):number{
    return Math.min(...numbers);

}
export function findMax(...numbers:number[]):number{
        return Math.max(...numbers);
}
export function findProduct(...numbers:number[]):number{
    return numbers.reduce((product,number)=>product*number,1);
}






