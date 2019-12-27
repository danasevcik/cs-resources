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

// since there will always be three elements in both arrays
// check each index in both arrays and compare values
// update result array accordingly

function compareTripletsFaster(arrA, arrB) {
  let result = [0,0];

  if (arrA[0] > arrB[0]) {
    result[0] += 1
  } else if (arrB[0] > arrA[0]) {
    result[1] += 1
  }

  if (arrA[1] > arrB[1]) {
    result[0] += 1
  } else if (arrB[1] > arrA[1]) {
    result[1] += 1
  }

  if (arrA[2] > arrB[2]) {
    result[0] += 1
  } else if (arrB[2] > arrA[2]) {
    result[1] += 1
  }

  return result;
}

console.log(compareTriplets([1,2,3], [3,2,1]));
console.log(compareTriplets([2,2,2], [1,1,1]));
console.log(compareTriplets([1,1,1], [2,2,2]));
console.log(compareTriplets([2,2,2], [2,2,2]));

console.log(compareTripletsFaster([1,2,3], [3,2,1]));
console.log(compareTripletsFaster([2,2,2], [1,1,1]));
console.log(compareTripletsFaster([1,1,1], [2,2,2]));
console.log(compareTripletsFaster([2,2,2], [2,2,2]));
