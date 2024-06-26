export function runningSum(nums: number[]): number[] {
  let res = [];

  res.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    let calculated: number = nums[i] + res[res.length - 1];
    res.push(calculated);
  }
  return res;
}
const nums = [1, 2, 3, 4];
console.log(runningSum(nums));
