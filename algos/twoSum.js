// given array of integers & target
// return indices of 2 int that return target sum

// brute force - nested loop and compare each ele

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((i !== j) && (arr[i] + arr[j] === target)) {
        return [i,j];
      }
    }
  }
}

// refactor
// loop through arr and create obj with keys
// iterate again and find complement, check if it's in the obj

function twoSumRefactor(arr, target) {
  let numObj = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    numObj[num] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    let wantedNum = target - arr[i];
    if (numObj[wantedNum] && (numObj[wantedNum] !== i)) {
      return [i, numObj[wantedNum]];
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)) // should return [0,1]
console.log(twoSumRefactor([2, 7, 11, 15], 9)) // should return [0,1]
