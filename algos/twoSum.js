// given array of integers & target
// return indices of 2 int that return target sum

// brute force - nested loop and compare each ele

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i] !== arr[j]) && (arr[i] + arr[j] === target)) {
        return [i,j];
      }
    }
  }
}
