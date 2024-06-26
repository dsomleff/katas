import { runningSum } from "./index";

describe("Running Sum", () => {
  it("returns proper values", () => {
    const nums = [1, 2, 3, 4];
    const output = [1, 3, 6, 10];
    const result = runningSum(nums);

    expect(result).toEqual(output);
  });

  it("returns proper values case 2", () => {
    const nums = [1, 1, 1, 1, 1];
    const output = [1, 2, 3, 4, 5];
    const result = runningSum(nums);

    expect(result).toEqual(output);
  });

  it("returns proper values case 3", () => {
    const nums = [3, 1, 2, 10, 1];
    const output = [3, 4, 6, 16, 17];
    const result = runningSum(nums);

    expect(result).toEqual(output);
  });

  it("handles negative numbers correctly", () => {
    const nums = [1, -1, 3, -3, 5, -5];
    const output = [1, 0, 3, 0, 5, 0];
    const result = runningSum(nums);

    expect(result).toEqual(output);
  });

  it("returns an empty array when input is an empty array", () => {
    const nums: number[] = [];
    const output: number[] = [];
    const result = runningSum(nums);

    expect(result).toEqual(output);
  });

  it("returns the same single element when input array has one element", () => {
    const nums = [5];
    const output = [5];
    const result = runningSum(nums);

    expect(result).toEqual(output);
  });

  it("handles all zeros correctly", () => {
    const nums = [0, 0, 0, 0, 0];
    const output = [0, 0, 0, 0, 0];
    const result = runningSum(nums);

    expect(result).toEqual(output);
  });
});
