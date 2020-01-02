// given arr of 5 int
// find the max sum from exactly 4 of the 5 int
// find the min sum from exactly 4 of the 5 int

// sort the arr
// for min, sum together first 4 elements
// for max, sum last 4 elements (slice from 1?)

function minMax(arr) {
  let sortedArr = arr.sort((a,b) => {
    return a - b;
  })
  console.log(sortedArr);
}

console.log(minMax([2,5,1,3,4]));
