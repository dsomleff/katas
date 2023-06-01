```js
function meanMedianMode(arr) {
    // return object with 3 properties:
    {
        mean: 'mean all numbers in the array'
        median: 'median of all numbers in the array'
        mode: 'mode of all numbers in the array'
    }
    getMean(arr);
    getMedian(arr);
    getMode(arr);
}

function getMean(arr) {} // logic to calculate Mean
function getMedian(arr) {} // logic to calculate Median
function getMode(arr){} // logic to calculate Mode

/ ** Expected Output*/
meanMedianMode([1,2,3,4,5,4,6,1]);
{
    mean: 3.25
    median: 3.5
    mode: [1, 4]
}

meanMedianMode([9, 10, 23, 10, 23, 9]);
{
    mean: 14
    median: 10
    mode: [9, 10, 23]
}
```
