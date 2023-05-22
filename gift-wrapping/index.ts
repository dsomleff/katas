function wrapping(gifts: string[]): string[] {
    let wrappedGifts: string[] = [];
    let star = '*';

    for (const gift of gifts) {
        let giftLength = gift.length;
        let leftSide = `${star.repeat(giftLength + 2)}\n*`;
        let rightSide = `*\n${star.repeat(giftLength + 2)}`;
        let readyGift = leftSide + gift + rightSide;

        wrappedGifts.push(readyGift);
    }

    return wrappedGifts;
}


const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);

export default wrapping;
