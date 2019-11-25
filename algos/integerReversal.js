// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// can either use .reverse on a split array
// or
// check if first ele is a '-' sign
// loop backwards and add int to new variable

function reverseInt(num) {
  let numStr = num.toString()
  if (numStr[0] === '-') {
    let reverseNumStr = numStr.slice(1).split('').reverse().join('');
    reverseNumStr = '-' + reverseNumStr;
    return parseInt(reverseNumStr)
  } else {
    let reverseNumStr = numStr.split('').reverse().join('');
    return parseInt(reverseNumStr)
  }
}

console.log(reverseInt(-12)); // -21
console.log(reverseInt(12)); // 21
console.log(reverseInt(100)); // 1
console.log(reverseInt(1289)); // 9821
