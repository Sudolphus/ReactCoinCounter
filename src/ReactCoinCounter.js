const round = function(num) {
  return((Math.round(num*100)/100).toFixed(2));
}

export function CoinCounter(value) {
  if (value >= 0.25) {
    const numberOfQuarters = Math.floor(value / .25);
    value -= (numberOfQuarters * 0.25);
    return (numberOfQuarters.toString() + " quarters" + " " + CoinCounter(round(value))).trim();
  } else if (value >= 0.10) {
    const numberOfDimes = Math.floor(value / 0.10);
    value -= (numberOfDimes * 0.10);
    return (numberOfDimes.toString() + " dimes" + " " + CoinCounter(round(value))).trim();
  } else if (value >= 0.05){
    const numberOfNickels = Math.floor(value / 0.05);
    return numberOfNickels.toString() + " nickels";
  } else if (value >= 0.01){
    const numberOfPennies = Math.floor(value / 0.01);
    return numberOfPennies.toString() + " pennies";
  } else {
    return "";
  }
}