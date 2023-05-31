// logic to calculate Mean
function getMean(arr: number[]) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

// logic to calculate Median
function getMedian(arr: number[]) {}

// logic to calculate Mode
function getMode(arr: number[]){}

function meanMedianMode(arr: number[]): object {
    const mean = getMean(arr);
    getMedian(arr);
    getMode(arr);

    return {
        mean
    }
}

console.log(meanMedianMode([1,2,3,4,5,4,6,1]));

// meanMedianMode([1,2,3,4,5,4,6,1]);
// {
//     mean: 3.25
//     median: 3.5
//     mode: ['1', '4']
// }
//
// meanMedianMode([9, 10, 23, 10, 23, 9]);
// {
//     mean: 14
//     median: 10
//     mode: []
// }
