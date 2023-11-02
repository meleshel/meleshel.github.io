// import { assert } from "chai"
// function compoundInterest(initialAmount: number, annualInterestRate: number, yearsToCompound: number): number {
//     let currentBalance = initialAmount;
//     let monthlyInterestRate = annualInterestRate / 12;
//     let months = yearsToCompound * 12;
  
//     for (let month = 1; month <= months; month++) {
//       let monthlyInterest = currentBalance * monthlyInterestRate;
//       currentBalance += monthlyInterest;
//     }
  
//     return currentBalance;
//   }

  // describe("compoundInterest", function () {
  //   it("the compound interest of the values(100,10,1)", function () {
  //   assert.equal(compoundInterest(100,10,1), 110.47);
  //   });
  //   it("the compound interest of the values(10000,5,10)", function () {
  //   assert.equal(compoundInterest(10000,5,10), 16470.09);
  //   });
  // });