// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// create empty obj
// iterate through string and add chars to obj count
// get keys and keep track of highest count
// return that char

function maxChars(str) {
  let charObj = {};

  for (let i = 0; i < str.length; i++) {
    if (charObj[str[i]]) {
      charObj[str[i]]++;
    } else {
      charObj[str[i]] += 1;
    }
  }

  let chars = Object.keys(charObj);
  let result = null;
  let highest = 0;

  for (let i = 0; i < chars.length; i++) {
    if (charObj[i] > highest) {
      result = chars[i];
      highest = charObj[i];
    }
  }

  return result;
}
