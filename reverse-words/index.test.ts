import reverseWords from "./index";

const output = 'siht si a gnirts fo sdrow';

describe('Reverse Words', () => {
    it('should be a function', () => {
        expect(typeof reverseWords).toEqual('function');
    });

    it ('should return correct output', () => {
        expect(reverseWords('this is a string of words')).toBe(output);
    })
})
