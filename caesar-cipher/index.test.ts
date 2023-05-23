import CaesarCipher from "./index";

describe('Caesar Cipher', () => {
    it('should encrypt the string', () => {
        const crypto = new CaesarCipher('xyz', 3);

        expect(crypto.encrypt()).toEqual('abc')
    });

    it('should decrypt the string', () => {
        const crypto = new CaesarCipher('abc', 3);

        expect(crypto.decrypt()).toEqual('xyz');
    });
});
