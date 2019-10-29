// bubble sort
// runs O(n)

function bubbleSort(arr) {
  // get the length of the arr and iterate twice through the arr
  let currentLength = arr.length;
  for (let i = 0; i < currentLength; i++) {
    for (let j = 0; j < currentLength; j++) {
      // if the second is greater, move it to the right
      if (arr[j] > arr[i]) {
        let currentEle = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = currentEle;
      }
    }
  }
  // return the sorted array
  return arr;
}

// selection sort
// runs O(n)

// merge sort
// runs O(n*log(n))
