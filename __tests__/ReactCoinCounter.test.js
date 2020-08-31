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
  })
});