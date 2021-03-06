// given arr of integers
// start at position 0
// determine if you can jump to the end of the arr
// the number at the current index indicates how many spaces you can jump
// ex:
// [1,2,1,2,3,4] // true
// start at index 0: 1 - you can go 1 step to index 1
// index 1: 2 - you can go 2 step to index 3
// index 3: 3 - you can go 2 step to index 5

// check that there is a number available at position i
// while this is true, grab the step value
// incrememnt i by this much
// if i is greater than or equal to the length of the arr - return true
// if i is less than length of the arr - return false

function jumpGame(arr){
  let i = 0;

  while (i < arr.length) {
    i += arr[i];

    if (arr[i] === 0 && i < arr.length) {
      return false;
    }
  }

  if (i >= arr.length) {
    return true;
  }

  return false;
}

console.log(jumpGame([1,2,0,1,3])); // true
console.log(jumpGame([0,1,2,3,4,5])); // false
console.log(jumpGame([1,0,1,2,3,4,5])); // false
