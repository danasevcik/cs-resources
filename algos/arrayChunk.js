// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// iterate through array stepping by n
// create empty array and push n elements
// return final array

function arrChunk(arr, num) {
  let result = [];
  for (let i = 0; i < arr.length; i += num) {
    console.log(arr[i])
    let chunk = arr.slice(i, i + num);
    result.push(chunk);
  }
  return result
}

console.log(arrChunk([1,2,3,4,5,6,7,8,9], 2))
