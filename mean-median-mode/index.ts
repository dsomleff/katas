function getMean(arr: number[]): number {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

function getMedian(arr: number[]): number {
    arr.sort((a, b) => a - b);
    let median;

    if (arr.length % 2 === 0) {
        let middleIndex = Math.floor(arr.length / 2);
        median = (arr[middleIndex] + arr[middleIndex - 1]) / 2;
    } else {
        let middleIndex = Math.floor(arr.length / 2);
        median = arr[middleIndex]
    }

    return median;
}

function getMode(arr: number[]): number[] {
    return arr.filter((item: number, index: number) => arr.indexOf(item) !== index);
}

function meanMedianMode(arr: number[]): object {
    const mean = getMean(arr);
    const median = getMedian(arr);
    const mode = getMode(arr);

    return {
        mean,
        median,
        mode
    }
}

console.log(meanMedianMode([1,2,3,4,5,4,6,1]));
console.log(meanMedianMode([9, 10, 23, 10, 23, 9]));

// meanMedianMode([1,2,3,4,5,4,6,1]);
// {
//     mean: 3.25
//     median: 3.5
//     mode: ['1', '4']
// }

// meanMedianMode([9, 10, 23, 10, 23, 9]);
// {
//     mean: 14
//     median: 10
//     mode: [9, 10, 23]
// }
export default meanMedianMode;
