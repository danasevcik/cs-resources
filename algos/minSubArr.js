// given an arr and target value
// find the minimum length of contiguous subarr that sums to target
// return that length

// create sum var and length var
// iterate over arr
// add next values
// if the sum is reached or there are no more, move onto next
// otherwise if the sum is met, check if length is lower

function minSubArr(arr, target) {
  // keep track of lowest length, current length and sum
  let lowestLength = 0;
  let currentLength = 0;
  let sum = 0;

  // iterate through the arr and add the current number to sum
  // increment current length
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    console.log(current);
    sum += current;
    currentLength++;

    // while sum is less than target and there is another ele in the arr,
    // add num to sum
    // increment current length
    while (sum <= target && arr[i+1]) {
      j = i + 1
      sum += arr[j]
      currentLength++;
      console.log('sum', sum);
      console.log('currentLength', currentLength);
      // when the target is reached and the length is lower, replace lowest length
      if (sum >= target) {
        if (!lowestLength || currentLength < lowestLength) {
          lowestLength = currentLength;
        }
      }
    }
    // reset current length and sum back to 0;
    // keep lowest length to compare it against other lengths
    currentLength = 0;
    sum = 0;
  }

  // return the lowest
  return lowestLength;
}

console.log(minSubArr([2,3,1,2,4,3], 7)); // 2
