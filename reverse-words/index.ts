function reverseMyWord(word: string[]):string {
    let reversedChars = [];

    for (let j = 0; j < word.length; j++) {
        reversedChars.unshift(word[j]);
    }

    return reversedChars.join('');
}

function reverseWords(text: string):string {
    const arrayFromText = text.split(' ');
    let pushInMe = [];

    for (let i = 0; i < arrayFromText.length; i++) {
        let word = arrayFromText[i].split('');
        let reversedWord = reverseMyWord(word);

        pushInMe.push(reversedWord);
    }
    return pushInMe.join(' ');
}

console.log(reverseWords('this is a string of words')); // siht si a gnirts fo sdrow

export default reverseWords;


