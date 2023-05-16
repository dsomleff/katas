function palindrome(line: string): void {
    const transformLine = line.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
    const arrayFromLine = [...transformLine];
    const reversedLineArray = [...transformLine].reverse();

    console.log(arrayFromLine.every((v, i) => v === reversedLineArray[i]));
}

palindrome('Race Car');
palindrome('cat eAts CaRRot');
palindrome('Madam I\'m Adam');
