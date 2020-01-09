// given a sorted 2d matrix
// and a target integer
// search the matrix and find the int
// return a boolean - whether the num is in the matrix or not

// brute force:
// iterate through rows and columns
// check every number
// if the number is found, return true
// otherwise, return false

function searchMatrix(matrix, target) {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3)); // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 500)); // false

// start at top right of matrix
// if the number is higher, move onto next row and eliminatee row 0
// if number is lower, check current row for ele
