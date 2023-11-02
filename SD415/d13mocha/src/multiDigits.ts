export  function multiDigits(numbers:number):number{
    let product=1;
    let remainder=0;
    while(numbers>0){
       remainder=numbers%10;
       product=product*remainder;
       numbers=Math.floor(numbers/10);
    }
  return product;

  }

