function wrapping(gifts: string[]): string[] {
    let wrappedGifts: string[] = [];
    let star = '*';

    for (const gift of gifts) {
        let giftLength = gift.length;
        let leftSide = star.repeat(giftLength + 2) + '\n*';
        let rightSide = '*\n' + star.repeat(giftLength + 2);
        let readyGift = leftSide + gift + rightSide;

        wrappedGifts.push(readyGift);
    }

    return wrappedGifts;
}


const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)


// get the gift string
// get the length of a gift
// put a /n8 sign at the start and the end of a line
// "*****\n*cat*\n*****",
// "******\n*game*\n******",
// "*******\n*socks*\n*******"
// put * symbol multiply by gift length at the start and the end of a line
