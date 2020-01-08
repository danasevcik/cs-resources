// given x and n
// return x to the power of n

// iterate n number of times
// multiply x by itself that many times
// return the number

function pow(x, n) {
  let i = 0;
  let solution = 1;

  while (i < n) {
    solution = solution * x;

    i++;
  }

  return solution;
}

console.log(pow(2, 2)); // 4
console.log(pow(3, 2)); // 9
console.log(pow(4, 4)); // 256
