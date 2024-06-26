import { runningSum } from "./index";

describe("Running Sum", () => {
  it("returns proper values", () => {
    const nums = [1, 2, 3, 4];
    const output = [1, 3, 6, 10];
    const result = runningSum(nums);

    expect(result).toBe(output);
  });

  it("returns proper values", () => {
    const nums = [1, 1, 1, 1, 1];
    const output = [1, 2, 3, 4, 5];
    const result = runningSum(nums);

    expect(result).toBe(output);
  });

  it("returns proper values", () => {
    const nums = [3, 1, 2, 10, 1];
    const output = [3, 4, 6, 16, 17];
    const result = runningSum(nums);

    expect(result).toBe(output);
  });
});
