export function twoSum(numArr: number[], num: number, res: [number, number][] = []): [number, number][]  {
    if (res === undefined) res = [];
    if (numArr.length <= 0) return res;

    const firstElement = numArr.shift();

    for (let i = 0; i < numArr.length; i++) {
        if (firstElement && (firstElement + numArr[i] === num)) {
            res.push([firstElement, numArr[i]]);
        }
    }

    twoSum(numArr, num, res);

    return res;
}

const numArr = [1, 6, 4, 5, 3, 3];
console.log(twoSum(numArr, 7)); // [ [ 1, 6 ], [ 4, 3 ], [ 4, 3 ] ]
const numArr2 = [40, 11, 19, 17, -12];
console.log(twoSum(numArr2, 28)); // [ [ 40, -12 ], [ 11, 17 ] ]
