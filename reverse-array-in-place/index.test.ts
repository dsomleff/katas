import reverseArrayInPlace from "./index";

describe('Reverse Array Function', () => {
    const output = [4, 3, 2, 1];

    it('should be a function', () => {
        expect(typeof reverseArrayInPlace).toEqual('function');
    });

    it('should return correct output', () => {
        expect(reverseArrayInPlace([1, 2, 3, 4])).toEqual(output);
    });
})
