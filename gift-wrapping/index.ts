function wrapping(gifts: string[]): string[] {
    let wrappedGifts: string[] = [];

    for (let i = 0; i < gifts.length; i++) {
        let giftLength = gifts[i].length;
        let wrapSign = '*';
        let leftWrapper = `${wrapSign.repeat(giftLength + 2)}\n*`;
        let rightWrapper = `*\n${wrapSign.repeat(giftLength)}`;
        let readyGift = leftWrapper + gifts[i] + rightWrapper;
        wrappedGifts.push(readyGift);
        // console.log(gifts[i]);
        // console.log(leftWrapper);
        // console.log(rightWrapper);
        // console.log(wrapMeFromTheLeft);
    }

    return wrappedGifts;
}


const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)


// get the gift string
// get the length of a gift
// put a /n8 sign at the start and the end of a line "*****\n*cat*\n*****",
// put * symbol multiply by gift length at the start and the end of a line
