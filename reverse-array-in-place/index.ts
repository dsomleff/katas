function reverseArrayInPlace(arr: number[]) {
    let element = 0;

    arr.forEach((value, index) => {
        if (index === 0) {
            const [first, ...rest] = arr;
            arr = [...rest, first];
        }
        element = value;
        arr.shift();
        arr.splice(arr.length - index, 0, element);

    });
    return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4])); // [4,3,2,1]

