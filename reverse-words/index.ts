function reverseWords(line: string) {
    const wordArray = line.split(' ');
    let pushInMe = [];

    for (let i = 0; i < wordArray.length; i++) {
        const word = wordArray[i].split('');
        let reversedChars = [];


        for (let j = 0; j < word.length; j++) {
            reversedChars.unshift(word[j]);
        }
        pushInMe.push(reversedChars.join(''));
    }
    return pushInMe.join(' ');
}

console.log(reverseWords('this is a string of words'));
// siht si a gnirts fo sdrow

export default reverseWords;


