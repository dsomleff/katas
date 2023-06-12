let memo: number[] = [];

export default function fibMemo(index: number): number {
    if (index < 2) return index;

    if (memo[index] === undefined) {
        memo[index] = fibMemo(index - 1) + fibMemo(index - 2);
    }

    return memo[index];
}

console.log(fibMemo(4))
