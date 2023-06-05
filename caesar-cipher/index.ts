interface Crypto {
    text: string;
    steps: number;
    result: string[];
    encrypt(): string;
    decrypt(): string;
}

class CaesarCipher implements Crypto{
    constructor(public text: string, public steps: number, public result: string[] = []) {}

    encrypt(): string {
        let cypherText = '';

        for (let i = 0; i < this.text.length; i++) {
            let charToEncrypt = this.text.charAt(i).toLowerCase();
            let replaceVal = ' ';

            if (charToEncrypt !== ' ') {
                let x = alphabet.indexOf(charToEncrypt);
                let keyVal = (this.steps + x) % alphabet.length;
                replaceVal = alphabet.charAt(keyVal);
            }
            cypherText +=replaceVal;
        }

        return cypherText;
    }

    decrypt(): string {
        let cypherText = '';

        for (let i = 0; i < this.text.length; i++) {
            let charToDecrypt = this.text.charAt(i).toLowerCase();
            let replaceVal = ' ';

            if (charToDecrypt !== ' ') {
                let x = alphabet.indexOf(charToDecrypt);
                let keyVal = (x - this.steps) % alphabet.length;

                if (keyVal < 0) {
                    keyVal = alphabet.length + keyVal;
                }
                replaceVal = alphabet.charAt(keyVal);
            }
            cypherText +=replaceVal;
        }

        return cypherText;
    }
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
const crypto = new CaesarCipher('zoo keeper', 2);
console.log(crypto.encrypt());

const deCrypto = new CaesarCipher('bqq mggrgt', 2);
console.log(deCrypto.decrypt());

export default CaesarCipher;
