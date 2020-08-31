export function CoinCounter(value) {
  if (value >= 0.25) {
    const numberOfQuarters = Math.floor(value / .25);
    return numberOfQuarters.toString() + " quarters";    
  }
  else if (value >= 0.10) {
    const numberOfDimes = Math.floor(value / 0.10);
    return numberOfDimes.toString() + " dimes";
  }
}