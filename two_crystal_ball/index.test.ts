import ball_problem from "./index";

describe('2 Ball Problem', function () {
    const floors = [false, false, false, false, false, false, false, true, true, true];

    it('should be a function', () => {
        expect(typeof ball_problem).toEqual('function');
    });

    it('should work', () => {
        expect(ball_problem(floors)).toBe(7);
    });
});
