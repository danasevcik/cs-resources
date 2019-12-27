// given 2 arrays, compare each element to one another
// if a is greater, give a a point
// if b is greater, give b a point
// return array with 2 nums

// create result arr with [0,0]
// iterate through one of the arrays
// compare two ele and add point accordingly
// return arr

function compareTriplets(arrA, arrB) {
  let result = [0,0];

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] > arrB[i]) {
      result[0] += 1;
    } else if (arrA[i] < arrB[i]) {
      result[1] += 1;
    }
  }

  return result;
}

console.log(compareTriplets([1,2,3], [3,2,1]));
console.log(compareTriplets([2,2,2], [1,1,1]));
console.log(compareTriplets([1,1,1], [2,2,2]));
console.log(compareTriplets([2,2,2], [2,2,2]));
