import CaesarCipher from "./index";

describe('Caesar Cipher', () => {
    it('should encrypt the string', () => {
        const crypto = new CaesarCipher('XYZ', 1);

        expect(crypto.encrypt()).toEqual('ABC')
    });

    it('should decrypt the string', () => {
        const crypto = new CaesarCipher('ABC', 3);

        expect(crypto.decrypt()).toEqual('DEF');
    });
});
