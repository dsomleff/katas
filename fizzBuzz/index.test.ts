import fizzBuzz from "./index";

describe('FizzBuzz', () => {
    afterEach(() => {
        const cl = jest.spyOn(console, 'log').mockImplementation(() => {});
        cl.mockRestore();
    });

    it('should be defined', () => {
        expect(fizzBuzz).toBeDefined();
    });

    it('should be called with `5` prints out 5 statements', () => {
        const cl = jest.spyOn(console, 'log').mockImplementation(() => {});
        fizzBuzz(5);
        expect(cl.mock.calls.length).toEqual(5);
    });

    it('should be called with 15 prints out the correct values', () => {
        const cl = jest.spyOn(console, 'log').mockImplementation(() => {});
        fizzBuzz(15);

        expect(cl.mock.calls[0][0]).toEqual(1);
        expect(cl.mock.calls[1][0]).toEqual(2);
        expect(cl.mock.calls[2][0]).toEqual('Fizz');
        expect(cl.mock.calls[3][0]).toEqual(4);
        expect(cl.mock.calls[4][0]).toEqual('Buzz');
        expect(cl.mock.calls[5][0]).toEqual('Fizz');
        expect(cl.mock.calls[6][0]).toEqual(7);
        expect(cl.mock.calls[7][0]).toEqual(8);
        expect(cl.mock.calls[8][0]).toEqual('Fizz');
        expect(cl.mock.calls[9][0]).toEqual('Buzz');
        expect(cl.mock.calls[10][0]).toEqual(11);
        expect(cl.mock.calls[11][0]).toEqual('Fizz');
        expect(cl.mock.calls[12][0]).toEqual(13);
        expect(cl.mock.calls[13][0]).toEqual(14);
        expect(cl.mock.calls[14][0]).toEqual('FizzBuzz');
    });

})
