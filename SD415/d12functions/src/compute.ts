export function computeSalesCommission(salaried: boolean, salesAmount: number): number {
    if (salesAmount < 300) {
      return 0;
    } else if (salaried) {
      if (salesAmount <= 500) {
        return salesAmount * 0.01;
      } else {
        return 500 * 0.01 + (salesAmount - 500) * 0.02;
      }
    } else {
      if (salesAmount <= 500) {
        return salesAmount * 0.02;
      } else {
        return 500 * 0.02 + (salesAmount - 500) * 0.03;
      }
    }
  }