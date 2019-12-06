// keep track of all sum
// iterate row from 0 to 3
// until column from 0 to 3
// add index of arr
// return highest sum

function hourglass(arr) {
  let sums = [];

  for (let row = 0; row <= 3; row++) {
    for (let column = 0; column <= 3; column++) {
      let sum = 0;
      sum += arr[row][column]; // top left
      sum += arr[row][column + 1]; // top mid
      sum += arr[row][column + 2]; // top right
      sum += arr[row + 1][column + 1]; // mid
      sum += arr[row + 2][column]; // bottom left
      sum += arr[row + 2][column + 1]; // bottom mid
      sum += arr[row + 2][column + 2]; // bottom right

      sums.push(sum)
    }
  }
  return Math.max(...sums);
}

console.log(hourglass(
[[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0]]));
