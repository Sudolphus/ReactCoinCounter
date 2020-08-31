const round = function(num) {
  return((Math.round(num*100)/100).toFixed(2));
}

// export function CoinCounter(value) {
//   if (value >= 0.25) {
//     const numberOfQuarters = Math.floor(value / .25);
//     value -= (numberOfQuarters * 0.25);
//     return (numberOfQuarters.toString() + " quarters" + " " + CoinCounter(round(value))).trim();
  
//   } else if (value >= 0.10) {
//     const numberOfDimes = Math.floor(value / 0.10);
//     value -= (numberOfDimes * 0.10);
//     return (numberOfDimes.toString() + " dimes" + " " + CoinCounter(round(value))).trim();
  
//   } else if (value >= 0.05){
//     const numberOfNickels = Math.floor(value / 0.05);
//     value -= (numberOfNickels * 0.05);
//     return (numberOfNickels.toString() + " nickels" + " " + CoinCounter(round(value))).trim();
  
//   } else if (value >= 0.01){
//     const numberOfPennies = Math.floor(value / 0.01);
//     return (numberOfPennies.toString() + " pennies").trim();
//   } else {
//     return "";
//   }
// }

// const recursiveCount = function(value, quarters = 0, dimes = 0, nickels = 0){
//   if (value > .25) {
//     quarters++;
//     value -= .25;
//   } else if (value >= .10) {
//     dimes++;
//     value -= .1;
//   } else if (value >= .05) {
//     nickels++;
//     value -= .05;
//   }
//   if (value >= .05)
//   {
//     return recursiveCount(value, quarters, dimes, nickels);
//   } else {
//     return `${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${value*100} pennies`;
//   }
// }

export const Coin = function(coinValue) {
  return (value) => {
    return Math.floor(value/coinValue);
  }
}


export const CurryCounter = function(value) {
  const quarterCalc = Coin(.25);
  const numberOfQuarters = quarterCalc(value);
  value = round(value-numberOfQuarters*.25);
  const dimeCalc = Coin(.1);
  const numberOfDimes = dimeCalc(value);
  value = round(value-numberOfDimes*.1);
  const nickelCalc = Coin(.05);
  const numberOfNickels = nickelCalc(value);
  value = round(value-numberOfNickels*.05);
  return `${numberOfQuarters} quarters, ${numberOfDimes} dimes, ${numberOfNickels} nickels, ${Math.floor(value*100)} pennies`;
}