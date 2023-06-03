import {twoSum} from "./index";

describe('2 Sums', function () {
    const output1 = [[1, 6], [4, 3], [4, 3]];
    const output2 = [[ 40, -12 ], [ 11, 17 ]];
    const numArr = [1, 6, 4, 5, 3, 3];
    const numArr2 = [40, 11, 19, 17, -12];

    it('should be a function', () => {
        expect(typeof twoSum).toEqual('function');
        expect(typeof twoSum).toEqual('function');
    });

    it('should return correct output', () => {
        expect(twoSum(numArr, 7)).toEqual(output1);
        expect(twoSum(numArr2, 28)).toEqual(output2);
    });
});
