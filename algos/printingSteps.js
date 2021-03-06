// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// loop twice - first for the row, and again for the characters in that row
// on the second iteration, check if j is less than or equal to i

function printSteps(n) {
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    console.log(str);
  }
}


console.log(printSteps(5))
// '#    '
// '##   '
// '###  '
// '#### '
// '#####'

console.log(printSteps(3))
// '#  '
// '## '
// '###'
