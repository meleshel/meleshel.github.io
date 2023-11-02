export function compoundInterest(initialAmount: number, annualInterestRate: number, yearsToCompound: number): number {
    let currentBalance = initialAmount;
    let monthlyInterestRate = annualInterestRate / 12;
    let months = yearsToCompound * 12;
  
    for (let month = 1; month <= months; month++) {
      let monthlyInterest = currentBalance * monthlyInterestRate;
      currentBalance += monthlyInterest;
    }
  
    return currentBalance;
  }



  
