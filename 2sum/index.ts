/**
 * O(n^{2}) solution
 */
function twoSum(numArr: number[], num: number): [number, number][] {
    let element: number;
    let res = new Map();

    for (let i = 0; i < numArr.length; i++) {
        element = numArr[i];
        for (let j = 1; j < numArr.length; j++) {
            if (element + numArr[j] === num) {
                res.set(element, numArr[j]);
            }
        }
    }
    return Array.from(res);

}

// const numArr = [1, 6, 4, 5, 3, 3];
const numArr = [40, 11, 19, 17, -12];
// console.log(twoSum(numArr, 7));; // [[6,1], [3, 4], [3, 4]]
console.log(twoSum(numArr, 28)); // [[17, 11], [-12, 40]]


