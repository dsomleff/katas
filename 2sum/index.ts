/**
 * O(n^{2}) solution
 */
function twoSumOn2(numArr: number[], num: number): [number, number][] {
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

/**
 * Recursion solution
 */
function twoSumRecursion(numArr: number[], num: number, res: [number, number][] | undefined = []) {
    if (res === undefined) res = [];

    if (numArr.length <= 0) return res;
    const firstElement = numArr.shift();

    for (let i = 0; i < numArr.length; i++) {
        if (firstElement && (firstElement + numArr[i] === num)) {
            res.push([firstElement, numArr[i]]);
        }
    }

    twoSumRecursion(numArr, num, res);

    return res;
}

const numArr = [1, 6, 4, 5, 3, 3];
console.log(twoSumOn2(numArr, 7)); // [[6,1], [3, 4], [3, 4]]
const numArr2 = [40, 11, 19, 17, -12];
console.log(twoSumRecursion(numArr2, 28)); // [[17, 11], [-12, 40]]


