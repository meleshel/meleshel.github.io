
    export function isVowel(letters:string):boolean{
            if(letters.length!==1){
              return false;
            }

           letters=letters.toString();
        if(letters=='a'|| letters=='e'||letters=='i'||letters=='o'||letters=='u'){
          return true;
        }
    
        return false;
}

       