import fibMemo from "./index";

describe('fibMemo', function () {
    it('should be a function', () => {
        expect(typeof fibMemo).toEqual('function');
    });

    it('should calculates correct fib value for 1', () => {
        expect(fibMemo(1)).toEqual(1);
    });

    it('should calculates correct fib value for 2', () => {
        expect(fibMemo(2)).toEqual(1);
    });

    it('should calculates correct fib value for 3', () => {
        expect(fibMemo(3)).toEqual(2);
    });

    it('should calculates correct fib value for 4', () => {
        expect(fibMemo(4)).toEqual(3);
    });

    it('should calculates correct fib value for 15', () => {
        expect(fibMemo(39)).toEqual(63245986);
    });
});
