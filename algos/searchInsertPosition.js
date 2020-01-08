// given a sorted arr and a num
// return the index where the num is found


// brute force:
// iterate through the arr
// when the num is found, return the index

function searchInsertPosition(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
}
