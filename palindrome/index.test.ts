import palindrome from "./index";

describe('Palindrome', () => {
    it('should be defined', () => {
        expect(typeof palindrome).toEqual('function');
    });
    it('should return true or false', () => {
        expect(palindrome('Race Car')).toBeTruthy();
        expect(palindrome('cat eAts CaRRot')).toBeFalsy();
        expect(palindrome('Madam I\'m Adam')).toBeTruthy();
    });
})
