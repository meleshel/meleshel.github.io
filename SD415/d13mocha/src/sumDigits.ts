export   function sumDigits(numbers:number):number{
    let sum=0;
    let remainder=0;
    while(numbers>0){
       remainder=numbers%10;
       sum=sum+remainder;
       numbers=Math.floor(numbers/10);
    }
  return sum;
  } 

