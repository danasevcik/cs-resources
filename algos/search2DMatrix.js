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

// first check if the target is out of bounds
// start at top right of matrix
// if the number is higher, move onto next row and eliminatee row 0
// if number is lower, check current row for ele

function searchMatrixEfficiently(matrix, target) {
  let rows = matrix.length;
  let columns = matrix[0].length;
  let currentRow = 0;
  let currentColumn = columns - 1;

  if (target < matrix[0][0] || target > matrix[rows - 1][columns - 1]) {
    return false;
  }

  while (currentRow <= (rows - 1) && currentColumn >= 0) {
    console.log(matrix[currentRow][currentColumn]);
    if (matrix[currentRow][currentColumn] < target) {
      currentRow++;
    } else if (matrix[currentRow][currentColumn] > target) {
      currentColumn--;
    } else {
      console.log(matrix[currentRow][currentColumn]);
      return true;
    }
  }

  return false;

}

let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
console.log(searchMatrixEfficiently(arr, 3)); // true
console.log(searchMatrixEfficiently(arr, 18)); // true
console.log(searchMatrixEfficiently(arr, 500)); // false
