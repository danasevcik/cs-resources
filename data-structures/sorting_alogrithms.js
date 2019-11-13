// bubble sort
// runs O(n^2)

function bubbleSort(arr) {
  // get the length of the arr and iterate twice through the arr
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
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
// runs O(n^2)

function selectionSort(arr) {
  // get the length of the arr and iterate twice through the arr
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    // assume the min is 0
    let min = i;
    for (let j = i + 1; j < length; j++) {
      // if the arr at index 0 is greater than arr[j]
      // reset min
      if (arr[min] > arr[j]) {
        min = j;
      }
      // if the first ele is not the min
      // move current ele to the left
      if (!min == i) {
        let currentEle = arr[i];
        arr[i] = arr[min];
        arr[min] = currentEle;
      }
    }
  }
  // return sorted array
  return arr;
}

// merge sort
// runs O(n*log(n))
// create 2 sorted arrays and then compare elements
// [6,5,3,1,8,7,2,4] mid is 4, create 2 new arrays
// [6,5,3,1] [8,7,2,4] mid is 2, create 2 new arrays
// [6,5] [3,1] [8,7] [2,4] call helper with [6,5] and [3,1]

function mergeSort(arr) {
  // check if array length is less than 2
  if (arr.length < 2) {
    return arr;
  }
  // get mid point and call merge sort on each sub array
  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftLength = left.length;
  let rightLength = right.length;
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < leftLength && rightIndex < rightLength) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
