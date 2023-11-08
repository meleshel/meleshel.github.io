export function calcDownpayment(cost:number):number{
    let downPayment=0;
    if(cost>=0&&cost<50000){
    downPayment=0.05*cost;
    }
    else if(cost>=50000&&cost<100000){
      downPayment=2500+0.1*(cost-50000);
    }
    else if(cost<200000&&cost>=100000){
      downPayment=7500+0.15*(cost-100000);
    }
    else{
      downPayment=20000+0.10*(cost-200000);
    }
    return downPayment;
  
  }
  
