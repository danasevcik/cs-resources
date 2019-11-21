// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// check that strings are same length
// create char map of one string
// iterate through other string and decrement value at given key
// if all values are 0, return true
// otherwise return false

function anagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = createCharMap(str1.toLowerCase());
  let obj2 = createCharMap(str2.toLowerCase());
  let obj1Keys = Object.keys(obj1);

  for (let i = 0; i < obj1Keys.length; i++) {
    let char = obj1Keys[i];
    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }

  return true;
}

function createCharMap(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]]) {
      obj[string[i]]++;
    } else {
      obj[string[i]] = 1;
    }
  }
  return obj;
}

console.log(createCharMap('hello'))
console.log(anagrams('hello', 'olleh')) // true
console.log(anagrams('hey', 'yeh')) // true
console.log(anagrams('heyyyyyyyyy', 'hey')) // false
console.log(anagrams('tt', 'yy')) // false
