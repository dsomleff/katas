function binarySearch(haystack: number[], needle: number): boolean {
    const sortedHaystack = haystack.sort((a, z) => a - z);
    let low = 0;
    let high = sortedHaystack.length;

    do {
        const midIndex = Math.floor(low + (high - low) / 2);
        let value = sortedHaystack[midIndex];

        if (value === needle) {
            return true;
        } else if (value < needle) {
            low = midIndex + 1;
        } else {
            high = midIndex;
        }
    } while (low < high) {
        return false;
    }
}

const haystack = [5, 7, 2, 16, 36, 39, 42, 56, 71];
const needle = 56;

console.log(binarySearch(haystack, needle));


