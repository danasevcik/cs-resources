// given arr of numbers
// exactly 2 numbers appear only once in the arr
// return an arr of the two unique numbers
// [1,2,1,3,2,5] => [3,5]

// iterate through the arr and create a count obj
// add each number to the obj and keep track of the count
// after the initial loop, look through the count obj
// only add numbers to the output arr if the count is 1

function singleNum(arr) {
  let count = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]] ++
    } else {
      count[arr[i]] = 1;
    }
  }

  for (key in count) {
    console.log(key);
    if (count[key] === 1) {
      result.push(parseInt(key));
    }
  }
  console.log(result);
  console.log(count);

  return result;
}

console.log(singleNum([1,2,1,3,2,5]));
