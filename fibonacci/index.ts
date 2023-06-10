export default function fibonacci(position: number): any {
    if (position < 2) return position;

    return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(4)); // 3
// Fibonacci Sequence: 1,1,2,3,5,8,13,21,34
