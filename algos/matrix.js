// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// loop twice - once for row and second for column
// keep counter for row and column
// add numbers for first iteration for top row

function matrix(n) {
  let result = [];
  let counter = 1;
  let startRow = 0;
  let startColumn = 0;
  let endRow = n - 1;
  let endColumn = n - 1;



  return result;
}


console.log(matrix(2));
