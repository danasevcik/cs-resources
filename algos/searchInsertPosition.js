// given a sorted arr and a num
// return the index where the num is found


// brute force:
// iterate through the arr
// when the num is found, return the index
// time complexity will be O(n)

function searchInsertPosition(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return 'num not found'
}

console.log(searchInsertPosition([1,2,3,4,5,6,7,8,9], 1)); // 0
console.log(searchInsertPosition([1,2,3,4,5,6,7,8,9], 9)); // 8
console.log(searchInsertPosition([1,2,3,4,5,6,7,8,9], 2)); // 1
console.log(searchInsertPosition([1,2,3,4,5,6,7,8,9], 10)); // num not found


// refactored solution
// if arr is longer than 1 ele
// get midpoint
// if num is greater, slice higher half
// if num is less, slice lower half
// make this the new arr
// call recursively
// return when arr is longer than 1 ele
