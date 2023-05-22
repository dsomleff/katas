import wrapping from "./index";

const output = [
    '*****\n*cat*\n*****',
    '******\n*game*\n******',
    '*******\n*socks*\n*******'
];

describe('Wrapped Gifts', () => {
    it('should be defined', () => {
        expect(typeof wrapping).toEqual('function');
    });

    it('should provide correctly wrapped gifts', () => {
        const gifts = ['cat', 'game', 'socks'];
        const wrapped = wrapping(gifts);

        expect(wrapped).toEqual(output);
    });
})
