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

  let min = sortedArr.slice(0,4);
  let max = sortedArr.slice(1);

  function sum(total, num) {
    return total += num
  }

  console.log(min.reduce(sum));
  console.log(max.reduce(sum));
}

console.log(minMax([2, 5, 1, 3, 4]));
console.log(minMax([10, 10, 20, 20, 30]));
console.log(minMax([5, 6, 7, 10, 9]));
