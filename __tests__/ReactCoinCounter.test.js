/* eslint-disable no-undef */
import { CoinCounter } from './../src/ReactCoinCounter';

describe("CoinCounter", () =>{
// Quarter, Dime, Nickel, Penny


  test("should know the value of a quarter", ()=>{
    const quarters = CoinCounter(.25);
    expect(quarters).toBe("1 quarters");
  });

  test("Should know the value of a dime", () => {
    const dimes = CoinCounter(.10);
    expect(dimes).toBe("1 dimes");
  });

  test("Should know the value of a nickel", ()=>{
    const nickels = CoinCounter(.05);
    expect(nickels).toBe("1 nickels");
  });

  test("should know the value of a penny", ()=>{
    const pennies = CoinCounter(0.01);
    expect(pennies).toBe("1 pennies");
  });
  
  test('should know how many quarters it needs', () =>{
    const value = 4.75;
    expect(CoinCounter(value)).toBe("19 quarters");
  });

  test('should know how many additional dimes it needs', () => {
    const value = 4.85;
    expect(CoinCounter(value)).toBe("19 quarters 1 dimes");
  });

  test('shoudl know how many additional nickels it needs', () => {
    const value = 4.90;
    expect(CoinCounter(value)).toBe("19 quarters 1 dimes 1 nickels");
  })
});