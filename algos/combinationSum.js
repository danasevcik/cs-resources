// given unique arr of numbers and a target
// find all unique combinations

// create solution set arr
// create temp arr
// iterate twice and check always if the sum has been reached
// if not, keep iterating
// if yes, push into solution arr
// return solution arr

function combinationSum(arr, target) {
  let solution = [];
  let currentCombo = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentCombo.push(arr[i]);
    sum += arr[i];
    console.log('sum', sum);
    console.log('currentCombo', currentCombo);
    if (checkSum(sum, currentCombo, solution, target)) {
      solution.push(currentCombo)
      currentCombo = [];
      sum = 0;
    }
    for (let j = 1; j < arr.length; j++) {
      currentCombo.push(arr[j]);
      sum += arr[j];
      if (checkSum(sum, currentCombo, solution, target)) {
        solution.push(currentCombo)
        currentCombo = [];
        sum = 0;
      }
    }
  }

  return solution;
}

function checkSum(sum, currentCombo, solution, target) {
  if (sum === target) {
    solution.push(currentCombo);
    return true;
  }
}

console.log(combinationSum([1,2,3], 3)); // should return [[1,2], [3]]
