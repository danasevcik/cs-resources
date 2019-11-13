// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// check if strings are an even length
// if they are, split in half
// iterate over one half
// access first and last element of halves
// if they dont match, false
// if they all match, return true

function palindrome(str) {
  if (str.length % 2 !== 0) {
    let midpoint = Math.floor(str.length / 2);
    let firstHalf = str.slice(0, midpoint);
    let secondHalf = str.slice(midpoint + 1);
    let firstLength = firstHalf.length;

    for(let i = 0; i < firstLength; i++) {
      if (firstHalf[i] !== secondHalf[secondHalf.length - (i + 1)]) {
        return false;
      }
    }
    return true;
  } else {
    let midpoint = str.length / 2;
    let firstHalf = str.slice(0, midpoint);
    let secondHalf = str.slice(midpoint);
    let firstLength = firstHalf.length;

    for(let i = 0; i < firstLength; i++) {
      if (firstHalf[i] !== secondHalf[secondHalf.length - (i + 1)]) {
        return false;
      }
    }
    return true;
  }
}

console.log(palindrome('abcba')); //true
console.log(palindrome('abcdba')); // false
console.log(palindrome('ab')); // false
console.log(palindrome('abba')); // true
console.log(palindrome('a')); // true
