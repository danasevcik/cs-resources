// given an arr containing distinct numbers
// find the one missing number

// [3,0,1] => 2

// sort the given arr
// loop through the sorted arr
// find the point at which the next num is NOT the previous num + 1
// return that num

function missingNum(arr) {
  let sortedArr = arr.sort();

  let i = 0;

  while (arr[i+1] === arr[i] + 1) {
    i++;
  }

  return arr[i] + 1;
}

console.log(missingNum([3,0,1])); // 2
console.log(missingNum([7,6,5,3,2,1])); // 4
