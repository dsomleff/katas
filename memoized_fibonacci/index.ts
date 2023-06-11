export default function fibMemo(index: number, cache?: number[]): number {
    cache = cache || [];

    if (cache[index]) return cache[index];

    if (index < 2) return index;

    cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);

    return cache[index];
}

console.log(fibMemo(4))
