const INSERT_COIN_STATE = "INSERT COIN";
const NICKEL_WEIGHT = 5.0;
const NICKEL_AMOUNT = 0.05;
const DIME_AMOUNT = 0.10;
const QUARTER_WEIGHT = 5.7;
const QUARTER_AMOUNT = 0.25;
const DIME_WEIGHT = 2.3;

module.exports = function createVendingMachine(returnCoin) {
  let currentAmount = 0;
  return {
    receiveCoin: (weight) => currentAmount += amountForWeight(weight, returnCoin),
    output: () => currentAmount ? formatAmount(currentAmount) : INSERT_COIN_STATE
  }
}

function amountForWeight(weight, returnCoin) {
  if (weight === QUARTER_WEIGHT) return QUARTER_AMOUNT;
  if (weight === NICKEL_WEIGHT) return NICKEL_AMOUNT;
  if (weight === DIME_WEIGHT) return DIME_AMOUNT;
  returnCoin();
}

function formatAmount(amount) {
  return `$${amount.toFixed(2)}`;
}