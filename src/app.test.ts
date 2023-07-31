import { sum } from "./app";

describe("sum function", () => {
  it("should return the correct sum", () => {
    const result = sum(5, 3);
    expect(result).toBe(8);
  });

  it("should return 0 when both arguments are 0", () => {
    const result = sum(0, 0);
    expect(result).toBe(0);
  });

  it("should return a negative number when one argument is negative", () => {
    const result = sum(-5, 3);
    expect(result).toBeLessThan(0);
  });
});
