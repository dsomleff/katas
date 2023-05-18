interface Crypto {
    str: string;
    num: number;
    encrypt(): string;
    decrypt(): string;
}

class CaesarCipher {
    constructor(public str: string, public num: number) {}

    encrypt(): string {
        return this.str;
    }

    decrypt(): string {
        return this.str;
    }
}

const crypto: Crypto = new CaesarCipher('zoo keeper', 2);
crypto.encrypt();// 'bqq mggrgt'
crypto.decrypt();

export default CaesarCipher;
