function palindrome(line: string): boolean {
    const transformLine = line.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
    const arrayFromLine = [...transformLine];
    const reversedLineArray = [...transformLine].reverse();

    return arrayFromLine.every((char, i) => char === reversedLineArray[i]);
}

palindrome('Race Car');
palindrome('cat eAts CaRRot');
palindrome('Madam I\'m Adam');

export default palindrome;
