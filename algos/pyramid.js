// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// loop twice - first for each console log, next for the characters in that string
// iterate until 2n - 1 for seconf loop

function pyramid(n) {
  let mid = Math.floor(((2 * n) - 1) / 2)
  for (let row = 0; row < n; row++) {
    let str = '';
    let endLoop = (2 * n) - 1;
    for (let column = 0; column < endLoop; column++) {
      if (mid - row <= column && mid + row >= column) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    console.log(str)
  }
}

console.log(pyramid(2))
// ' # '
// '###'

console.log(pyramid(3))
// '  #  '
// ' ### '
// '#####'
