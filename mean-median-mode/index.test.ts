import meanMedianMode from "./index";

describe('Mean Media Mode', function () {
    const output = {
        mean: 3.25,
        median: 3.5,
        mode: [1, 4],
    }

    it('should be a function', () => {
        expect(typeof meanMedianMode).toEqual('function');
    });

    it('should return correct output', () => {
        expect(meanMedianMode([1,2,3,4,5,4,6,1])).toEqual(output);
    });
});
