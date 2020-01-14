// given an arr and target value
// find the minimum length of contiguous subarr that sums to target
// return that length

// create sum var and length var
// iterate over arr
// add next values
// if the sum is reached or there are no more, move onto next
// otherwise if the sum is met, check if length is lower

function minSubArr(arr, target) {
  let lowestLength = 0;
  let currentLength = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    console.log(current);
    sum += current;
    currentLength++;


    while (sum <= target && arr[i+1]) {
      j = i + 1
      sum += arr[j]
      currentLength++;
      console.log('sum', sum);
      console.log('currentLength', currentLength);
      if (sum >= target) {
        if (!lowestLength || currentLength < lowestLength) {
          lowestLength = currentLength;
        }
      }
    }
    currentLength = 0;
    sum = 0;
  }

  return lowestLength;
}

console.log(minSubArr([2,3,1,2,4,3], 7)); // 2
