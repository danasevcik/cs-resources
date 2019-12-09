// return true or false if a number is a palindrome
// 121 => true
// -505 => false

// iterate over number from 0 to mid
// if first char is '-', return false
// if the num does not match the num at other end, return false
// otherwise return true

function numPalindrome(num) {
  let numStr = num.toString();
  if (numStr[0] === '-') {
    return false;
  }

  let mid = Math.floor(numStr.length / 2)

  for (let i = 0; i < mid; i++) {
    if (numStr[i] !== numStr[numStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}


console.log(numPalindrome(121)); // true
console.log(numPalindrome(-121)); // false
console.log(numPalindrome(1221)); // true
console.log(numPalindrome(500)); // false
